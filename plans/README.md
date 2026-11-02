# Broadened portfolio UI review

Reviewed November 2, 2026 against commit `d537388`. This supersedes the scope and priority summary in `docs/design-engineering-audit.md`; production source remains unchanged.

Used Emil Kowalski’s `emil-design-eng`, `improve-animations`, `animation-performance`, `mobile-native`, and `break-ui` guidance from revision `f1090bec277140d02ed202440185ad9d02ac1490` of https://github.com/emilkowalski/skills. Independent mobile and motion passes were rechecked against the cited code. The user requested a review, so the mobile skill’s usual implementation phase was not applied. No extra animations are recommended without a demonstrated need.

## Reusing this review

These reports record the pre-implementation audit at `d537388`. The subsequent floating-control commit resolves or supersedes some findings; consult `docs/design-system.md` for the current implementation contract.

**No npm skills package or Emil skill files were installed in this repository.** The audit read a temporary clone, not a checked-in dependency. The exact upstream revision above remains the reference for this review. Reports, inventory, fixture generator and local preview server are stored here and can be reused at any time with the project's existing dependencies.

To regenerate and open the preview:

```sh
node plans/ui-stress-preview.cjs
node plans/serve-ui-preview.cjs
```

Then open http://127.0.0.1:8766/. Generated HTML is ignored by Git. The server binds only to localhost and stays running until interrupted.

To install the upstream skills for future agent discovery, run the upstream documented command separately and choose the desired skills and agent:

```sh
npx skills add emilkowalski/skills
```

That command was **not** run during this work. It installs skill instructions; it does not automatically scan the repository or run audits. It may fetch a newer revision than the pinned audit reference.

## Coverage and limits

The tracked-file inventory contains **1,232 files**. `coverage-inventory.json` names every file and assigns it a category. Inventory coverage is not the same as reading or visually checking every file.

| Category | Files | Review performed |
| --- | ---: | --- |
| Authored CSS | 15 | Motion/input/responsive sweep and relevant rules examined in context |
| Authored JavaScript | 10 | Interaction, state, motion and error-path review; includes standalone map |
| Templates/partials | 20 | Semantic structure, collection rendering, image delivery and shared contracts |
| Collection data | 11 | Shapes/boundaries and collection counts; no location data reproduced in this report |
| Blog content | 61 | Included in the complete 110-file authored markup/front-matter scan; not a prose edit or individual visual approval |
| Pages/documentation | 32 | Design baseline, page entry points and content-pattern sweep |
| Configuration/tooling | 24 | Inventory plus relevant rendering/image/data ingestion configuration; not a security/dependency audit |
| Media assets | 1,059 | Inventoried and referenced through templates; not individually visually inspected |

Generated `_site`, `node_modules`, `.git`, and ignored local files are not part of the tracked authored inventory. No claim is made that every binary, generated page, or dependency was inspected. No build/install/publication was performed in this pass.

Browser checks used current collection templates, current authored CSS, and unchanged collection scripts in a **review-only harness**. The production base shell is replaced with a neutral preview shell. Image-processing shortcodes are replaced with plain images; record covers in Demo use a local stand-in to avoid third-party requests. These fixtures validate component structure and layout, not full-page composition, responsive source selection, artwork fidelity, or page loading performance.

## Prioritized findings

P1 = functional/input accessibility issue; P2 = normal correction; P3 = polish or investigation. “After” is a recommendation, not an implemented change. Source references are relative to repository root.

