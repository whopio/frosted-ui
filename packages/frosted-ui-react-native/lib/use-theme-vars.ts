import { useColorScheme } from 'nativewind';
import { themeVars } from './theme-vars';

export function useThemeVars() {
  const { colorScheme } = useColorScheme();
  const colors = themeVars.colors[colorScheme === 'dark' ? 'dark' : 'light'];

  return {
    typography: themeVars.typography,
    fontWeights: themeVars.fontWeights,
    colors,
  };
}
