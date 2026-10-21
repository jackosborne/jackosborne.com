const fs = require("node:fs");
const path = require("node:path");
const { createHash } = require("node:crypto");

const MEDIA = /\.(?:avif|gif|ico|jpe?g|png|svg|webp|mp3|m4a|aac|ogg|wav|flac|mp4|m4v|mov|webm|ogv|pdf)$/i;
const TEXT = /\.(?:html|css|js|json|xml|webmanifest)$/i;
// Match URL tokens, including srcset candidates, CSS url(), and feed markup.
const URL_TOKEN = /[^\s"'<>`()=,]+\.(?:avif|gif|ico|jpe?g|png|svg|webp|mp3|m4a|aac|ogg|wav|flac|mp4|m4v|mov|webm|ogv|pdf)(?:[?#][^\s"'<>`()]*|)(?=[\s"'<>`(),;]|$)/gi;

function filesIn(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filename = path.join(directory, entry.name);
    return entry.isDirectory() ? filesIn(filename) : [filename];
  });
}

function rewriteMedia(content, baseUrl, manifest, origin) {
  // Feeds contain HTML escaped inside XML, so treat encoded quotes and angle
  // brackets as boundaries without changing the feed's escaping.
  return content.split(/(&(?:quot|apos|lt|gt|#34|#39);)/g).map((chunk) => chunk.replace(URL_TOKEN, (value) => {
    if (/^(?:data:|#)/i.test(value)) return value;
    let url;
    try {
      url = new URL(value.replaceAll("&amp;", "&"), baseUrl);
    } catch {
      return value;
    }
    if (url.origin !== "https://jackosborne.com") return value;
    let pathname;
    try { pathname = decodeURIComponent(url.pathname); } catch { return value; }
    const entry = manifest[pathname];
    if (!entry) return value;
    const search = value.includes("&amp;") ? url.search.replaceAll("&", "&amp;") : url.search;
    return `${origin}/${entry.key}${search}${url.hash}`;
  })).join("");
}

function prepareAssets(root = process.cwd(), assetOrigin = process.env.ASSET_ORIGIN) {
  const output = path.join(root, "_site");
  const upload = path.join(root, "_assets");
  // A normal build remains entirely self-contained for local preview/rollback.
  fs.rmSync(upload, { recursive: true, force: true });
  if (!assetOrigin) {
    console.log("Assets: local URLs (set ASSET_ORIGIN for an R2 deployment).");
    return;
  }
  const parsedOrigin = new URL(assetOrigin);
  if (parsedOrigin.protocol !== "https:" || parsedOrigin.pathname !== "/" ||
      parsedOrigin.search || parsedOrigin.hash || parsedOrigin.username || parsedOrigin.password) {
    throw new Error("ASSET_ORIGIN must be an HTTPS origin without a path or credentials.");
  }
  const origin = parsedOrigin.origin;
  const files = filesIn(output);
  const manifest = {};
  let bytes = 0;

  for (const filename of files.filter((file) => MEDIA.test(file))) {
    const relative = path.relative(output, filename).split(path.sep).join("/");
    const data = fs.readFileSync(filename);
    const digest = createHash("sha256").update(data).digest("hex");
    const extension = path.extname(relative).toLowerCase();
    const key = `media/${digest}${extension}`;
    const destination = path.join(upload, key);
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.writeFileSync(destination, data);
    manifest[`/${relative}`] = { key, bytes: data.length };
    bytes += data.length;
  }

  for (const filename of files.filter((file) => TEXT.test(file))) {
    const relative = path.relative(output, filename).split(path.sep).join("/");
    // HTML relative URLs resolve against the page route; other files against
    // their own URL. index.html and its directory URL resolve identically.
    const base = new URL(relative, "https://jackosborne.com/");
    const content = fs.readFileSync(filename, "utf8");
    const rewritten = rewriteMedia(content, base, manifest, origin);
    if (content !== rewritten) fs.writeFileSync(filename, rewritten);
  }

  fs.writeFileSync(path.join(upload, "manifest.json"), JSON.stringify({ origin, files: manifest }, null, 2));
  // Remove media only after the complete manifest and rewritten output exist.
  for (const filename of files.filter((file) => MEDIA.test(file))) fs.unlinkSync(filename);
  console.log(`Assets: ${Object.keys(manifest).length} files (${(bytes / 1024 ** 2).toFixed(1)} MiB) prepared for ${origin}.`);
}

if (require.main === module) prepareAssets();
module.exports = { prepareAssets, rewriteMedia, filesIn, MEDIA };
