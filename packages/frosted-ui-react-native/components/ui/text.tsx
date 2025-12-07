import { themeVars } from '@/lib/theme-vars';
import type { AccentColor } from '@/lib/types';
import { cn } from '@/lib/utils';
import * as Slot from '@rn-primitives/slot';
import * as React from 'react';
import { Text as RNText } from 'react-native';

type TextSize = keyof typeof themeVars.typography;
type TextWeight = keyof typeof themeVars.fontWeights;

type TextProps = Omit<React.ComponentProps<typeof RNText>, 'size' | 'weight' | 'color'> & {
  asChild?: boolean;
  size?: TextSize;
  weight?: TextWeight;
  color?: AccentColor;
};

const TextClassContext = React.createContext<string | undefined>(undefined);
type TextStyleContextValue = {
  size?: TextSize;
  weight?: TextWeight;
  color?: string;
};

const TextStyleContext = React.createContext<TextStyleContextValue | undefined>(undefined);

function Text({
  className,
  asChild = false,
  size,
  weight,
  color,
  role,
  style,
  ...props
}: TextProps) {
  const textStyleContext = React.useContext(TextStyleContext);
  const Component = asChild ? Slot.Text : RNText;

  const effectiveSize = size ?? textStyleContext?.size;
  const effectiveWeight = weight ?? textStyleContext?.weight;

  // Use direct color values from Frosted colors on all platforms.
  // Priority: explicit color prop > context color override > default gray-12.
  const resolvedColor =
    (color && themeVars.colors.light.palettes[color]['11']) ??
    textStyleContext?.color ??
    themeVars.colors.light.palettes.gray['12'];

  const typo = effectiveSize ? themeVars.typography[effectiveSize] : undefined;
  const fontWeightValue = effectiveWeight ? themeVars.fontWeights[effectiveWeight] : undefined;

  const typographyStyle = typo
    ? {
        fontSize: typo.fontSize,
        lineHeight: typo.lineHeight,
        letterSpacing: typo.letterSpacing,
      }
    : undefined;

  const colorStyle = { color: resolvedColor };
  const weightStyle = fontWeightValue ? { fontWeight: fontWeightValue } : undefined;

  return (
    <Component
      className={cn(className)}
      style={[typographyStyle, weightStyle, colorStyle, style]}
      role={role}
      {...props}
    />
  );
}

export { Text, TextClassContext, TextStyleContext };
export type { TextProps };
