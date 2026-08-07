# Jack Osborne Portfolio Design System

> Status: baseline derived from the homepage and About page on August 6, 2026.
> This document records the design language already present in the site and turns it into guidance for future pages. Where the implementation is still exploratory, that is called out explicitly.

## Source of truth

This document is the human- and AI-readable source of truth for design intent, usage, and constraints. The canonical, machine-readable values are defined in [`src/_/css/tokens.css`](../src/_/css/tokens.css). When this document and the CSS differ on an exact value, `tokens.css` governs the rendered site and the discrepancy should be resolved by updating this document.

- Global and semantic token values belong in `tokens.css`, not in component styles.
- Component-specific custom properties stay with their component unless they become reusable across the site.
- Project identity colors remain local to project content and must not become global interface accents.
- An approved change to a reusable token or pattern must update both the implementation and the relevant guidance here.

<!-- DESIGN-TOKENS:START -->
## Generated token reference

This section is generated from `src/_/css/tokens.css`. Do not edit it manually. Change the CSS tokens, then run `npm run tokens:docs`.

| Token | Light/default | Dark override |
|---|---|---|
| `--font-base` | `-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif` | — |
| `--font-display` | `var(--font-base)` | — |
| `--font-mono` | `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace` | — |
| `--font-size-xs` | `0.75rem` | — |
| `--font-size-sm` | `0.875rem` | — |
| `--font-size-base` | `1rem` | — |
| `--font-size-md` | `1.25rem` | — |
| `--font-size-lg` | `1.875rem` | — |
| `--font-size-hero` | `clamp(2.125rem, 5vw, 3rem)` | — |
| `--font-size-product-title` | `clamp(1.375rem, 2.4vw, 1.75rem)` | — |
| `--font-size-card-label` | `1rem` | — |
| `--font-size-utility` | `0.875rem` | — |
| `--line-height-xs` | `1.45` | — |
| `--line-height-base` | `1.5` | — |
| `--line-height-md` | `1.25` | — |
| `--line-height-xl` | `1.1` | — |
| `--line-height-display` | `0.98` | — |
| `--font-weight-normal` | `400` | — |
| `--font-weight-medium` | `500` | — |
| `--font-weight-semibold` | `600` | — |
| `--leading-snug` | `1.25` | — |
| `--leading-normal` | `1.5` | — |
| `--leading-relaxed` | `1.625` | — |
| `--tracking-sm` | `0.01em` | — |
| `--tracking-base` | `0` | — |
| `--tracking-lg` | `-0.02em` | — |
| `--tracking-xl` | `-0.025em` | — |
| `--tracking-2xl` | `-0.035em` | — |
| `--color-canvas` | `#ffffff` | `#24262a` |
| `--color-ink` | `#111111` | `#ffffff` |
| `--color-ink-muted` | `#6e6e73` | `#abb0bb` |
| `--color-stage` | `#f5f5f7` | `#3e4045` |
| `--color-stage-hover` | `#ebebed` | `#494c52` |
| `--color-divider` | `rgba(17, 17, 17, 0.08)` | `rgba(255, 255, 255, 0.12)` |
| `--color-image-surface` | `#fafafa` | `#2b2d32` |
| `--color-focus` | `#333333` | `#ffffff` |
| `--color-white-glass` | `rgba(255, 255, 255, 0.92)` | `rgba(36, 38, 42, 0.92)` |
| `--color-subtle-fill` | `rgba(0, 0, 0, 0.06)` | `rgba(255, 255, 255, 0.1)` |
| `--color-subtle-fill-hover` | `rgba(0, 0, 0, 0.1)` | `rgba(255, 255, 255, 0.16)` |
| `--focus-ring-width` | `2px` | — |
| `--focus-ring-offset` | `3px` | — |
| `--link-decoration-thickness` | `1px` | — |
| `--link-underline-offset` | `0.14em` | — |
| `--color-link` | `var(--color-ink-muted)` | `var(--color-ink-muted)` |
| `--color-link-visited` | `var(--color-ink-muted)` | `var(--color-ink-muted)` |
| `--color-link-hover` | `var(--color-ink)` | `var(--color-ink)` |
| `--color-link-active` | `var(--color-ink)` | `var(--color-ink)` |
| `--color-callout-bg` | `#fff7e5` | `#3a3424` |
| `--color-callout-text` | `#513e10` | `#e8d9b0` |
| `--color-callout-icon` | `#ffa000` | `#ffb703` |
| `--color-brand-fsqcityguide` | `#f94877` | — |
| `--color-brand-fsqswarm` | `#ffa633` | — |
| `--space-1` | `8px` | — |
| `--space-2` | `16px` | — |
| `--space-3` | `24px` | — |
| `--space-4` | `32px` | — |
| `--space-5` | `40px` | — |
| `--space-6` | `48px` | — |
| `--space-7` | `56px` | — |
| `--space-9` | `72px` | — |
| `--space-12` | `96px` | — |
| `--space-16` | `128px` | — |
| `--space-20` | `160px` | — |
| `--spacing-unit` | `var(--space-1)` | — |
| `--layout-gap` | `0.625rem` | — |
| `--radius-small` | `12px` | — |
| `--radius-card-mobile` | `24px` | — |
| `--radius-card` | `32px` | — |
| `--radius-pill` | `999px` | — |
| `--ease-expressive` | `cubic-bezier(0.16, 1, 0.3, 1)` | — |
| `--ease-media` | `cubic-bezier(0.22, 1, 0.36, 1)` | — |
| `--audio-blur` | `12px` | — |
| `--audio-sat` | `1.35` | `1.2` |
| `--audio-bright` | `1.05` | `0.95` |
| `--audio-fill` | `color-mix(in oklab, canvas 24%, transparent)` | `color-mix(in oklab, canvasText 14%, transparent)` |
| `--audio-milk` | `color-mix(in oklab, canvas 16%, transparent)` | `color-mix(in oklab, canvasText 10%, transparent)` |
| `--audio-stroke` | `color-mix(in oklab, canvasText 8%, transparent)` | `color-mix(in oklab, canvasText 40%, transparent)` |
| `--surface-darken` | `4%` | `16%` |
<!-- DESIGN-TOKENS:END -->

