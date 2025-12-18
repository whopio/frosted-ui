import type { AccentColor, Color } from '@/lib/types';
import { useThemeVars } from '@/lib/use-theme-vars';
import * as SwitchPrimitive from '@rn-primitives/switch';
import * as React from 'react';
import { Platform, View, type ViewStyle } from 'react-native';

type SwitchSize = '1' | '2' | '3';

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
// Size 1: --switch-height: var(--space-4) = 16px
// Size 2: --switch-height: var(--space-5) = 24px
// Size 3: --switch-height: var(--space-6) = 32px
// --switch-width: calc(var(--switch-height) * 1.75)
// --switch-padding: 1px
// --switch-thumb-size: calc(var(--switch-height) - var(--switch-padding) * 2)
function getSizeStyle(size: SwitchSize): {
  height: number;
  width: number;
  padding: number;
  thumbSize: number;
  translateX: number;
} {
  const padding = 1;
  switch (size) {
    case '1': {
      const height = 16;
      const width = height * 1.75; // 28
      const thumbSize = height - padding * 2; // 14
      const translateX = width - height; // 12
      return { height, width, padding, thumbSize, translateX };
    }
    case '2': {
      const height = 24;
      const width = height * 1.75; // 42
      const thumbSize = height - padding * 2; // 22
      const translateX = width - height; // 18
      return { height, width, padding, thumbSize, translateX };
    }
    case '3': {
      const height = 32;
      const width = height * 1.75; // 56
      const thumbSize = height - padding * 2; // 30
      const translateX = width - height; // 24
      return { height, width, padding, thumbSize, translateX };
    }
  }
}

type SwitchProps = Omit<SwitchPrimitive.RootProps, 'children'> & {
  size?: SwitchSize;
  color?: Color;
};

function Switch({
  size = '2',
  color,
  checked,
  disabled,
  onCheckedChange,
  onFocus,
  onBlur,
  ...props
}: SwitchProps) {
  const { colors } = useThemeVars();
  const [focused, setFocused] = React.useState(false);

  const accentColor = resolveAccentFromColor(color);
  const palette = colors.palettes[accentColor];
  const gray = colors.palettes.gray;

  const { height, width, padding, thumbSize, translateX } = getSizeStyle(size);

  // Track base style
  const trackBaseStyle: ViewStyle = {
    width,
    height,
    borderRadius: height / 2,
    padding,
    justifyContent: 'center',
  };

  // Track state-based styles
  let trackStateStyle: ViewStyle;
  if (disabled) {
    // Disabled state - same inset shadow as unchecked
    trackStateStyle = {
      backgroundColor: gray.a3,
      ...(Platform.OS === 'web' && {
        boxShadow: `inset 0 0 0 1px ${gray.a3}, inset 0 1.5px 2px 0 ${gray.a2}`,
      }),
    };
  } else if (checked) {
    // Checked state - accent background with inset shadow for inner border
    trackStateStyle = {
      backgroundColor: palette['9'],
      ...(Platform.OS === 'web' && {
        boxShadow: `inset 0 0 0 1px ${gray.a3}, inset 0 0 0 1px ${palette.a4}, inset 0 1.5px 2px 0 rgba(0,0,0,0.1)`,
      }),
    };
  } else {
    // Unchecked state - gray background with inset shadow (--shadow-1)
    // --shadow-1: inset 0 0 0 1px var(--gray-a5), inset 0 1.5px 2px 0 var(--gray-a2)
    trackStateStyle = {
      backgroundColor: gray.a4,
      ...(Platform.OS === 'web' && {
        boxShadow: `inset 0 0 0 1px ${gray.a5}, inset 0 1.5px 2px 0 ${gray.a2}`,
      }),
    };
  }

  // Focus style
  const focusStyle: ViewStyle | undefined =
    focused && !disabled
      ? {
          outlineWidth: 2,
          outlineStyle: 'solid',
          outlineColor: palette.a8,
          outlineOffset: 2,
        }
      : undefined;

  const trackCombinedStyle: ViewStyle = {
    ...trackBaseStyle,
    ...trackStateStyle,
    ...focusStyle,
  };

  // Thumb base style
  const thumbBaseStyle: ViewStyle = {
    width: thumbSize,
    height: thumbSize,
    borderRadius: thumbSize / 2,
    backgroundColor: 'white',
  };

  // Thumb shadow based on state
  let thumbShadowStyle: ViewStyle;
  if (disabled) {
    // Disabled thumb - visible border like other states
    thumbShadowStyle = {
      backgroundColor: gray['2'],
      ...(Platform.OS === 'web'
        ? {
            boxShadow: `0 0 0 1px ${gray.a3}, 0 1px 3px rgba(0,0,0,0.05)`,
          }
        : {
            shadowColor: '#000',
            shadowOpacity: 0.05,
            shadowOffset: { width: 0, height: 1 },
            shadowRadius: 2,
          }),
    };
  } else if (checked) {
    // Checked thumb shadow - includes accent border and left shadow
    thumbShadowStyle =
      Platform.OS === 'web'
        ? {
            boxShadow: `0 1px 3px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.05), 0 0 0 1px ${palette.a4}, -1px 0 1px rgba(0,0,0,0.1)`,
          }
        : {
            shadowColor: '#000',
            shadowOpacity: 0.15,
            shadowOffset: { width: -1, height: 1 },
            shadowRadius: 2,
            elevation: 2,
          };
  } else {
    // Unchecked thumb shadow
    thumbShadowStyle =
      Platform.OS === 'web'
        ? {
            boxShadow: `0 1px 3px rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.08)`,
          }
        : {
            shadowColor: '#000',
            shadowOpacity: 0.15,
            shadowOffset: { width: 0, height: 1 },
            shadowRadius: 2,
            elevation: 2,
          };
  }

  // Thumb position based on checked state
  const thumbTransformStyle: ViewStyle = {
    transform: [{ translateX: checked ? translateX : 0 }],
  };

  const thumbCombinedStyle: ViewStyle = {
    ...thumbBaseStyle,
    ...thumbShadowStyle,
    ...thumbTransformStyle,
  };

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

  // Reset default focus styles
  const rootStyle: ViewStyle = {
    outlineWidth: 0,
  };

  return (
    <SwitchPrimitive.Root
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={rootStyle}
      {...props}>
      <View style={trackCombinedStyle}>
        <SwitchPrimitive.Thumb>
          <View style={thumbCombinedStyle} />
        </SwitchPrimitive.Thumb>
      </View>
    </SwitchPrimitive.Root>
  );
}

export { Switch };
export type { SwitchProps };
