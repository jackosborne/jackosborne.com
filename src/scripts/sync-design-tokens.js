const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "../..");
const tokensPath = path.join(projectRoot, "src/_/css/tokens.css");
const docsPath = path.join(projectRoot, "docs/design-system.md");
const checkOnly = process.argv.includes("--check");
const startMarker = "<!-- DESIGN-TOKENS:START -->";
const endMarker = "<!-- DESIGN-TOKENS:END -->";

function extractBlock(source, openingBraceIndex) {
  let depth = 0;

  for (let index = openingBraceIndex; index < source.length; index += 1) {
    if (source[index] === "{") depth += 1;
    if (source[index] === "}") depth -= 1;

    if (depth === 0) {
      return source.slice(openingBraceIndex + 1, index);
    }
  }

  throw new Error("Could not find the end of a :root token block.");
}

function rootBlocks(source) {
  return [...source.matchAll(/:root\s*\{/g)].map((match) => {
    const openingBraceIndex = source.indexOf("{", match.index);
    return extractBlock(source, openingBraceIndex);
  });
}

function declarations(block) {
  const tokens = new Map();
  const declarationPattern = /(--[a-z0-9-]+)\s*:\s*([^;]+);/gi;

  for (const match of block.matchAll(declarationPattern)) {
    const value = match[2].replace(/\/\*[\s\S]*?\*\//g, "").replace(/\s+/g, " ").trim();
    tokens.set(match[1], value);
  }

  return tokens;
}

function tableCell(value) {
  return value.replace(/\|/g, "\\|");
}

function generatedReference(lightTokens, darkTokens) {
  const unknownDarkTokens = [...darkTokens.keys()].filter(
    (token) => !lightTokens.has(token),
  );

  if (unknownDarkTokens.length > 0) {
    throw new Error(
      `Dark theme tokens are missing light defaults: ${unknownDarkTokens.join(", ")}`,
    );
  }

  const rows = [...lightTokens.entries()].map(([token, lightValue]) => {
    const darkValue = darkTokens.get(token);
    return `| \`${token}\` | \`${tableCell(lightValue)}\` | ${darkValue ? `\`${tableCell(darkValue)}\`` : "—"} |`;
  });

  return [
    startMarker,
    "## Generated token reference",
    "",
    "This section is generated from `src/_/css/tokens.css`. Do not edit it manually. Change the CSS tokens, then run `npm run tokens:docs`.",
    "",
    "| Token | Light/default | Dark override |",
    "|---|---|---|",
    ...rows,
    endMarker,
  ].join("\n");
}

const tokenSource = fs.readFileSync(tokensPath, "utf8");
const blocks = rootBlocks(tokenSource);

if (blocks.length !== 2) {
  throw new Error(
    `Expected one default and one dark :root block in tokens.css; found ${blocks.length}.`,
  );
}

const lightTokens = declarations(blocks[0]);
const darkTokens = declarations(blocks[1]);
const generated = generatedReference(lightTokens, darkTokens);
const docs = fs.readFileSync(docsPath, "utf8");
const startIndex = docs.indexOf(startMarker);
const endIndex = docs.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
  throw new Error(
    `Could not find ${startMarker} and ${endMarker} in docs/design-system.md.`,
  );
}

const nextDocs = `${docs.slice(0, startIndex)}${generated}${docs.slice(endIndex + endMarker.length)}`;

if (checkOnly) {
  if (nextDocs !== docs) {
    console.error(
      "Design token documentation is out of date. Run `npm run tokens:docs` and commit the result.",
    );
    process.exit(1);
  }

  console.log("Design token documentation is synchronized.");
} else if (nextDocs === docs) {
  console.log("Design token documentation is already synchronized.");
} else {
  fs.writeFileSync(docsPath, nextDocs);
  console.log("Updated docs/design-system.md from src/_/css/tokens.css.");
}
