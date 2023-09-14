'use client';

import {
  RadioGroupProps as RadixRadioGroupProps,
  Root,
} from '@radix-ui/react-radio-group';
import React from 'react';
import { cn } from '../../lib/classnames';
import { ColorScheme, Size } from '../../lib/shared-component-types';
import { RadioCardItem, RadioCardItemProps } from '../RadioCardItem';

export type RadioCardVariant = 'radio' | 'no-radio';
export const RadioCardVariants: { [key: string]: RadioCardVariant } = {
  Radio: 'radio',
  'No radio': 'no-radio',
};

export type RadioCardSize = Extract<Size, 'sm' | 'md' | 'lg'>;
export const RadioCardSizes: { [key: string]: RadioCardSize } = {
  Small: 'sm',
  Medium: 'md',
  Large: 'lg',
};

export type RadioCardColorScheme = Extract<ColorScheme, 'brand' | 'purple'>;
export const RadioCardColorSchemes: { [key: string]: RadioCardColorScheme } = {
  Brand: 'brand',
  Purple: 'purple',
};

export interface RadioCardGroupProps {
  items?: RadioCardItemProps[];
  size?: RadioCardSize;
  colorScheme?: RadioCardColorScheme;
  variant?: RadioCardVariant;
  isDisabled?: boolean;
  isRequired?: boolean;
}

export const RadioCardGroup = ({
  items,
  size = 'md',
  colorScheme = 'brand',
  variant = 'radio',
  isDisabled = false,
  isRequired = false,
  children,
  ...props
}: RadioCardGroupProps & Omit<RadixRadioGroupProps, 'disabled'>) => {
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
      {!children &&
        items &&
        items.map((item) => (
          <RadioCardItem
            key={item.value}
            size={size}
            colorScheme={colorScheme}
            variant={variant}
            {...item}
          />
        ))}
      {children}
    </Root>
  );
};

RadioCardGroup.displayName = 'RadioCardGroup';
