import { vars } from 'nativewind';
import type { AccentColor } from './types';

/**
 * Generates a NativeWind vars object that maps all accent color variables
 * to the specified color. This allows components to use text-accent-11, bg-accent-9, etc.
 * and have them automatically map to the specified color.
 *
 * @example
 * const theme = getAccentColorTheme('yellow');
 * <View style={theme}>
 *   <Text className="text-accent-11">This will be yellow-11</Text>
 * </View>
 */
export function getAccentColorTheme(color: AccentColor) {
  return vars({
    '--accent-1': `var(--${color}-1)`,
    '--accent-2': `var(--${color}-2)`,
    '--accent-3': `var(--${color}-3)`,
    '--accent-4': `var(--${color}-4)`,
    '--accent-5': `var(--${color}-5)`,
    '--accent-6': `var(--${color}-6)`,
    '--accent-7': `var(--${color}-7)`,
    '--accent-8': `var(--${color}-8)`,
    '--accent-9': `var(--${color}-9)`,
    '--accent-9-contrast': `var(--${color}-9-contrast)`,
    '--accent-10': `var(--${color}-10)`,
    '--accent-11': `var(--${color}-11)`,
    '--accent-12': `var(--${color}-12)`,
    '--accent-a1': `var(--${color}-a1)`,
    '--accent-a2': `var(--${color}-a2)`,
    '--accent-a3': `var(--${color}-a3)`,
    '--accent-a4': `var(--${color}-a4)`,
    '--accent-a5': `var(--${color}-a5)`,
    '--accent-a6': `var(--${color}-a6)`,
    '--accent-a7': `var(--${color}-a7)`,
    '--accent-a8': `var(--${color}-a8)`,
    '--accent-a9': `var(--${color}-a9)`,
    '--accent-a10': `var(--${color}-a10)`,
    '--accent-a11': `var(--${color}-a11)`,
    '--accent-a12': `var(--${color}-a12)`,
  });
}
