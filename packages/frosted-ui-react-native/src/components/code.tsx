import { themeTokens } from '@/lib/theme-tokens';
import type { AccentColor } from '@/lib/types';
import { useThemeTokens } from '@/lib/use-theme-tokens';
import * as React from 'react';
import { Platform, Text as RNText, type TextStyle } from 'react-native';

type CodeSize = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type CodeVariant = 'solid' | 'soft' | 'outline' | 'ghost';
type CodeWeight = keyof typeof themeTokens.fontWeights;

type CodeProps = Omit<React.ComponentProps<typeof RNText>, 'style'> & {
  size?: CodeSize;
  variant?: CodeVariant;
  weight?: CodeWeight;
  color?: AccentColor;
  style?: TextStyle;
};

function Code({
  size = '2',
  variant = 'soft',
  weight,
  color = 'gray',
  style,
  ...props
}: CodeProps) {
  const { colors, typography, fontWeights } = useThemeTokens();
  const palette = colors.palettes[color] ?? colors.palettes.gray;

  // Typography from theme, with 0.95 font size adjustment like web
  const typo = typography[size];
  const fontSizeAdjust = 0.95;
  const adjustedFontSize = typo.fontSize * fontSizeAdjust;

  // Base typography style
  const baseStyle: TextStyle = {
    fontFamily: Platform.select({
      ios: 'Menlo',
      android: 'monospace',
      default:
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
    }),
    fontSize: adjustedFontSize,
    lineHeight: typo.lineHeight,
    letterSpacing: typo.letterSpacing,
  };

  // Font weight
  const weightStyle: TextStyle | undefined = weight
    ? { fontWeight: fontWeights[weight] }
    : undefined;

  // Variant styles
  let variantStyle: TextStyle = {};

  // Padding for non-ghost variants (matches web: 0.25em horizontal)
  const horizontalPadding = adjustedFontSize * 0.25;
  // Border radius: calc((0.5px + 0.2em) * var(--radius-factor))
  // Assuming radius-factor of 1, this is roughly 0.5 + 0.2 * fontSize
  const borderRadius = 0.5 + 0.2 * adjustedFontSize;

  switch (variant) {
    case 'ghost':
      variantStyle = {
        color: palette.a11,
      };
      break;

    case 'solid':
      variantStyle = {
        paddingHorizontal: horizontalPadding,
        paddingVertical: 1,
        backgroundColor: palette.a9,
        color: palette['9-contrast'],
        borderRadius,
        overflow: 'hidden',
      };
      break;

    case 'soft':
      variantStyle = {
        paddingHorizontal: horizontalPadding,
        paddingVertical: 1,
        backgroundColor: palette.a3,
        color: palette.a11,
        borderRadius,
        overflow: 'hidden',
      };
      break;

    case 'outline':
      variantStyle = {
        paddingHorizontal: horizontalPadding,
        paddingVertical: 1,
        color: palette.a11,
        borderRadius,
        overflow: 'hidden',
        // Use borderWidth on native, boxShadow on web
        ...(Platform.OS === 'web'
          ? {
              boxShadow: `inset 0 0 0 1px ${palette.a8}`,
            }
          : {
              borderWidth: 1,
              borderColor: palette.a8,
            }),
      };
      break;
  }

  return <RNText style={[baseStyle, weightStyle, variantStyle, style]} {...props} />;
}

export { Code };
export type { CodeProps, CodeSize, CodeVariant };
