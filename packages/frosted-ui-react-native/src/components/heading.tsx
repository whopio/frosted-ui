import { Text } from '@/components/text';
import { themeVars } from '@/lib/theme-vars';
import type { AccentColor } from '@/lib/types';
import type * as React from 'react';
import { Platform } from 'react-native';

type HeadingSize = keyof typeof themeVars.typography;
type HeadingWeight = keyof typeof themeVars.fontWeights;

type HeadingProps = Omit<React.ComponentProps<typeof Text>, 'variant' | 'color'> & {
  size?: HeadingSize;
  weight?: HeadingWeight;
  color?: AccentColor;
};

function Heading({ size = '6', weight = 'bold', color, role: roleProp, ...props }: HeadingProps) {
  const role = Platform.OS === 'web' ? (roleProp ?? 'heading') : roleProp;

  return <Text size={size} weight={weight} color={color} role={role} {...props} />;
}

export { Heading };
export type { HeadingProps };