## Design intent

The portfolio is a quiet, image-led record of product design work. Its interface should feel precise, personal, and editorial: generous space, direct language, strong product imagery, and very little decorative UI.

Use semibold (`600`) for semantic `<strong>` emphasis so important prose is clearly distinguishable from normal body text. Reserve medium (`500`) for quieter interface emphasis and established roles such as monospaced `.mono` content.

The work is the visual focus. Navigation and supporting copy recede; project stages act like neutral gallery walls. The visual language borrows the restraint and typographic confidence of Apple product pages, but it is not an Apple replica. The portfolio's distinct character comes from its chronological case-study structure, warm personal copy, large rounded canvases, and the Greenock topographic motif.

### Core principles

1. **Let the work lead.** Product imagery should carry more visual weight than labels, controls, or ornament.
2. **Use space as structure.** Separate major ideas with generous vertical rhythm instead of rules, background bands, or extra chrome.
3. **Keep the frame neutral.** White, near-black text, and a soft cool gray create the gallery around the work. Product artwork supplies most of the color.
4. **Be understated, not anonymous.** The Greenock topography, first-person biography, and career chronology give the minimal system a specific voice.
5. **Prefer a few deliberate behaviors.** Page entrance, project hover, and the topographic reveal are enough. Motion should clarify focus and reward attention.
6. **Stay accessible by default.** Preserve semantic headings, visible keyboard focus, reduced-motion support, readable type, and useful alternative text.

## Content design

The site's writing should feel like the person behind the work: thoughtful, direct, candid, and quietly confident. It should explain without performing expertise and be personal without becoming self-promotional.

Concise is a writing discipline, not a requirement that every passage be short. Interface and introductory copy should be compact; essays may take the space needed to develop an idea.

### Voice

- **Direct:** Say the important thing early and prefer plain language.
- **Warm:** Write like a person, not a company or a personal brand.
- **Reflective:** Show the reasoning, uncertainty, and lessons behind the work.
- **Precise:** Use concrete details and distinguish personal contribution from team outcomes.
- **Understated:** Let the work establish credibility. Avoid inflated claims, promotional language, and unnecessary superlatives.

### Tone by context

The tone may change with the reader's needs, but the underlying voice should remain recognizable.

| Context | Tone |
|---|---|
| Homepage and navigation | Concise, welcoming, assured |
| Case studies | Clear, evidence-led, reflective |
| About and personal writing | Candid, conversational, thoughtful |
| Instructions and controls | Brief, literal, action-oriented |
| Empty or unavailable states | Human and lightly playful when appropriate |
| Errors | Calm, specific, and helpful |

### Interface copy

- Use sentence case for headings, buttons, navigation, and labels.
- Begin action labels with a specific verb, such as “View project,” “Read article,” or “Filter tickets.”
- Prefer the action itself over procedural labels such as “Submit,” “Confirm,” or “Continue.”
- Avoid “Click here,” “Learn more,” and other labels that lose meaning outside their immediate visual context.
- Keep labels as short as clarity allows. Do not impose a character limit when it would make the wording vague.
- Use contractions where they sound natural.
- Do not use exclamation marks to manufacture enthusiasm.

### Errors and unavailable content

When the site needs to explain a problem:

1. State what happened in plain language.
2. Explain the cause when it is known and useful.
3. Give the reader a clear next action.
4. Do not blame the reader or expose implementation details.

For example: “The map couldn't be loaded. Check your connection and try again.”

### Case studies

- Write in the first person when describing personal decisions or contributions.
- Use “we” only for genuinely collaborative work.
- Explain the problem and constraints before presenting the solution.
- Describe decisions and tradeoffs, not only finished screens.
- Support outcome claims with evidence where available.
- Do not imply sole ownership of team work.
- Prefer specific results over promotional adjectives.

### Terminology

- Use the official capitalization of names and products, including Foursquare, City Guide, Swarm, Labs, Savewise, and Work With Me.
- Use “case study” for a detailed account of a project's context, process, and outcome. Use “project” for the work itself or for a shorter portfolio entry.
- Avoid promotional shorthand such as “world-class,” “revolutionary,” “pixel-perfect,” and “delightful” unless it appears in a quotation or is supported by a specific, meaningful claim.
- Keep the glossary evidence-based. Add a preferred term when inconsistent language creates ambiguity; do not build a speculative list of forbidden words.

