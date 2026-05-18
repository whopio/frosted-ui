<h1 align="center">Frosted UI Icons</h1>

<p align="center">Icons used and designed by the <a href="https://whop.com/">Whop</a> team</p>

<h3 align="center">
  <a href="https://www.figma.com/design/JoDwTV19wxmaK3iv5NLa0Z">Figma file</a>
</h3>

<img width="1185" alt="Screenshot 2024-08-07 at 12 35 01" src="https://github.com/user-attachments/assets/bc38e63e-0d83-4ccc-8a7c-2f2dbf63c0fc">

## Documentation

All icons are available as individual React components. Each icon comes in `16`, `20`, `24` and `32` px size.

Install Frosted UI Icons from npm:

```bash
npm install @frosted-ui/icons
```

Import the icons into your React project:

```tsx
import { Shop16, Shop20 } from '@frosted-ui/icons';

function MyComponent() {
  return (
    <div>
      <Shop16 />
      <Shop20 />
    </div>
  );
}
```

### Pictograms

In addition to monochromatic UI icons, this package ships colorful pictograms sourced from the [Pictograms Figma file](https://www.figma.com/design/RHQS3pFnkHQE7lAbYmnRSa/). Each pictogram is published as a single React component that takes a `variant` prop selecting one of four background-color tunings: `'auto'` (the default), `'light'`, `'dark'`, or `'orange'`.

```tsx
import { ConePictogram, GradCapPictogram } from '@frosted-ui/icons';

function MyComponent() {
  return (
    <div>
      <ConePictogram /> {/* defaults to variant="auto" */}
      <ConePictogram variant="light" />
      <ConePictogram variant="dark" />
      <ConePictogram variant="orange" />
      <GradCapPictogram variant="auto" />
    </div>
  );
}
```

Pictograms preserve their original colors (no `currentColor` rewriting), so they don't accept a `color` prop. Other than `variant`, they accept all standard SVG props.

#### The `auto` variant

`variant="auto"` (the default) emits CSS [`light-dark()`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark) color values for every fill/stroke that differs between the `light` and `dark` variants. The browser then picks the right color based on the page's `color-scheme` — no React state, no media query listener, no hydration mismatch.

In a `frosted-ui` app this works without any wiring: the [`Theme`](../frosted-ui) component already sets `color-scheme: light | dark` on the root. In any other app you need a `color-scheme` declaration on a parent (e.g. `:root { color-scheme: light dark; }`) for the browser to know which arm to pick.

Browser support for `light-dark()` is Baseline since 2024 (Chrome 123, Safari 17.5, Firefox 120). In older browsers the `auto` variant falls back to no fill — pin the variant explicitly (`variant="light"`) if you need to support pre-2024 browsers.

#### How the variants are packed

Internally the generator collapses the three background variants into one component by sharing geometry and switching only the per-element `fill`/`stroke` colors based on `variant`. For the rare pictogram whose Figma variants don't share identical geometry, the component falls back to inlining each variant's SVG body — same `<NamePictogram variant="…" />` API either way. For those fallback pictograms, `variant="auto"` renders the `light` body in both light and dark color schemes.

## Configuring

### next.js

```js
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  modularizeImports: {
    '@frosted-ui/icons': {
      transform: {
        // Pictograms live under `pictograms/` in the built package.
        '*Pictogram': '@frosted-ui/icons/pictograms/{{member}}',
        '*': '@frosted-ui/icons/{{member}}',
      },
      skipDefaultConversion: true,
    },
  },
};

export default nextConfig;
```

## Contributing

Please follow our [contributing guidelines](./CONTRIBUTING.md).

## Acknowledgments

Frosted UI Icons library setup is based on [Radix Icons](https://github.com/radix-ui/icons).
