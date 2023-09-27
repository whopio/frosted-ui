import type * as Radix from '@radix-ui/react-primitive';
import {
  Group,
  Label as LabelPrimitive,
  SelectGroupProps as RadixSelectGroupProps,
} from '@radix-ui/react-select';
import React, { forwardRef } from 'react';
import { cn } from '../../lib/classnames';
import { SelectSeparator } from '../SelectSeparator';
import { Typography } from '../Typography';

export type SelectGroupProps = {
  label?: string;
  className?: string;
  separatorTop?: boolean;
  separatorBottom?: boolean;
} & RadixSelectGroupProps;

export const SelectGroup = forwardRef<
  React.ElementRef<typeof Group>,
  Radix.ComponentPropsWithoutRef<typeof Group> & SelectGroupProps
>(
  (
    {
      children,
      label,
      className,
      separatorTop = true,
      separatorBottom = false,
    },
    ref,
  ) => {
    return (
      <>
        {separatorTop && <SelectSeparator className="mt-1" />}
        <Group ref={ref} className={cn('mt-1', className)}>
          {label && (
            <LabelPrimitive className="text-whop-dark-gray mt-3 ml-3 mb-1 uppercase">
              <Typography as="div" variant="overline4">
                {label}
              </Typography>
            </LabelPrimitive>
          )}
          {children}
        </Group>
        {separatorBottom && <SelectSeparator className="my-1" />}
      </>
    );
  },
);

SelectGroup.displayName = 'SelectGroup';