## Foundations

### Color

Use the generated token reference above for exact light and dark values. The guidance below defines how those semantic colors should be used.

- White is the page canvas. Soft off-white is reserved for image surfaces and media compositions that need subtle separation from the page.
- Near-black is used for primary text; avoid pure black for large text fields.
- Muted gray is used for timelines, descriptions, navigation, and footer content.
- Soft gray is the default project stage and subtle divider color.
- There is no global brand accent. Color belongs primarily to project identities and imagery.
- Do not introduce decorative gradients or colored section backgrounds without a content reason.

Project colors are local, not global tokens. Current examples include Savewise near-black, Labs green, Swarm orange, and City Guide pink. They may appear in product logos and artwork but should not leak into shared navigation or controls.

### Dark mode

Dark mode follows the operating-system preference through `prefers-color-scheme: dark`. Components must consume semantic color tokens rather than testing the theme or embedding separate light and dark values.

- Canvas, ink, muted ink, stages, dividers, image surfaces, focus, links, callouts, subtle fills, and audio surfaces have dark-theme equivalents in `tokens.css`.
- Maintain the same hierarchy and restraint in both themes; dark mode is not a separate visual identity.
- Project-owned colors may need local contrast adjustments, but their meaning and ownership do not change.
- New semantic colors require both light and dark values unless their contrast has been verified unchanged in both themes.

### Typography

Use the system San Francisco family on Apple platforms, with Helvetica Neue as the principal fallback.

Use `--font-display` for display roles, `--font-base` for body and interface copy, and `--font-mono` only for genuinely monospaced content. Their canonical fallback stacks live in `tokens.css`.

The site currently uses a deliberately light weight ladder. Large statements are regular rather than bold; supporting labels use medium weight.

| Role | Size | Weight | Line height | Tracking | Use |
|---|---:|---:|---:|---:|---|
| Hero statement | `clamp(34px, 5vw, 48px)` | 400 | 1.08 | 0 | Homepage introduction |
| Page introduction | `clamp(18px, 1.5vw, 20px)` | 400 | 1.5 | 0 | Interior-page descriptions and opening paragraphs |
| Product title | `clamp(22px, 2.4vw, 28px)` | 500 | 1.1 | `-0.02em` | Company or product group |
| Body | 16px | 400 | 1.5 | 0 | Descriptions and details |
| Card label | 16px | 500 | 1 | `-0.01em` | Project reveal label |
| Utility | 14px | 400–500 | 1.45 | 0 to `-0.01em` | Eyebrows, footer, status |

Guidance:

- Keep hero copy concise enough to read as one composed statement.
- Use regular weight for large display text; bold type would make the interface feel more promotional than editorial.
- Use negative tracking only where it is already specified at display sizes.
- Aim for 45–65 characters per line in reading copy. Product descriptions currently cap at `56ch`.
- Preserve `text-wrap: pretty` as progressive enhancement.
- Interior pages use one compact intro lockup: a 14px muted eyebrow directly above the H1 with no layout gap, followed by an optional 18–20px muted description separated by 16px. About’s opening paragraph uses the same description role when no description appears in the header.
- Long-form pages may use the introduction size for their first paragraph, but subsequent body copy returns to the 16px body role.
- Dense, short-paragraph documents such as Work With Me use 20px medium-weight H2s so headings remain proportional to the surrounding copy.
- Case-study figure captions use the 12px monospaced utility treatment at medium weight with normal tracking, echoing numbered section labels without competing with the imagery. A caption's muted secondary line remains normal weight.

### Spacing

The underlying unit is 8px. Small component spacing uses 8, 16, 24, and 32px; composition spacing expands to 48, 56, 72, 96, 128, and 160px.

The canonical scale is `--space-1` through the selected composition steps in `tokens.css`: 8, 16, 24, 32, 40, 48, 56, 72, 96, 128, and 160px. Use the named token rather than repeating its literal value.

Use fluid spacing for large canvases:

- Card inset: `clamp(24px, 5vw, 72px)`
- Card label inset: `clamp(24px, 4vw, 56px)`
- Project gap: `clamp(32px, 5vw, 56px)`
- Product-group gap: `clamp(96px, 12vw, 160px)`

### Grid and page shell

- Maximum content width: `1320px`.
- Shared implementation grid: 24 equal tracks. Four-column compositions map onto it in six-track spans (`1–6`, `7–12`, `13–18`, `19–24`). This preserves quarter-width alignment while allowing six-column archives, asymmetric editorial layouts, and finer placement.
- New homepage compositions may be designed as four conceptual columns, but their Eleventy implementation should align to the 24-track grid rather than introducing a competing grid foundation.
- Desktop page gutter at 1024px and above: `96px`.
- Default/tablet page gutter: `32px`.
- Mobile grid at 640px and below: two conceptual columns for the header; content and footer collapse to one column.
- Use `.wrapper` as the shared 1320px width constraint. Header, main, and footer own the shared horizontal gutters: 32px by default and 96px from 1024px.
- Use the shared grid rather than introducing page-specific maximum widths without a clear editorial need.

