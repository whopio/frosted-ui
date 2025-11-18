import Vibrant from 'node-vibrant';
import type { RGBColor } from './emoji-renderer';

export interface ExtractedColors {
  vibrant: RGBColor | null;
  muted: RGBColor | null;
  darkVibrant: RGBColor | null;
  darkMuted: RGBColor | null;
  lightVibrant: RGBColor | null;
  lightMuted: RGBColor | null;
  dominant: RGBColor | null;
}

/**
 * Extracts all color palettes from an image buffer using node-vibrant
 */
export async function extractColors(imageBuffer: Buffer): Promise<ExtractedColors> {
  const palette = await Vibrant.from(imageBuffer).getPalette();

  // Helper to convert Vibrant swatch to RGBColor
  const toRGB = (swatch: any): RGBColor | null => {
    if (!swatch) return null;
    const [r, g, b] = swatch.getRgb();
    return { r: Math.round(r), g: Math.round(g), b: Math.round(b) };
  };

  // Use Muted as dominant (typically the most common/background color)
  // If Muted doesn't exist, fall back to DarkMuted or LightMuted
  const dominantColor = toRGB(palette.Muted || palette.DarkMuted || palette.LightMuted);

  return {
    vibrant: toRGB(palette.Vibrant),
    muted: toRGB(palette.Muted),
    darkVibrant: toRGB(palette.DarkVibrant),
    darkMuted: toRGB(palette.DarkMuted),
    lightVibrant: toRGB(palette.LightVibrant),
    lightMuted: toRGB(palette.LightMuted),
    dominant: dominantColor,
  };
}

/**
 * Gets the best color from extracted palettes, prioritizing vibrant over muted
 */
export function getBestColor(colors: ExtractedColors): RGBColor | null {
  // Priority order: Vibrant > LightVibrant > DarkVibrant > Dominant > Muted
  return (
    colors.vibrant ||
    colors.lightVibrant ||
    colors.darkVibrant ||
    colors.dominant ||
    colors.muted ||
    colors.lightMuted ||
    colors.darkMuted ||
    null
  );
}
