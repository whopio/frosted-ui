import type { AccentColor, Color } from '@/lib/types';
import { useThemeTokens } from '@/lib/use-theme-tokens';
import * as SeparatorPrimitive from '@rn-primitives/separator';
import { type ViewStyle } from 'react-native';

const separatorSizes = ['1', '2', '3', '4'] as const;

type SeparatorSize = (typeof separatorSizes)[number];

function resolveAccentFromColor(color?: Color): AccentColor {
  if (!color) return 'gray';
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

// Size mapping from CSS:
// Size 1: var(--space-4) = 16px
// Size 2: var(--space-6) = 32px
// Size 3: var(--space-9) = 64px
// Size 4: 100%
function getSeparatorSize(size: SeparatorSize): number | '100%' {
  switch (size) {
    case '1':
      return 16;
    case '2':
      return 32;
    case '3':
      return 64;
    case '4':
      return '100%';
  }
}

type SeparatorProps = SeparatorPrimitive.RootProps & {
  size?: SeparatorSize;
  color?: Color;
};

function Separator({
  size = '1',
  color = 'gray',
  orientation = 'horizontal',
  decorative = true,
  style,
  ...props
}: SeparatorProps) {
  const { colors } = useThemeTokens();

  const accentColor = resolveAccentFromColor(color);
  const palette = colors.palettes[accentColor];

  const separatorSize = getSeparatorSize(size);

  // Base style - thickness is always 1px
  const baseStyle: ViewStyle = {
    backgroundColor: palette.a6,
    flexShrink: 0,
  };

  // Orientation-based sizing
  const orientationStyle: ViewStyle =
    orientation === 'horizontal'
      ? {
          height: 1,
          width: separatorSize,
        }
      : {
          width: 1,
          height: separatorSize,
        };

  const combinedStyle: ViewStyle = {
    ...baseStyle,
    ...orientationStyle,
  };

  return (
    <SeparatorPrimitive.Root
      decorative={decorative}
      orientation={orientation}
      style={[combinedStyle, style]}
      {...props}
    />
  );
}

export { Separator, separatorSizes };
export type { SeparatorProps, SeparatorSize };
