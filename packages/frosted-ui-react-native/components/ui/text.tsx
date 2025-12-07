import { getNativeAccentColor } from '@/lib/native-colors';
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
type TextStyleContextValue = {
  size?: TextSize;
  weight?: TextWeight;
  color?: string;
};

const TextStyleContext = React.createContext<TextStyleContextValue | undefined>(undefined);

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
  const textStyleContext = React.useContext(TextStyleContext);
  const Component = asChild ? Slot.Text : RNText;

  const effectiveSize = size ?? textStyleContext?.size;
  const effectiveWeight = weight ?? textStyleContext?.weight;

  // Use direct color values from Frosted colors on all platforms.
  // Priority: explicit color prop > context color override > default gray-12.
  const resolvedColor =
    color && getNativeAccentColor(color, '11')
      ? getNativeAccentColor(color, '11')
      : (textStyleContext?.color ?? getNativeAccentColor('gray', '12'));

  const colorStyle = {
    color: resolvedColor,
  };

  return (
    <Component
      className={cn(
        textClass,
        effectiveSize && sizeClasses[effectiveSize],
        effectiveWeight && weightClasses[effectiveWeight],
        className
      )}
      style={[colorStyle, style]}
      role={role}
      {...props}
    />
  );
}

export { Text, TextClassContext, TextStyleContext };
export type { TextProps };
