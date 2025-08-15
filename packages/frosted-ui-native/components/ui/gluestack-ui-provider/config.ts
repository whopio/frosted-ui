'use client';
import * as frostedColors from '@frosted-ui/colors';
import { vars } from 'nativewind';

// Function to create light color mappings
function createLightColorMappings() {
  const mappings: Record<string, string> = {};

  // Get all color objects from the imported colors
  const colorObjects = Object.entries(frostedColors);

  colorObjects.forEach(([colorName, colorObj]) => {
    // Skip P3, P3A, and Dark colors for light theme
    if (colorName.includes('P3') || colorName.includes('Dark')) return;

    // Handle regular colors (e.g., blue, red, etc.)
    if (!colorName.endsWith('A')) {
      Object.entries(colorObj as Record<string, string>).forEach(([shade, value]) => {
        const shadeNumber = shade.replace(colorName, '');
        mappings[`--${colorName}-${shadeNumber}`] = value;
      });
    }
    // Handle alpha colors (e.g., blueA, redA, etc.)
    else {
      const baseColorName = colorName.replace('A', '');
      Object.entries(colorObj as Record<string, string>).forEach(([shade, value]) => {
        const shadeNumber = shade.replace(colorName, '');
        mappings[`--${baseColorName}-a${shadeNumber}`] = value;
      });
    }
  });

  return mappings;
}

// Function to create dark color mappings
function createDarkColorMappings() {
  const mappings: Record<string, string> = {};

  // Get all color objects from the imported colors
  const colorObjects = Object.entries(frostedColors);

  colorObjects.forEach(([colorName, colorObj]) => {
    // Only include Dark colors for dark theme, skip P3 and P3A
    if (colorName.includes('P3') || !colorName.includes('Dark')) return;

    // Handle regular dark colors (e.g., blueDark, redDark, etc.)
    if (!colorName.endsWith('A')) {
      const baseColorName = colorName.replace('Dark', '');
      Object.entries(colorObj as Record<string, string>).forEach(([shade, value]) => {
        // Extract just the number from the shade key (e.g., "blue1" -> "1")
        const shadeNumber = shade.replace(baseColorName, '');
        mappings[`--${baseColorName}-${shadeNumber}`] = value;
      });
    }
    // Handle alpha dark colors (e.g., blueDarkA, redDarkA, etc.)
    else {
      const baseColorName = colorName.replace('DarkA', '');
      Object.entries(colorObj as Record<string, string>).forEach(([shade, value]) => {
        // Extract just the number from the shade key (e.g., "blueA1" -> "1")
        const shadeNumber = shade.replace(baseColorName + 'A', '');
        mappings[`--${baseColorName}-a${shadeNumber}`] = value;
      });
    }
  });

  return mappings;
}

const lightColorMappings = createLightColorMappings();
const darkColorMappings = createDarkColorMappings();

console.log('Light mappings:', lightColorMappings);
console.log('Dark mappings:', darkColorMappings);

export const config = {
  light: vars(lightColorMappings),
  dark: vars(darkColorMappings),
};
