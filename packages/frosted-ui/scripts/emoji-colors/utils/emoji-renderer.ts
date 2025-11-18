import { createCanvas } from '@napi-rs/canvas';

export interface RGBColor {
  r: number;
  g: number;
  b: number;
}

/**
 * Renders an emoji on a canvas and returns the image buffer for color extraction
 */
export function renderEmojiToBuffer(emoji: string): Buffer {
  const size = 128;
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Clear canvas with transparent background
  ctx.clearRect(0, 0, size, size);

  // Set font and render emoji
  // Prioritize emoji fonts to ensure colored rendering
  ctx.font = `${size * 0.75}px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", "Segoe UI Symbol", sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(emoji, size / 2, size / 2);

  // Return as PNG buffer for node-vibrant
  return canvas.toBuffer('image/png');
}
