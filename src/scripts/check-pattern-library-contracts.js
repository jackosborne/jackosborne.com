const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "../..");
const read = (relativePath) =>
  fs.readFileSync(path.join(projectRoot, relativePath), "utf8");

const sources = {
  tokens: read("src/_/css/tokens.css"),
  shared: read("src/_/css/style.css"),
  pattern: read("src/_/css/pattern-library.css"),
  layout: read("src/_includes/layouts/pattern-library.html"),
  patternScript: read("src/_/js/pattern-library.js"),
};

const required = [
  ["tokens", "--focus-ring-width: 2px;"],
  ["tokens", "--focus-ring-offset: 3px;"],
  ["tokens", "--link-decoration-thickness: 1px;"],
  ["tokens", "--link-underline-offset: 0.14em;"],
  ["shared", "outline: var(--focus-ring-width) solid var(--color-focus);"],
  ["shared", "outline-offset: var(--focus-ring-offset);"],
  ["shared", "text-decoration-thickness: var(--link-decoration-thickness);"],
  ["shared", "text-underline-offset: var(--link-underline-offset);"],
  ["shared", "text-decoration-color: var(--color-link-visited);"],
  ["shared", ":is(button, input, textarea, select):disabled"],
  ["shared", ".prose table,"],
  ["shared", ".data-table"],
  ["shared", ".prose figure.img"],
  ["pattern", ".pattern-state-focus"],
  ["pattern", "outline: var(--focus-ring-width) solid var(--color-focus);"],
  ["pattern", "text-underline-offset: var(--link-underline-offset);"],
  ["pattern", "text-decoration-color: var(--color-link-visited);"],
  ["layout", "id=\"accessibility\""],
  ["layout", "<table class=\"data-table\">"],
  ["layout", "<figure class=\"img"],
  ["layout", "{{ pageIntro("],
  ["layout", "work-card--single-phone"],
  ["layout", "data-motion-status"],
  ["layout", "outline: var(--focus-ring-width) solid var(--color-focus);"],
  ["layout", "text-decoration-color: var(--color-link-visited);"],
  ["layout", "@media (prefers-reduced-motion: reduce)"],
  ["layout", "data-pattern-theme-switcher"],
  ["layout", "data-pattern-color-preview"],
];

required.push(
  ["patternScript", "(prefers-color-scheme: dark)"],
  ["patternScript", "colorThemeOverridden"],
  ["patternScript", "applyColorTheme"],
);

const missing = required.filter(([source, fragment]) =>
  !sources[source].includes(fragment),
);

const forbidden = [
  ["pattern", /\.pattern-table\s*\{/],
  ["pattern", /\.pattern-figure\b/],
  ["pattern", /\.pattern-type-(?:hero|section|supporting|utility)\b/],
  ["pattern", /outline:\s*2px\s+solid\s+var\(--color-focus\)/],
];

const violations = forbidden.filter(([source, pattern]) =>
  pattern.test(sources[source]),
);

if (missing.length || violations.length) {
  console.error("Pattern-library production contracts are out of sync.");
  missing.forEach(([source, fragment]) =>
    console.error(`Missing from ${source}: ${fragment}`),
  );
  violations.forEach(([source, pattern]) =>
    console.error(`Pattern-only duplicate found in ${source}: ${pattern}`),
  );
  process.exit(1);
}

console.log("Pattern-library production contracts are synchronized.");
