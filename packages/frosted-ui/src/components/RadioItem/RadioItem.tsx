import type * as Radix from '@radix-ui/react-primitive';
import {
  Indicator,
  Item,
  RadioGroupItemProps,
} from '@radix-ui/react-radio-group';
import React, { forwardRef, useId } from 'react';
import { cn } from '../../lib/classnames';
import { RadioColorScheme, RadioSize } from '../RadioGroup';
import { Typography } from '../Typography';

export type RadioItemProps = {
  label?: string;
  size?: RadioSize;
  colorScheme?: RadioColorScheme;
  labelClassName?: string;
} & RadioGroupItemProps;

export const RadioItem = forwardRef<
  React.ElementRef<typeof Item>,
  Radix.ComponentPropsWithoutRef<typeof Item> & {
    label?: string;
    size?: RadioSize;
    colorScheme?: RadioColorScheme;
    labelClassName?: string;
  }
>(
  (
    {
      label,
      // TODO: size doesn't infer proper type. Fix that
      size = 'sm',
      colorScheme = 'brand',
      className,
      labelClassName,
      ...props
    },
    forwardedRef,
  ) => {
    const defaultId = useId();
    return (
      <div className="flex cursor-pointer items-center disabled:cursor-not-allowed">
        <Item
          ref={forwardedRef}
          className={cn(
            'bg-whop-background border-whop-stroke-dark cursor-pointer rounded-full border-2 outline-none disabled:cursor-not-allowed',

            {
              'state-checked:bg-whop-primary state-checked:border-whop-primary':
                colorScheme === 'brand',
              'state-checked:bg-whop-black state-checked:border-whop-black':
                colorScheme === 'black',
              'state-checked:bg-whop-field-highlight state-checked:border-whop-field-highlight':
                colorScheme === 'purple',
            },
            {
              'h-4 w-4': size === 'md',
              'h-5 w-5': size === 'lg',
            },
            className,
          )}
          id={defaultId}
          {...props}
        >
          <Indicator
            className={cn(
              "after:bg-whop-background relative flex h-full w-full items-center justify-center after:block after:rounded-[50%] after:content-['']",
              {
                'after:h-1.5 after:w-1.5': size === 'md',
                'after:h-[7.5px] after:w-[7.5px]': size === 'lg',
              },
            )}
          />
        </Item>
        <label
          className={cn(
            'text-whop-black ml-3 cursor-pointer disabled:cursor-not-allowed',
            labelClassName,
          )}
          htmlFor={defaultId}
        >
          <Typography
            as="span"
            variant={size == 'lg' ? 'text1' : 'text3'}
            className="block"
          >
            {label}
          </Typography>
        </label>
      </div>
    );
  },
);

RadioItem.displayName = 'RadioItem';