The four-column composition governs alignment more than density; the 24-track implementation provides the placement resolution. Full-width hero and project content span all 24 tracks. A conceptual half-width spans 12 tracks, a quarter-width spans six, and archive layouts may use four-track spans to produce six columns.

### Shape and depth

| Token | Value | Use |
|---|---:|---|
| Small | 12px | Product logos |
| Card mobile | 24px | Project stages at 640px and below |
| Card desktop | 32px | Project stages above 640px |
| Pill | 999px | Read More, statuses, compact reveal labels |

Project stages are the dominant shape. Do not scatter rounded containers around ordinary text sections. Pills signal small actions or metadata, not general decoration.

Inline editorial links remain ordinary underlined text. Do not turn a prose link into a pill merely to increase emphasis. Pills are appropriate for compact standalone actions such as Read More, picker controls, and View full scan on a ticket reverse.

The shared interface is mostly flat. Avoid shadows on buttons, navigation, text, and project cards. A very soft shadow may be used on a freestanding product logo or an image that genuinely needs separation from its stage, but it should be rare and visually quiet.

## Composition

### Header

The header is a low-chrome four-column composition mapped onto the shared 24-track grid, with 32px vertical padding on larger screens and 24px on mobile.

- Home occupies tracks 1–6.
- The current-page context occupies tracks 7–18 and is generated from page metadata; case studies retain their full `Work / Company / Product / Project` hierarchy.
- The email address occupies tracks 19–24.
- The homepage omits the current-page context.
- At 1140px and above, email/contact sits right-aligned on the final rail.
- Links inherit the surrounding type and use color rather than containers for hierarchy.
- Below 1140px, Home and the current-page context stack, align left, and use an 8px row gap. Hide the header email; contact remains available in the footer.

### Homepage hero

The hero is a centered personal statement, not a product-marketing masthead. It spans the grid, caps its line length at roughly `32ch`, and uses regular-weight display type.

The only primary action is a neutral pill beneath the statement. Its current specification uses a 44px minimum height, 16px text, 16px horizontal padding, and the shared subtle-fill tokens. It darkens slightly on hover.

On mobile, the hero becomes left-aligned. This is intentional: the smaller viewport benefits from a more direct editorial reading pattern.

### Topographic signature

“Greenock, Scotland” may reveal a fixed, viewport-width topographic map on hover or keyboard focus. Treat this as a signature moment, not a reusable tooltip pattern.

- The map is decorative and must remain hidden from assistive technology.
- It fades in over 900ms with an ease-out curve.
- It sits behind content at low opacity (currently 0.4).
- Disable the visual entirely on mobile, where hover is unavailable and the overlay would compete with content.
- Do not add other background illustrations that dilute this single personal motif.

### Product groups

Each career/product group follows the same hierarchy:

1. Product logo
2. Product or team name
3. Date range
4. One concise description
5. One or more project stages

On desktop, the header is centered and inset from the card edge. On mobile it becomes left-aligned and loses the artificial inset. Keep descriptions factual and outcome-oriented; one short paragraph is enough at this level.

Product groups are separated by large whitespace rather than rules. Preserve the chronological reading from newest to oldest unless a future version explicitly changes to a curated rather than historical portfolio.

### Interior page introductions

About, archives, articles, and case studies share the `.page-intro` contract. Use `partials/page-intro.html` for the standard eyebrow, title, and optional description structure; its caller block supports local additions such as the ticket filter. Eyebrow and H1 form a tight lockup with no artificial gap. Optional descriptive copy uses the page-introduction typography role and sits 16px below the title. Keep the description concise and use muted ink so the title remains primary.

### Editorial links and archives

Text links use the global neutral link treatment: an understated underline that strengthens on hover or focus. Blog archive titles use this default treatment without full-row dividers, movement, or external-link icons. Reserve the north-east arrow convention for links that actually communicate an external or new-context destination.

Default text links pair muted ink with a solid ink underline. Hover and focus bring both text and underline to ink; visited links retain muted text and shift the underline to muted ink. Navigation, cards, and button-style links may retain their established local treatments.

Blog post reading time belongs as the final item in a collapsed “Context” disclosure at the end of the article, following optional location, mood, and song context. This disclosure reuses the case-study accordion component: contextual information stays available without competing with the article, and its collapsed default adds a small moment of discovery. Newer/older navigation follows it directly so it closes the complete reading experience; Older occupies the left/back position and Newer occupies the right/forward position. Treat Older and Newer as non-interactive directional labels; only the destination post title is linked.

Within the blog Context disclosure, labels remain muted while output values use primary ink, providing differentiation without introducing another accent color.

Numbered section labels use an H5 followed by their associated H2 or list. On case studies, an H2 immediately following an H5 uses a single 16px top margin and drops its usual section `padding-top`, keeping the pair related without collapsing it into the tight page-introduction treatment. Lists and all other headings retain their standard spacing. The page-introduction eyebrow and H1 remain unchanged.