| # | Priority / category | Location | Before | Recommended after | Evidence |
| --- | --- | --- | --- | --- | --- |
| 1 | P1 / semantics | `src/_includes/layouts/tickets.html:30`, `src/_/js/tickets.js:81` | Details and full-scan link are nested inside the toggle button; closed details are only transparent. | Make toggle/details siblings, use `aria-controls`, remove closed details from focus/accessibility exposure, restore trigger focus on dismissal. | Browser accessibility tree exposes the closed story and scan link; invalid nested controls confirmed in template. |
| 2 | P1 / input | `src/_/js/checkins/main.js:117` | Every venue marker explicitly has `keyboard: false`; sidebar opening is marker-click driven. | Provide named keyboard-operable markers or an equivalent venue list, with predictable details focus and dismissal. | Source-confirmed exclusion; the static top-five lists are not equivalent interactive venue navigation. |
| 3 | P2 / layout | `src/_/css/reading.css:13`, `:18` | A figure's intrinsic minimum can exceed its two-column grid track when a title contains a long unbroken word. | Allow figure/content shrinkage and wrap long titles, preserving complete identifying text. | At 320px preview width, client width 305px versus scroll width 383px; at 200% root text, 605px scroll width. Browser-confirmed. |
| 4 | P2 / state | `src/_/js/checkins/main.js:72`, `src/_/css/checkins.css:53` | Sidebar cleanup waits for a `transform` transition on `#sidebar`; actual transition is grid columns on `.grid`. | Decouple cleanup from animation or listen to the real property/element, with a no-motion path. | Expected event cannot be emitted by authored sidebar CSS; repeated closes add unresolved listeners. |
| 5 | P2 / responsive | `src/_/css/checkins.css:371`, `:310` | Mobile details split the map into two columns; header requires fixed icon/control sizes and gaps inside an approximately 152px pane at 320px. | Design a full-width mobile details pane or overlay using existing local map patterns. | Source constraint; exact overflow and best composition require full map rendering. |
| 6 | P2 / state | `src/_/js/tickets.js:20`, `:91` | A query such as `?year=2099` hides all tickets, leaves no selected filter and gives no explanation. | Validate the year against available years and fall back to All, or render a clear no-results state. | Browser-confirmed with unchanged script and Demo fixture. |
| 7 | P2 / state | `src/_/js/records.js:17`, `src/_includes/layouts/records.html:19` | Empty collection still offers an enabled Pick a record button; activation returns silently. | Provide an empty message and omit/disable the unavailable action. | Empty fixture renders zero cards and an enabled action. |
| 8 | P2 / accessibility | `src/_/js/tickets.js:24`, `:60` | Active filter is conveyed only by a CSS class. | Synchronize `aria-pressed` on All and each year. | Source/browser semantics confirmed; pattern-library switchers already provide a precedent. |
| 9 | P2 / reduced motion | `src/_/js/records.js:60` | Picker always requests smooth scrolling, including reduced motion. | Read the current motion preference; use instant scrolling when reduced motion is requested. Consider instantaneous keyboard activation separately. | Source-confirmed explicit JavaScript behavior; no device-motion claim. |
| 10 | P2 / touch | `src/_/css/records.css:173`, `tickets.css:54`, `narration.css:152`, `style.css:1193`, `home.css:79`, `pechakucha.css:315`, `pattern-library.css:636` | Several hover transforms and reveals lack capability gating. | Gate pointer-only movement with `(hover: hover) and (pointer: fine)`; preserve separate focus and press states. | Source-confirmed; sticky hover requires a phone to verify. Include ticket face rotation, shared button links, and hero CTA. |
| 11 | P2 / viewport | `src/_/css/checkins.css:54`, `:73`, `:380` | Full-screen map shell uses `100vh`; it has no local reduced-motion handling for grid resizing. | Use dynamic viewport sizing for this app-like screen and add local reduced-motion rules. | Standalone map omits shared `style.css`, so the global motion override does not apply. Phone URL-bar behavior unverified. |
| 12 | P2 / map geometry | `src/_/js/checkins/main.js:210`, `:65` | Sidebar changes map-container width without authored `map.invalidateSize()` handling. | Notify Leaflet after size changes, including no-transition mode. | Source omission confirmed; tile gaps or center changes need full map testing. |
| 13 | P2 / mobile control | `src/_/js/checkins/main.js:196`, `src/_/css/checkins.css:340` | Venue close button is a bare × with a 32px target. | Use a literal action name, visible focus, and a 44px target consistent with project control guidance. | Source-confirmed. |
| 14 | P2 / audio feedback | `src/_/js/narration.js:83`, `src/_includes/layouts/base.html:89` | Narration has no media error state; button's exposed text describes time while the play/pause icon is aria-hidden. | Add recoverable error feedback and an action name synchronized with actual playback state. | Source-confirmed; screen-reader behavior needs testing. |
| 15 | P2 / redundant work | `src/_/js/pechakucha.js:138`, `:75` | Home/End and edge arrows call `showSlide` even when the clamped index stays the same; image is replaced with Loading and decoded again. | Ignore no-op navigation once loaded, while preserving explicit retry. | Source-confirmed flow; visual flash depends on decoding/cache timing. |
| 16 | P3 / feedback | `src/_/css/records.css:28` | Opacity transition exists only on the dimmed selector, so clearing/picking another card snaps opacity back to 1. | Put opacity transition on the base card if symmetric dimming is desired. | CSS-state behavior confirmed; perceptual benefit needs feel check. |
| 17 | P3 / performance | `src/_/css/narration.css:71`, `src/_/js/narration.js:78` | Progress repeatedly updates/transitions width. | Use a full-width fill with left-origin `scaleX` updated directly. | Layout-producing property confirmed; no dropped-frame measurement. |
| 18 | P3 / performance | `src/_/css/records.css:54` | Permanent `will-change` on every sleeve and vinyl, including offscreen records. | Profile layers/memory and remove blanket promotion unless beneficial. | 302 actual records; 1,000-row fixture renders 9,019 nodes. Potential cost, not proof of jank. |
| 19 | P3 / tokens | `src/_/css/home.css:273`, `:359` | Media easing duplicates the exact canonical token literally. | Consume `var(--ease-media)`. | Exact equality confirmed; no intended visual change. |
| 20 | P3 / copy | `src/_includes/layouts/records.html:29`, `src/_/js/records.js:73` | A single record yields “1 chances to pick something good.” | Use singular/plural wording in both initial and cleared states. | Browser-confirmed One fixture. |
| 21 | P2 / image semantics | `src/work/foursquare/city-guide/search-filtering/index.md:107` and 12 other work files | 257 inline images have literal `alt="photo"`. | Review each image in context; write meaningful alternatives or use empty alt for genuinely redundant/decorative imagery. | Complete authored-content scan and sample source rechecked; attribute presence alone did not reveal this in the first audit. |
| 22 | P2 / image semantics | `src/work/foursquare/city-guide/opinionator/index.md:10`, `src/_includes/layouts/project.html:14` | 258 front-matter image alternatives are the literal placeholder `text`, passed through to banner images. | Give the sequence a useful accessible description and prevent redundant frame announcements; decide meaningful/decorative status in context. | Complete front-matter scan, rendering path and example rechecked. Individual frame artwork was not visually inspected. |
| 23 | P2 / image delivery | `eleventy.config.js:61`, `src/_/css/style.css:1351` | Contained case-study image hints use old half-page/1024px gutter math instead of the current 40rem reading column. | Synchronize one- through four-up `sizes` hints with the rendered column and row gaps; preserve separate breakout logic. | At 1140px, one-up advertises 469px although the column is 640px; two-up advertises 229.5px instead of about 315px. Code math confirmed; actual candidate softness unmeasured. |

