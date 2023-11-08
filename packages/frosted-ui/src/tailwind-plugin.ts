// Forked from https://github.com/needim/radix-ui-themes-with-tailwind
import * as colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';
import {
  themeAccentColorsGrouped,
  themeAccentColorsOrdered,
  themeBNWColorsGrouped,
  themeGrayColorsGrouped,
} from './theme-options';

export const accentColorNames: string[] = [];
export const grayColorNames: string[] = [];
export const bnwColorNames: string[] = [];

const radixColorScales = 12;
type RadixColorScales = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

themeAccentColorsGrouped.map((group) => {
  accentColorNames.push(...group.values.filter((color) => color !== 'gray'));
});
themeGrayColorsGrouped.map((group) => {
  grayColorNames.push(...group.values.filter((color) => color !== 'auto'));
});
themeBNWColorsGrouped.map((group) => {
  grayColorNames.push(...group.values);
});

export function getColorTokenName(
  number: RadixColorScales,
  useTailwindColorNames?: boolean,
  alpha?: boolean,
): number | string {
  const map: Record<number, number> = {
    1: 25,
    2: 50,
    3: 100,
    4: 200,
    5: 300,
    6: 400,
    7: 500,
    8: 600,
    9: 700,
    10: 800,
    11: 900,
    12: 950,
  } as const;

  if (!useTailwindColorNames) {
    return alpha ? 'a' + number : number;
  }
  // TODO: this should be a lowercase prefix, not uppercase suffix
  return alpha ? (('a' + map[number]) as string) : (map[number] as number);
}

export const getColorDefinitions = (
  color: string,
  alpha?: boolean,
  useTailwindColorNames?: boolean,
) => {
  const colors = Array.from(Array(radixColorScales).keys()).reduce(
    (acc, _, i) => {
      acc[
        getColorTokenName(
          (i + 1) as RadixColorScales,
          useTailwindColorNames,
          alpha,
        )
      ] = `var(--${color}-${alpha ? 'a' : ''}${i + 1})`;
      return acc;
    },
    {} as Record<string, string>,
  );

  if (!alpha) {
    colors[
      `${getColorTokenName(9, useTailwindColorNames, alpha)}-contrast`
    ] = `var(--${color}-9-contrast)`;
    colors['surface'] = `var(--${color}-surface)`;
    colors['DEFAULT'] = `var(--${color}-9)`;
    if (color === 'accent') {
      colors['surface'] = `var(--color-surface-accent)`;
    }
  }

  return colors;
};

type RadixColors = Exclude<
  | (typeof themeAccentColorsOrdered)[number]
  | (typeof themeGrayColorsGrouped)[0]['values'][number],
  'auto'
>;

export const tailwindColorsToRadixMap: Record<
  'zinc' | 'neutral' | 'stone' | 'emerald' | 'fuchsia' | 'rose',
  RadixColors | Record<string, string>
> = {
  zinc: 'sand',
  neutral: 'sage',
  stone: 'sand',
  emerald: 'grass',
  fuchsia: 'plum',
  rose: 'crimson',
};

const radixRadiusToTailwindMap = {
  1: 'xxs',
  2: 'xs',
  3: 'sm',
  4: 'md',
  5: 'lg',
  6: 'xl',
} as const;

export function getRadiusTokenName(
  radius: keyof typeof radixRadiusToTailwindMap,
  useTailwindColorNames?: boolean,
): string | number {
  return useTailwindColorNames ? radixRadiusToTailwindMap[radius] : radius;
}

export type RadixThemePluginOptions = {
  useTailwindColorNames?: boolean;
  useTailwindRadiusNames?: boolean;
  mapMissingTailwindColors?: boolean | Partial<typeof tailwindColorsToRadixMap>;
};

