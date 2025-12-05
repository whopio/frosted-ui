import { TextClassContext } from '@/components/ui/text';
import { getAccentColorTheme } from '@/lib/color-utils';
import type { AccentColor, Color } from '@/lib/types';
import { cn } from '@/lib/utils';
import * as Slot from '@rn-primitives/slot';
import { cva } from 'class-variance-authority';
import * as React from 'react';
import { Platform, View, type ViewStyle } from 'react-native';

const badgeSizes = ['1', '2'] as const;
const badgeVariants = ['solid', 'soft', 'surface', 'outline'] as const;

const badgeVariantsCva = cva(
  cn(
    'box-border shrink-0 flex-row items-center justify-center self-start font-medium',
    Platform.select({
      web: 'whitespace-nowrap',
    })
  ),
  {
    variants: {
      variant: {
        solid: 'bg-accent-9',
        soft: 'bg-accent-a3',
        surface: 'bg-accent-a2 border-accent-a7 border',
        outline: 'border-accent-a8 border',
      },
      size: {
        '1': 'h-[20px] gap-1 rounded-[6px] px-2',
        '2': 'h-[28px] gap-1.5 rounded-[8px] px-3',
      },
    },
    defaultVariants: {
      variant: 'soft',
      size: '1',
    },
  }
);

const badgeTextVariants = cva('', {
  variants: {
    variant: {
      solid: 'text-accent-9-contrast',
      soft: 'text-accent-a11',
      surface: 'text-accent-a11',
      outline: 'text-accent-a11',
    },
    size: {
      '1': 'text-1',
      '2': 'text-2',
    },
  },
  defaultVariants: {
    variant: 'soft',
    size: '1',
  },
});

type BadgeSize = (typeof badgeSizes)[number];
type BadgeVariant = (typeof badgeVariants)[number];

type BadgeProps = React.ComponentProps<typeof View> & {
  asChild?: boolean;
  size?: BadgeSize;
  variant?: BadgeVariant;
  color?: Color;
};

function Badge({
  className,
  variant = 'soft',
  size = '1',
  color,
  style,
  asChild,
  ...props
}: BadgeProps) {
  const Component = asChild ? Slot.View : View;
  // Only apply accent theme for accent colors, not semantic colors
  const accentTheme =
    color && !['danger', 'warning', 'success', 'info'].includes(color)
      ? (getAccentColorTheme(color as AccentColor) as ViewStyle)
      : undefined;

  const textColorClass = badgeTextVariants({ variant, size });

  const mergedStyle = accentTheme ? [accentTheme, style] : style;

  return (
    <TextClassContext.Provider value={textColorClass}>
      <Component
        className={cn(badgeVariantsCva({ variant, size }), className)}
        style={mergedStyle}
        {...props}
      />
    </TextClassContext.Provider>
  );
}

export { Badge, badgeTextVariants, badgeVariantsCva };
export type { BadgeProps };
