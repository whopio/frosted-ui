import {
  getDisabledSoftStyle,
  getDisabledSurfaceStyle,
  getSoftVariantStyle,
  getSurfaceVariantStyle,
  getTextInputColors,
  hexToRgba,
  resolveAccentFromColor,
  type TextInputSize,
  type TextInputVariant,
} from '@/lib/text-input-styles';
import type { Color } from '@/lib/types';
import { useThemeVars } from '@/lib/use-theme-vars';
import * as React from 'react';
import {
  Platform,
  TextInput,
  View,
  type TextInputProps,
  type TextStyle,
  type ViewProps,
  type ViewStyle,
} from 'react-native';

// ============================================================================
// Types
// ============================================================================

type TextFieldSize = TextInputSize;
type TextFieldVariant = TextInputVariant;

// ============================================================================
// Context
// ============================================================================

interface TextFieldContextValue {
  size: TextFieldSize;
  variant: TextFieldVariant;
  color: ReturnType<typeof resolveAccentFromColor>;
  disabled?: boolean;
}

const TextFieldContext = React.createContext<TextFieldContextValue | undefined>(undefined);

// ============================================================================
// Size helpers
// ============================================================================

function getSizeStyle(size: TextFieldSize): {
  height: number;
  fontSize: number;
  borderRadius: number;
  paddingHorizontal: number;
} {
  switch (size) {
    case '1':
      return { height: 24, fontSize: 12, borderRadius: 6, paddingHorizontal: 6 }; // space-5
    case '2':
      return { height: 32, fontSize: 14, borderRadius: 8, paddingHorizontal: 8 }; // space-6
    case '3':
      return { height: 40, fontSize: 16, borderRadius: 10, paddingHorizontal: 12 }; // space-7
    case '4':
      return { height: 48, fontSize: 18, borderRadius: 14, paddingHorizontal: 12 }; // space-8
  }
}

function getSlotPadding(size: TextFieldSize): number {
  switch (size) {
    case '1':
    case '2':
      return 8;
    case '3':
      return 10;
    case '4':
      return 12;
  }
}

// ============================================================================
// TextField.Root
// ============================================================================

interface TextFieldRootProps extends ViewProps {
  size?: TextFieldSize;
  variant?: TextFieldVariant;
  color?: Color;
  disabled?: boolean;
  children: React.ReactNode;
}

function TextFieldRoot({
  size = '2',
  variant = 'surface',
  color = 'gray',
  disabled = false,
  style,
  children,
  ...props
}: TextFieldRootProps) {
  const { colors } = useThemeVars();
  const accentColor = resolveAccentFromColor(color);

  const sizeStyle = getSizeStyle(size);

  // Background and border based on variant
  let variantStyle =
    variant === 'surface'
      ? getSurfaceVariantStyle(colors)
      : getSoftVariantStyle(colors, accentColor);

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

  const rootStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    height: sizeStyle.height,
    borderRadius: sizeStyle.borderRadius,
    ...variantStyle,
  };

  return (
    <TextFieldContext.Provider value={{ size, variant, color: accentColor, disabled }}>
      <View style={[rootStyle, style]} {...props}>
        {children}
      </View>
    </TextFieldContext.Provider>
  );
}

// ============================================================================
// TextField.Slot
// ============================================================================

interface TextFieldSlotProps extends ViewProps {
  color?: Color;
  children?: React.ReactNode;
}

function TextFieldSlot({ color, style, children, ...props }: TextFieldSlotProps) {
  const context = React.useContext(TextFieldContext);
  const { colors } = useThemeVars();

  const accentColor = color ? resolveAccentFromColor(color) : undefined;
  const slotColor = accentColor ? colors.palettes[accentColor].a11 : colors.palettes.gray.a11;

  const padding = getSlotPadding(context?.size ?? '2');

  const slotStyle: ViewStyle = {
    flexShrink: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: padding,
    paddingHorizontal: padding,
  };

  if (!children) return null;

  return (
    <View style={[slotStyle, { opacity: 1 }, style]} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // Pass color to icon children if they accept it
          return React.cloneElement(child as React.ReactElement<{ color?: string }>, {
            color: slotColor,
          });
        }
        return child;
      })}
    </View>
  );
}

// ============================================================================
// TextField.Input
// ============================================================================

interface TextFieldInputProps extends Omit<TextInputProps, 'style'> {
  size?: TextFieldSize;
  variant?: TextFieldVariant;
  color?: Color;
  style?: TextStyle;
}

function TextFieldInput({
  size: sizeProp,
  variant: variantProp,
  color: colorProp,
  style,
  editable,
  ...props
}: TextFieldInputProps) {
  const context = React.useContext(TextFieldContext);
  const { colors } = useThemeVars();

  const size = sizeProp ?? context?.size ?? '2';
  const variant = variantProp ?? context?.variant ?? 'surface';
  const color = colorProp ? resolveAccentFromColor(colorProp) : (context?.color ?? 'gray');
  const disabled = editable === false || context?.disabled;

  const sizeStyle = getSizeStyle(size);

  // Text and placeholder colors based on variant and disabled state
  // TextField uses 0.6 opacity for soft variant placeholder (TextArea uses 0.65)
  const { textColor, placeholderColor: basePlaceholderColor } = getTextInputColors(
    variant,
    colors,
    color,
    disabled
  );
  const placeholderColor =
    variant === 'soft' && !disabled
      ? hexToRgba(colors.palettes[color]['12'], 0.6)
      : basePlaceholderColor;

  const inputStyle: TextStyle = {
    flex: 1,
    fontSize: sizeStyle.fontSize,
    color: textColor,
    paddingHorizontal: sizeStyle.paddingHorizontal,
    // Remove default styling
    ...(Platform.OS === 'web'
      ? ({
          outline: 'none',
          backgroundColor: 'transparent',
        } as TextStyle)
      : {}),
  };

  // If no context (no Root), wrap in Root
  const hasRoot = context !== undefined;

  const input = (
    <TextInput
      style={[inputStyle, style]}
      placeholderTextColor={placeholderColor}
      editable={editable}
      {...props}
    />
  );

  if (hasRoot) {
    return input;
  }

  return (
    <TextFieldRoot size={size} variant={variant} color={color} disabled={disabled}>
      {input}
    </TextFieldRoot>
  );
}

// ============================================================================
// Export composite component
// ============================================================================

const TextField = {
  Root: TextFieldRoot,
  Slot: TextFieldSlot,
  Input: TextFieldInput,
};

export { TextField, TextFieldInput, TextFieldRoot, TextFieldSlot };
export type {
  TextFieldInputProps,
  TextFieldRootProps,
  TextFieldSize,
  TextFieldSlotProps,
  TextFieldVariant,
};
