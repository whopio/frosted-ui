import { vars } from 'nativewind';
import type { AccentColor } from './types';

/**
 * Creates a vars object for a given color name.
 * This maps all accent color variables to the specified color's variables.
 */
function createColorTheme(colorName: string) {
  return vars({
    '--accent-1': `var(--${colorName}-1)`,
    '--accent-2': `var(--${colorName}-2)`,
    '--accent-3': `var(--${colorName}-3)`,
    '--accent-4': `var(--${colorName}-4)`,
    '--accent-5': `var(--${colorName}-5)`,
    '--accent-6': `var(--${colorName}-6)`,
    '--accent-7': `var(--${colorName}-7)`,
    '--accent-8': `var(--${colorName}-8)`,
    '--accent-9': `var(--${colorName}-9)`,
    '--accent-9-contrast': `var(--${colorName}-9-contrast)`,
    '--accent-10': `var(--${colorName}-10)`,
    '--accent-11': `var(--${colorName}-11)`,
    '--accent-12': `var(--${colorName}-12)`,
    '--accent-a1': `var(--${colorName}-a1)`,
    '--accent-a2': `var(--${colorName}-a2)`,
    '--accent-a3': `var(--${colorName}-a3)`,
    '--accent-a4': `var(--${colorName}-a4)`,
    '--accent-a5': `var(--${colorName}-a5)`,
    '--accent-a6': `var(--${colorName}-a6)`,
    '--accent-a7': `var(--${colorName}-a7)`,
    '--accent-a8': `var(--${colorName}-a8)`,
    '--accent-a9': `var(--${colorName}-a9)`,
    '--accent-a10': `var(--${colorName}-a10)`,
    '--accent-a11': `var(--${colorName}-a11)`,
    '--accent-a12': `var(--${colorName}-a12)`,
  });
}

/**
 * Pre-defined color themes for all accent colors.
 * Similar to the theme pattern, but for color variants.
 * This allows components to use text-accent-11, bg-accent-9, etc.
 * and have them automatically map to the specified color.
 */
export const colorThemes: Record<AccentColor, ReturnType<typeof vars>> = {
  tomato: createColorTheme('tomato'),
  red: createColorTheme('red'),
  ruby: createColorTheme('ruby'),
  crimson: createColorTheme('crimson'),
  pink: createColorTheme('pink'),
  plum: createColorTheme('plum'),
  purple: createColorTheme('purple'),
  violet: createColorTheme('violet'),
  iris: createColorTheme('iris'),
  cyan: createColorTheme('cyan'),
  teal: createColorTheme('teal'),
  jade: createColorTheme('jade'),
  green: createColorTheme('green'),
  grass: createColorTheme('grass'),
  brown: createColorTheme('brown'),
  sky: createColorTheme('sky'),
  mint: createColorTheme('mint'),
  yellow: createColorTheme('yellow'),
  amber: createColorTheme('amber'),
  gold: createColorTheme('gold'),
  bronze: createColorTheme('bronze'),
  gray: createColorTheme('gray'),
  blue: createColorTheme('blue'),
  orange: createColorTheme('orange'),
  indigo: createColorTheme('indigo'),
  magenta: createColorTheme('magenta'),
  lemon: createColorTheme('lemon'),
  lime: createColorTheme('lime'),
};

/**
 * Gets the accent color theme for a given color.
 * Returns the pre-defined vars object for that color.
 *
 * @example
 * const theme = getAccentColorTheme('yellow');
 * <View style={theme}>
 *   <Text className="text-accent-11">This will be yellow-11</Text>
 * </View>
 */
export function getAccentColorTheme(color: AccentColor) {
  return colorThemes[color];
}
