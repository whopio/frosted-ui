# generate-icon-lib

## Usage

```shell
generate-icon-lib [--file=<figma-file-key>]
```

When run without `--file`, the CLI defaults to the [Frosted Design System](https://www.figma.com/design/JoDwTV19wxmaK3iv5NLa0Z/) Figma file (`JoDwTV19wxmaK3iv5NLa0Z`).

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