Standalone prose blockquotes use the larger `--font-size-md` editorial treatment. Blockquotes inside a `.quotes` review or testimonial grid use the regular body size and line height so several cards can be read together without competing with the surrounding case-study hierarchy. Cards stretch to the tallest item in each grid row, while their quote and optional persona content form a bottom-aligned group. Vertically stacked cards retain their natural height. Quote cards own their internal padding; generic prose-list spacing, including the last-item reset, does not apply inside `.quotes`.

Collection grids align comparable objects to a common baseline when practical. Reading covers align to the bottom edge of each grid row while captions flow below; natural cover proportions are preserved.

### Responsive imagery

Meaningful local raster images use the shared `responsiveImage` Nunjucks shortcode. The shortcode generates intrinsic dimensions, responsive source candidates, modern formats, fallback formats, lazy loading, and asynchronous decoding. Do not reference generated filenames directly; they are build output rather than authored assets.

- CSS remains responsible for an image's displayed dimensions, crop, and position. The shortcode's `sizes` value must describe that existing layout to the browser; it must not be used as a substitute for layout CSS.
- Select the named image profile whose candidate widths and formats match the asset's role. Exact profile definitions belong in `eleventy.config.js`, not in this document.
- Never enlarge a generated candidate beyond its source image. Preserve the original source asset for future processing and for explicit full-resolution links such as ticket scans.
- Use WebP with JPEG fallback for opaque photographic or scanned imagery. Use WebP with PNG fallback when transparency must be preserved.
- Lazy loading and asynchronous decoding are the default. Above-the-fold or deliberately preloaded imagery may override loading priority when measurement identifies it as part of the initial experience.
- SVG assets remain vector files. Preserve animated GIFs unless a deliberate video or animation replacement is approved. Assess remote imagery individually; leave an already resized third-party CDN asset remote when local processing would make builds slower or less reliable without a meaningful delivery benefit.
- Meaningful images require alt text describing what they communicate. Decorative or duplicate imagery uses empty alt text.
- When the same source appears in layouts of different widths, reuse its existing profile but provide a `sizes` value for each occurrence. The browser may then select different candidates without duplicating the authored source.

Case-study prose imagery is processed automatically by the project layout. Standalone images and vertical `.multi.col` stacks use the full prose-width profile; horizontal `.multi.row` groups use profiles matched to their one-, two-, three-, or four-up layout. Keep authored image markup and grouping classes semantic and preserve the source assets in each project's `content` folder.

Animated case-study banners use the shared `responsiveBannerImage` shortcode. Preserve each frame's complete 2560 × 1904 transparent canvas—its whitespace and transparency are part of the composition and must never be trimmed. Generate 640, 1280, 1920, and 2560px candidates with WebP and transparent PNG fallback. The first frame retains high fetch priority, the next two load eagerly, and later frames retain lazy-loading markup. Keep frame order, opacity animation, controls, aspect ratio, and positioning independent from image delivery. Keep the current frame visible until the next frame's `decode()` promise resolves; network completion alone does not guarantee that Chromium can paint a responsive source without flashing. The loader remains until the first frame is decoded. Under `prefers-reduced-motion: reduce`, begin paused on the decoded first frame and allow explicit playback through the existing control.

### Project stages

The project stage is the principal reusable visual component.

Base behavior:

- Soft gray background, clipped overflow, and no visible border.
- `4 / 5` aspect ratio on mobile.
- `4 / 3` at tablet sizes.
- Approximately `1320 / 888` for full-width desktop cards.
- Full-width cards span both project columns; `.work-card--half` cards form square pairs on desktop.
- Images use `object-fit: contain` unless a browser or intentionally bleeding artwork requires a crop.

Supported compositions:

- `single-phone`: one centered, oversized phone.
- `device-row`: three phones on desktop, simplified to the center phone on smaller screens.
- `wide-browser`: browser or laptop artwork aligned toward the bottom edge.
- `browser-preview`: cropped browser content filling the available stage.
- `split-stage`: a large desktop view with a phone layered at the lower-right.
- `image-bleed`: artwork fills the stage without internal padding.
- `half`: square desktop card paired with a sibling.

Choose the composition that best communicates the work; do not use variants merely to create visual variety.

### About page

The About page uses the same shell but shifts to a more editorial typographic composition:

- A small muted eyebrow on the first column.
- Biographical copy spanning the two middle columns.
- Compact factual details below a subtle hairline.

On mobile, all About content becomes a single reading column. The visual system remains quiet so personality comes from the writing.

### Footer

The footer is separated by a single soft-gray hairline. It uses the same four-column grid for site, elsewhere, social, and back-to-top links. Muted text is the default; hover moves links to primary ink and adds an underline.

On mobile, footer groups stack in one column. Do not convert the footer into cards or a large colored band.

## Interaction and motion

Motion should be calm and focused.

### Page entrance

- Header: 560ms opacity fade.
- Main content: 1000ms fade-and-rise from 24px with a very slight scale change.
- Use the existing expressive ease: `cubic-bezier(.16, 1, .3, 1)`.
- Run entrance motion only above 640px and only when reduced motion is not requested.

### Project hover and focus

