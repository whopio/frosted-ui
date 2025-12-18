import { useColorScheme } from './theme-context';
import { themeVars } from './theme-vars';

export function useThemeVars() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = themeVars.colors[isDark ? 'dark' : 'light'];
  // Inverted colors for components that flip theme (e.g., Tooltip)
  const invertedColors = themeVars.colors[isDark ? 'light' : 'dark'];

  return {
    typography: themeVars.typography,
    fontWeights: themeVars.fontWeights,
    colors,
    invertedColors,
    isDark,
  };
}
