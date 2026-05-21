# generate-icon-lib

## Usage

```shell
generate-icon-lib [--file=<figma-file-key>] [--type=icons|pictograms]
```

Both modes pull from the same Figma file by default — the [Frosted Design System](https://www.figma.com/design/pWs6edprYZNR54ZPwk0oRV/) (`pWs6edprYZNR54ZPwk0oRV`) — which hosts icons and pictograms on separate pages.

The CLI has two modes, controlled by `--type`:

- `--type=icons` (default) — pulls monochromatic UI icons. Looks for a page named `Icons`. Generated components live in `src/`, raw SVGs in `icons/`, and the manifest is `manifest.json`. Fills/strokes are rewritten to `currentColor`.
- `--type=pictograms` — pulls colorful pictograms. Looks for a page named `Pictograms` (or any page containing a top-level `Pictogram` component-set/frame) whose variants use `pictogram=…, background=Light|Dark|Orange`. Generated components live in `src/pictograms/`, raw SVGs in `pictograms/`, and the manifest is `pictograms-manifest.json`. Original colors are preserved (no `currentColor` rewriting). All three background variants of a pictogram collapse into one component selected by a `variant?: 'auto' | 'light' | 'dark' | 'orange'` prop (e.g. `<ConePictogram variant="dark" />`).

If `--file` is omitted, the default Figma file is used. The two modes are designed to coexist in the same package without clobbering each other's outputs.

_The `figma-file-key` can be sourced from the link to a Figma document:_

- `https://www.figma.com/design/<figma-file-key>/...`
- `https://www.figma.com/file/<figma-file-key>/...`

### Authentication with Figma

Go to your Account Settings in Figma to create a Personal Access Token.

This can be provided to `generate-icon-lib` via the `FIGMA_ACCESS_TOKEN` environment variable.

Create an `.env` file an intended directory for easy reuse:

```shell
echo "FIGMA_ACCESS_TOKEN=<token>" >> packages/frosted-ui-icons/.env
```

## Future

- [ ] Support importing from Sketch
- [ ] Support importing from a directory of SVGs
- [ ] Allow the CLI to re-run on existing SVGs in a package ie. after changing the React component template
- [ ] Publish the `generate-icon-lib` CLI Tool for public use

## License

Licensed under the MIT License, Copyright © 2022-present WorkOS.

See [LICENSE](./LICENSE.md) for more information.
