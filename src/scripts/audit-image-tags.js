"use strict";

const fs = require("fs");
const path = require("path");

const projectRoot = process.cwd();
const srcRoot = path.join(projectRoot, "src");
const templateExtensions = new Set([".md", ".njk", ".html", ".liquid", ".11ty.js"]);

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === "_site" || entry.name === "node_modules") continue;

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
      continue;
    }

    const ext = path.extname(entry.name);
    if (templateExtensions.has(ext) || entry.name.endsWith(".11ty.js")) {
      files.push(fullPath);
    }
  }

  return files;
}

function lineNumberForIndex(content, index) {
  return content.slice(0, index).split("\n").length;
}

function classifySource(src) {
  if (!src) return "missing-src";
  if (/^https?:\/\//i.test(src)) return "remote";
  if (
    src.includes("'/_/images/") ||
    src.includes("\"/_/images/") ||
    src.includes("'/images/") ||
    src.includes("\"/images/") ||
    src.includes("'/_/") ||
    src.includes("\"/_/")
  ) {
    return "local-templated";
  }
  if (src.includes("http://") || src.includes("https://")) return "remote-templated";
  if (/^\{\{.*\}\}$/.test(src) || src.includes("{{")) return "dynamic";
  if (src.startsWith("/")) return "local-root";
  if (src.startsWith("./") || src.startsWith("../")) return "local-relative";
  return "other";
}

function extractSrc(tag) {
  const match = tag.match(/\bsrc\s*=\s*(?:"([^"]*)"|'([^']*)')/i);
  return match ? match[1] || match[2] : "";
}

function summarize(records) {
  const totals = {
    total: records.length,
    ignored: 0,
    remote: 0,
    remoteTemplated: 0,
    dynamic: 0,
    local: 0,
    other: 0,
  };

  for (const record of records) {
    if (record.ignored) totals.ignored += 1;

    if (record.kind === "remote") totals.remote += 1;
    else if (record.kind === "remote-templated") totals.remoteTemplated += 1;
    else if (record.kind === "dynamic") totals.dynamic += 1;
    else if (
      record.kind === "local-root" ||
      record.kind === "local-relative" ||
      record.kind === "local-templated"
    ) totals.local += 1;
    else totals.other += 1;
  }

  return totals;
}

const matches = [];
for (const filePath of walk(srcRoot)) {
  const content = fs.readFileSync(filePath, "utf8");
  const regex = /<img\b[\s\S]*?>/gi;
  let match;

  while ((match = regex.exec(content)) !== null) {
    const tag = match[0];
    const src = extractSrc(tag);
    const line = lineNumberForIndex(content, match.index);
    const kind = classifySource(src);
    const ignored = /\beleventy:ignore\b/i.test(tag);

    matches.push({
      filePath: path.relative(projectRoot, filePath),
      line,
      src,
      kind,
      ignored,
    });
  }
}

matches.sort((a, b) => {
  if (a.filePath === b.filePath) return a.line - b.line;
  return a.filePath.localeCompare(b.filePath);
});

const totals = summarize(matches);

console.log("Image tag audit");
console.log(`Total <img> tags: ${totals.total}`);
console.log(`Local: ${totals.local}`);
console.log(`Dynamic: ${totals.dynamic}`);
console.log(`Remote: ${totals.remote}`);
console.log(`Remote templated: ${totals.remoteTemplated}`);
console.log(`Other/missing src: ${totals.other}`);
console.log(`Ignored with eleventy:ignore: ${totals.ignored}`);
console.log("");

for (const record of matches) {
  const flags = [];
  flags.push(record.kind);
  if (record.ignored) flags.push("ignored");

  console.log(
    `${record.filePath}:${record.line} [${flags.join(", ")}] ${record.src || "(no src found)"}`,
  );
}
