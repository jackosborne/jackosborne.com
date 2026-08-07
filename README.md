# jackosborne.com

Welcome to the innards of [my website](https://jackosborne.com). It’s built with
[Eleventy](https://11ty.dev) and deployed through [GitHub Pages](https://pages.github.com/).

## Local setup

You’ll need a current version of [Node.js](https://nodejs.org/).

```bash
git clone https://github.com/jackosborne/jackosborne.com
cd jackosborne.com
npm install
npm start
```

`npm start` builds the production assets once, then starts Eleventy’s local
development server. Development pages load the source CSS and JavaScript files,
so Eleventy can update them as they change without rerunning the minifiers.

## Command reference

All project commands are run from the repository root.

### Develop and build

| Command | What it does | When to use it |
|---|---|---|
| `npm start` | Builds minified assets once, then starts Eleventy’s development server. Development pages load the watched source CSS and JavaScript files. | Normal local development and visual prototyping. |
| `npm run build` | Checks that design-token documentation is synchronized, cleans `_site`, builds CSS and JavaScript, generates the complete Eleventy site, and enforces the Pages size budget. | Before committing or deploying. GitHub Pages runs this command automatically. |
| `npm run clean` | Deletes the generated `_site` directory. Source files are not affected. | When you want to discard generated output and rebuild from scratch. |
| `npm run css` | Minifies every file in `src/_/css` into `_site/_/css` with a `.min.css` suffix. | When working only on styles or troubleshooting CSS output. Usually called by `start` and `build`. |
| `npm run js` | Minifies every file in `src/_/js` into `_site/_/js` with a `.min.js` suffix. | When working only on scripts or troubleshooting JavaScript output. Usually called by `start` and `build`. |
| `npm run site:size` | Reports the built site and generated-image sizes, warns at 800 MiB, and fails at 900 MiB. | After investigating build growth or when checking the Pages storage budget independently. |

### Design tokens

[`src/_/css/tokens.css`](src/_/css/tokens.css) is the source of truth for exact
design-token values. [`docs/design-system.md`](docs/design-system.md) explains
their intent and contains an automatically generated light/dark token table.

| Command | What it does | When to use it |
|---|---|---|
| `npm run tokens:docs` | Regenerates the protected token-reference section in `docs/design-system.md` from `tokens.css`. | After changing, adding, removing, or reordering tokens. Commit the CSS and updated Markdown together. |
| `npm run tokens:check` | Checks synchronization without changing files. It exits with an error if the generated reference is stale. | For verification and automation. This runs automatically at the beginning of `npm run build`. |

A typical token-prototyping workflow is:

```bash
npm start
# Edit src/_/css/tokens.css and review the site.
npm run tokens:docs
npm run build
```

The development server intentionally uses source assets and does not require
synchronized documentation, so experimentation remains quick. The production
build switches to minified assets and prevents stale token documentation from
being deployed.

### Content and maintenance

#### Image pipeline

Keep authored images in `src`; files under `_site/_/images/generated` are build
output and must not be edited or referenced directly. The canonical responsive
profiles and format settings live in `eleventy.config.js`.

- Case-study body images inside `.content-main.prose` are processed
  automatically. Opaque sources generate WebP with progressive JPEG fallback,
  while alpha-bearing sources retain transparency-safe WebP output. Candidate
  widths are capped at roughly twice each image's maximum rendered width.
- Homepage cards retain their dedicated high-quality responsive profiles.
- Case-study banners retain their complete transparent canvases and dedicated
  WebP/PNG profile. Their transparent whitespace controls stacking, scale, and
  positioning and must not be cropped, flattened, or converted to JPEG.
- Preserve original source assets rather than manually replacing them with
  generated derivatives. Run `npm run audit:images` when reviewing authored
  image references and `npm run site:size` when investigating build growth.

#### Sitemap modification dates

Sitemap `<lastmod>` values are deliberately opt-in. When a page in the curated
sitemap receives a meaningful content update, add or update a `modified` value
in its front matter:

```yaml
modified: 2026-08-07
```

Do not change `modified` for deployments, formatting, CSS changes, minor
technical maintenance, or other work that does not significantly change the
page content. Pages without an explicit `modified` value remain valid sitemap
entries; their `<lastmod>` element is simply omitted.

| Command | What it does | When to use it |
|---|---|---|
| `npm run audit:images` | Scans templates under `src` and reports every `<img>` source, its location, classification, and whether it is ignored. It does not edit files. | When reviewing image paths, migrations, or image markup. |
| `npm run fetch:records` | Fetches the configured Discogs collection, sorts it, and overwrites `src/_data/records.json`. Requires `DISCOGS_USERNAME` and `DISCOGS_TOKEN` environment variables and internet access. | When refreshing the music collection data. Review the generated JSON before committing it. |

## Deployment

Pushes to `main` trigger [`.github/workflows/pages.yml`](.github/workflows/pages.yml).
The workflow installs dependencies with `npm ci`, runs `npm run build`, and deploys
the generated `_site` directory to GitHub Pages. A stale design-token reference
or a site at or above the 900 MiB deployment budget will stop the build before
deployment; builds at or above 800 MiB emit a warning.
