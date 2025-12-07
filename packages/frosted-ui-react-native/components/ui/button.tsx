import { TextStyleContext } from '@/components/ui/text';
import type { AccentColor, Color } from '@/lib/types';
import { useThemeVars } from '@/lib/use-theme-vars';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { Platform, Pressable, View, type StyleProp, type ViewStyle } from 'react-native';

const buttonSizes = ['1', '2', '3', '4'] as const;
const buttonVariants = ['solid', 'soft', 'surface', 'ghost'] as const;

type ButtonSize = (typeof buttonSizes)[number];
type ButtonVariant = (typeof buttonVariants)[number];

type ButtonProps = Omit<React.ComponentProps<typeof Pressable>, 'style'> & {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: Color;
  style?: StyleProp<ViewStyle>;
};

function resolveAccentFromColor(color?: Color): AccentColor {
  if (!color) return 'blue';
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

function Button({
  className,
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
}: ButtonProps) {
  const { colors } = useThemeVars();
  const [pressed, setPressed] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const accentColor = resolveAccentFromColor(color);

  const palette = colors.palettes[accentColor];
  const gray = colors.palettes.gray;

  const textColor =
    disabled && gray.a8
      ? gray.a8
      : variant === 'solid'
        ? palette['9-contrast']
        : palette.a11 || palette['11'];

  // Base layout
  const baseStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: disabled ? ('not-allowed' as ViewStyle['cursor']) : 'pointer',
  };

  // Size styles (including gap between children)
  const sizeStyle: ViewStyle =
    size === '1'
      ? { height: 24, paddingHorizontal: 8, borderRadius: 6, gap: 4 }
      : size === '2'
        ? { height: 32, paddingHorizontal: 12, borderRadius: 8, gap: 8 }
        : size === '3'
          ? { height: 40, paddingHorizontal: 16, borderRadius: 10, gap: 12 }
          : { height: 48, paddingHorizontal: 24, borderRadius: 14, gap: 12 };

  // Variant background / border, including pressed state
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
        backgroundColor = pressed ? gray.a3 : colors.panelSolid;
        borderColor = pressed ? gray.a6 : hovered ? gray.a7 : gray.a5;
        borderWidth = 1;
        break;
      case 'ghost':
        backgroundColor = pressed ? palette.a4 : hovered ? palette.a3 : undefined;
        break;
    }
  }

  const variantStyle: ViewStyle = {
    backgroundColor,
    borderColor,
    borderWidth,
  };

  const surfaceShadow: ViewStyle | undefined =
    !disabled && !pressed && variant === 'surface'
      ? {
          shadowColor: '#000000',
          shadowOpacity: 0.05,
          shadowOffset: { width: 0, height: 1 },
          shadowRadius: 2,
          elevation: 2,
        }
      : undefined;

  // Focus outline using accent-a8
  const focusStyle: ViewStyle | undefined =
    focused && !disabled
      ? {
          outlineWidth: 2,
          outlineStyle: 'solid',
          outlineColor: palette.a8,
          outlineOffset: 2,
        }
      : undefined;

  // Solid button pressed filter (web only): brightness(0.92) saturate(1.1)
  const pressedFilter: ViewStyle | undefined =
    Platform.OS === 'web' && pressed && !disabled && variant === 'solid'
      ? { filter: 'brightness(0.92) saturate(1.1)' }
      : undefined;

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
    <View className={cn(className)} style={style}>
      <TextStyleContext.Provider
        value={{
          size: size as '1' | '2' | '3' | '4',
          weight: 'medium',
          color: textColor,
        }}>
        <Pressable
          style={combinedStyle}
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
    </View>
  );
}

export { Button };
export type { ButtonProps };
