import { RadioGroup } from '@radix-ui/react-dropdown-menu';
import type * as Radix from '@radix-ui/react-primitive';
import React, { forwardRef } from 'react';
import { cn } from '../../lib/classnames';
import { MenuLabel } from '../MenuLabel';
import { MenuSeparator } from '../MenuSeparator';

export const MenuRadioGroup = forwardRef<
  React.ElementRef<typeof RadioGroup>,
  Radix.ComponentPropsWithoutRef<typeof RadioGroup> & {
    label?: string;
    className?: string;
    separatorTop?: boolean;
    separatorBottom?: boolean;
  }
>(
  (
    {
      children,
      label,
      className,
      separatorTop = true,
      separatorBottom = false,
      ...props
    },
    ref,
  ) => {
    return (
      <>
        {separatorTop && <MenuSeparator className="mt-1" />}
        <RadioGroup ref={ref} className={cn('mt-1', className)} {...props}>
          {label && (
            <MenuLabel className="text-overline4 text-whop-dark-gray mb-1 ml-3 mt-3 uppercase">
              {label}
            </MenuLabel>
          )}
          {children}
        </RadioGroup>
        {separatorBottom && <MenuSeparator className="my-1" />}
      </>
    );
  },
);

MenuRadioGroup.displayName = 'MenuRadioGroup';
