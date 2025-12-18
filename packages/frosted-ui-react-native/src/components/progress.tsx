import type { AccentColor, Color } from '@/lib/types';
import { useThemeTokens } from '@/lib/use-theme-tokens';
import * as React from 'react';
import { View, type ViewProps, type ViewStyle } from 'react-native';

type ProgressSize = '1' | '2' | '3' | '4' | '5' | '6';

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

// Size styles from CSS:
// Size 1: 2px, Size 2: 4px, Size 3: 6px, Size 4: 8px, Size 5: 12px, Size 6: 16px
function getHeight(size: ProgressSize): number {
  switch (size) {
    case '1':
      return 2;
    case '2':
      return 4;
    case '3':
      return 6;
    case '4':
      return 8;
    case '5':
      return 12;
    case '6':
      return 16;
  }
}

type ProgressProps = ViewProps & {
  size?: ProgressSize;
  color?: Color;
  value?: number;
  max?: number;
};

function Progress({ size = '6', color, value = 0, max = 100, style, ...props }: ProgressProps) {
  const { colors } = useThemeTokens();

  const accentColor = resolveAccentFromColor(color);
  const palette = colors.palettes[accentColor];
  const gray = colors.palettes.gray;

  const height = getHeight(size);

  // Calculate progress percentage
  const progress = Math.max(0, Math.min((value || 0) / max, 1));
  const progressPercent = progress * 100;

  // Track style
  const trackStyle: ViewStyle = {
    width: '100%',
    height,
    borderRadius: height / 2, // Fully rounded (radius-thumb)
    backgroundColor: gray.a4,
    overflow: 'hidden',
  };

  // Indicator style
  const indicatorStyle: ViewStyle = {
    height: '100%',
    width: `${progressPercent}%`,
    backgroundColor: palette['9'],
    borderRadius: height / 2,
  };

  return (
    <View
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      style={[trackStyle, style]}
      {...props}>
      <View style={indicatorStyle} />
    </View>
  );
}

export { Progress };
export type { ProgressProps };
