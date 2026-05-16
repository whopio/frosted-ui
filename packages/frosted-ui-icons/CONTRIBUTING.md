## Contributing

**To run the generators you'll need to:**

1. Generate a personal Figma access token
2. Add it to an `.env` file under the `FIGMA_ACCESS_TOKEN` var.

Further instructions can be found in the readme for `generate-icon-lib`.

Available scripts:

- `pnpm generate-src` — sync monochromatic UI icons from the Frosted Design System Figma file
- `pnpm generate-pictograms` — sync colorful pictograms from the Pictograms Figma file
- `pnpm generate-all` — run both, in order

#### Vector Icons

Access the [Figma file](https://www.figma.com/design/JoDwTV19wxmaK3iv5NLa0Z/), make changes, then run `pnpm generate-src` and open a PR.

There are a couple things to keep in mind when making changes:

1. The primary page must be named "Icons" (a leading emoji such as "🚻 Icons" is allowed)
2. Naming convention for top-level frames inform `type` and `size` groupings
3. The `type` and `size` of the last top-level frame becomes the default values for the React Component

_The [Figma file][figmafile] should contain additional guidelines for making changes._

#### Pictograms

Access the [Pictograms Figma file](https://www.figma.com/design/RHQS3pFnkHQE7lAbYmnRSa/), make changes, then run `pnpm generate-pictograms` and open a PR.

There are a couple things to keep in mind when making changes:

1. The primary page must be named "Pictograms" (a leading emoji prefix is allowed). The generator also accepts any page that contains a top-level `Pictogram` component-set / frame.
2. Each pictogram must be a Figma component with two variant properties: `pictogram` (e.g. `Cone`, `GradCap`) and `background` (`Light`, `Dark`, or `Orange`)
3. Variant names must follow Figma's standard `pictogram=Cone, background=Light` format
4. The generated component name is `${Pictogram}Pictogram` (e.g. `ConePictogram`) and selecting a background is done via the `variant` prop: `<ConePictogram variant="dark" />` (defaults to `'auto'`, which uses CSS `light-dark()` to follow the page's color scheme)
5. Pictogram colors are preserved as-is — fills/strokes are NOT rewritten to `currentColor`
6. **Keep variant geometry aligned.** The generator merges the three backgrounds into a single component by sharing geometry and only swapping fill colors. For that to work, every `path` must have the same `d` (and the same set of paths) across all three backgrounds. If a pictogram's variants drift apart in Figma (e.g. one background has an extra detail path), the generator will warn and fall back to inlining each variant's full SVG body — which works but produces a larger component, AND breaks `variant="auto"` for that pictogram (it will render the `light` body in both light and dark color schemes). Re-aligning the variants in Figma will collapse it back to a single merged body and re-enable full auto support automatically on the next generation.

#### React Component

Have a look in `packages/generate-icon-lib/src/templates` for the templating code that drives the generators:

- `named-icon.tsx.ejs` — used by `pnpm generate-src`
- `pictogram-merged.tsx.ejs` — used by `pnpm generate-pictograms` for pictograms whose background variants share geometry (the typical case)
- `pictogram-switched.tsx.ejs` — used by `pnpm generate-pictograms` as a fallback for pictograms whose backgrounds have differing geometry
- `pictogram-types.tsx` — emits the shared `PictogramProps` / `PictogramVariant` types

Makes changes to the CLI, then re-run the relevant generator, then open a PR. Try to keep commits separated between the CLI and files created in this package.

_At the time of writing, the CLI can not rerun on existing SVGs, and will instead pull down the latest SVGs from the Figma file._
