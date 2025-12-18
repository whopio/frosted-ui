import type { AccentColor, Color } from '@/lib/types';
import { useThemeTokens } from '@/lib/use-theme-tokens';
import * as RadioGroupPrimitive from '@rn-primitives/radio-group';
import * as React from 'react';
import { Platform, View, type ViewStyle } from 'react-native';

type RadioSize = '1' | '2' | '3';

type RadioGroupContextValue = {
  size: RadioSize;
  color: AccentColor;
  value?: string;
};

const RadioGroupContext = React.createContext<RadioGroupContextValue>({
  size: '2',
  color: 'blue',
});

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
// Size 1: --radio-group-item-size: var(--space-4) = 16px
// Size 2: --radio-group-item-size: calc(var(--space-4) * 1.25) = 20px
// Size 3: --radio-group-item-size: var(--space-5) = 24px
function getItemSize(size: RadioSize): number {
  switch (size) {
    case '1':
      return 16;
    case '2':
      return 20;
    case '3':
      return 24;
  }
}

type RadioGroupRootProps = RadioGroupPrimitive.RootProps & {
  size?: RadioSize;
  color?: Color;
};

function RadioGroupRoot({ size = '2', color, value, ...props }: RadioGroupRootProps) {
  const accentColor = resolveAccentFromColor(color);

  const contextValue = React.useMemo(
    () => ({ size, color: accentColor, value }),
    [size, accentColor, value]
  );

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <RadioGroupPrimitive.Root value={value} {...props} />
    </RadioGroupContext.Provider>
  );
}

type RadioGroupItemProps = Omit<RadioGroupPrimitive.ItemProps, 'children'>;

function RadioGroupItem({ value, disabled, onFocus, onBlur, ...props }: RadioGroupItemProps) {
  const { size, color, value: groupValue } = React.useContext(RadioGroupContext);
  const { colors } = useThemeTokens();
  const [focused, setFocused] = React.useState(false);

  const palette = colors.palettes[color];
  const gray = colors.palettes.gray;

  const itemSize = getItemSize(size);
  const indicatorSize = itemSize * 0.4; // 40% scale like CSS

  // Check if this item is selected
  const isChecked = value === groupValue;

  // Base style
  const baseStyle: ViewStyle = {
    width: itemSize,
    height: itemSize,
    borderRadius: itemSize / 2,
    alignItems: 'center',
    justifyContent: 'center',
  };

  // State-based styles
  let stateStyle: ViewStyle;
  if (disabled) {
    stateStyle = {
      backgroundColor: gray.a3,
      borderWidth: 1,
      borderColor: gray.a6,
    };
  } else if (isChecked) {
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

  // Indicator style
  const indicatorColor = disabled ? gray.a8 : palette['9-contrast'];
  const indicatorStyle: ViewStyle = {
    width: indicatorSize,
    height: indicatorSize,
    borderRadius: indicatorSize / 2,
    backgroundColor: indicatorColor,
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

  // Reset default focus styles on the root
  const rootStyle: ViewStyle = {
    outlineWidth: 0,
  };

  return (
    <RadioGroupPrimitive.Item
      value={value}
      disabled={disabled}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={rootStyle}
      {...props}>
      <View style={combinedStyle}>
        <RadioGroupPrimitive.Indicator>
          <View style={indicatorStyle} />
        </RadioGroupPrimitive.Indicator>
      </View>
    </RadioGroupPrimitive.Item>
  );
}

const RadioGroup = {
  Root: RadioGroupRoot,
  Item: RadioGroupItem,
};

export { RadioGroup, RadioGroupItem, RadioGroupRoot };
export type { RadioGroupItemProps, RadioGroupRootProps };
