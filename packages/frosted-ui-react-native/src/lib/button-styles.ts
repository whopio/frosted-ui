import { useThemeTokens } from '@/lib/use-theme-tokens';
import type { ViewStyle } from 'react-native';
import { Platform } from 'react-native';

export type ButtonSize = '1' | '2' | '3' | '4';
export type ButtonVariant = 'solid' | 'soft' | 'surface' | 'ghost';

// Palette type - the color shades returned from colors.palettes[key]
type Palette = ReturnType<typeof useThemeTokens>['colors']['palettes']['gray'];

export function getButtonSizeStyle(size: ButtonSize, isIconButton = false): ViewStyle {
  // Based on web CSS:
  // Size 1: height=space-5(24), gap=space-1(4), padding=space-2(8), radius=6
  // Size 2: height=space-6(32), gap=space-1*1.5(6), padding=space-3(12), radius=8
  // Size 3: height=space-7(40), gap=space-2(8), padding=space-4(16), radius=10
  // Size 4: height=space-8(48), gap=space-3(12), padding=space-4(16), radius=14
  const baseSize =
    size === '1'
      ? { height: 24, borderRadius: 6, gap: 4 }
      : size === '2'
        ? { height: 32, borderRadius: 8, gap: 6 }
        : size === '3'
          ? { height: 40, borderRadius: 10, gap: 8 }
          : { height: 48, borderRadius: 14, gap: 12 };

  if (isIconButton) {
    // IconButton: square (width = height), no horizontal padding
    return {
      ...baseSize,
      width: baseSize.height,
      paddingHorizontal: 0,
    };
  }

  // Regular Button: horizontal padding based on size
  const paddingHorizontal = size === '1' ? 8 : size === '2' ? 12 : size === '3' ? 16 : 16;

  return {
    ...baseSize,
    paddingHorizontal,
  };
}

export function getButtonVariantStyle(
  variant: ButtonVariant,
  colors: ReturnType<typeof useThemeTokens>['colors'],
  palette: Palette,
  gray: Palette,
  disabled: boolean,
  pressed: boolean,
  hovered: boolean
): ViewStyle {
  let backgroundColor: string | undefined;
  let borderColor: string | undefined;
  let borderWidth: number | undefined;

  if (disabled) {
    switch (variant) {
      case 'solid':
      case 'soft':
        backgroundColor = gray.a3;
        break;
      case 'surface':
        backgroundColor = gray.a2;
        borderColor = gray.a6;
        borderWidth = 1;
        break;
      case 'ghost':
        backgroundColor = 'transparent';
        break;
    }
  } else {
    switch (variant) {
      case 'solid':
        backgroundColor = pressed ? palette['10'] : hovered ? palette['10'] : palette['9'];
        break;
      case 'soft':
        backgroundColor = pressed ? palette.a5 : hovered ? palette.a4 : palette.a3;
        break;
      case 'surface':
        // Default: panelSolid bg, gray-a5 border (stroke), outer shadow
        // Hover: same bg, gray-a7 border, outer shadow
        // Pressed: gray-a3 bg, gray-a6 border, no outer shadow
        backgroundColor = pressed ? gray['3'] : colors.panelSolid;
        borderColor = pressed ? gray.a6 : hovered ? gray.a7 : gray.a5;
        borderWidth = 1;
        break;
      case 'ghost':
        backgroundColor = pressed ? palette.a4 : hovered ? palette.a3 : undefined;
        break;
    }
  }

  return {
    backgroundColor,
    borderColor,
    borderWidth,
  };
}

export function getButtonShadowStyle(
  variant: ButtonVariant,
  disabled: boolean,
  pressed: boolean
): ViewStyle | undefined {
  if (!disabled && !pressed && variant === 'surface') {
    return {
      shadowColor: '#000000',
      shadowOpacity: 0.05,
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 2,
      elevation: 2,
    };
  }
  return undefined;
}

export function getButtonFocusStyle(
  palette: Palette,
  focused: boolean,
  disabled: boolean
): ViewStyle | undefined {
  if (focused && !disabled) {
    return {
      outlineWidth: 2,
      outlineStyle: 'solid',
      outlineColor: palette.a8,
      outlineOffset: 2,
    };
  }
  return undefined;
}

export function getButtonPressedFilter(
  variant: ButtonVariant,
  pressed: boolean,
  disabled: boolean
): ViewStyle | undefined {
  if (Platform.OS === 'web' && pressed && !disabled && variant === 'solid') {
    return { filter: 'brightness(0.92) saturate(1.1)' };
  }
  return undefined;
}

export function getButtonTextColor(
  variant: ButtonVariant,
  palette: Palette,
  gray: Palette,
  disabled: boolean
): string {
  if (disabled) {
    return gray.a8;
  }
  if (variant === 'solid') {
    return palette['9-contrast'];
  }
  return palette.a11 || palette['11'];
}
