const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { prepareAssets, rewriteMedia } = require("./prepare-assets");

test("rewrites responsive, relative, social, CSS and audio URLs while preserving external/data URLs", () => {
  const manifest = {
    "/_/images/photo.png": { key: "media/photo.png" },
    "/blog/post/audio.mp3": { key: "media/audio.mp3" },
    "/blog/post/article.pdf": { key: "media/article.pdf" },
  };
  const content = `<img src="/_/images/photo.png" srcset="/_/images/photo.png 480w, /_/images/photo.png 960w"><meta content="https://jackosborne.com/_/images/photo.png"><audio src=audio.mp3></audio><style>a{background:url(../../_/images/photo.png)}</style><img src="https://example.com/photo.png"><img src="data:image/png;base64,abc">`;
  const result = rewriteMedia(content, "https://jackosborne.com/blog/post/", manifest, "https://assets.jackosborne.com");
  assert.equal((result.match(/https:\/\/assets.jackosborne.com/g) || []).length, 6);
  assert(result.includes('src=https://assets.jackosborne.com/media/audio.mp3>'));
  assert(result.includes('src="https://example.com/photo.png"'));
  assert(result.includes('src="data:image/png;base64,abc"'));
  assert.equal(rewriteMedia('"/_/images/photo.png?v=2#part"', "https://jackosborne.com/", manifest, "https://assets.jackosborne.com"), '"https://assets.jackosborne.com/media/photo.png?v=2#part"');
  assert.equal(rewriteMedia('&lt;img src=&quot;https://jackosborne.com/_/images/photo.png&quot;&gt;', "https://jackosborne.com/feed.xml", manifest, "https://assets.jackosborne.com"), '&lt;img src=&quot;https://assets.jackosborne.com/media/photo.png&quot;&gt;');
  assert.equal(rewriteMedia('<a href="article.pdf#page=2">PDF</a>', "https://jackosborne.com/blog/post/", manifest, "https://assets.jackosborne.com"), '<a href="https://assets.jackosborne.com/media/article.pdf#page=2">PDF</a>');
});

test("a normal local build keeps media local and clears stale upload output", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "portfolio-local-assets-"));
  try {
    fs.mkdirSync(path.join(root, "_site"));
    fs.mkdirSync(path.join(root, "_assets"));
    fs.writeFileSync(path.join(root, "_site", "photo.png"), "original fixture");
    fs.writeFileSync(path.join(root, "_site", "index.html"), '<img src="photo.png">');
    prepareAssets(root, "");
    assert(fs.existsSync(path.join(root, "_site", "photo.png")));
    assert.equal(fs.readFileSync(path.join(root, "_site", "index.html"), "utf8"), '<img src="photo.png">');
    assert(!fs.existsSync(path.join(root, "_assets")));
  } finally { fs.rmSync(root, { recursive: true, force: true }); }
});

test("packages content-addressed media, removes it from Pages, and leaves originals untouched", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "portfolio-assets-"));
  try {
    fs.mkdirSync(path.join(root, "_site", "blog", "post"), { recursive: true });
    fs.writeFileSync(path.join(root, "_site", "blog", "post", "audio.mp3"), "audio fixture");
    fs.writeFileSync(path.join(root, "_site", "blog", "post", "index.html"), '<audio src="audio.mp3"></audio>');
    prepareAssets(root, "https://assets.jackosborne.com");
    const { files } = JSON.parse(fs.readFileSync(path.join(root, "_assets", "manifest.json")));
    const key = files["/blog/post/audio.mp3"].key;
    assert.equal(fs.readFileSync(path.join(root, "_assets", key), "utf8"), "audio fixture");
    assert(!fs.existsSync(path.join(root, "_site", "blog", "post", "audio.mp3")));
    assert(fs.readFileSync(path.join(root, "_site", "blog", "post", "index.html"), "utf8").includes(key));
  } finally { fs.rmSync(root, { recursive: true, force: true }); }
});
