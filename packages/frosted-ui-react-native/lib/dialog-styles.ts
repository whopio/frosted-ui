import { Platform, type StyleProp, type ViewStyle } from 'react-native';

// ============================================================================
// Types
// ============================================================================

export type DialogSize = '1' | '2' | '3' | '4';

interface ThemeColors {
  panelSolid: string;
  palettes: {
    gray: {
      a3: string;
      a6: string;
      a7: string;
    };
    black: {
      a3: string;
      a4: string;
      a6: string;
      a11: string;
    };
  };
}

// ============================================================================
// Size helpers
// ============================================================================

export function getDialogSizeStyles(size: DialogSize) {
  switch (size) {
    case '1':
      return {
        padding: 12, // space-3
        borderRadius: 8,
        titleMarginBottom: 4, // space-1
        descriptionMarginBottom: 12, // space-3
        minWidth: 200,
      };
    case '2':
      return {
        padding: 16, // space-4
        borderRadius: 12,
        titleMarginBottom: 8, // space-2
        descriptionMarginBottom: 16, // space-4
        minWidth: 240,
      };
    case '3':
      return {
        padding: 20,
        borderRadius: 16,
        titleMarginBottom: 12, // space-3
        descriptionMarginBottom: 20,
        minWidth: 280,
      };
    case '4':
      return {
        padding: 24, // space-5
        borderRadius: 20,
        titleMarginBottom: 12, // space-3
        descriptionMarginBottom: 24, // space-5
        minWidth: 320,
      };
  }
}

export function getDialogTitleSize(size: DialogSize): '3' | '5' | '6' {
  switch (size) {
    case '1':
      return '3';
    case '2':
    case '3':
      return '5';
    case '4':
      return '6';
  }
}

export function getDialogDescriptionSize(size: DialogSize): '1' | '2' | '3' {
  switch (size) {
    case '1':
      return '1';
    case '2':
    case '3':
      return '2';
    case '4':
      return '3';
  }
}

// ============================================================================
// Shadow helper (shadow-6)
// ============================================================================

export function getDialogShadowStyle(
  gray: { a3: string; a6: string; a7: string },
  black: { a3: string; a4: string; a6: string; a11: string },
  isDark: boolean
): ViewStyle {
  if (Platform.OS === 'web') {
    const boxShadow = isDark
      ? `0 0 0 1px ${gray.a6}, 0 12px 60px ${black.a4}, 0 16px 64px ${black.a6}, 0 16px 36px -20px ${black.a11}`
      : `0 0 0 1px ${gray.a3}, 0 12px 60px ${black.a3}, 0 16px 64px ${gray.a3}, 0 16px 36px -20px ${gray.a7}`;

    return { boxShadow } as ViewStyle;
  }

  // Native shadow approximation
  return {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: isDark ? 0.5 : 0.25,
    shadowRadius: 32,
    elevation: 24,
    // Add border for native
    borderWidth: 1,
    borderColor: isDark ? gray.a6 : gray.a3,
  };
}

// ============================================================================
// Overlay styles
// ============================================================================

export function getDialogOverlayStyle(): ViewStyle {
  return {
    position: Platform.OS === 'web' ? ('fixed' as unknown as 'absolute') : 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16, // space-4
    paddingBottom: 32, // max(space-4, 4vh) approximation
    paddingLeft: 16, // space-4
    paddingRight: 16, // space-4
  };
}

export function getDialogBackdropStyle(): ViewStyle {
  return Platform.OS === 'web'
    ? ({
        position: 'absolute' as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backdropFilter: 'blur(3px) brightness(0.7)',
        WebkitBackdropFilter: 'blur(3px) brightness(0.7)',
      } as ViewStyle)
    : {
        position: 'absolute' as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      };
}

// ============================================================================
// Content styles
// ============================================================================

export function getDialogContentStyle(
  size: DialogSize,
  colors: ThemeColors,
  isDark: boolean,
  windowWidth: number,
  userStyle?: StyleProp<ViewStyle>
): ViewStyle {
  const sizeStyles = getDialogSizeStyles(size);
  const gray = colors.palettes.gray;
  const black = colors.palettes.black;
  const shadowStyle = getDialogShadowStyle(gray, black, isDark);

  // Calculate available width (screen width minus overlay padding)
  const overlayPadding = 16; // space-4
  const availableWidth = windowWidth - overlayPadding * 2;
  const defaultMaxWidth = 580;

  // Extract maxWidth from style prop if provided
  const flatStyle = userStyle
    ? Array.isArray(userStyle)
      ? Object.assign({}, ...userStyle.filter((s): s is ViewStyle => s != null && typeof s === 'object'))
      : typeof userStyle === 'object' && userStyle != null
        ? userStyle
        : {}
    : {};
  const userMaxWidth = (flatStyle as ViewStyle).maxWidth;
  const effectiveMaxWidth = typeof userMaxWidth === 'number' ? userMaxWidth : defaultMaxWidth;

  return {
    // On web, width: '100%' works with flexbox centering
    // On native, we calculate a fixed width based on available space and maxWidth
    width: Platform.OS === 'web' ? '100%' : Math.min(availableWidth, effectiveMaxWidth),
    minWidth: sizeStyles.minWidth,
    maxWidth: defaultMaxWidth,
    backgroundColor: colors.panelSolid,
    padding: sizeStyles.padding,
    borderRadius: sizeStyles.borderRadius,
    overflow: Platform.OS === 'web' ? ('auto' as unknown as 'hidden') : 'hidden',
    zIndex: 1,
    ...shadowStyle,
  };
}

