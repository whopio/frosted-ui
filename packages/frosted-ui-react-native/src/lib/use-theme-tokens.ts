import { useColorScheme } from './theme-context';
import { themeTokens } from './theme-tokens';

export function useThemeTokens() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = themeTokens.colors[isDark ? 'dark' : 'light'];
  // Inverted colors for components that flip theme (e.g., Tooltip)
  const invertedColors = themeTokens.colors[isDark ? 'light' : 'dark'];

  return {
    typography: themeTokens.typography,
    fontWeights: themeTokens.fontWeights,
    colors,
    invertedColors,
    isDark,
  };
}
