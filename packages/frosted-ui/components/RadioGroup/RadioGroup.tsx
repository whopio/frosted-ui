'use client';

import {
  RadioGroupProps as RadixRadioGroupProps,
  Root,
} from '@radix-ui/react-radio-group';
import { cn } from '../../lib/classnames';
import { ColorScheme, Size } from '../../lib/shared-component-types';
import { RadioItem, RadioItemProps } from '../RadioItem';

export type RadioSize = Extract<Size, 'md' | 'lg'>;
export const RadioSizes: { [key: string]: RadioSize } = {
  Medium: 'md',
  Large: 'lg',
};

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
  size?: RadioSize;
  colorScheme?: RadioColorScheme;
  isDisabled?: boolean;
  isRequired?: boolean;
}

export const RadioGroup = ({
  items,
  size = 'md',
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
        <RadioItem
          key={item?.label}
          size={size}
          colorScheme={colorScheme}
          {...item}
        />
      ))}
    </Root>
  );
};
