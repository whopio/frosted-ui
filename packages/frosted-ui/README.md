<h1 align="center">Frosted UI</h1>

<p align="center">Design system used by <a href="https://whop.com/">Whop</a></p>

<h3 align="center">
  <a href="https://storybook.whop.dev/">Storybook</a> -
  <a href="https://www.figma.com/design/JoDwTV19wxmaK3iv5NLa0Z">Figma UI kit</a> -
  <a href="https://github.com/whopio/frosted-ui/tree/main/packages/frosted-ui">Source code</a>
</h3>

> [!WARNING]
> The design system is still a work in progress so you can expect some breaking changes.

![Screenshot 2023-12-07 at 13 11 26](https://github.com/whopio/frosted-ui-v2/assets/28541613/8a0d694e-e7f8-40bc-a672-f0a617053271)

## Getting Started

Install Frosted UI:

```sh
$ pnpm add frosted-ui
```

Import the global CSS file at the root of your application:

```tsx
import 'frosted-ui/styles.css';
```

Add the Theme component:

```tsx
import { Theme } from 'frosted-ui';

export default function () {
  return (
    <html>
      <body>
        <Theme>
          <MyApp />
        </Theme>
      </body>
    </html>
  );
}
```

## Guides

- [Setup steps](https://storybook.whop.dev/?path=/docs/guides-1-getting-started--docs)
- [Typography](https://storybook.whop.dev/?path=/docs/guides-2-typography--docs)
- [Color system](https://storybook.whop.dev/?path=/docs/guides-3-color--docs)
- [Breakpoints](https://storybook.whop.dev/?path=/docs/guides-4-breakpoints--docs)
- [Tailwind plugin](https://storybook.whop.dev/?path=/docs/guides-5-tailwind-plugin--docs)

## Acknowledgments

Frosted UI is heavily based on [Radix Themes](https://www.radix-ui.com/) design system and [Radix Icons](https://github.com/radix-ui/icons).
