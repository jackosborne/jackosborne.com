const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");
const { createHash } = require("node:crypto");
const { parseDocument } = require("htmlparser2");
const { filesIn, MEDIA, rewriteMedia } = require("./prepare-assets");

async function verify() {
  const { origin, files } = JSON.parse(fs.readFileSync("_assets/manifest.json", "utf8"));
  const entries = Object.entries(files);
  assert(entries.length > 0, "Asset manifest is empty");
  const keys = new Set(entries.map(([, entry]) => entry.key));
  for (const key of keys) {
    const data = fs.readFileSync(path.join("_assets", key));
    const digest = createHash("sha256").update(data).digest("hex");
    assert(path.basename(key).startsWith(`${digest}.`), `Invalid asset hash: ${key}`);
  }
  const output = filesIn("_site");
  assert(!output.some((file) => MEDIA.test(file)), "Media remains in the Pages artifact");
  let references = 0;
  for (const file of output.filter((file) => /\.(html|css|js|xml|json|webmanifest)$/i.test(file))) {
    const content = fs.readFileSync(file, "utf8");
    for (const token of content.match(/https:\/\/assets\.jackosborne\.com\/media\/[a-f0-9]+\.[a-z0-9]+/g) || []) {
      assert(keys.has(new URL(token).pathname.slice(1)), `Missing asset: ${token} in ${file}`);
      references++;
    }
    const relative = path.relative("_site", file).split(path.sep).join("/");
    assert.equal(rewriteMedia(content, new URL(relative, "https://jackosborne.com/"), files, origin), content,
      `Local media URL remains in ${file}`);
    if (file.endsWith(".html")) {
      // Independently inspect browser-consumed attributes, rather than relying
      // solely on the same rewriting function used during packaging.
      const base = new URL(relative, "https://jackosborne.com/");
      function inspect(node) {
        const attrs = node.attribs || {};
        const values = [];
        if (["img", "source", "audio", "video", "iframe"].includes(node.name)) {
          values.push(attrs.src, attrs.poster);
          if (attrs.srcset) values.push(...attrs.srcset.split(",").map((candidate) => candidate.trim().split(/\s+/)[0]));
        }
        if (node.name === "meta" && /image/.test(attrs.property || attrs.name || "")) values.push(attrs.content);
        if (node.name === "a" && /\.pdf(?:[?#]|$)/i.test(attrs.href || "")) values.push(attrs.href);
        if (attrs["data-audio-src"]) values.push(attrs["data-audio-src"]);
        for (const value of values.filter(Boolean)) {
          if (/^(?:data:|#)/.test(value)) continue;
          const url = new URL(value, base);
          if (!MEDIA.test(url.pathname)) continue;
          if (url.origin === origin) {
            assert(keys.has(decodeURIComponent(url.pathname).slice(1)), `Unpackaged media in ${file}: ${value}`);
          } else if (["jackosborne.com", "www.jackosborne.com"].includes(url.hostname)) {
            assert(fs.existsSync(path.join("_site", decodeURIComponent(url.pathname))), `Missing local media in ${file}: ${value}`);
          }
        }
        for (const child of node.children || []) inspect(child);
      }
      inspect(parseDocument(content));
    }
  }
  assert(references > 0, "No R2 references found in built output");
  console.log(`Verified ${keys.size} unique assets and ${references} published references.`);

  if (process.argv.includes("--remote")) {
    // Cover every media format, plus the largest assets, using real public URLs.
    const samples = new Map();
    for (const [, entry] of entries) samples.set(path.extname(entry.key), entry);
    for (const [source, entry] of entries) {
      if (/\.(pdf|mp3)$/i.test(source) || source.startsWith("/blog/")) samples.set(entry.key, entry);
    }
    for (const [, entry] of entries.sort((a, b) => b[1].bytes - a[1].bytes).slice(0, 3)) {
      samples.set(entry.key, entry);
    }
    for (const entry of samples.values()) {
      let response;
      for (let attempt = 0; attempt < 3; attempt++) {
        response = await fetch(`${origin}/${entry.key}`, {
          method: "HEAD",
          headers: { "Accept-Encoding": "identity" },
          signal: AbortSignal.timeout(15000),
        });
        if (response.ok) break;
        if (attempt < 2) await new Promise((resolve) => setTimeout(resolve, 3000));
      }
      assert(response.ok, `Public asset returned ${response.status}: ${entry.key}`);
      assert.equal(Number(response.headers.get("content-length")), entry.bytes, `Incorrect size: ${entry.key}`);
      assert(response.headers.get("cache-control")?.includes("immutable"), `Missing cache policy: ${entry.key}`);
      if (/\.(pdf|mp3)$/i.test(entry.key)) {
        const partial = await fetch(`${origin}/${entry.key}`, {
          headers: { Range: "bytes=0-31", "Accept-Encoding": "identity" },
          signal: AbortSignal.timeout(15000),
        });
        if (partial.status !== 206) {
          await partial.body?.cancel();
          throw new Error(`Range request returned ${partial.status}: ${entry.key}`);
        }
        const expected = fs.readFileSync(path.join("_assets", entry.key)).subarray(0, 32);
        assert.deepEqual(Buffer.from(await partial.arrayBuffer()), expected, `Incorrect public bytes: ${entry.key}`);
      }
    }
    console.log(`Verified ${samples.size} public assets over HTTPS.`);
  }
}

verify().catch((error) => { console.error(error.message); process.exitCode = 1; });
