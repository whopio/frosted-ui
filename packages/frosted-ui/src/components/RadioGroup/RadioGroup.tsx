'use client';

import {
  RadioGroupProps as RadixRadioGroupProps,
  Root,
} from '@radix-ui/react-radio-group';
import React from 'react';
import { cn } from '../../lib/classnames';
import { ColorScheme } from '../../lib/shared-component-types';
import { RadioItem, RadioItemProps } from '../RadioItem';

export type RadioColorScheme = Extract<
  ColorScheme,
  'brand' | 'black' | 'purple'
>;
export const RadioColorSchemes: { [key: string]: RadioColorScheme } = {
  Brand: 'brand',
  Black: 'black',
  Purple: 'purple',
};

export interface RadioGroupProps {
  items: RadioItemProps[];
  colorScheme?: RadioColorScheme;
  isDisabled?: boolean;
  isRequired?: boolean;
}

export const RadioGroup = ({
  items,
  colorScheme = 'brand',
  isDisabled = false,
  isRequired = false,
  ...props
}: RadioGroupProps & Omit<RadixRadioGroupProps, 'disabled'>) => {
  return (
    <Root
      disabled={isDisabled}
      required={isRequired}
      className={cn(
        'space-y-2',
        'disabled:cursor-not-allowed disabled:opacity-40',
      )}
      {...props}
    >
      {items.map((item) => (
        <RadioItem key={item?.label} colorScheme={colorScheme} {...item} />
      ))}
    </Root>
  );
};
