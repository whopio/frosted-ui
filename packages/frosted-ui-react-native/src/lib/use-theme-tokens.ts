import { useMemo } from 'react';
import { useColorScheme, useSemanticColors } from './theme-context';
import { themeTokens } from './theme-tokens';

export function useThemeTokens() {
  const colorScheme = useColorScheme();
  const semanticColors = useSemanticColors();
  const isDark = colorScheme === 'dark';
  const baseColors = themeTokens.colors[isDark ? 'dark' : 'light'];
  // Inverted colors for components that flip theme (e.g., Tooltip)
  const invertedBaseColors = themeTokens.colors[isDark ? 'light' : 'dark'];

  // Build colors with semantic palettes added to palettes object
  const colors = useMemo(
    () => ({
      ...baseColors,
      palettes: {
        ...baseColors.palettes,
        // Semantic palettes based on ThemeProvider configuration
        accent: baseColors.palettes[semanticColors.accentColor],
        danger: baseColors.palettes[semanticColors.dangerColor],
        warning: baseColors.palettes[semanticColors.warningColor],
        success: baseColors.palettes[semanticColors.successColor],
        info: baseColors.palettes[semanticColors.infoColor],
      },
    }),
    [baseColors, semanticColors]
  );

  const invertedColors = useMemo(
    () => ({
      ...invertedBaseColors,
      palettes: {
        ...invertedBaseColors.palettes,
        // Semantic palettes based on ThemeProvider configuration (inverted)
        accent: invertedBaseColors.palettes[semanticColors.accentColor],
        danger: invertedBaseColors.palettes[semanticColors.dangerColor],
        warning: invertedBaseColors.palettes[semanticColors.warningColor],
        success: invertedBaseColors.palettes[semanticColors.successColor],
        info: invertedBaseColors.palettes[semanticColors.infoColor],
      },
    }),
    [invertedBaseColors, semanticColors]
  );

  return {
    typography: themeTokens.typography,
    fontWeights: themeTokens.fontWeights,
    colors,
    invertedColors,
    isDark,
  };
}
