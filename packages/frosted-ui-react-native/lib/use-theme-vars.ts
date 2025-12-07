import { useColorScheme } from 'nativewind';
import { themeVars } from './theme-vars';

export function useThemeVars() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = themeVars.colors[isDark ? 'dark' : 'light'];

  return {
    typography: themeVars.typography,
    fontWeights: themeVars.fontWeights,
    colors,
    // Black and white alpha palettes (same in light and dark mode)
    black: themeVars.colors.black,
    white: themeVars.colors.white,
    isDark,
  };
}
