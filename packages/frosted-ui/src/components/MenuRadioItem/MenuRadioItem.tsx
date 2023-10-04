import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ItemIndicator, RadioItem } from '@radix-ui/react-dropdown-menu';
import type * as Radix from '@radix-ui/react-primitive';
import React, { forwardRef } from 'react';
import { cn } from '../../lib/classnames';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

export const MenuRadioItem = forwardRef<
  React.ElementRef<typeof RadioItem>,
  Radix.ComponentPropsWithoutRef<typeof RadioItem>
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <RadioItem
      ref={forwardedRef}
      className={cn(
        'mx-1 flex items-center rounded pl-3 pr-2 transition h-8',
        'focus:bg-whop-hover cursor-pointer select-none outline-none focus:outline-none',
        'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
        className,
      )}
      {...props}
    >
      <span className="mr-3 flex items-center justify-center h-8 w-4">
        <ItemIndicator className="text-sm">
          <Icon icon={faCheck} />
        </ItemIndicator>
      </span>
      <Typography as="span" variant="subtitle3">
        {children}
      </Typography>
    </RadioItem>
  );
});

MenuRadioItem.displayName = 'MenuRadioItem';
