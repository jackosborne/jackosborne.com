# Design engineering audit

Reviewed November 2, 2026 using Emil Kowalski’s [emil-design-eng skill](https://github.com/emilkowalski/skills/blob/f1090bec277140d02ed202440185ad9d02ac1490/skills/emil-design-eng/SKILL.md), revision `f1090bec277140d02ed202440185ad9d02ac1490`.

This is a source-code audit, not a measured browser-performance or visual QA result. Recommendations below have not been applied to the website. The project design system and canonical tokens take precedence over generic skill advice.

## Scope

Reviewed the shared shell, tokens, all 15 authored stylesheets, page scripts, and their associated templates: homepage, About, work/case studies, blog/archive/audio, reading, records, tickets, PechaKucha, check-ins, error page, and pattern library. Shared templates cover the individual articles and projects. Content datasets, image binaries, generated output, and dependencies are not independently designed interfaces and were outside the UI review. This does not constitute a copy edit of every article or a visual inspection of every image.

## Prioritized findings

“After” describes the recommended implementation, not an already completed change. P1 should be addressed first; P2 is normal follow-up; P3 needs measurement or a design decision.

| Priority / location | Before | After | Why |
| --- | --- | --- | --- |
| P1 — `src/_includes/layouts/tickets.html`, `src/_/js/tickets.js` | The full-scan link is inside the ticket toggle button. Closing a card only removes its visual class; the back face remains in the DOM with an opacity-hidden link. | Make the toggle and details siblings; connect them with `aria-controls`, manage hidden/inert state, and restore focus to the trigger when closing details containing focus. | Nested interactive controls create ambiguous activation. An invisible link must not remain in the tab order. Escape must not leave focus inside visually closed content. |
| P2 — `src/_/js/records.js:60` | Every random pick calls `scrollIntoView({ behavior: "smooth" })`, including reduced-motion and keyboard activation. | Read the current motion preference and activation method; use instant scrolling for reduced motion and keyboard activation. Keep smooth scrolling for pointer activation where appropriate. | Explicit JavaScript scrolling needs its own motion decision. The global CSS override does not replace this check. |
| P2 — `src/_/css/records.css:173`, `src/_/css/tickets.css:54`, `src/_/css/narration.css:152`, `src/_/css/style.css:1193`, `src/_/css/pechakucha.css:315`, `src/_/css/home.css:134` | Sleeve/vinyl, ticket, audio/container, slider, and hero CTA transforms use unconditional `:hover`. | Gate pointer-only movement with `(hover: hover) and (pointer: fine)`. Keep keyboard focus and pressed feedback separate. Include ticket front-face rotation and homepage topography hover selectors in the same pass. | Touch can retain emulated hover after a tap. The homepage work cards and reading cards already demonstrate the intended separation. |
| P2 — `src/_/css/records.css:370`, `src/_/css/tickets.css:366`, `src/_/css/reading.css:148`, `src/_/css/narration.css:174`, `src/_/css/style.css:1279` | Reduced-motion rules generally remove transition duration while leaving hover/focus/press transforms in force. | Reset nonessential movement and scaling under reduced motion; preserve color, outlines, selected state, and necessary content changes. | Snapping directly into a decorative displaced/rotated state is weaker than suppressing the motion effect. Homepage work-card rules already reset transforms. |
| P2 — `src/_/js/tickets.js:24` | Year buttons expose selection through `.is-active` only. | Set and synchronize `aria-pressed` for every year button, including All. | Readers using assistive technology need the same filter-state feedback as sighted readers. Pattern-library switchers already use this pattern. |
| P2 — `src/_/js/about.js:12` | Portrait SVG drawing starts on `mouseenter` without checking motion preference or hover capability. Global reduced-motion CSS forces transitions to zero, but the script still hides and reveals paths. | Skip the decorative drawing for reduced motion and non-hover input; leave an intentional static portrait treatment. Respond if the preference changes. | Avoid running a decorative interaction that the user has asked to reduce. This is a painted SVG stroke effect, not a compositor-only animation. |
| P2 — `src/_/css/checkins.css:53`, `src/_/js/checkins/main.js:60` | The standalone map animates grid columns without a reduced-motion rule. Sidebar cleanup waits for a `transform` transition on `#sidebar`, but its CSS transitions grid columns on `.grid`. | Add local reduced-motion handling because this layout does not load shared `style.css`. Clear content without relying on an unrelated transition event, or listen on the actual animated element/property with a no-motion fallback. | The cleanup listener never receives the expected event in the authored CSS; repeated closes can accumulate listeners and leave old content behind. |
| P2 — `src/_/js/narration.js`, `src/_includes/layouts/base.html` | Audio starts with “Loading…” and has no media `error` handler. Play/pause is represented by an aria-hidden icon while the button text describes time. | Add a recoverable load-error state and a synchronized action name such as “Play narration” / “Pause narration”; preserve remaining time as supporting information. | A failed asset can remain indefinitely at Loading. The accessible action should communicate what pressing the control will do. |
| P3 — `src/_/css/narration.css:65`, `src/_/js/narration.js` | Playback progress updates and transitions `width`. | Use a full-width layer with left-origin `scaleX(progress)` and update the transform directly. | Avoid repeated layout work for a purely visual progress fill. Verify the appearance remains identical in both themes. |
| P3 — `src/_/css/records.css:54` | Every sleeve and vinyl permanently declares `will-change: transform`. | Remove the blanket hint first; profile a large collection before adding narrowly scoped promotion. | Persistent promotion across a collection can consume substantial layer memory. This is a potential cost, not a measured frame-rate failure. |
| P3 — shared `.button-link` and homepage `.hero__cta` | These controls lift or shrink on hover but do not define a distinct pressed state. | Add immediate, subtle pressed feedback consistent with existing controls, with movement suppressed for reduced motion. | The skill asks for clear press feedback. Use the established system rather than automatically applying scale to every link. |

## Preserve and reconcile

| Before | After | Why |
| --- | --- | --- |
| Documented header fade (560ms), homepage entrance (1000ms), project zoom (550ms), and label movement (450ms). | Preserve pending a deliberate design-system change. | The skill’s general under-300ms guidance conflicts with explicitly approved portfolio motion. These are not automatically defects. |
| Project and reading artwork animate on keyboard focus. | Preserve the documented project behavior; consider instantaneous artwork feedback separately if desired. | The skill’s blanket ban on keyboard animation conflicts with the current project-focus contract. |
| Content-owned ticket paper, vinyl, book depth, audio glass, and map presentation. | Keep these local visual systems. | Their colors, shadows, and slower physical movement have content purpose. Generic UI rules should not flatten them. |
| Homepage project labels reveal on hover/focus. | Keep the current visibility contract. | Persistent labels would change the approved design rather than repair an implementation issue. |

## Existing strengths

- Canonical semantic tokens include light/dark values, and their generated documentation is synchronized.
- Homepage work cards gate hover, retain native touch navigation, and suppress artwork movement for reduced motion.
- Reading hover is gated to fine hover-capable input.
- Banner playback decodes replacement frames, uses sequential scheduling, pauses in hidden tabs, and begins paused for reduced motion.
- PechaKucha uses a native modal dialog, restores focus, decodes images, handles failures with retry, and respects reduced motion for scrolling.
- No `transition: all`, zero-scale entrances, or obvious ease-in-only UI transitions were found in the authored CSS scan.

## Verification and implementation order

`npm run tokens:check` and `npm run patterns:check` both passed. No website source was changed for this review.

Address ticket semantics first, then motion/input handling and state accessibility, then audio feedback. Profile the progress/layer suggestions before treating them as performance fixes. Before shipping implementation changes, run the production build and relevant pattern checks, then verify keyboard navigation, touch interaction, light/dark themes, and reduced motion at mobile and desktop widths. Browser frame timing, physical-device behavior, and screen-reader announcements remain unverified in this source audit.
