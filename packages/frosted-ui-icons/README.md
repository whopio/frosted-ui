# Frosted UI Icons

A set of icons designed by the [Whop](https://whop.com/) team.

---

## Documentation

All icons are available as individual React components. Each icon may come in multiple sizes.

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
