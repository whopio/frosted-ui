import { getAccentColorTheme } from '@/lib/color-utils';
import type { AccentColor } from '@/lib/types';
import { cn } from '@/lib/utils';
import * as Slot from '@rn-primitives/slot';
import * as React from 'react';
import { Text as RNText } from 'react-native';

const textSizes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
const textWeights = ['light', 'regular', 'medium', 'semi-bold', 'bold'] as const;

const sizeClasses: Record<(typeof textSizes)[number], string> = {
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

const weightClasses: Record<(typeof textWeights)[number], string> = {
  light: 'font-light',
  regular: 'font-normal',
  medium: 'font-medium',
  'semi-bold': 'font-semibold',
  bold: 'font-bold',
};

type TextSize = (typeof textSizes)[number];
type TextWeight = (typeof textWeights)[number];

type TextProps = Omit<React.ComponentProps<typeof RNText>, 'size' | 'weight' | 'color'> & {
  asChild?: boolean;
  size?: TextSize;
  weight?: TextWeight;
  color?: AccentColor;
};

const TextClassContext = React.createContext<string | undefined>(undefined);

function Text({
  className,
  asChild = false,
  size,
  weight,
  color,
  role,
  style,
  ...props
}: TextProps) {
  const textClass = React.useContext(TextClassContext);
  const Component = asChild ? Slot.Text : RNText;
  const accentTheme = color ? getAccentColorTheme(color) : undefined;
  const colorClass = color ? 'text-accent-11' : 'text-gray-12';

  return (
    <Component
      className={cn(
        textClass,
        size && sizeClasses[size],
        weight && weightClasses[weight],
        colorClass,
        className
      )}
      style={[accentTheme, style]}
      role={role}
      {...props}
    />
  );
}

export { Text, TextClassContext };
export type { TextProps };
