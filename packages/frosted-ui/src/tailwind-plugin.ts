// Forked from https://github.com/needim/frosted-ui-themes-with-tailwind
import * as colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';
import {
  semanticColors,
  themeAccentColorsGrouped,
  themeGrayColorsGrouped,
} from './theme-options';

export const accentColorNames: string[] = [];
export const grayColorNames: string[] = [];

const frostedColorScales = 12;
type FrostedColorScales = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

themeAccentColorsGrouped.map((group) => {
  accentColorNames.push(...group.values.filter((color) => color !== 'gray'));
});

themeGrayColorsGrouped.map((group) => {
  grayColorNames.push(...group.values.filter((color) => color !== 'auto'));
});

export function getColorTokenName(
  number: FrostedColorScales,
  alpha?: boolean,
): number | string {
  return alpha ? 'a' + number : number;
}

export const getColorDefinitions = (color: string, alpha?: boolean) => {
  const colors = Array.from(Array(frostedColorScales).keys()).reduce(
    (acc, _, i) => {
      acc[getColorTokenName((i + 1) as FrostedColorScales, alpha)] =
        `var(--${color}-${alpha ? 'a' : ''}${i + 1})`;
      return acc;
    },
    {} as Record<string, string>,
  );

  if (!alpha) {
    colors[`${getColorTokenName(9, alpha)}-contrast`] =
      `var(--${color}-9-contrast)`;
    colors['surface'] = `var(--${color}-surface)`;
    colors['DEFAULT'] = `var(--${color}-9)`;
    if (color === 'accent') {
      colors['surface'] = `var(--color-surface-accent)`;
    }
  }

  return colors;
};

export const frostedThemePlugin = plugin.withOptions(
  () => {
    // TODO: make sure font styles are in sync with Text and Heading style
    return ({ addBase }) => {
      addBase({
        '*': {
          outlineColor: 'currentColor',
        },
        'html, body': {
          height: '100%',
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
        },
      });
    };
  },
  () => {
    function generateTailwindColors(colorName: string) {
      const c = {
        ...getColorDefinitions(colorName, false),
        ...getColorDefinitions(colorName, true),
      };

      if (grayColorNames.includes(colorName)) {
        c[`${getColorTokenName(2, false)}-translucent`] =
          `var(--${colorName}-2-translucent)`;
      }

      return c;
    }

    const allFrostedColors = [
      ...accentColorNames,
      ...semanticColors,
      ...grayColorNames,
    ].reduce<Record<string, Record<string, string>>>((acc, colorName) => {
      acc[colorName] = { ...generateTailwindColors(colorName) };
      return acc;
    }, {});

    return {
      darkMode: 'class',
      theme: {
        screens: {
          xs: '520px',
          sm: '768px',
          md: '1024px',
          lg: '1280px',
          xl: '1640px',
        },
        fontSize: {
          1: 'var(--font-size-1)',
          2: 'var(--font-size-2)',
          3: 'var(--font-size-3)',
          4: 'var(--font-size-4)',
          5: 'var(--font-size-5)',
          6: 'var(--font-size-6)',
          7: 'var(--font-size-7)',
          8: 'var(--font-size-8)',
          9: 'var(--font-size-9)',
        },
        lineHeight: {
          1: 'var(--line-height-1)',
          2: 'var(--line-height-2)',
          3: 'var(--line-height-3)',
          4: 'var(--line-height-4)',
          5: 'var(--line-height-5)',
          6: 'var(--line-height-6)',
          7: 'var(--line-height-7)',
          8: 'var(--line-height-8)',
          9: 'var(--line-height-9)',
          none: '1',
          tight: '1.25',
          snug: '1.375',
          normal: '1.5',
          relaxed: '1.625',
          loose: '2',
        },
        fontFamily: {
          sans: 'var(--default-font-family)',
          strong: 'var(--strong-font-family)',
          heading: 'var(--heading-font-family)',
          code: 'var(--code-font-family)',
          em: 'var(--em-font-family)',
          quote: 'var(--quote-font-family)',
        },
        letterSpacing: {
          1: 'var(--letter-spacing-1)',
          2: 'var(--letter-spacing-2)',
          3: 'var(--letter-spacing-3)',
          4: 'var(--letter-spacing-4)',
          5: 'var(--letter-spacing-5)',
          6: 'var(--letter-spacing-6)',
          7: 'var(--letter-spacing-7)',
          8: 'var(--letter-spacing-8)',
          9: 'var(--letter-spacing-9)',
          tighter: '-0.05em',
          tight: '-0.025em',
          normal: '0',
          wide: '0.025em',
          wider: '0.05em',
          widest: '0.1em',
        },
        fontWeight: {
          thin: '100',
          extralight: '200',
          light: 'var(--font-weight-light)',
          normal: 'var(--font-weight-regular)',
          medium: 'var(--font-weight-medium)',
          semibold: '600',
          bold: 'var(--font-weight-bold)',
          extrabold: '800',
          black: '900',
        },
        colors: {
          inherit: 'inherit',
          transparent: 'transparent',
          current: 'currentColor',
          white: colors.white,
          black: colors.black,
          background: 'var(--color-background)',
          surface: {
            DEFAULT: 'var(--color-surface)',
            accent: 'var(--color-surface-accent)',
          },
          overlay: 'var(--color-overlay)',
          panel: {
            solid: 'var(--color-panel-solid)',
            translucent: 'var(--color-panel-translucent)',
            // panel-elevation
            'elevation-a1': 'var(--color-panel-elevation-a1)',
            'elevation-a2': 'var(--color-panel-elevation-a2)',
            'elevation-a3': 'var(--color-panel-elevation-a3)',
            'elevation-a4': 'var(--color-panel-elevation-a4)',
            'elevation-a5': 'var(--color-panel-elevation-a5)',
            'elevation-a6': 'var(--color-panel-elevation-a6)',
            'elevation-a7': 'var(--color-panel-elevation-a7)',
            'elevation-a8': 'var(--color-panel-elevation-a8)',
            'elevation-a9': 'var(--color-panel-elevation-a9)',
            'elevation-a10': 'var(--color-panel-elevation-a10)',
            'elevation-a11': 'var(--color-panel-elevation-a11)',
            'elevation-a12': 'var(--color-panel-elevation-a12)',
          },
          // white
          'white-a1': 'var(--white-a1)',
          'white-a2': 'var(--white-a2)',
          'white-a3': 'var(--white-a3)',
          'white-a4': 'var(--white-a4)',
          'white-a5': 'var(--white-a5)',
          'white-a6': 'var(--white-a6)',
          'white-a7': 'var(--white-a7)',
          'white-a8': 'var(--white-a8)',
          'white-a9': 'var(--white-a9)',
          'white-a10': 'var(--white-a10)',
          'white-a11': 'var(--white-a11)',
          'white-a12': 'var(--white-a12)',
          // black
          'black-a1': 'var(--black-a1)',
          'black-a2': 'var(--black-a2)',
          'black-a3': 'var(--black-a3)',
          'black-a4': 'var(--black-a4)',
          'black-a5': 'var(--black-a5)',
          'black-a6': 'var(--black-a6)',
          'black-a7': 'var(--black-a7)',
          'black-a8': 'var(--black-a8)',
          'black-a9': 'var(--black-a9)',
          'black-a10': 'var(--black-a10)',
          'black-a11': 'var(--black-a11)',
          'black-a12': 'var(--black-a12)',
          selection: 'var(--color-selection-root)',
          ...allFrostedColors,
          accent: generateTailwindColors('accent'),
          gray: generateTailwindColors('gray'),
        },
      },
    };
  },
);
