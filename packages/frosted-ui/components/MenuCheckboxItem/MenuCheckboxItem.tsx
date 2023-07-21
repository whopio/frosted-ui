import {
  CheckboxItem,
  MenuCheckboxItemProps,
} from '@radix-ui/react-dropdown-menu';
import type * as Radix from '@radix-ui/react-primitive';
import React, { forwardRef } from 'react';
import { cn } from '../../lib/classnames';
import { Checkbox } from '../Checkbox';
import { MenuSize } from '../Menu';

export type CheckedState = MenuCheckboxItemProps['checked'];

export const MenuCheckboxItem = forwardRef<
  React.ElementRef<typeof CheckboxItem>,
  Radix.ComponentPropsWithoutRef<typeof CheckboxItem> & { size?: MenuSize }
>(({ children, size = 'sm', className, ...props }, forwardedRef) => {
  return (
    <CheckboxItem
      ref={forwardedRef}
      className={cn(
        'text-subtitle3 mx-1 flex items-center rounded pl-3 pr-2 transition',
        'focus:bg-whop-hover cursor-pointer select-none outline-none focus:outline-none',
        'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
        {
          'h-8': size === 'sm',
          'h-10': size === 'md',
        },
        className,
      )}
      {...props}
    >
      <Checkbox checked={props.checked} colorScheme="black" className="mr-3" />

      {children}
    </CheckboxItem>
  );
});

MenuCheckboxItem.displayName = 'MenuCheckboxItem';
