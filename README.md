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
| `npm run test:assets` | Tests media URL rewriting and packaging. | When changing the asset deployment pipeline. |
| `npm run assets:verify` | Checks the R2 asset package and built references. Add `-- --remote` to check representative public files. | After building with `ASSET_ORIGIN`. |

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

Local development and ordinary `npm run build` keep media in `_site` with local
URLs. For deployment, the workflow sets `ASSET_ORIGIN=https://assets.jackosborne.com`.
After Eleventy finishes, `scripts/prepare-assets.js` moves images, PDFs, audio, and video
out of `_site` into the ignored `_assets/media` directory. It rewrites references
in generated HTML (including `srcset` and social metadata), CSS, JS, JSON, and XML.
Source templates and original files stay local and remain committed to Git.
New PDF/audio/video files anywhere under `src` are copied into the build automatically.

Each published object uses its SHA-256 content hash as its filename. Changes get
new URLs, allowing immutable caching without serving stale media. Identical files
share an object. `_assets/manifest.json` records the source-to-object mapping for
verification; it is not uploaded. Keep private files outside public asset folders.
Author media as complete URLs, using existing image helpers or ordinary relative
or root-relative paths; dynamically assembled JavaScript media paths need explicit
support in the build step.

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
The workflow installs dependencies with `npm ci` and runs `npm run build` with
`ASSET_ORIGIN=https://assets.jackosborne.com`. It verifies the asset package, syncs
`_assets/media` to the `jackosborne-assets` R2 bucket using the S3-compatible API,
then checks representative public assets over HTTPS before uploading the Pages
artifact. A failed upload or public check prevents the new Pages deployment.
Existing R2 objects are retained so previous pages and deployments keep working.
The sync skips matching objects and sets a one-year immutable cache policy.

Required GitHub **repository Actions secrets**:

| Name | Value |
|---|---|
| `R2_ACCESS_KEY_ID` | R2 Access Key ID, scoped to Object Read & Write on `jackosborne-assets` only. |
| `R2_SECRET_ACCESS_KEY` | Matching R2 Secret Access Key. |
| `R2_ENDPOINT` | Full S3 API endpoint from the bucket settings, including `https://`. |

Credentials belong in GitHub secrets and a password manager, never in source files.
The R2 custom domain must be active before deploying. Cloudflare manages DNS;
the apex and `www` GitHub Pages records use DNS-only mode.

To inspect a deployment build locally:

```bash
ASSET_ORIGIN=https://assets.jackosborne.com npm run build
npm run assets:verify
```

For a self-contained build/rollback, remove `ASSET_ORIGIN` from the workflow's
build step and omit the R2 verification/upload steps. `npm run build` then includes
all media in `_site` again (subject to the Pages size limit). After inspecting an
R2 build locally, run `npm run build` without `ASSET_ORIGIN` before `npm start` to
restore local files and URLs.

A stale design-token reference
or a site at or above the 900 MiB deployment budget will stop the build before
deployment; builds at or above 800 MiB emit a warning.
