import type { RGBColor } from './emoji-renderer';

/**
 * Calculates the dominant color from a list of RGB colors using a simple color histogram approach.
 * Groups similar colors together and returns the most common color.
 */
export function getDominantColor(colors: RGBColor[]): RGBColor | null {
  if (colors.length === 0) {
    return null;
  }

  // Handle single color
  if (colors.length === 1) {
    return colors[0];
  }

  // Group colors into buckets (reduce color space for better clustering)
  const bucketSize = 32; // Group colors into 8x8x8 = 512 buckets
  const colorMap = new Map<string, { color: RGBColor; count: number }>();

  for (const color of colors) {
    // Bucket the color
    const r = Math.floor(color.r / bucketSize) * bucketSize;
    const g = Math.floor(color.g / bucketSize) * bucketSize;
    const b = Math.floor(color.b / bucketSize) * bucketSize;
    const key = `${r},${g},${b}`;

    const existing = colorMap.get(key);
    if (existing) {
      existing.count++;
      // Update with average color in this bucket
      existing.color.r = (existing.color.r * (existing.count - 1) + color.r) / existing.count;
      existing.color.g = (existing.color.g * (existing.count - 1) + color.g) / existing.count;
      existing.color.b = (existing.color.b * (existing.count - 1) + color.b) / existing.count;
    } else {
      colorMap.set(key, { color: { r: color.r, g: color.g, b: color.b }, count: 1 });
    }
  }

  // Find the most common color bucket
  let maxCount = 0;
  let dominantColor: RGBColor | null = null;

  for (const { color, count } of colorMap.values()) {
    if (count > maxCount) {
      maxCount = count;
      dominantColor = color;
    }
  }

  return dominantColor;
}

/**
 * Calculates the weighted average color, giving more weight to saturated colors
 */
export function getWeightedDominantColor(colors: RGBColor[]): RGBColor | null {
  if (colors.length === 0) {
    return null;
  }

  let totalR = 0;
  let totalG = 0;
  let totalB = 0;
  let totalWeight = 0;

  for (const color of colors) {
    // Calculate saturation as weight (more saturated colors get more weight)
    const max = Math.max(color.r, color.g, color.b);
    const min = Math.min(color.r, color.g, color.b);
    const saturation = max === 0 ? 0 : (max - min) / max;

    // Also consider brightness - avoid too dark colors
    const brightness = (color.r + color.g + color.b) / 3;
    const brightnessWeight = Math.min(brightness / 128, 1);

    const weight = saturation * 0.7 + brightnessWeight * 0.3 + 0.1; // Add base weight

    totalR += color.r * weight;
    totalG += color.g * weight;
    totalB += color.b * weight;
    totalWeight += weight;
  }

  return {
    r: Math.round(totalR / totalWeight),
    g: Math.round(totalG / totalWeight),
    b: Math.round(totalB / totalWeight),
  };
}
