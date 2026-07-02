# Frosted UI — Icon Sync (Figma plugin)

A Figma plugin that inspects the **Icons** page of the [Frosted Design System file](https://www.figma.com/design/pWs6edprYZNR54ZPwk0oRV/), verifies icon naming/size conventions, and — once everything passes — sends you to GitHub to run the sync.

> **How the sync works (no tokens):** the plugin never holds a credential. When validation passes it enables an **Open sync on GitHub** button that opens the [`Sync Icons from Figma`](../../.github/workflows/sync-icons.yml) workflow page in your browser, where you press GitHub's own **Run workflow** button. Auth and "who's allowed" are handled entirely by GitHub's login and repo permissions.

## What it does

- **Detects icons** using the same rules as the generator (`packages/generate-icon-lib`): it finds the page whose name normalizes to `icons`/`producticons`, collects every `COMPONENT_SET` inside a frame named exactly `Icons`, and treats the parent frame's name as the icon's category.
- **Verifies conventions** and surfaces errors (blocking) and warnings:
  - **No duplicate names** — two component sets that would generate the same component (grouped by kebab-cased base name).
  - **Names valid** — no numbers in names (digits collide with the size suffix, `Shop16`), no empty names, and correct `Bold Filled` (never `Filled Bold`) modifier order.
  - **Valid sizes** — every variant must be named exactly `size=N` with `N ∈ {12, 16, 20, 24, 32}`, no duplicate sizes per icon, and the full size set present.
  - Warnings (non-blocking): variant dimensions that don't match the declared size, and component sets sitting outside an `Icons` frame (which the generator will skip).
- **Diffs against the last release** — fetches the manifest from the latest npm release of `@frosted-ui/icons` (via jsDelivr) and shows which icons were **added** and **removed** since then. Added chips are clickable to jump to the node.
- **Opens the sync on GitHub** — when there are no errors, the **Open sync on GitHub** button opens the workflow's Actions page in your browser so you can run it. No token is stored or sent by the plugin.
- Clicking any issue selects and zooms to the offending node in the canvas.

The plugin makes no authenticated requests — the only network call is a read-only fetch of the published manifest from jsDelivr, and the sync button just opens a github.com URL in the browser.

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

- **One-click sync inside Figma.** The current flow hands off to GitHub for the final "Run workflow" click (no tokens, safest). A future upgrade could keep the whole flow in Figma via "Sign in with GitHub" (GitHub App device flow → short-lived, narrowly scoped token, no backend), optionally paired with a GitHub Environment required-reviewers gate so every run needs a trusted approval.

## Notes

- The `id` in `manifest.json` is a placeholder for local development. Figma assigns a real id when the plugin is published to the org.
- Detection logic intentionally mirrors `getIcons()` / `getIconsPage()` in `packages/generate-icon-lib/src/services.ts`. If the Figma structure or allowed sizes change there, update `ALLOWED_SIZES` and the traversal in `src/code.ts` to match.