- Darken the neutral project stage by about 4%.
- Scale media to `1.04` over 550ms using `cubic-bezier(.22, 1, .36, 1)`.
- If a reveal label is enabled, fade it in and translate it upward by 8px.
- Keyboard focus uses a 3px dark outline with a 6px offset.
- Disabled/coming-soon projects do not scale or reveal a project label; they may show a persistent muted status pill.

The current project-label UI is implemented but hidden by default. Treat it as provisional until the portfolio decides whether card titles belong on the image stage or remain implicit from surrounding content.

### Scroll response

Cards may scale subtly as part of a scroll-linked effect, provided the motion remains secondary to the content and is disabled under `prefers-reduced-motion`. Avoid parallax or multiple competing transforms.

## Responsive behavior

### Mobile: 0–640px

- Page gutter remains 32px.
- Header uses the stacked Home/context composition; header email is hidden.
- Hero and product headings become left-aligned.
- Hero type follows the global H1 scale: `clamp(34px, 5vw, 48px)`.
- Project cards become portrait `4 / 5` stages with 24px radius.
- Project gap tightens to 24px.
- Multi-device compositions simplify to the most informative central asset.
- Topography is hidden.
- Footer becomes one column.

### Tablet: 641–1023px

- Project cards use landscape `4 / 3` stages and 32px radius.
- Projects remain in a single column.
- Device rows simplify where the full composition would become illegible.
- Preserve generous card padding via the fluid card inset token.

### Desktop: 1024px and above

- Page gutters expand to 96px.
- Full-width stages use the wide portfolio ratio.
- The project grid supports two square half-width stages.
- Device rows may show three phones.
- Major section spacing grows to the large rhythm values.

There is currently no separate wide-screen breakpoint: content locks at 1320px and outer margins absorb additional width.

The existing Eleventy styles also use `540px`, `768px`, and `1140px` breakpoints. Preserve those behaviors during migration. New work should prefer the target `640px` and `1024px` boundaries, using an additional breakpoint only when the content demonstrates a real layout failure. Breakpoints are content decisions, not a scale to use automatically.

## Accessibility and content rules

- Keep the skip link functional and visibly reveal it on focus.
- Use native links for navigable project cards and buttons only for in-page actions.
- Every interactive project card needs a descriptive `aria-label` or equivalent accessible name.
- Replace placeholder image alt text such as `alt="text"`. Decorative duplicate imagery should use empty alt text; meaningful project imagery should describe what the image communicates.
- Maintain at least a 44px touch target for primary mobile actions. The current 40px Read More control should receive a larger invisible hit area or be increased to 44px before the system is considered final.
- Never encode project availability through opacity alone; pair it with clear text such as “Coming soon.”
- Honor `prefers-reduced-motion` for entrance, scroll, hover, and topographic effects.
- Keep visible focus treatment on every interactive element, not only project cards.

## Do and don't

### Do

- Use neutral shared surfaces and allow project artwork to provide color.
- Keep large statements regular-weight and concise.
- Align new pages to the 1320px, four-column shell.
- Use generous vertical whitespace between career chapters.
- Present devices at a scale where their interface can be understood.
- Simplify multi-device compositions on small screens.
- Reuse the topographic motif sparingly as a personal signature.

### Don't

- Add a global accent color without a content or interaction reason.
- Turn every piece of content into a rounded card.
- Add shadows, gradients, glass effects, or borders as generic decoration.
- introduce a second grid or arbitrary maximum width when the shared shell works.
- Use heavy display weights or dense blocks of centered body copy.
- Animate every element independently.
- Force desktop device arrangements onto mobile.
- Treat project-specific logo colors as site-wide theme colors.

## Implementation guide

The new homepage is the target visual direction. The Eleventy project is the migration host and contains mature layouts and specialized experiences that must continue working while the new system is introduced. Do not describe target classes as already implemented in Eleventy, and do not treat every existing selector as a reusable design-system component.

### Component status

- **Implemented:** present in the Eleventy project and safe to reuse for its documented purpose.
- **Target:** approved direction from the new homepage or About prototype, but not yet migrated into Eleventy.
- **Local:** intentionally scoped to one page or feature; reuse its ideas only after an explicit decision to generalize it.
- **Provisional:** implemented or prototyped, but its API or visual treatment is not settled.
- **Legacy:** required by existing content; preserve during migration but do not use as the basis for new work.

### Current and target inventory

