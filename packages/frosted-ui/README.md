<h1 align="center">Frosted UI</h1>

<p align="center">Design system used by <a href="https://whop.com/">Whop</a></p>

<h3 align="center">
  <a href="https://storybook.whop.dev/">Storybook</a> -
  <a href="https://www.figma.com/design/pWs6edprYZNR54ZPwk0oRV">Figma UI kit</a> -
  <a href="https://github.com/whopio/frosted-ui/tree/main/packages/frosted-ui">Source code</a>
</h3>

> [!WARNING]
> The design system is still a work in progress so you can expect some breaking changes.

<img width="2270" height="1101" alt="Gray 1" src="https://github.com/user-attachments/assets/abb3b1ca-7445-4438-801c-80bc666b7c54" />

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

If your app uses `Tooltip`, also mount `TooltipProvider` at the root. It puts every tooltip in a shared delay group, so moving from one trigger to an adjacent one opens the tooltip instantly instead of waiting out the delay again:

```tsx
import { Theme, TooltipProvider } from 'frosted-ui';

<TooltipProvider>
  <Theme>
    <MyApp />
  </Theme>
</TooltipProvider>;
```

This stays opt-in and out of `Theme`. `TooltipProvider` is the only way to mount the delay group, and importing it does not include the tooltip popup.

### Emoji colors

`getColorForEmoji` and `emojiColorMap` live on their own subpath rather than the package root, because the generated lookup table is ~40 kB:

```tsx
import { getColorForEmoji } from 'frosted-ui/helpers/emoji-colors';

const color = getColorForEmoji('❤️') ?? 'gray';
```

## Guides

- [Setup steps](https://storybook.whop.dev/?path=/docs/guides-1-getting-started--docs)
- [Tailwind plugin](https://storybook.whop.dev/?path=/docs/guides-5-tailwind-plugin--docs)
- [Typography](https://storybook.whop.dev/?path=/docs/guides-2-typography--docs)
- [Color system](https://storybook.whop.dev/?path=/docs/guides-3-color--docs)
- [Breakpoints](https://storybook.whop.dev/?path=/docs/guides-4-breakpoints--docs)

## Acknowledgments

Frosted UI is heavily based on [Radix Themes](https://www.radix-ui.com/) design system and [Radix Icons](https://github.com/radix-ui/icons).
