import convert from 'color-convert';
import * as lightColors from '../../../../frosted-ui-colors/src/light';
import { radixColorScales } from '../../../src/helpers/radix-colors';
import type { RGBColor } from './emoji-renderer';

// Color scales from radix-colors.ts
export const COLOR_SCALES = [...radixColorScales, 'gray'] as const;

export type ColorScale = (typeof COLOR_SCALES)[number];

// Dynamically build COLOR_9_VALUES from the light theme colors
// These are the solid, vibrant colors (9th shade) from each scale
export const COLOR_9_VALUES: Record<ColorScale, string> = {} as Record<ColorScale, string>;

for (const scale of COLOR_SCALES) {
  const colorObj = lightColors[scale as keyof typeof lightColors];
  const color9Key = `${scale}9` as keyof typeof colorObj;

  if (colorObj && typeof colorObj === 'object' && color9Key in colorObj) {
    COLOR_9_VALUES[scale] = (colorObj as Record<string, string>)[color9Key];
  } else {
    console.warn(`Could not find ${scale}9 in light colors`);
    COLOR_9_VALUES[scale] = '#000000'; // fallback
  }
}

/**
 * Converts hex color to RGB
 */
function hexToRgb(hex: string): RGBColor {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) {
    throw new Error(`Invalid hex color: ${hex}`);
  }
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
}

/**
 * Calculates the perceptual color distance using Delta E (CIE76) in LAB color space
 */
function calculateColorDistance(color1: RGBColor, color2: RGBColor): number {
  // Convert RGB to LAB color space for perceptual distance
  const lab1 = convert.rgb.lab(color1.r, color1.g, color1.b);
  const lab2 = convert.rgb.lab(color2.r, color2.g, color2.b);

  // Calculate Euclidean distance in LAB space (Delta E)
  const deltaL = lab1[0] - lab2[0];
  const deltaA = lab1[1] - lab2[1];
  const deltaB = lab1[2] - lab2[2];

  return Math.sqrt(deltaL * deltaL + deltaA * deltaA + deltaB * deltaB);
}

/**
 * Finds the closest color scale to the given RGB color
 */
export function findClosestColorScale(color: RGBColor): ColorScale {
  let minDistance = Infinity;
  let closestScale: ColorScale = 'gray';

  for (const scale of COLOR_SCALES) {
    const scaleColor = hexToRgb(COLOR_9_VALUES[scale]);
    const distance = calculateColorDistance(color, scaleColor);

    if (distance < minDistance) {
      minDistance = distance;
      closestScale = scale;
    }
  }

  return closestScale;
}

/**
 * Checks if a color is grayscale (low saturation) or near-black/near-white
 */
export function isGrayscale(color: RGBColor): boolean {
  const max = Math.max(color.r, color.g, color.b);
  const min = Math.min(color.r, color.g, color.b);
  const saturation = max === 0 ? 0 : (max - min) / max;

  // Check for low saturation
  if (saturation < 0.15) {
    return true;
  }

  // Check for near-black (all components < 30)
  if (max < 30) {
    return true;
  }

  // Check for near-white (all components > 225)
  if (min > 225) {
    return true;
  }

  return false;
}