## Stress-test results

Fields exercised through the existing data boundaries:

| Component | Fields / source | Type and limits | Fixture coverage |
| --- | --- | --- | --- |
| Record cards and picker | `records.json`: artist, title, year, cover_image, discogs_url, formats; derived count/result | Strings have no declared maximum. Year optional after importer normalization; formats optional; list is unpaginated. | Long title/artist, diacritics, CJK, quotes, one-letter title, absent year/artist, failed cover; Empty, One, 302-row Demo, 1,000 rows |
| Tickets/details/filter | `tickets.js`: band, venue, district, date, year, story, support, with, note_title, stub, format; derived count/filter | Authored strings, no length schema. Story/support/with/note_title/format optional. Year strings populate filters. | Long band/venue, long story, CJK/diacritics in supporting fields; Empty, One, eight-item Demo, invalid URL year |
| Reading | `books.json`: title, author, cover; href is not rendered | Authored strings, no length schema. No interactive book destination in current template. | Long title/author, unbroken compound, CJK, one-letter title; Empty, One, 26-item Demo |

Missing artist is a boundary robustness probe: the current Discogs importer already supplies “Unknown artist”, so a leading dash from directly injecting absent artist is not reported as a normal ingestion bug. Quoted record names are escaped correctly under Eleventy/Nunjucks's default autoescaping; no quoted-attribute defect is reported.

