/* eslint-disable @typescript-eslint/no-var-requires */

import type { AccentColor } from './types';

// Import the Frosted UI color palettes directly.
// This works on native because it's just a plain JS object.
// Shape example:
//   frostedColors.blue = { blue1: '#...', blue2: '#...', ..., blue12: '#...' }
//   frostedColors.blueA = { blueA1: 'rgba(...)', ..., blueA12: 'rgba(...)' }
const frostedColors = require('@frosted-ui/colors') as Record<string, Record<string, string>>;

type Shade = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

type AlphaShade =
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

function getPalette(color: AccentColor) {
  // e.g. 'blue' → frostedColors.blue.blue1 ... blue12
  return frostedColors[color] as Record<string, string> | undefined;
}

function getAlphaPalette(color: AccentColor) {
  // e.g. 'blue' → frostedColors.blueA.blueA1 ... blueA12
  const key = `${color}A`;
  return frostedColors[key] as Record<string, string> | undefined;
}

export function getNativeAccentColor(color: AccentColor, shade: Shade): string | undefined {
  const palette = getPalette(color);
  if (!palette) return undefined;
  const key = `${color}${shade}`; // e.g. blue + '9' → 'blue9'
  return palette[key];
}

export function getNativeAccentAlphaColor(
  color: AccentColor,
  shade: AlphaShade
): string | undefined {
  const alphaPalette = getAlphaPalette(color);
  if (!alphaPalette) return undefined;
  const numericShade = shade.slice(1); // a1 -> '1'
  const key = `${color}A${numericShade}`; // e.g. blueA1
  return alphaPalette[key];
}

// For contrast text colors we reuse the same mapping as web (from color.css),
// but encoded directly as JS values so React Native can use them.
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

export function getNativeAccentContrastColor(color: AccentColor): string {
  return contrastColors[color];
}
