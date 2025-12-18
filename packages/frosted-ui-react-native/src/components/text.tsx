import { themeVars } from '@/lib/theme-vars';
import type { AccentColor } from '@/lib/types';
import { useThemeVars } from '@/lib/use-theme-vars';
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

function Text({ asChild = false, size, weight, color, role, style, ...props }: TextProps) {
  const { colors, typography, fontWeights } = useThemeVars();
  const textStyleContext = React.useContext(TextStyleContext);
  const Component = asChild ? Slot.Text : RNText;

  const effectiveSize = size ?? textStyleContext?.size;
  const effectiveWeight = weight ?? textStyleContext?.weight;

  // Resolve text color:
  // 1. If color prop is set, use that palette's shade 11
  // 2. If context provides a color, use that
  // 3. Otherwise, use default foreground color (gray-12)
  const resolvedColor = color
    ? colors.palettes[color]['11']
    : (textStyleContext?.color ?? colors.palettes.gray['12']);

  const typo = effectiveSize ? typography[effectiveSize] : undefined;
  const fontWeightValue = effectiveWeight ? fontWeights[effectiveWeight] : undefined;

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
    <Component style={[typographyStyle, weightStyle, colorStyle, style]} role={role} {...props} />
  );
}

export { Text, TextClassContext, TextStyleContext };
export type { TextProps, TextSize };
