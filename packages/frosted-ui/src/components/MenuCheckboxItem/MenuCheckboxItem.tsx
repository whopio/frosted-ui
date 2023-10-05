import {
  CheckboxItem,
  MenuCheckboxItemProps,
} from '@radix-ui/react-dropdown-menu';
import type * as Radix from '@radix-ui/react-primitive';
import React, { forwardRef } from 'react';
import { cn } from '../../lib/classnames';
import { Checkbox } from '../Checkbox';
import { Text } from '../Text';

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

      <Text as="span" variant="body2">
        {children}
      </Text>
    </CheckboxItem>
  );
});

MenuCheckboxItem.displayName = 'MenuCheckboxItem';
