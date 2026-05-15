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

1. The primary page must be named "Pictograms" (a leading emoji prefix is allowed)
2. Each pictogram must be a Figma component with two variant properties: `pictogram` (e.g. `Cone`, `GradCap`) and `background` (`Light`, `Dark`, or `Orange`)
3. Variant names must follow Figma's standard `pictogram=Cone, background=Light` format
4. The generated component name is `${Pictogram}${Background}Pictogram` (e.g. `ConeLightPictogram`)
5. Pictogram colors are preserved as-is — fills/strokes are NOT rewritten to `currentColor`

#### React Component

Have a look in `packages/generate-icon-lib/src/templates` for the templating code that affects the components created by `pnpm generate-src` (`named-icon.tsx.ejs`) and `pnpm generate-pictograms` (`pictogram.tsx.ejs`).

Makes changes to the CLI, then re-run the relevant generator, then open a PR. Try to keep commits separated between the CLI and files created in this package.

_At the time of writing, the CLI can not rerun on existing SVGs, and will instead pull down the latest SVGs from the Figma file._