| Case | Result | Recommended handling |
| --- | --- | --- |
| Reading long unbroken title, 320px | **Broken:** expands figure past track and creates horizontal overflow (finding 3). | Wrap the full title and permit intrinsic shrinkage. |
| Empty records | **Broken:** action is enabled but does nothing (finding 7). | Empty message plus unavailable action treatment. |
| Unsupported ticket year | **Broken:** blank archive with no active filter (finding 6). | Recommend fallback to All for obsolete/bad links. |
| Single record | **Ugly:** “1 chances” (finding 20). | Singular/plural copy. |
| Failed remote record cover | **Fragile:** no authored image error fallback; title/artist remain visible. | Decide whether to show a neutral sleeve or retain native failure; not a loss of identifying text. `partials/record-grid-item.html:59`. |
| Empty reading/tickets | **Fragile:** no explicit empty message; ticket introduction retains static historic totals. | Relevant if the collections become dynamic; current authored archives are populated. |

What held up: record titles/diacritics/CJK wrapped at tested widths; quotes retained correct accessible labels; absent years were omitted from picker results; a single record can be picked repeatedly without the repeat-avoidance loop hanging. Long ticket details are internally scrollable (179px visible height, 1,625px scroll height in the narrow fixture). Reading preserves image proportions, but the intrinsic-width defect can enlarge a cover together with its figure. No speed claim follows from the large-collection node count.

Checked the worst-case fixture for each collection at **320, 768, 1440, and 2560px** iframe widths. The scrollbar consumes 15px, so 320px fixtures expose a 305px document viewport. Also checked each at 320px with **200% root text in light and dark token themes**. Demo/Empty/One states were opened for all three; 1,000 records were rendered and counted. This is a layout probe, not actual browser zoom or physical touch. RTL is not a supported site mode and was not claimed as tested. Currency, avatars, forms, relative-time widgets, permissions and drag gestures do not apply to these collection components. Device performance and exact animation feel remain unmeasured.

## Design decisions preserved and corrections to the first audit

- Preserve documented 560ms/1000ms page entrances, 550ms media zoom, 450ms label movement, project keyboard-focus effects, and content-owned book/vinyl/ticket treatments. Generic skill timing advice does not override the design system.
- About's stroke drawing is made instantaneous by shared reduced-motion CSS. Its JS still hides/reveals the paths, but it is inaccurate to say the full 2.5-second drawing runs under reduced motion. A deliberate static treatment is optional follow-up.
- A transformed static hover/focus state after transitions are disabled is not evidence of continued animation. Treat further transform resets as a consistency decision, not an established motion-accessibility failure.
- PechaKucha browsing scroll and the header copy feedback are documented choices; do not remove them based on blanket keyboard-motion advice.
- Do not globally disable document overscroll, text selection, zoom, or native browser feedback to make this editorial website resemble a native app. No such changes are proposed.
- No extra animation opportunities were justified by the observed interactions. Preserve restraint.

## Review artifacts and next steps

Open [the stress preview](http://127.0.0.1:8766/) while the local review server is running. States: Demo / Worst case / Empty / One, plus 1,000 rows for records; width, text-size and token-theme controls are included. Generated fixture HTML is development-only under `plans/stress-fixtures/`, outside public `src/`.

Reproduce fixtures with `node plans/ui-stress-preview.cjs`. This renders review artifacts only; it does not build or modify the website. `coverage-inventory.json` is an inventory snapshot, not a test suite.

The authored-content pass scanned all **110** `.md`/`.html`/`.njk` files under `src` (89 Markdown, 20 HTML, one Nunjucks). All **265 raw image tags** contain alt attributes; the substantive defect is placeholder wording, not omitted attributes. Required rendered fields are populated across 26 books, 302 records, 87 visible tickets, and 20 PechaKucha slides. Neither this scan nor these counts imply that every image was visually approved.

Suggested implementation order: ticket semantics and keyboard map access (1–2), narrow layout/state issues (3–8), input/motion/map/audio handling (9–15), image semantics/delivery (21–23), then measured performance/polish (16–20). No implementation plans or production fixes have been started. A later implementation should run the production build and pattern contracts, then exercise keyboard, screen-reader, reduced-motion and real-phone behavior. The motion audit skill separates review from self-contained implementation plans; this review ends at the findings stage.
