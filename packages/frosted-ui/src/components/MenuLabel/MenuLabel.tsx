import { Label } from '@radix-ui/react-dropdown-menu';
import type * as Radix from '@radix-ui/react-primitive';
import React, { forwardRef } from 'react';
import { Typography } from '../Typography';

export const MenuLabel = forwardRef<
  React.ElementRef<typeof Label>,
  Radix.ComponentPropsWithoutRef<typeof Label>
>(({ children, ...props }, forwardedRef) => {
  return (
    <Label
      ref={forwardedRef}
      className="text-whop-dark-gray mb-1 ml-3 mt-3 uppercase"
      {...props}
    >
      <Typography as="span" variant="overline4" className="block">
        {children}
      </Typography>
    </Label>
  );
});

MenuLabel.displayName = 'MenuLabel';
