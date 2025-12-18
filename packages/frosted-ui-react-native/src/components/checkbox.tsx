import type { Color } from '@/lib/types';
import { useThemeTokens } from '@/lib/use-theme-tokens';
import * as CheckboxPrimitive from '@rn-primitives/checkbox';
import { Check } from 'lucide-react-native';
import * as React from 'react';
import { Platform, View, type ViewStyle } from 'react-native';

type CheckboxSize = '1' | '2' | '3';

// Size styles from CSS:
// Size 1: --checkbox-size: var(--space-4) = 16px, border-radius: var(--radius-2) = 4px
// Size 2: --checkbox-size: calc(var(--space-4) * 1.25) = 20px, border-radius: var(--radius-3) = 6px
// Size 3: --checkbox-size: var(--space-5) = 24px, border-radius: var(--radius-3) = 6px
function getSizeStyle(size: CheckboxSize): {
  boxSize: number;
  borderRadius: number;
  iconSize: number;
} {
  switch (size) {
    case '1':
      return { boxSize: 16, borderRadius: 4, iconSize: 12 };
    case '2':
      return { boxSize: 20, borderRadius: 6, iconSize: 14 };
    case '3':
      return { boxSize: 24, borderRadius: 6, iconSize: 18 };
  }
}

type CheckboxProps = Omit<CheckboxPrimitive.RootProps, 'children'> & {
  size?: CheckboxSize;
  color?: Color;
};

function Checkbox({
  size = '2',
  color,
  checked,
  disabled,
  onFocus,
  onBlur,
  ...props
}: CheckboxProps) {
  const { colors } = useThemeTokens();
  const [focused, setFocused] = React.useState(false);
  const gray = colors.palettes.gray;
  // Semantic colors (accent, danger, etc.) are added by useThemeTokens
  // Fallback to gray if palette key doesn't exist
  const palette = colors.palettes[color ?? 'accent'] ?? gray;

  const { boxSize, borderRadius, iconSize } = getSizeStyle(size);

  // Base style
  const baseStyle: ViewStyle = {
    width: boxSize,
    height: boxSize,
    borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  };

  // State-based styles
  let stateStyle: ViewStyle;
  if (disabled) {
    stateStyle = {
      backgroundColor: gray.a2,
      borderWidth: 1,
      borderColor: gray.a5,
    };
  } else if (checked) {
    stateStyle = {
      backgroundColor: palette['9'],
    };
  } else {
    stateStyle = {
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: gray.a7,
    };
  }

  // Focus style - accent-a8 outline
  const focusStyle: ViewStyle | undefined =
    focused && !disabled
      ? {
          outlineWidth: 2,
          outlineStyle: 'solid',
          outlineColor: palette.a8,
          outlineOffset: 2,
        }
      : undefined;

  const combinedStyle: ViewStyle = {
    ...baseStyle,
    ...stateStyle,
    ...focusStyle,
  };

  // Icon color
  const iconColor = disabled ? gray.a8 : palette['9-contrast'];

  const handleFocus = React.useCallback(
    (e: Parameters<NonNullable<typeof onFocus>>[0]) => {
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

  // Reset default focus styles on the root
  const rootStyle: ViewStyle = {
    outlineWidth: 0,
  };

  return (
    <CheckboxPrimitive.Root
      checked={checked}
      disabled={disabled}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={rootStyle}
      {...props}>
      <View style={combinedStyle}>
        <CheckboxPrimitive.Indicator>
          <Check
            size={iconSize}
            strokeWidth={Platform.OS === 'web' ? 2.5 : 3.5}
            color={iconColor}
          />
        </CheckboxPrimitive.Indicator>
      </View>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
export type { CheckboxProps };
