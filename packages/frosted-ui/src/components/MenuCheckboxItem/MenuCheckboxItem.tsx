import {
  CheckboxItem,
  MenuCheckboxItemProps,
} from '@radix-ui/react-dropdown-menu';
import type * as Radix from '@radix-ui/react-primitive';
import React, { forwardRef } from 'react';
import { cn } from '../../lib/classnames';
import { Checkbox } from '../Checkbox';
import { Typography } from '../Typography';

export type CheckedState = MenuCheckboxItemProps['checked'];

export const MenuCheckboxItem = forwardRef<
  React.ElementRef<typeof CheckboxItem>,
  Radix.ComponentPropsWithoutRef<typeof CheckboxItem>
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <CheckboxItem
      ref={forwardedRef}
      className={cn(
        'mx-1 flex items-center rounded pl-3 pr-2 transition h-8',
        'focus:bg-whop-hover cursor-pointer select-none outline-none focus:outline-none',
        'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
        className,
      )}
      {...props}
    >
      <Checkbox checked={props.checked} colorScheme="black" className="mr-3" />

      <Typography as="span" variant="subtitle3">
        {children}
      </Typography>
    </CheckboxItem>
  );
});

MenuCheckboxItem.displayName = 'MenuCheckboxItem';
