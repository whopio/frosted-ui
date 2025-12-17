import { useThemeVars } from '@/lib/use-theme-vars';
import * as LabelPrimitive from '@rn-primitives/label';
import { StyleSheet, type TextStyle, type ViewStyle } from 'react-native';

type LabelProps = LabelPrimitive.TextProps & {
  disabled?: boolean;
};

function Label({
  onPress,
  onLongPress,
  onPressIn,
  onPressOut,
  disabled,
  style,
  ...props
}: LabelProps) {
  const { colors, typography, fontWeights } = useThemeVars();

  const rootStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    opacity: disabled ? 0.5 : 1,
    cursor: (disabled ? 'not-allowed' : 'default') as ViewStyle['cursor'],
  };

  const textStyle: TextStyle = {
    color: colors.palettes.gray['12'],
    fontSize: typography['2'].fontSize,
    lineHeight: typography['2'].lineHeight,
    letterSpacing: typography['2'].letterSpacing,
    fontWeight: fontWeights.medium,
  };

  const combinedTextStyle = StyleSheet.flatten([textStyle, style]);

  return (
    <LabelPrimitive.Root
      style={rootStyle}
      onPress={onPress}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={disabled}>
      <LabelPrimitive.Text style={combinedTextStyle} {...props} />
    </LabelPrimitive.Root>
  );
}

export { Label };
export type { LabelProps };

