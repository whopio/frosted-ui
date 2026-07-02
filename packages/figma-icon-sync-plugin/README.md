# Frosted UI — Icon Sync (Figma plugin)

A Figma plugin that inspects the **Icons** page of the [Frosted Design System file](https://www.figma.com/design/pWs6edprYZNR54ZPwk0oRV/) and verifies icon naming/size conventions before they get synced into `@frosted-ui/icons`.

> **Status:** validation only. Kicking off the sync from the plugin (the "Run icon sync" button) has been removed for now and will be added back later once we settle on a secure way to trigger it (see [Roadmap](#roadmap)). Today, run the sync the usual way (the `Sync Icons from Figma` GitHub Action, or `pnpm generate-src` locally).

## What it does

- **Detects icons** using the same rules as the generator (`packages/generate-icon-lib`): it finds the page whose name normalizes to `icons`/`producticons`, collects every `COMPONENT_SET` inside a frame named exactly `Icons`, and treats the parent frame's name as the icon's category.
- **Verifies conventions** and surfaces errors (blocking) and warnings:
  - **No duplicate names** — two component sets that would generate the same component (grouped by kebab-cased base name).
  - **Names valid** — no numbers in names (digits collide with the size suffix, `Shop16`), no empty names, and correct `Bold Filled` (never `Filled Bold`) modifier order.
  - **Valid sizes** — every variant must be named exactly `size=N` with `N ∈ {12, 16, 20, 24, 32}`, no duplicate sizes per icon, and the full size set present.
  - Warnings (non-blocking): variant dimensions that don't match the declared size, and component sets sitting outside an `Icons` frame (which the generator will skip).
- **Diffs against the last release** — fetches the manifest from the latest npm release of `@frosted-ui/icons` (via jsDelivr) and shows which icons were **added** and **removed** since then. Added chips are clickable to jump to the node.
- Clicking any issue selects and zooms to the offending node in the canvas.

The plugin makes no authenticated requests — the only network call is a read-only fetch of the published manifest from jsDelivr.

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

## Roadmap

- **Trigger the sync from the plugin.** Removed for now because dispatching the GitHub Action from a client requires a credential, and a client-side token can't be scoped to a single workflow. The planned secure approach is a small backend "broker" that holds the secret server-side, authenticates the requesting designer against an allowlist, and triggers only the icon-sync workflow — optionally paired with a GitHub Environment required-reviewers gate so every run needs a trusted approval.

## Notes

- The `id` in `manifest.json` is a placeholder for local development. Figma assigns a real id when the plugin is published to the org.
- Detection logic intentionally mirrors `getIcons()` / `getIconsPage()` in `packages/generate-icon-lib/src/services.ts`. If the Figma structure or allowed sizes change there, update `ALLOWED_SIZES` and the traversal in `src/code.ts` to match.
