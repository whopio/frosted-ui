import type { AccentColor, Color } from '@/lib/types';
import { useThemeVars } from '@/lib/use-theme-vars';
import { Platform, type ViewStyle } from 'react-native';

// ============================================================================
// Types
// ============================================================================

export type TextInputSize = '1' | '2' | '3' | '4';
export type TextInputVariant = 'surface' | 'soft';

// ============================================================================
// Helpers
// ============================================================================

export function resolveAccentFromColor(color?: Color): AccentColor {
  if (!color) return 'gray';
  switch (color) {
    case 'danger':
      return 'red';
    case 'warning':
      return 'amber';
    case 'success':
      return 'green';
    case 'info':
      return 'blue';
    default:
      return color as AccentColor;
  }
}

/**
 * Convert hex color to rgba with specified opacity
 */
export function hexToRgba(hex: string, opacity: number): string {
  // Remove # if present
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

// ============================================================================
// Variant Styles
// ============================================================================

/**
 * Get background and border styles for surface variant
 */
export function getSurfaceVariantStyle(
  colors: ReturnType<typeof useThemeVars>['colors']
): ViewStyle {
  return {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.palettes.gray.a5,
    ...(Platform.OS === 'web'
      ? ({
          boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
        } as ViewStyle)
      : {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.05,
          shadowRadius: 2,
          elevation: 1,
        }),
  };
}

/**
 * Get background style for soft variant
 */
export function getSoftVariantStyle(
  colors: ReturnType<typeof useThemeVars>['colors'],
  accentColor: AccentColor
): ViewStyle {
  return {
    backgroundColor: colors.palettes[accentColor].a3,
  };
}

/**
 * Get text and placeholder colors based on variant
 */
export function getTextInputColors(
  variant: TextInputVariant,
  colors: ReturnType<typeof useThemeVars>['colors'],
  accentColor: AccentColor,
  disabled?: boolean
): { textColor: string; placeholderColor: string } {
  const grayPalette = colors.palettes.gray;
  const palette = colors.palettes[accentColor];

  // Disabled state: always use gray-a11 for text
  // Placeholder uses gray-a5 (lighter alpha shade approximating gray-a11 at 0.5 opacity)
  if (disabled) {
    return {
      textColor: grayPalette.a11,
      placeholderColor: grayPalette.a5,
    };
  }

  if (variant === 'surface') {
    return {
      textColor: grayPalette['12'],
      placeholderColor: grayPalette.a10,
    };
  }

  // Soft variant
  return {
    textColor: palette['12'],
    placeholderColor: hexToRgba(palette['12'], 0.65), // TextArea uses 0.65, TextField uses 0.6
  };
}

/**
 * Get disabled background style for surface variant
 * Uses gray-a3 overlay (simulated with opacity/background)
 */
export function getDisabledSurfaceStyle(
  colors: ReturnType<typeof useThemeVars>['colors']
): ViewStyle {
  return {
    backgroundColor: colors.palettes.gray.a3,
  };
}

/**
 * Get disabled background style for soft variant
 */
export function getDisabledSoftStyle(colors: ReturnType<typeof useThemeVars>['colors']): ViewStyle {
  return {
    backgroundColor: colors.palettes.gray.a4,
  };
}
