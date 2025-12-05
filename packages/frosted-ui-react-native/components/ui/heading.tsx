import { Text } from '@/components/ui/text';
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

const ARIA_LEVEL = {
  h1: '1',
  h2: '2',
  h3: '3',
  h4: '4',
  h5: '5',
  h6: '6',
} as const;

type HeadingSize = (typeof headingSizes)[number];
type HeadingWeight = (typeof headingWeights)[number];
type HeadingAs = keyof typeof ARIA_LEVEL;

type HeadingProps = Omit<React.ComponentProps<typeof Text>, 'variant'> & {
  size?: HeadingSize;
  weight?: HeadingWeight;
  as?: HeadingAs;
};

function Heading({
  size = '6',
  weight = 'bold',
  as = 'h1',
  className,
  role: roleProp,
  ...props
}: HeadingProps) {
  const role = Platform.OS === 'web' ? (roleProp ?? 'heading') : roleProp;
  const ariaLevelProps =
    Platform.OS === 'web'
      ? ({
          'aria-level': ARIA_LEVEL[as],
        } as const)
      : undefined;

  return (
    <Text
      className={cn('text-gray-12', sizeClasses[size], weightClasses[weight], className)}
      role={role}
      {...ariaLevelProps}
      {...props}
    />
  );
}

export { Heading };
export type { HeadingProps };
