import { TextStyleContext } from '@/components/text';
import type { AccentColor, Color } from '@/lib/types';
import { useThemeVars } from '@/lib/use-theme-vars';
import * as Slot from '@rn-primitives/slot';
import * as React from 'react';
import { View, type ViewStyle } from 'react-native';

type BadgeSize = '1' | '2';
type BadgeVariant = 'solid' | 'soft' | 'surface' | 'outline';

type BadgeProps = React.ComponentProps<typeof View> & {
  asChild?: boolean;
  size?: BadgeSize;
  variant?: BadgeVariant;
  color?: Color;
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

function Badge({ variant = 'soft', size = '1', color, style, asChild, ...props }: BadgeProps) {
  const { colors } = useThemeVars();
  const Component = asChild ? Slot.View : View;
  const accentColor = resolveAccentFromColor(color);
  const palette = colors.palettes[accentColor];

  // Base layout (same on all platforms)
  const baseStyle: ViewStyle = {
    // layout
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  };

  const sizeStyle: ViewStyle =
    size === '1'
      ? {
          height: 20,
          paddingHorizontal: 8,
          borderRadius: 6,
        }
      : {
          height: 28,
          paddingHorizontal: 12,
          borderRadius: 8,
        };

  // Variant-specific background / border colors
  let variantStyle: ViewStyle = {};
  switch (variant) {
    case 'solid': {
      variantStyle = {
        backgroundColor: palette['9'],
        borderWidth: 0,
      };
      break;
    }
    case 'soft': {
      variantStyle = {
        backgroundColor: palette.a3,
        borderWidth: 0,
      };
      break;
    }
    case 'surface': {
      variantStyle = {
        backgroundColor: palette.a2,
        borderColor: palette.a7,
        borderWidth: 1,
      };
      break;
    }
    case 'outline': {
      variantStyle = {
        borderColor: palette.a8,
        borderWidth: 1,
      };
      break;
    }
    default:
      variantStyle = {};
  }

  const mergedStyle = [baseStyle, sizeStyle, variantStyle, style] as ViewStyle[];

  // Text styles for any Text rendered inside Badge
  const textColor = variant === 'solid' ? palette['9-contrast'] : palette.a11 || palette['11'];

  return (
    <TextStyleContext.Provider
      value={{
        size: size === '1' ? '1' : '2',
        weight: 'medium',
        color: textColor,
      }}>
      <Component style={mergedStyle} {...props} />
    </TextStyleContext.Provider>
  );
}

export { Badge };
export type { BadgeProps };
