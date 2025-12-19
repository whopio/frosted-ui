import { useThemeTokens } from '@/lib/use-theme-tokens';
import { View, type ViewProps, type ViewStyle } from 'react-native';

type CardVariant = 'soft' | 'surface' | 'ghost';

type CardProps = ViewProps &
  React.RefAttributes<View> & {
    variant?: CardVariant;
  };

function Card({ variant = 'surface', style, ...props }: CardProps) {
  const { colors } = useThemeTokens();
  const gray = colors.palettes.gray;

  const baseStyle: ViewStyle = {
    padding: 16,
    borderRadius: 16,
    overflow: 'hidden',
  };

  let variantStyle: ViewStyle = {};

  switch (variant) {
    case 'soft':
      variantStyle = {
        backgroundColor: gray.a2,
      };
      break;
    case 'surface':
      variantStyle = {
        backgroundColor: colors.panelSolid,
        borderWidth: 1,
        borderColor: colors.stroke,
        shadowColor: '#000000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        elevation: 2,
      };
      break;
    case 'ghost':
      // No styles
      break;
  }

  const combinedStyle: ViewStyle = {
    ...baseStyle,
    ...variantStyle,
  };

  return <View style={[combinedStyle, style]} {...props} />;
}

export { Card };
export type { CardProps, CardVariant };
