/* eslint-disable @typescript-eslint/no-var-requires */

import type { AccentColor } from './types';

// Typography steps (0-9) based on typography.css / global.css tokens.
// Values are in px; React Native treats them as logical pixels.
const typography = {
  '0': { fontSize: 10, lineHeight: 12, letterSpacing: 0.01 },
  '1': { fontSize: 12, lineHeight: 16, letterSpacing: 0.01 },
  '2': { fontSize: 14, lineHeight: 20, letterSpacing: 0.01 },
  '3': { fontSize: 16, lineHeight: 24, letterSpacing: 0.01 },
  '4': { fontSize: 18, lineHeight: 26, letterSpacing: 0.01 },
  '5': { fontSize: 20, lineHeight: 28, letterSpacing: 0.01 },
  '6': { fontSize: 24, lineHeight: 30, letterSpacing: 0.01 },
  '7': { fontSize: 28, lineHeight: 34, letterSpacing: 0.005 },
  '8': { fontSize: 32, lineHeight: 38, letterSpacing: 0 },
  '9': { fontSize: 40, lineHeight: 48, letterSpacing: 0 },
} as const;

type TypographyStepKey = keyof typeof typography;

const fontWeights = {
  light: '300',
  regular: '400',
  medium: '500',
  'semi-bold': '600',
  bold: '700',
} as const;

type FontWeightKey = keyof typeof fontWeights;

// Color palettes from @frosted-ui/colors for light/dark schemes
const frostedColors = require('@frosted-ui/colors') as Record<string, Record<string, string>>;

type ShadeKey = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

type AlphaShadeKey =
  | 'a1'
  | 'a2'
  | 'a3'
  | 'a4'
  | 'a5'
  | 'a6'
  | 'a7'
  | 'a8'
  | 'a9'
  | 'a10'
  | 'a11'
  | 'a12';

type ColorShades = {
  [K in ShadeKey]: string;
} & {
  '9-contrast': string;
} & {
  [K in AlphaShadeKey]: string;
};

const contrastColors: Record<AccentColor, string> = {
  tomato: 'white',
  red: 'white',
  ruby: 'white',
  crimson: 'white',
  pink: 'white',
  plum: 'white',
  purple: 'white',
  violet: 'white',
  iris: 'white',
  cyan: 'white',
  teal: 'white',
  jade: 'white',
  green: 'white',
  grass: 'white',
  brown: 'white',
  sky: '#1C2024',
  mint: '#1A211E',
  yellow: '#21201C',
  amber: '#21201C',
  gold: 'white',
  bronze: 'white',
  gray: 'white',
  blue: 'white',
  orange: 'white',
  indigo: 'white',
  magenta: '#141212',
  lemon: '#20240D',
  lime: '#162715',
};

function buildPalette(color: AccentColor, mode: 'light' | 'dark'): ColorShades {
  const baseKey = mode === 'light' ? color : `${color}Dark`;
  const alphaKey = mode === 'light' ? `${color}A` : `${color}DarkA`;

  const base = frostedColors[baseKey] as Record<string, string> | undefined;
  const alpha = frostedColors[alphaKey] as Record<string, string> | undefined;

  const result: Partial<ColorShades> = {};

  (['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] as ShadeKey[]).forEach(
    (shade) => {
      const key = `${color}${shade}`;
      result[shade] = base?.[key] ?? '';
    }
  );

  (
    ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10', 'a11', 'a12'] as AlphaShadeKey[]
  ).forEach((aShade) => {
    const numeric = aShade.slice(1);
    const key = `${color}A${numeric}`;
    result[aShade] = alpha?.[key] ?? '';
  });

  result['9-contrast'] = contrastColors[color];

  return result as ColorShades;
}

const accentColors: AccentColor[] = [
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'cyan',
  'teal',
  'jade',
  'green',
  'grass',
  'brown',
  'blue',
  'orange',
  'indigo',
  'sky',
  'mint',
  'yellow',
  'amber',
  'lime',
  'lemon',
  'magenta',
  'gold',
  'bronze',
  'gray',
];

const lightPalettes: Record<AccentColor, ColorShades> = accentColors.reduce(
  (acc, color) => {
    acc[color] = buildPalette(color, 'light');
    return acc;
  },
  {} as Record<AccentColor, ColorShades>
);

const darkPalettes: Record<AccentColor, ColorShades> = accentColors.reduce(
  (acc, color) => {
    acc[color] = buildPalette(color, 'dark');
    return acc;
  },
  {} as Record<AccentColor, ColorShades>
);

// Semantic surface tokens (mirroring global.css)
// Light mode:
//   --color-background: white;
//   --color-overlay: var(--black-a6);
//   --color-panel-solid: white;
//   --color-panel-translucent: rgba(255, 255, 255, 0.85);
//   --color-surface: rgba(255, 255, 255, 0.9);
//   --color-stroke: var(--gray-a5);
//
// Dark mode:
//   --color-background: var(--gray-1);
//   --color-overlay: var(--black-a8);
//   --color-panel-solid: var(--gray-2);
//   --color-panel-translucent: var(--gray-2-translucent);
//   --color-surface: rgba(0, 0, 0, 0.25);
//   --color-stroke: var(--gray-a4);

// Resolve overlay / stroke from raw color palettes so native can use real values
const blackA = frostedColors.blackA as Record<string, string> | undefined;
const grayA = frostedColors.grayA as Record<string, string> | undefined;
const grayDark = frostedColors.grayDark as Record<string, string> | undefined;
const grayDarkA = frostedColors.grayDarkA as Record<string, string> | undefined;

export const themeVars = {
  typography,
  fontWeights,
  colors: {
    light: {
      palettes: lightPalettes,
      background: 'white',
      overlay: blackA?.blackA6 ?? 'rgba(0, 0, 0, 0.35)',
      panelSolid: 'white',
      panelTranslucent: 'rgba(255, 255, 255, 0.85)',
      surface: 'rgba(255, 255, 255, 0.9)',
      stroke: grayA?.grayA5 ?? 'rgba(15, 23, 42, 0.35)',
    },
    dark: {
      palettes: darkPalettes,
      background: grayDark?.gray1 ?? '#111111',
      overlay: blackA?.blackA8 ?? 'rgba(0, 0, 0, 0.5)',
      panelSolid: grayDark?.gray2 ?? '#181818',
      panelTranslucent: '#1D1D1DD9', // --gray-2-translucent
      surface: 'rgba(0, 0, 0, 0.25)',
      stroke: grayDarkA?.grayDarkA4 ?? 'rgba(148, 163, 184, 0.4)',
    },
  },
};

export type { ColorShades, FontWeightKey, TypographyStepKey };
