import { Platform, type ViewStyle } from 'react-native';

type PanelSize = '1' | '2' | '3' | '4';
type PanelVariant = 'solid' | 'translucent';

interface ThemeColors {
  panelSolid: string;
  panelTranslucent: string;
  palettes: {
    gray: {
      a6: string;
    };
  };
}

interface PanelStyleOptions {
  size: PanelSize;
  variant: PanelVariant;
  colors: ThemeColors;
  isDark: boolean;
}

/**
 * Get padding and border radius for panel content based on size
 */
function getPanelSizeStyle(size: PanelSize): { padding: number; borderRadius: number } {
  switch (size) {
    case '1':
      return { padding: 12, borderRadius: 8 }; // space-3, 8px
    case '2':
      return { padding: 16, borderRadius: 12 }; // space-4, 12px
    case '3':
      return { padding: 24, borderRadius: 16 }; // space-5, 16px
    case '4':
      return { padding: 32, borderRadius: 20 }; // space-6, 20px
  }
}

/**
 * Get backdrop filter style for translucent panels (web only)
 */
function getPanelBackdropStyle(variant: PanelVariant, isDark: boolean): ViewStyle | undefined {
  if (variant !== 'translucent' || Platform.OS !== 'web') {
    return undefined;
  }

  const backdropFilter = isDark
    ? 'blur(20px) saturate(190%) contrast(90%) brightness(80%)'
    : 'blur(20px) saturate(190%) contrast(50%) brightness(130%)';

  return {
    backdropFilter,
    WebkitBackdropFilter: backdropFilter,
  } as ViewStyle;
}

/**
 * Get shadow style for panel content
 * Includes outline via boxShadow on web:
 * - Light mode: 1px gray.a6 outline (no border)
 * - Dark mode: 0.5px black outline (+ border)
 */
function getPanelShadowStyle(colors: ThemeColors, isDark: boolean): ViewStyle {
  const baseShadow = '0px 12px 60px rgba(0, 0, 0, 0.25), 0px 2px 8px rgba(0, 0, 0, 0.12)';
  const outlineShadow = isDark
    ? `, 0 0 0 0.5px black`
    : `, 0 0 0 1px ${colors.palettes.gray.a6}`;

  return Platform.select({
    web: {
      boxShadow: baseShadow + outlineShadow,
    } as ViewStyle,
    default: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.25,
      shadowRadius: 30,
      elevation: 24,
    },
  }) as ViewStyle;
}

/**
 * Get border style for panel content
 * Dark mode has 1px gray.a6 border on all platforms
 * Light mode: no border on web (uses boxShadow outline), border on native as fallback
 */
function getPanelBorderStyle(colors: ThemeColors, isDark: boolean): ViewStyle | undefined {
  if (isDark || Platform.OS !== 'web') {
    return {
      borderWidth: 1,
      borderColor: colors.palettes.gray.a6,
    };
  }
  return undefined;
}

/**
 * Get complete panel content style
 */
function getPanelContentStyle(options: PanelStyleOptions): ViewStyle {
  const { size, variant, colors, isDark } = options;

  const sizeStyle = getPanelSizeStyle(size);

  // TODO: Handle translucent variant properly on native (iOS/Android) with blur effect
  // For now, native always uses solid background since backdrop-filter is web-only
  // and native blur requires additional setup (expo-blur or @react-native-community/blur)
  const backgroundColor =
    Platform.OS === 'web' && variant === 'translucent'
      ? colors.panelTranslucent
      : colors.panelSolid;

  const backdropStyle = getPanelBackdropStyle(variant, isDark);
  const shadowStyle = getPanelShadowStyle(colors, isDark);
  const borderStyle = getPanelBorderStyle(colors, isDark);

  return {
    backgroundColor,
    padding: sizeStyle.padding,
    borderRadius: sizeStyle.borderRadius,
    overflow: 'hidden',
    ...shadowStyle,
    ...backdropStyle,
    ...borderStyle,
  };
}

export { getPanelContentStyle, getPanelSizeStyle };
export type { PanelSize, PanelStyleOptions, PanelVariant };

