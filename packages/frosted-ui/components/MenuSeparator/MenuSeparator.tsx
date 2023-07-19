'use client';

import { Separator } from '@radix-ui/react-dropdown-menu';
import type * as Radix from '@radix-ui/react-primitive';
import React, { forwardRef } from 'react';
import { cn } from '../../lib/classnames';

export const MenuSeparator = forwardRef<
  React.ElementRef<typeof Separator>,
  Radix.ComponentPropsWithoutRef<typeof Separator> & { className?: string }
>(({ className, ...props }, forwardedRef) => {
  return (
    <Separator
      ref={forwardedRef}
      className={cn('bg-whop-stroke my-1 h-px', className)}
      {...props}
    />
  );
});

MenuSeparator.displayName = 'MenuSeparator';
