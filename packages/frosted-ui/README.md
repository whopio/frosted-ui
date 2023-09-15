# Welcome to Frosted UI

Frosted is the design system used and and built by [Whop](https://whop.com). 

## Getting Started

### Prerequisites

- [React](https://reactjs.org/docs/getting-started.html) installed
- [Tailwind CSS](https://tailwindcss.com/docs/installation) installed and configured
- [Font Awesome](https://fontawesome.com/docs/web/setup/packages#_1-configure-access) access configured (Only free license required)

### Installation

Install package:
```zsh
npm i @whop/frosted-ui
```

Configure your `tailwind.config.ts` to use the Frosted UI theme by wrapping your config with `preset`:

```ts
import preset from '@whop/frosted-ui/dist/preset';

const config = preset({
  // your config here
});

export default config;
```

Wrap your app in the `TooltipProvider` component and add the `Toaster` as well:

> _**Note:** this example is in Next.js but you can wrap the root of any React project._

```tsx
import { TooltipProvider, Toaster } from '@whop/frosted-ui';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TooltipProvider>
      <Component {...pageProps} />
      <Toaster />
    </TooltipProvider>
  );
}
```

That's it! You're ready to use Frosted UI. Checkout the [documentation](https://storybook.whop.com) for more information about the components.