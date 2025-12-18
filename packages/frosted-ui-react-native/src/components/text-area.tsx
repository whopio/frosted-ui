import {
  getDisabledSoftStyle,
  getDisabledSurfaceStyle,
  getSoftVariantStyle,
  getSurfaceVariantStyle,
  getTextInputColors,
  type TextInputSize,
  type TextInputVariant,
} from '@/lib/text-input-styles';
import type { Color } from '@/lib/types';
import { useThemeTokens } from '@/lib/use-theme-tokens';
import * as React from 'react';
import {
  Platform,
  TextInput,
  View,
  type TextInputProps,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

// Palette key - Color with 'gray' as default (for text inputs)
type PaletteKey = Color | 'gray';

// ============================================================================
// Types
// ============================================================================

type TextAreaSize = TextInputSize;
type TextAreaVariant = TextInputVariant;

// ============================================================================
// Size helpers
// ============================================================================

function getTextAreaSizeStyle(size: TextAreaSize): {
  minHeight: number;
  fontSize: number;
  lineHeight: number;
  borderRadius: number;
  paddingVertical: number;
  paddingHorizontal: number;
} {
  switch (size) {
    case '1':
      return {
        minHeight: 32, // space-8
        fontSize: 12,
        lineHeight: 16,
        borderRadius: 6,
        paddingVertical: 3, // space-1 - border
        paddingHorizontal: 6, // space-1.5 - border
      };
    case '2':
      return {
        minHeight: 36, // space-9
        fontSize: 14,
        lineHeight: 20,
        borderRadius: 8,
        paddingVertical: 6, // space-1.5 - border
        paddingHorizontal: 8, // space-2 - border
      };
    case '3':
      return {
        minHeight: 80,
        fontSize: 16,
        lineHeight: 24,
        borderRadius: 10,
        paddingVertical: 8, // space-2 - border
        paddingHorizontal: 12, // space-3 - border
      };
    case '4':
      return {
        minHeight: 96,
        fontSize: 18,
        lineHeight: 28,
        borderRadius: 14,
        paddingVertical: 12, // space-3 - border
        paddingHorizontal: 16, // space-4 - border
      };
  }
}

// ============================================================================
// TextArea
// ============================================================================

interface TextAreaProps extends Omit<TextInputProps, 'style'> {
  size?: TextAreaSize;
  variant?: TextAreaVariant;
  color?: Color;
  style?: TextStyle;
}

function TextArea({
  size = '2',
  variant = 'surface',
  color,
  style,
  editable,
  ...props
}: TextAreaProps) {
  const { colors } = useThemeTokens();
  const gray = colors.palettes.gray;
  // For soft variant background/text, use gray as default
  const paletteKey: PaletteKey = color ?? 'gray';
  // For focus outline, use accent as default
  const focusPalette = colors.palettes[color ?? 'accent'] ?? gray;
  const sizeStyle = getTextAreaSizeStyle(size);
  const disabled = editable === false;
  const [focused, setFocused] = React.useState(false);

  // Variant styles
  let variantStyle =
    variant === 'surface'
      ? getSurfaceVariantStyle(colors)
      : getSoftVariantStyle(colors, paletteKey);

  // Apply disabled styles (surface keeps border, soft replaces background)
  if (disabled) {
    if (variant === 'surface') {
      // Surface: keep border, replace background
      variantStyle = {
        ...variantStyle,
        ...getDisabledSurfaceStyle(colors),
      };
    } else {
      // Soft: replace background completely
      variantStyle = getDisabledSoftStyle(colors);
    }
  }

  // Focus outline (web only) - uses accent color by default
  const focusStyle: ViewStyle | undefined =
    focused && !disabled && Platform.OS === 'web'
      ? ({
          outline: `2px solid ${focusPalette.a8}`,
          outlineOffset: -1,
        } as ViewStyle)
      : undefined;

  // Text and placeholder colors
  const { textColor, placeholderColor } = getTextInputColors(
    variant,
    colors,
    paletteKey,
    disabled
  );

  const rootStyle: ViewStyle = {
    flexDirection: 'column',
    minHeight: sizeStyle.minHeight,
    borderRadius: sizeStyle.borderRadius,
    ...variantStyle,
    ...focusStyle,
  };

  const inputStyle: TextStyle = {
    flex: 1,
    fontSize: sizeStyle.fontSize,
    lineHeight: sizeStyle.lineHeight,
    color: textColor,
    paddingVertical: sizeStyle.paddingVertical,
    paddingHorizontal: sizeStyle.paddingHorizontal,
    textAlignVertical: 'top',
    ...(Platform.OS === 'web'
      ? ({
          outline: 'none',
          backgroundColor: 'transparent',
          resize: 'none',
        } as TextStyle)
      : {}),
  };

  const handleFocus: TextInputProps['onFocus'] = (e) => {
    setFocused(true);
    props.onFocus?.(e);
  };

  const handleBlur: TextInputProps['onBlur'] = (e) => {
    setFocused(false);
    props.onBlur?.(e);
  };

  return (
    <View style={rootStyle}>
      <TextInput
        style={[inputStyle, style]}
        placeholderTextColor={placeholderColor}
        editable={editable}
        multiline
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    </View>
  );
}

export { TextArea };
export type { TextAreaProps, TextAreaSize, TextAreaVariant };
