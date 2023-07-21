import { Content, Portal } from '@radix-ui/react-dropdown-menu';
import type * as Radix from '@radix-ui/react-primitive';
import React, { forwardRef } from 'react';
import { cn } from '../../lib/classnames';

export const MenuContent = forwardRef<
  React.ElementRef<typeof Portal>,
  Radix.ComponentPropsWithoutRef<typeof Portal>
>(({ children, className, container, ...props }, forwardedRef) => {
  return (
    <Portal container={container}>
      <Content
        ref={forwardedRef}
        align="start"
        className={cn(
          'border-whop-stroke-dark bg-whop-background z-50 mt-1.5 max-h-[var(--radix-dropdown-menu-content-available-height)] w-60 overflow-auto rounded-md border py-1 shadow-lg focus:outline-none',
          className,
        )}
        {...props}
      >
        {children}
      </Content>
    </Portal>
  );
});

MenuContent.displayName = 'MenuContent';
