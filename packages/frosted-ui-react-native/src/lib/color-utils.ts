import { useMemo } from 'react';
import {
  defaultSemanticColors,
  useSemanticColors,
  type SemanticColorConfig,
} from './theme-context';
import type { AccentColor, Color, SemanticColor } from './types';

/**
 * Resolves a Color (which can be an AccentColor or SemanticColor) to an AccentColor.
 * Semantic colors are resolved using the provided semantic color configuration.
 *
 * @param color - The color to resolve (can be 'danger', 'warning', 'success', 'info', or any AccentColor)
 * @param semanticColors - The semantic color configuration from ThemeProvider (optional, uses defaults if not provided)
 * @param defaultColor - The default color to return if no color is provided (defaults to 'blue')
 * @returns The resolved AccentColor
 */
export function resolveAccentFromColor(
  color: Color | undefined,
  semanticColors: SemanticColorConfig = defaultSemanticColors,
  defaultColor: AccentColor = 'blue'
): AccentColor {
  if (!color) return defaultColor;

  switch (color) {
    case 'danger':
      return semanticColors.dangerColor;
    case 'warning':
      return semanticColors.warningColor;
    case 'success':
      return semanticColors.successColor;
    case 'info':
      return semanticColors.infoColor;
    default:
      return color as AccentColor;
  }
}

/**
 * Checks if a color is a semantic color.
 */
export function isSemanticColor(color: Color): color is SemanticColor {
  return color === 'danger' || color === 'warning' || color === 'success' || color === 'info';
}

/**
 * Hook that returns a function to resolve colors using the current theme's semantic color configuration.
 * Use this in components to properly respect ThemeProvider's color settings.
 *
 * @example
 * const resolveColor = useResolveColor();
 * const accentColor = resolveColor(props.color); // Respects ThemeProvider config
 */
export function useResolveColor() {
  const semanticColors = useSemanticColors();

  return useMemo(
    () =>
      (color: Color | undefined, defaultColor: AccentColor = 'blue'): AccentColor =>
        resolveAccentFromColor(color, semanticColors, defaultColor),
    [semanticColors]
  );
}
