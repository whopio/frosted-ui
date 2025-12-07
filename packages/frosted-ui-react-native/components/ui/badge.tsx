import { TextStyleContext } from '@/components/ui/text';
import {
  getNativeAccentAlphaColor,
  getNativeAccentColor,
  getNativeAccentContrastColor,
} from '@/lib/native-colors';
import type { AccentColor, Color } from '@/lib/types';
import * as Slot from '@rn-primitives/slot';
import * as React from 'react';
import { View, type ViewStyle } from 'react-native';

const badgeSizes = ['1', '2'] as const;
const badgeVariants = ['solid', 'soft', 'surface', 'outline'] as const;

type BadgeSize = (typeof badgeSizes)[number];
type BadgeVariant = (typeof badgeVariants)[number];

type BadgeProps = React.ComponentProps<typeof View> & {
  asChild?: boolean;
  size?: BadgeSize;
  variant?: BadgeVariant;
  color?: Color;
};

function Badge({ variant = 'soft', size = '1', color, style, asChild, ...props }: BadgeProps) {
  const Component = asChild ? Slot.View : View;
  const isAccentColor = color && !['danger', 'warning', 'success', 'info'].includes(color);
  const accentColor = (isAccentColor ? color : 'blue') as AccentColor;

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

  // Variant-specific background / border colors using native color helpers
  let variantStyle: ViewStyle = {};
  switch (variant) {
    case 'solid': {
      variantStyle = {
        backgroundColor: getNativeAccentColor(accentColor, '9'),
        borderWidth: 0,
      };
      break;
    }
    case 'soft': {
      variantStyle = {
        backgroundColor: getNativeAccentAlphaColor(accentColor, 'a3'),
        borderWidth: 0,
      };
      break;
    }
    case 'surface': {
      variantStyle = {
        backgroundColor: getNativeAccentAlphaColor(accentColor, 'a2'),
        borderColor: getNativeAccentAlphaColor(accentColor, 'a7'),
        borderWidth: 1,
      };
      break;
    }
    case 'outline': {
      variantStyle = {
        borderColor: getNativeAccentAlphaColor(accentColor, 'a8'),
        borderWidth: 1,
      };
      break;
    }
    default:
      variantStyle = {};
  }

  const mergedStyle = [baseStyle, sizeStyle, variantStyle, style] as ViewStyle[];

  // Text styles for any Text rendered inside Badge
  const textColor =
    variant === 'solid'
      ? getNativeAccentContrastColor(accentColor)
      : (getNativeAccentAlphaColor(accentColor, 'a11') ?? getNativeAccentColor(accentColor, '11'));

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
