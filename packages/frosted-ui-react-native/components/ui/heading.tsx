import { Text } from '@/components/ui/text';
import type { AccentColor } from '@/lib/types';
import { cn } from '@/lib/utils';
import type * as React from 'react';
import { Platform } from 'react-native';

const headingSizes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
const headingWeights = ['light', 'regular', 'medium', 'semi-bold', 'bold'] as const;

const sizeClasses: Record<(typeof headingSizes)[number], string> = {
  '0': 'text-0',
  '1': 'text-1',
  '2': 'text-2',
  '3': 'text-3',
  '4': 'text-4',
  '5': 'text-5',
  '6': 'text-6',
  '7': 'text-7',
  '8': 'text-8',
  '9': 'text-9',
};

const weightClasses: Record<(typeof headingWeights)[number], string> = {
  light: 'font-light',
  regular: 'font-normal',
  medium: 'font-medium',
  'semi-bold': 'font-semibold',
  bold: 'font-bold',
};

type HeadingSize = (typeof headingSizes)[number];
type HeadingWeight = (typeof headingWeights)[number];

type HeadingProps = Omit<React.ComponentProps<typeof Text>, 'variant' | 'color'> & {
  size?: HeadingSize;
  weight?: HeadingWeight;
  color?: AccentColor;
};

function Heading({
  size = '6',
  weight = 'bold',
  color,
  className,
  role: roleProp,
  ...props
}: HeadingProps) {
  const role = Platform.OS === 'web' ? (roleProp ?? 'heading') : roleProp;
  const colorClass = color ? 'text-accent-11' : 'text-gray-12';

  return (
    <Text
      className={cn(colorClass, sizeClasses[size], weightClasses[weight], className)}
      color={color}
      role={role}
      {...props}
    />
  );
}

export { Heading };
export type { HeadingProps };
