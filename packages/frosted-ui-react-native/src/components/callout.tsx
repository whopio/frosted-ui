import { TextStyleContext } from '@/components/text';
import type { AccentColor, Color } from '@/lib/types';
import { useThemeVars } from '@/lib/use-theme-vars';
import * as React from 'react';
import { View, type ViewProps, type ViewStyle } from 'react-native';

const calloutSizes = ['1', '2', '3'] as const;
const calloutVariants = ['soft', 'surface', 'outline'] as const;

type CalloutSize = (typeof calloutSizes)[number];
type CalloutVariant = (typeof calloutVariants)[number];

type CalloutContextValue = {
  size: CalloutSize;
  color: AccentColor;
};

const CalloutContext = React.createContext<CalloutContextValue>({
  size: '2',
  color: 'gray',
});

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

// Size to text size mapping (matching web version)
function getTextSize(size: CalloutSize): '1' | '2' | '3' {
  return size === '3' ? '3' : '2';
}

// Size styles (matching web CSS)
// --space-2: 8px, --space-3: 12px, --space-4: 16px, --space-5: 20px
// --radius-5: 10px, --radius-6: 12px
function getSizeStyle(size: CalloutSize): ViewStyle {
  switch (size) {
    case '1':
      // padding: var(--space-3) var(--space-4) = 12px 16px
      // column-gap: var(--space-2) = 8px
      // border-radius: var(--radius-5) = 10px
      return {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 10,
        gap: 8,
      };
    case '2':
      // padding: var(--space-4) = 16px
      // column-gap: var(--space-3) = 12px
      // border-radius: var(--radius-5) = 10px
      return {
        padding: 16,
        borderRadius: 10,
        gap: 12,
      };
    case '3':
      // padding: var(--space-5) = 20px
      // column-gap: var(--space-3) = 12px
      // border-radius: var(--radius-6) = 12px
      return {
        padding: 20,
        borderRadius: 12,
        gap: 12,
      };
  }
}

type CalloutRootProps = ViewProps & {
  size?: CalloutSize;
  variant?: CalloutVariant;
  color?: Color;
};

function CalloutRoot({
  size = '2',
  variant = 'soft',
  color,
  style,
  children,
  ...props
}: CalloutRootProps) {
  const { colors } = useThemeVars();
  const accentColor = resolveAccentFromColor(color);
  const palette = colors.palettes[accentColor];

  const baseStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'flex-start',
  };

  const sizeStyle = getSizeStyle(size);

  let variantStyle: ViewStyle = {};
  switch (variant) {
    case 'soft':
      variantStyle = {
        backgroundColor: palette.a3,
      };
      break;
    case 'surface':
      variantStyle = {
        backgroundColor: palette.a2,
        borderColor: palette.a6,
        borderWidth: 1,
      };
      break;
    case 'outline':
      variantStyle = {
        borderColor: palette.a7,
        borderWidth: 1,
      };
      break;
  }

  const combinedStyle: ViewStyle = {
    ...baseStyle,
    ...sizeStyle,
    ...variantStyle,
  };

  const contextValue = React.useMemo(() => ({ size, color: accentColor }), [size, accentColor]);

  // Text color for children
  const textColor = palette.a11 || palette['11'];

  return (
    <CalloutContext.Provider value={contextValue}>
      <TextStyleContext.Provider
        value={{
          size: getTextSize(size),
          weight: 'medium',
          color: textColor,
        }}>
        <View style={[combinedStyle, style]} {...props}>
          {children}
        </View>
      </TextStyleContext.Provider>
    </CalloutContext.Provider>
  );
}

type CalloutIconProps = ViewProps;

function CalloutIcon({ style, children, ...props }: CalloutIconProps) {
  const { size } = React.useContext(CalloutContext);

  // Icon container sizing
  const iconSize = size === '1' ? 16 : size === '2' ? 18 : 20;

  const iconStyle: ViewStyle = {
    width: iconSize,
    height: iconSize,
    flexShrink: 0,
    marginTop: size === '1' ? 1 : 2,
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <View style={[iconStyle, style]} {...props}>
      {children}
    </View>
  );
}

type CalloutTextProps = ViewProps;

function CalloutText({ style, children, ...props }: CalloutTextProps) {
  const textStyle: ViewStyle = {
    flex: 1,
  };

  return (
    <View style={[textStyle, style]} {...props}>
      {children}
    </View>
  );
}

const Callout = {
  Root: CalloutRoot,
  Icon: CalloutIcon,
  Text: CalloutText,
};

export { Callout, CalloutIcon, CalloutRoot, CalloutText };
export type { CalloutIconProps, CalloutRootProps, CalloutTextProps };
