import { Label } from '@radix-ui/react-dropdown-menu';
import type * as Radix from '@radix-ui/react-primitive';
import React, { forwardRef } from 'react';
import { Text } from '../Text';

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
      <Text as="span" variant="overline1" className="block">
        {children}
      </Text>
    </Label>
  );
});

MenuLabel.displayName = 'MenuLabel';
