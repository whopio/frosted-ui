## Contributing

**To run `pnpm generate-src` you'll need to:**

1. Generate a personal Figma access token
2. Add it to an `.env` file under the `FIGMA_ACCESS_TOKEN` var.

Further instructions can be found in the readme for `generate-icon-lib`.

#### Vector Icons

Access the [Figma file](https://www.figma.com/file/fxRLy35tq3pm2zNy5lAFfL/), make changes, then run `pnpm generate-src` and open a PR.

There are a couple things to keep in mind when making changes:

1. Name for the primary page should remain "Icons"
2. Naming convention for top-level frames inform `type` and `size` groupings
3. The `type` and `size` of the last top-level frame becomes the default values for the React Component

_The [Figma file][figmafile] should contain additional guidelines for making changes._

#### React Component

Have a look in `packages/generate-icon-lib/src/templates` for the templating code that affects the components created by running `pnpm generate-src`.

Makes changes to the CLI, then re-run `pnpm generate-src`, then open a PR. Try to keep commits separated between the CLI and files created in this package.

_At the time of writing, the CLI can not rerun on existing SVGs, and will instead pull down the latest SVGs from the Figma file._