| Component | Canonical selector | Source | Status and guidance |
|---|---|---|---|
| Page width constraint | `.wrapper` | `style.css` | Implemented; full available width up to 1320px, inside the shared header/main/footer gutters. |
| Shared layout grid | `.grid` | `style.css` | Implemented; retain the 24-track desktop grid and express four-column compositions as six-track spans. |
| Grid helpers | `.grid-cols-4`, `.grid-cols-6`, `.row-start-7`, `.row-end-19` | `style.css` | Implemented; use only when their track behavior matches the content. |
| Grid-width content breakout | `.breakout` | `style.css` | Implemented; expands content from the centered 12-track editorial column to the surrounding 24-track grid without reaching the viewport edge. Retains horizontal overflow for wide tables on smaller screens. |
| Editorial table | `.prose table`, `.data-table` | `style.css` | Implemented and reusable; Markdown tables inherit the prose contract, while standalone tables opt in with `.data-table`. Includes quiet borders, generous cells, and alternating row surfaces. |
| Editorial figure | `.prose figure.img` | `style.css` | Implemented and reusable; use the `.bg` wrapper for the shared stage surface and pair captions with an optional muted secondary `<span>`. Combine with `.breakout` for grid-width media. |
| Site header and navigation | `.site-header`, `.site-nav`, `header[role="banner"]` | `style.css` | Implemented; uses the 24-track Home/context/email composition with a dynamic current-page hierarchy. |
| Site footer | `.site-footer`, `footer[role="contentinfo"]` | `style.css` | Implemented. |
| Interior page introduction | `.page-intro` | `style.css`, `partials/page-intro.html` | Implemented; use the macro for the standard structure and its caller block for local additions. |
| Homepage introduction | `.hero` | `home.css` | Implemented from the new homepage prototype. |
| Neutral homepage action | `.hero__cta` | `home.css` | Implemented with a minimum 44px hit area. |
| Topographic reveal | `.topography-trigger`, `.topography-map` | New homepage prototype | Deferred with the homepage imagery; do not generalize it into a site-wide pattern. |
| Career/product group | `.product`, `.product__header` | `home.css` | Implemented; homepage-specific until another page demonstrates reuse. |
| Homepage project grid | `.product__projects` | `home.css` | Implemented as a responsive one/two-column composition within the 1320px homepage container. |
| Homepage project stage | `.work-card` | `home.css` | Implemented without imagery; distinct from existing case-study banners. |
| Stage compositions | `.work-card--*` | `home.css` | Implemented structurally; retain only modifiers used by future artwork. |
| Project label | `.work-card__text` | `home.css` | Implemented structurally but intentionally hidden while placeholder artwork is in use; linked cards retain descriptive accessible names. |
| Availability status | `.product__status` | `home.css` | Implemented as quiet metadata beside the timeline for unavailable work such as the Savewise case study; do not style it as an action or overlay it on project imagery. |
| Existing case-study banner | `#case-study .banner` | `project.css` | Legacy/implemented; preserve separately until a deliberate case-study migration. |
| Callout | `.callout` | `style.css` | Implemented and reusable for short contextual notices. |
| Metadata accordion | `.content-meta .acc` | `style.css` | Implemented for editorial and case-study metadata. |
| Floating segmented bar | `.floating-bar`, `.floating-bar__chip` | `style.css` | Provisional shared control; glass, shadow, and blue active treatments are scoped exceptions. |
| Audio player | `.post-audio` | `narration.css` | Local. |
| Record cards and picker | `.record-card`, `.records-picker__*` | `records.css` | Local to the records experience. |
| Ticket cards | `.ticket-card` | `tickets.css` | Local to the tickets archive. |
| PechaKucha slider | `.slider-*` | `pechakucha.css` | Local to the presentation experience. |
| Check-in map modules | `.module`, `.venue`, map selectors | `checkins.css` | Local to the check-ins experience. |
| Pattern library specimens | `.pattern-*` | `pattern-library.css` | Public living reference; specimens consume the production tokens and shared components rather than redefining them. |

### Shared component contracts

#### Callout

Status: Implemented and reusable. Use `.callout` for a short contextual notice inside editorial content.

- Consume the `--color-callout-*` tokens and inherit link color.
- An icon is optional and should be decorative unless it communicates information not present in the text.
- Keep the message brief; do not use callouts as generic cards or stack several consecutively.

#### Homepage work card

Status: Implemented. The work card is the principal homepage project-stage component and remains local to `home.css` until another page demonstrates a stable reuse case.

- Use a native link when the entire card navigates and give it a descriptive accessible name.
- Use `.work-card--disabled` only for unavailable work and pair it with visible status text.
- Composition modifiers control media arrangement, not decorative variety.
- Preserve focus-visible, reduced-motion, and responsive simplification behavior.
- Do not replace or restyle `#case-study .banner` as part of the homepage migration.

#### Floating segmented bar

Status: Provisional. Use only for a small group of mutually related controls such as the records picker.

- `.floating-bar__chip` is not the default site button.
- Glass, shadow, and blue-gradient active states are allowed inside this component but do not establish a global accent or general button style.
- Keep the current keyboard focus, active feedback, dark-mode tuning, and reduced-motion behavior.

### Controls and interaction taxonomy

- Use links for navigation and buttons for in-page actions.
- There is not yet one universal visual button component. Do not substitute `.floating-bar__chip`, `.records-picker__btn--primary`, `.post-audio__btn`, `.slider-btn`, or `.ticket-card__trigger` for one another.
- Icon-only buttons need an accessible name and a minimum 44px touch target, including any invisible hit-area extension.
- New controls require default, hover, active, focus-visible, and disabled states where applicable.
- Shared disabled controls use the native `disabled` attribute (or `aria-disabled="true"` when native disabling is unavailable), retain their semantics, use a not-allowed cursor, and reduce to 45% opacity.
- Ticket triggers are semantic button wrappers around ticket artwork, not a reusable visual button.
- Extra-wide ticket scans use the local `.ticket--wide` variant, which contains the full artwork inside a `3 / 2` surface so the card remains usable within the masonry archive and has sufficient depth for its reverse-side details.
- Slider buttons are compact circular controls local to PechaKucha.
- The blue record-picker gradient is a scoped exception, not permission to introduce blue throughout shared navigation or calls to action.

