import { TextStyleContext } from '@/components/ui/text';
import { themeVars } from '@/lib/theme-vars';
import type { AccentColor, Color } from '@/lib/types';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { Pressable, View, type StyleProp, type ViewStyle } from 'react-native';

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
  ...pressableProps
}: ButtonProps) {
  const [pressed, setPressed] = React.useState(false);
  const accentColor = resolveAccentFromColor(color);

  const palette = themeVars.colors.light.palettes[accentColor];
  const gray = themeVars.colors.light.palettes.gray;

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
  };

  // Size styles
  const sizeStyle: ViewStyle =
    size === '1'
      ? { height: 24, paddingHorizontal: 8, borderRadius: 6 }
      : size === '2'
        ? { height: 32, paddingHorizontal: 12, borderRadius: 8 }
        : size === '3'
          ? { height: 40, paddingHorizontal: 16, borderRadius: 10 }
          : { height: 48, paddingHorizontal: 24, borderRadius: 14 };

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
        backgroundColor = pressed ? palette['10'] : palette['9'];
        break;
      case 'soft':
        backgroundColor = pressed ? palette.a5 : palette.a3;
        break;
      case 'surface':
        backgroundColor = pressed
          ? themeVars.colors.light.surface
          : themeVars.colors.light.panelSolid;
        borderColor = themeVars.colors.light.stroke;
        borderWidth = 1;
        break;
      case 'ghost':
        backgroundColor = pressed ? palette.a4 : undefined;
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

  const combinedStyle: ViewStyle = {
    ...baseStyle,
    ...sizeStyle,
    ...variantStyle,
    ...surfaceShadow,
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
          {...pressableProps}>
          {children}
        </Pressable>
      </TextStyleContext.Provider>
    </View>
  );
}

export { Button };
export type { ButtonProps };
