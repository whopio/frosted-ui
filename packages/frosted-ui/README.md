# Welcome to Frosted UI

Frosted is the design system used and and built by [Whop](https://whop.com).

The system is built using:

- Tailwind CSS
- React + Typescript
- Framer Motion
- Radix UI

## Getting Started

If your project uses React and Tailwind, you can use Frosted!! To get started, install the package:

```zsh
pnpm add @whop/frosted-ui
```

Then wrap your app in the `TooltipProvider` component and add the Toaster as well:

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
