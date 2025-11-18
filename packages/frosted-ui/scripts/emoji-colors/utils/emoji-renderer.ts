import { createCanvas } from '@napi-rs/canvas';

export interface RGBColor {
  r: number;
  g: number;
  b: number;
}

/**
 * Renders an emoji on a canvas and extracts all non-transparent pixel colors
 */
export function renderEmojiAndExtractColors(emoji: string): RGBColor[] {
  const size = 128;
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Clear canvas with transparent background
  ctx.clearRect(0, 0, size, size);

  // Set font and render emoji
  ctx.font = `${size * 0.75}px Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(emoji, size / 2, size / 2);

  // Extract pixel data
  const imageData = ctx.getImageData(0, 0, size, size);
  const pixels = imageData.data;
  const colors: RGBColor[] = [];

  // Extract non-transparent pixels
  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    const a = pixels[i + 3];

    // Only include pixels with significant alpha
    if (a > 50) {
      colors.push({ r, g, b });
    }
  }

  return colors;
}
