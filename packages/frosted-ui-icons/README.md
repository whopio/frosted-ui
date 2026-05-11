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

## Configuring

### next.js

```js
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  modularizeImports: {
    '@frosted-ui/icons': {
      transform: '@frosted-ui/icons/{{member}}',
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
