import { TextStyleContext } from '@/components/text';
import { themeTokens } from '@/lib/theme-tokens';
import type { Color } from '@/lib/types';
import { useThemeTokens } from '@/lib/use-theme-tokens';
import * as React from 'react';
import {
  Platform,
  Text as RNText,
  type GestureResponderEvent,
  type TextProps as RNTextProps,
  type TextStyle,
} from 'react-native';

type LinkSize = keyof typeof themeTokens.typography;
type LinkWeight = keyof typeof themeTokens.fontWeights;
type LinkUnderline = 'auto' | 'hover' | 'always';

type LinkProps = Omit<RNTextProps, 'style'> & {
  size?: LinkSize;
  weight?: LinkWeight;
  color?: Color;
  underline?: LinkUnderline;
  disabled?: boolean;
  style?: TextStyle;
};

function Link({
  size,
  weight,
  color,
  underline = 'auto',
  children,
  style,
  disabled,
  onPress,
  onPressIn,
  onPressOut,
  ...textProps
}: LinkProps) {
  const { colors, typography, fontWeights } = useThemeTokens();
  const textStyleContext = React.useContext(TextStyleContext);
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);

  // Inherit size from context, fallback to '3'
  const effectiveSize = size ?? textStyleContext?.size ?? '3';
  const effectiveWeight = weight ?? textStyleContext?.weight;

  // Resolve color palette - default to accent
  const palette = colors.palettes[color ?? 'accent'] ?? colors.palettes.accent;
  const gray = colors.palettes.gray;

  // Text color: accent a11 by default
  const textColor = palette.a11;

  // Underline color: mix of accent and gray (approximating the CSS color-mix)
  const underlineColor = palette.a7;

  // Typography
  const typo = typography[effectiveSize];
  const fontWeightValue = effectiveWeight ? fontWeights[effectiveWeight] : undefined;

  // Determine if underline should show
  // - 'always': always show
  // - 'auto'/'hover': show on hover (web) or press (mobile)
  const isInteracting = hovered || pressed;
  const showUnderline =
    underline === 'always' || ((underline === 'auto' || underline === 'hover') && isInteracting);

  const textStyle: TextStyle = {
    fontSize: typo.fontSize,
    lineHeight: typo.lineHeight,
    letterSpacing: typo.letterSpacing,
    color: disabled ? gray.a8 : textColor,
    ...(fontWeightValue ? { fontWeight: fontWeightValue } : {}),
    ...(showUnderline
      ? {
          textDecorationLine: 'underline',
          textDecorationColor: underlineColor,
          textDecorationStyle: 'solid',
        }
      : {}),
    ...style,
  };

  const handlePressIn = React.useCallback(
    (e: GestureResponderEvent) => {
      setPressed(true);
      onPressIn?.(e);
    },
    [onPressIn]
  );

  const handlePressOut = React.useCallback(
    (e: GestureResponderEvent) => {
      setPressed(false);
      onPressOut?.(e);
    },
    [onPressOut]
  );

  const handlePress = React.useCallback(
    (e: GestureResponderEvent) => {
      if (!disabled) {
        onPress?.(e);
      }
    },
    [disabled, onPress]
  );

  // Web-specific hover handlers
  const webProps =
    Platform.OS === 'web'
      ? {
          onMouseEnter: () => setHovered(true),
          onMouseLeave: () => setHovered(false),
        }
      : {};

  return (
    <RNText
      style={textStyle}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      suppressHighlighting
      {...webProps}
      {...textProps}>
      {children}
    </RNText>
  );
}

export { Link };
export type { LinkProps, LinkSize, LinkUnderline };