### State conventions

- Prefer native states and attributes such as `disabled`, `hidden`, `open`, `aria-current`, and `aria-expanded`.
- Use `.is-*` for temporary component state, including `.is-active`, `.is-open`, `.is-picked`, and `.is-playing`.
- Use `.has-*` for a capability or contained feature, such as `.has-controls`.
- JavaScript state must remain understandable in the rendered HTML and available to assistive technology.
- Avoid inventing a second name for an established equivalent state.

### Scoped visual systems

Record sleeves and vinyl motion, ticket flipping and paper treatments, frosted audio controls, the records picker, PechaKucha scrolling, and the check-in map are content-specific visual systems. Keep their selectors and implementation in their existing page stylesheets. They may depart from the quiet global shell when that behavior serves their content, but they must not redefine shared typography, navigation, page surfaces, or default controls.

### CSS architecture

- Exact global and semantic values belong in `tokens.css`.
- Resets, global typography, the site shell, utilities, and genuinely shared components belong in `style.css`.
- Homepage-only migration styles should begin in `home.css`. Promote a pattern to `style.css` only after it is reused and its component contract is stable.
- Page-specific components stay in their corresponding stylesheet.
- Do not add page-level `:root` systems when an existing semantic token can express the requirement.
- Prefer tokens over raw colors and repeated measurements. A deliberate, content-owned visual exception may keep local values when promoting them would imply false global reuse.
- Any new shared interaction must be reviewed in light and dark modes, with keyboard input, at relevant responsive widths, and under `prefers-reduced-motion`.
- Migration work should preserve existing case-study and archive behavior unless that area is explicitly in scope.

### Pattern library maintenance

The public pattern library is the rendered reference for the implemented system; it is not a parallel source of styling truth. `tokens.css`, shared component CSS, shared templates, and this document remain canonical.

- Render production HTML, macros, utilities, and component selectors whenever a specimen represents an implemented pattern. Do not recreate their visual rules with `.pattern-*` classes.
- Keep `pattern-library.css` limited to specimen framing, labels, navigation, switchers, code presentation, and simulations of states that browsers cannot reliably force for documentation, such as visited or focus-visible.
- Simulated states must consume the same semantic tokens and interaction geometry as their production pseudo-classes.
- Exact values belong in `tokens.css`. After changing a token, run `npm run tokens:docs` so the generated reference in this document remains synchronized.
- When a local pattern becomes stable and reusable, move its contract to `style.css`, add it to the component inventory, and make the pattern library consume that shared implementation.
- Keep page-specific visual systems out of the public library until reuse establishes a stable contract. A local example may inform a future shared pattern without becoming one automatically.
- Copyable examples must show the current production class names, semantic elements, native attributes, and expected nesting. Update the corresponding contract assertion when adding or changing an example.
- New interactive specimens must include applicable default, hover, active, visited, focus-visible, disabled, keyboard, responsive, dark-mode, and reduced-motion behavior.
- Run `npm run patterns:check` after changing shared components or specimens. The production build runs both `tokens:check` and `patterns:check` and must fail when documented contracts drift from their canonical implementation.

## Known gaps and next decisions

1. **Maintain the shared page shell.** Keep the 1320px `.wrapper` constraint and the common header/main/footer gutters synchronized.
2. **Validate responsive boundaries.** Preserve justified legacy 540/768/1140 behaviors, prefer 640/1024 for new homepage composition, and keep only breakpoints caused by actual content failures.
3. **Audit component adoption.** Continue moving calculated spacing and one-off values toward canonical tokens where that improves clarity without flattening content-specific systems.
4. **Finalize project imagery and labeling.** Replace mock-device placeholders with final artwork, then confirm whether visible project titles should return on hover/focus or use a persistent treatment.
5. **Complete interaction states.** Continue reviewing active and pressed feedback for touch as final homepage artwork is introduced.
6. **Review image semantics.** All current generated images have `alt` attributes; confirm whether individual case-study screenshots are meaningful or decorative as their content is reviewed.
7. **Improve animated-banner request sequencing.** Responsive banner sources are implemented, but absolutely positioned frames may all be considered visible by the browser despite native lazy-loading attributes. Measure initial transfer and consider explicitly requesting upcoming frames shortly before the animation needs them.
8. **Validate typography cross-platform.** Review Helvetica Neue/system rendering on Windows and Android before choosing whether to introduce an open-source fallback such as Inter.

## Portfolio-specific direction

The system favors restraint, image priority, confident system typography, low interface density, and disciplined motion. These qualities support the work without becoming a borrowed brand language or a generic product-marketing system.

For this portfolio, the defining rules are neutral chrome, regular-weight personal statements, rounded project stages, project-owned color, a chronological editorial structure, and one topographic signature. Future work should be judged against those rules first.
