import { TextClassContext } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import * as Slot from '@rn-primitives/slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Platform, View, ViewProps } from 'react-native';

const badgeVariants = cva(
  cn(
    'border-stroke group shrink-0 flex-row items-center justify-center gap-1 overflow-hidden rounded-md border px-2 py-0.5',
    Platform.select({
      web: 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive w-fit whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [&>svg]:pointer-events-none [&>svg]:size-3',
    })
  ),
  {
    variants: {
      variant: {
        default: cn(
          'border-transparent bg-primary',
          Platform.select({ web: '[a&]:hover:bg-primary/90' })
        ),
        secondary: cn(
          'border-transparent bg-secondary',
          Platform.select({ web: '[a&]:hover:bg-secondary/90' })
        ),
        destructive: cn(
          'border-transparent bg-destructive',
          Platform.select({ web: '[a&]:hover:bg-destructive/90' })
        ),
        outline: Platform.select({ web: '[a&]:hover:bg-accent [a&]:hover:text-accent-foreground' }),
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const badgeTextVariants = cva('text-xs font-medium', {
  variants: {
    variant: {
      default: 'text-gray-12-foreground',
      secondary: 'text-secondary-foreground',
      destructive: 'text-white',
      outline: 'text-gray-12',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type BadgeProps = ViewProps &
  React.RefAttributes<View> & {
    asChild?: boolean;
  } & VariantProps<typeof badgeVariants>;

function Badge({ className, variant, asChild, ...props }: BadgeProps) {
  const Component = asChild ? Slot.View : View;
  return (
    <TextClassContext.Provider value={badgeTextVariants({ variant })}>
      <Component className={cn(badgeVariants({ variant }), className)} {...props} />
    </TextClassContext.Provider>
  );
}

export { Badge, badgeTextVariants, badgeVariants };
export type { BadgeProps };
