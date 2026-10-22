# Project guidance

For all visual and front-end work, treat `docs/design-system.md` as the design baseline.

Treat `src/_/css/tokens.css` as the canonical source for exact design-token values. The design-system document governs their intent and use.

- Preserve its established typography, spacing, color, grid, shape, interaction, motion, accessibility, and content principles.
- Reuse existing patterns before introducing new ones.
- If a requested change conflicts with the design system, identify the conflict before proceeding.
- Update the design-system document when an approved change establishes or changes a reusable pattern.
- Keep project guidance and documentation outside `src/` unless it is intentionally meant to become part of the public website.

## Publishing and GitHub Actions

- GitHub Pages permits deployment only from `main`. Pushing a working branch saves changes to GitHub but does not publish them.
- When the user requests publication or deployment, fetch `origin` and inspect the working tree, outgoing commits, and full diff against `origin/main` before choosing how to publish. A branch may contain unrelated committed drafts as well as uncommitted work.
- Publish only the changes authorized by the user. If the branch contains unrelated work, apply the selected commits onto current `origin/main` in an isolated checkout; do not merge the entire branch or include drafts such as Savewise unless requested. Preserve the original working tree.
- Push the reviewed changes to `main` through the repository's permitted process. Its push event automatically starts `.github/workflows/pages.yml`. Do not manually dispatch the deployment workflow on a feature branch or weaken Pages environment protections to bypass the branch restriction.
- Inspect the Actions run for the exact published commit. A queued run, successful build, or successful R2 upload does not confirm publication: verify that the `deploy` job succeeds before reporting the site as deployed. If still running, report that status explicitly; if it fails, inspect the failure and resolve it within the authorized scope.
