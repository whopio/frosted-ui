import { Label } from '@radix-ui/react-dropdown-menu';
import type * as Radix from '@radix-ui/react-primitive';
import { forwardRef } from 'react';

export const MenuLabel = forwardRef<
  React.ElementRef<typeof Label>,
  Radix.ComponentPropsWithoutRef<typeof Label>
>(({ children, ...props }, forwardedRef) => {
  return (
    <Label
      ref={forwardedRef}
      className="text-overline4 text-whop-dark-gray mb-1 ml-3 mt-3 uppercase"
      {...props}
    >
      {children}
    </Label>
  );
});

MenuLabel.displayName = 'MenuLabel';
