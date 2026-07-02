# Frosted UI — Icon Sync (Figma plugin)

A Figma plugin that inspects the **Icons** page of the [Frosted Design System file](https://www.figma.com/design/pWs6edprYZNR54ZPwk0oRV/), verifies icon naming/size conventions, and — once everything passes — triggers the [`Sync Icons from Figma`](../../.github/workflows/sync-icons.yml) GitHub Action that regenerates `@frosted-ui/icons` and opens a PR.

It replaces the manual "clean git tree → `pnpm generate-src` → open PR" loop with a one-click flow from inside Figma.

## What it does

- **Detects icons** using the same rules as the generator (`packages/generate-icon-lib`): it finds the page whose name normalizes to `icons`/`producticons`, collects every `COMPONENT_SET` inside a frame named exactly `Icons`, and treats the parent frame's name as the icon's category.
- **Verifies conventions** and blocks the sync on any error:
  - **No duplicate names** — two component sets that would generate the same component (grouped by kebab-cased base name).
  - **No numbers in names** — digits collide with the size suffix (`Shop16`) and break downstream name parsing.
  - **Valid sizes** — every variant must be named `size=N` with `N ∈ {12, 16, 20, 24, 32}`.
  - Warnings (non-blocking): variant dimensions that don't match the declared size, and component sets sitting outside an `Icons` frame (which the generator will skip).
- **Triggers the workflow** via the GitHub REST API (`workflow_dispatch` on `whopio/frosted-ui`).
- Clicking any issue selects and zooms to the offending node in the canvas.

## Build

```bash
pnpm --filter="@frosted-ui/figma-icon-sync-plugin" build
# or, while iterating:
pnpm --filter="@frosted-ui/figma-icon-sync-plugin" dev
```

This produces `dist/code.js` and `dist/ui.html`, which `manifest.json` points to.

## Load into Figma

1. Build the plugin (above).
2. In the Figma desktop app: **Plugins → Development → Import plugin from manifest…**
3. Select `packages/figma-icon-sync-plugin/manifest.json`.
4. Open the Frosted Design System file, then run **Plugins → Development → Frosted UI — Icon Sync**.

## GitHub token

Triggering the workflow requires a token with permission to dispatch workflows on `whopio/frosted-ui`:

- **Fine-grained PAT** with **Actions: Read and write** (and Contents: Read) on `whopio/frosted-ui`, or
- a classic PAT with the `repo` / `workflow` scopes.

Paste it into the **GitHub token** section of the plugin. It is stored locally via `figma.clientStorage` (per user, per machine) and sent only to `https://api.github.com`.

## Notes

- The `id` in `manifest.json` is a placeholder for local development. Figma assigns a real id when the plugin is published to the org.
- Detection logic intentionally mirrors `getIcons()` / `getIconsPage()` in `packages/generate-icon-lib/src/services.ts`. If the Figma structure or allowed sizes change there, update `ALLOWED_SIZES` and the traversal in `src/code.ts` to match.