export const radixThemePlugin = plugin.withOptions(
  // eslint-disable-next-line no-empty-pattern
  ({}: RadixThemePluginOptions) => {
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
        em: {
          fontFamily: 'var(--em-font-family)',
          fontWeight: 'var(--em-font-weight)',
          fontSize: 'calc(var(--em-font-size-adjust) * 1em)',
          fontStyle: 'var(--em-font-style)',
          lineHeight: '1.25',
          letterSpacing:
            'calc(var(--em-letter-spacing) + var(--letter-spacing, var(--default-letter-spacing)))',
        },
        h6: {
          fontFamily: 'var(--heading-font-family)',
          fontWeight: 'var(--font-weight-bold)',
          fontSize:
            'calc(var(--font-size-4) * var(--heading-font-size-adjust))',
          letterSpacing:
            'calc(var(--letter-spacing-4) + var(--heading-letter-spacing))',
          lineHeight: 'var(--heading-line-height-4)',
        },
        h5: {
          fontFamily: 'var(--heading-font-family)',
          fontWeight: 'var(--font-weight-bold)',
          fontSize:
            'calc(var(--font-size-5) * var(--heading-font-size-adjust))',
          letterSpacing:
            'calc(var(--letter-spacing-5) + var(--heading-letter-spacing))',
          lineHeight: 'var(--heading-line-height-5)',
        },
        h4: {
          fontFamily: 'var(--heading-font-family)',
          fontWeight: 'var(--font-weight-bold)',
          fontSize:
            'calc(var(--font-size-6) * var(--heading-font-size-adjust))',
          letterSpacing:
            'calc(var(--letter-spacing-6) + var(--heading-letter-spacing))',
          lineHeight: 'var(--heading-line-height-6)',
        },
        h3: {
          fontFamily: 'var(--heading-font-family)',
          fontWeight: 'var(--font-weight-bold)',
          fontSize:
            'calc(var(--font-size-7) * var(--heading-font-size-adjust))',
          letterSpacing:
            'calc(var(--letter-spacing-7) + var(--heading-letter-spacing))',
          lineHeight: 'var(--heading-line-height-7)',
        },
        h2: {
          fontFamily: 'var(--heading-font-family)',
          fontWeight: 'var(--font-weight-bold)',
          fontSize:
            'calc(var(--font-size-8) * var(--heading-font-size-adjust))',
          letterSpacing:
            'calc(var(--letter-spacing-8) + var(--heading-letter-spacing))',
          lineHeight: 'var(--heading-line-height-8)',
        },
        h1: {
          fontFamily: 'var(--heading-font-family)',
          fontWeight: 'var(--font-weight-bold)',
          fontSize:
            'calc(var(--font-size-9) * var(--heading-font-size-adjust))',
          letterSpacing:
            'calc(var(--letter-spacing-9) + var(--heading-letter-spacing))',
          lineHeight: 'var(--heading-line-height-9)',
        },
      });
    };
  },
  ({
    useTailwindColorNames = true,
    useTailwindRadiusNames = true,
    mapMissingTailwindColors = true,
  }: RadixThemePluginOptions) => {
    function generateTailwindColors(colorName: string) {
      const c = {
        ...getColorDefinitions(colorName, false, useTailwindColorNames),
        ...getColorDefinitions(colorName, true, useTailwindColorNames),
      };

      if (grayColorNames.includes(colorName)) {
        c[
          `${getColorTokenName(2, useTailwindColorNames, false)}-translucent`
        ] = `var(--${colorName}-2-translucent)`;
      }

      return c;
    }

    const allRadixColors = [
      ...accentColorNames,
      ...grayColorNames,
      ...grayColorNames,
    ].reduce<Record<string, Record<string, string>>>((acc, colorName) => {
      acc[colorName] = { ...generateTailwindColors(colorName) };
      return acc;
    }, {});

    let mappingsOfMissingTailwindColors = {};
    if (typeof mapMissingTailwindColors === 'boolean') {
      mappingsOfMissingTailwindColors = {
        zinc: generateTailwindColors('sand'),
        neutral: generateTailwindColors('sage'),
        stone: generateTailwindColors('mauve'),
        emerald: generateTailwindColors('grass'),
        fuchsia: generateTailwindColors('plum'),
        rose: generateTailwindColors('crimson'),
      };
    } else if (typeof mapMissingTailwindColors === 'object') {
      mappingsOfMissingTailwindColors = {
        zinc:
          typeof mapMissingTailwindColors['zinc'] === 'string'
            ? generateTailwindColors(mapMissingTailwindColors['zinc'])
            : mapMissingTailwindColors['zinc'],
        neutral:
          typeof mapMissingTailwindColors['neutral'] === 'string'
            ? generateTailwindColors(mapMissingTailwindColors['neutral'])
            : mapMissingTailwindColors['neutral'],
        stone:
          typeof mapMissingTailwindColors['stone'] === 'string'
            ? generateTailwindColors(mapMissingTailwindColors['stone'])
            : mapMissingTailwindColors['stone'],
        emerald:
          typeof mapMissingTailwindColors['emerald'] === 'string'
            ? generateTailwindColors(mapMissingTailwindColors['emerald'])
            : mapMissingTailwindColors['emerald'],
        fuchsia:
          typeof mapMissingTailwindColors['fuchsia'] === 'string'
            ? generateTailwindColors(mapMissingTailwindColors['fuchsia'])
            : mapMissingTailwindColors['fuchsia'],
        rose:
          typeof mapMissingTailwindColors['rose'] === 'string'
            ? generateTailwindColors(mapMissingTailwindColors['rose'])
            : mapMissingTailwindColors['rose'],
      };
    }

    return {
      darkMode: 'class',
      theme: {
        fontSize: {
          xs: [
            'var(--font-size-1)',
            {
              letterSpacing: 'var(--letter-spacing-1)',
              lineHeight: 'var(--line-height-1)',
            },
          ],
          sm: [
            'var(--font-size-2)',
            {
              letterSpacing: 'var(--letter-spacing-2)',
              lineHeight: 'var(--line-height-2)',
            },
          ],
          base: [
            'var(--font-size-3)',
            {
              letterSpacing: 'var(--letter-spacing-3)',
              lineHeight: 'var(--line-height-3)',
            },
          ],
          lg: [
            'var(--font-size-4)',
            {
              letterSpacing: 'var(--letter-spacing-4)',
              lineHeight: 'var(--line-height-4)',
            },
          ],
          xl: [
            'var(--font-size-5)',
            {
              letterSpacing: 'var(--letter-spacing-5)',
              lineHeight: 'var(--line-height-5)',
            },
          ],
          '2xl': [
            'var(--font-size-6)',
            {
              letterSpacing: 'var(--letter-spacing-6)',
              lineHeight: 'var(--line-height-6)',
            },
          ],
          '3xl': [
            'var(--font-size-7)',
            {
              letterSpacing: 'var(--letter-spacing-7)',
              lineHeight: 'var(--line-height-7)',
            },
          ],
          '4xl': [
            'var(--font-size-8)',
            {
              letterSpacing: 'var(--letter-spacing-8)',
              lineHeight: 'var(--line-height-8)',
            },
          ],
          '5xl': [
            'var(--font-size-9)',
            {
              letterSpacing: 'var(--letter-spacing-9)',
              lineHeight: 'var(--line-height-9)',
            },
          ],
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
        spacing: {
          '0': '0px',
          px: '1px',
          '0.5': 'calc(2px * var(--scaling))',
          '1': 'var(--space-1)',
          '1.5': 'calc(6px * var(--scaling))',
          '2': 'var(--space-2)',
          '2.5': 'calc(10px * var(--scaling))',
          '3': 'var(--space-3)',
          '3.5': 'calc(14px * var(--scaling))',
          '4': 'var(--space-4)',
          '5': 'calc(20px * var(--scaling))',
          '6': 'var(--space-5)',
          '7': 'calc(28px * var(--scaling))',
          '8': 'var(--space-6)',
          '9': 'calc(36px * var(--scaling))',
          '10': 'var(--space-7)',
          '11': 'calc(44px * var(--scaling))',
          '12': 'var(--space-8)',
          '14': 'calc(56px * var(--scaling))',
          '16': 'var(--space-9)',
          '20': 'calc(80px * var(--scaling))',
          '24': 'calc(96px * var(--scaling))',
          '28': 'calc(112px * var(--scaling))',
          '32': 'calc(128px * var(--scaling))',
          '36': 'calc(144px * var(--scaling))',
          '40': 'calc(160px * var(--scaling))',
          '44': 'calc(176px * var(--scaling))',
          '48': 'calc(192px * var(--scaling))',
          '52': 'calc(208px * var(--scaling))',
          '56': 'calc(224px * var(--scaling))',
          '60': 'calc(240px * var(--scaling))',
          '64': 'calc(256px * var(--scaling))',
          '72': 'calc(288px * var(--scaling))',
          '80': 'calc(320px * var(--scaling))',
          '96': 'calc(384px * var(--scaling))',
        },
        borderRadius: {
          none: '0px',
          [getRadiusTokenName(1, useTailwindRadiusNames)]: 'var(--radius-1)',
          [getRadiusTokenName(2, useTailwindRadiusNames)]: 'var(--radius-2)',
          [getRadiusTokenName(3, useTailwindRadiusNames)]: 'var(--radius-3)',
          DEFAULT: 'var(--radius-3)',
          [getRadiusTokenName(4, useTailwindRadiusNames)]: 'var(--radius-4)',
          [getRadiusTokenName(5, useTailwindRadiusNames)]: 'var(--radius-5)',
          [getRadiusTokenName(6, useTailwindRadiusNames)]: 'var(--radius-6)',
          full: '99999px',
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
          },
          selection: 'var(--color-selection-root)',
          ...allRadixColors,
          ...mappingsOfMissingTailwindColors,
          accent: generateTailwindColors('accent'),
          gray: generateTailwindColors('gray'),
        },
      },
    };
  },
);
