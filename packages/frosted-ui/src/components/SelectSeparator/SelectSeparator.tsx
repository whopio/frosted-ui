import type * as Radix from '@radix-ui/react-primitive';
import { Separator } from '@radix-ui/react-select';
import React, { forwardRef } from 'react';
import { cn } from '../../lib/classnames';

export const SelectSeparator = forwardRef<
  React.ElementRef<typeof Separator>,
  Radix.ComponentPropsWithoutRef<typeof Separator> & { className?: string }
>(({ className }, ref) => {
  return (
    <Separator ref={ref} className={cn('bg-whop-stroke h-px', className)} />
  );
});

SelectSeparator.displayName = 'SelectSeparator';
