import { TextClassContext } from '@/components/ui/text';
import { getAccentColorTheme } from '@/lib/color-utils';
import type { AccentColor, Color } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import * as React from 'react';
import { Platform, Pressable, type PressableStateCallbackType, type ViewStyle } from 'react-native';

const buttonSizes = ['1', '2', '3', '4'] as const;
const buttonVariants = ['solid', 'soft', 'surface', 'ghost'] as const;

const buttonVariantsCva = cva(
  cn(
    'group shrink-0 flex-row items-center justify-center gap-2',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-current',
    Platform.select({
      web: "focus-visible:outline-accent-a8 whitespace-nowrap outline-none transition-all focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed [&_svg:not([class*='size-'])]:size-4",
    })
  ),
  {
    variants: {
      variant: {
        solid: cn(
          'bg-accent-9 active:bg-accent-10 disabled:bg-gray-a3',
          Platform.select({
            web: 'hover:bg-accent-10 active:[filter:brightness(0.92)_saturate(1.1)] disabled:filter-none dark:active:[filter:brightness(1.08)]',
          })
        ),
        soft: cn(
          'bg-accent-a3 active:bg-accent-a5 disabled:bg-gray-a3',
          Platform.select({ web: 'hover:bg-accent-a4' })
        ),
        surface: cn(
          'bg-panel-solid border-stroke active:bg-gray-a3 disabled:bg-gray-a2 disabled:border-gray-a6 border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] active:shadow-none disabled:shadow-none',
          Platform.select({
            web: 'hover:border-gray-a7',
          })
        ),
        ghost: cn(
          'active:bg-accent-a4 disabled:bg-transparent',
          Platform.select({ web: 'hover:bg-accent-a3' })
        ),
      },
      size: {
        '1': 'h-6 gap-1 rounded-[6px] px-2',
        '2': 'h-8 gap-2 rounded-[8px] px-3',
        '3': 'h-10 gap-3 rounded-[10px] px-4',
        '4': 'h-12 gap-3 rounded-[14px] px-6',
      },
    },
    defaultVariants: {
      variant: 'surface',
      size: '2',
    },
  }
);

const buttonTextVariants = cva('font-medium', {
  variants: {
    variant: {
      solid: 'text-accent-9-contrast',
      soft: 'text-accent-a11',
      surface: 'text-accent-a11',
      ghost: 'text-accent-a11',
    },
    size: {
      '1': 'text-1',
      '2': 'text-2',
      '3': 'text-3',
      '4': 'text-4',
    },
    disabled: {
      true: 'text-gray-a8',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'surface',
    size: '2',
    disabled: false,
  },
});

type ButtonSize = (typeof buttonSizes)[number];
type ButtonVariant = (typeof buttonVariants)[number];

type ButtonProps = React.ComponentProps<typeof Pressable> & {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: Color;
};

function Button({
  className,
  variant = 'surface',
  size = '2',
  color,
  style,
  disabled,
  ...props
}: ButtonProps) {
  // Only apply accent theme for accent colors, not semantic colors
  const accentTheme =
    color && !['danger', 'warning', 'success', 'info'].includes(color)
      ? (getAccentColorTheme(color as AccentColor) as ViewStyle)
      : undefined;

  // For surface variant with gray color, use accent-12 instead of accent-a11
  const baseTextClass = buttonTextVariants({ variant, size, disabled: !!disabled });
  const textColorClass =
    variant === 'surface' && color === 'gray' && !disabled
      ? baseTextClass.replace('text-accent-a11', 'text-accent-12')
      : baseTextClass;

  const mergedStyle = accentTheme
    ? typeof style === 'function'
      ? (state: PressableStateCallbackType) => [accentTheme, style(state)]
      : [accentTheme, style]
    : style;

  return (
    <TextClassContext.Provider value={textColorClass}>
      <Pressable
        className={cn(buttonVariantsCva({ variant, size }), className)}
        style={mergedStyle}
        role="button"
        disabled={disabled}
        {...props}
      />
    </TextClassContext.Provider>
  );
}

export { Button, buttonTextVariants, buttonVariantsCva };
export type { ButtonProps };
