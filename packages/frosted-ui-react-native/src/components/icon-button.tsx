import { TextStyleContext } from '@/components/text';
import {
  getButtonFocusStyle,
  getButtonPressedFilter,
  getButtonShadowStyle,
  getButtonSizeStyle,
  getButtonTextColor,
  getButtonVariantStyle,
  resolveAccentFromColor,
  type ButtonSize,
  type ButtonVariant,
} from '@/lib/button-styles';
import type { Color } from '@/lib/types';
import { useThemeTokens } from '@/lib/use-theme-tokens';
import * as React from 'react';
import { Platform, Pressable, type StyleProp, type ViewStyle } from 'react-native';

type IconButtonProps = Omit<React.ComponentProps<typeof Pressable>, 'style'> & {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: Color;
  style?: StyleProp<ViewStyle>;
};

function IconButton({
  variant = 'surface',
  size = '2',
  color,
  style,
  disabled,
  children,
  onPressIn,
  onPressOut,
  onFocus,
  onBlur,
  onHoverIn,
  onHoverOut,
  ...pressableProps
}: IconButtonProps) {
  const { colors } = useThemeTokens();
  const [pressed, setPressed] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const accentColor = resolveAccentFromColor(color);

  const gray = colors.palettes.gray;
  // All AccentColors should be in palettes, but TypeScript's index signature types
  // don't guarantee it with bracket notation. Fallback to gray as defensive programming.
  const palette = colors.palettes[accentColor] ?? gray;

  const textColor = getButtonTextColor(variant, palette, gray, disabled ?? false);

  // Base layout
  const baseStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: disabled ? ('not-allowed' as ViewStyle['cursor']) : 'pointer',
  };

  // Size styles for IconButton: square (width = height), no horizontal padding
  const sizeStyle = getButtonSizeStyle(size, true);

  // Variant background / border, including pressed state
  const variantStyle = getButtonVariantStyle(
    variant,
    colors,
    palette,
    gray,
    disabled ?? false,
    pressed,
    hovered
  );

  const surfaceShadow = getButtonShadowStyle(variant, disabled ?? false, pressed);

  // Focus outline using accent-a8
  const focusStyle = getButtonFocusStyle(palette, focused, disabled ?? false);

  // Solid button pressed filter (web only): brightness(0.92) saturate(1.1)
  const pressedFilter = getButtonPressedFilter(variant, pressed, disabled ?? false);

  const combinedStyle: ViewStyle = {
    ...baseStyle,
    ...sizeStyle,
    ...variantStyle,
    ...surfaceShadow,
    ...focusStyle,
    ...pressedFilter,
  };

  const handlePressIn = React.useCallback(
    (e: Parameters<NonNullable<typeof onPressIn>>[0]) => {
      setPressed(true);
      onPressIn?.(e);
    },
    [onPressIn]
  );

  const handlePressOut = React.useCallback(
    (e: Parameters<NonNullable<typeof onPressOut>>[0]) => {
      setPressed(false);
      onPressOut?.(e);
    },
    [onPressOut]
  );

  const handleHoverIn = React.useCallback(
    (e: Parameters<NonNullable<typeof onHoverIn>>[0]) => {
      setHovered(true);
      onHoverIn?.(e);
    },
    [onHoverIn]
  );

  const handleHoverOut = React.useCallback(
    (e: Parameters<NonNullable<typeof onHoverOut>>[0]) => {
      setHovered(false);
      onHoverOut?.(e);
    },
    [onHoverOut]
  );

  const handleFocus = React.useCallback(
    (e: Parameters<NonNullable<typeof onFocus>>[0]) => {
      // Only show focus ring on keyboard navigation (focus-visible)
      if (Platform.OS === 'web') {
        const target = e.target as unknown as HTMLElement | undefined;
        if (target?.matches?.(':focus-visible')) {
          setFocused(true);
        }
      }
      onFocus?.(e);
    },
    [onFocus]
  );

  const handleBlur = React.useCallback(
    (e: Parameters<NonNullable<typeof onBlur>>[0]) => {
      setFocused(false);
      onBlur?.(e);
    },
    [onBlur]
  );

  return (
    <TextStyleContext.Provider
      value={{
        size: size as '1' | '2' | '3' | '4',
        weight: 'medium',
        color: textColor,
      }}>
      <Pressable
        style={[combinedStyle, style]}
        role="button"
        disabled={disabled}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onHoverIn={handleHoverIn}
        onHoverOut={handleHoverOut}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...pressableProps}>
        {children}
      </Pressable>
    </TextStyleContext.Provider>
  );
}

export { IconButton };
export type { IconButtonProps };

