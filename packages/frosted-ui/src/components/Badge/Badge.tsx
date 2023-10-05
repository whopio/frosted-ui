import React from 'react';
import { cn } from '../../lib/classnames';
import { ColorScheme, Size } from '../../lib/shared-component-types';
import { Text } from '../Text';

export type BadgeSize = Extract<Size, 'sm' | 'md'>;
export const BadgeSizes: { [key: string]: BadgeSize } = {
  Small: 'sm',
  Medium: 'md',
};

export type BadgeColorScheme = Extract<
  ColorScheme,
  | 'purple'
  | 'brand'
  | 'success-green'
  | 'warning-yellow'
  | 'error-red'
  | 'dark-gray'
  | 'black'
>;
export const BadgeColorSchemes: { [key: string]: BadgeColorScheme } = {
  Purple: 'purple',
  Brand: 'brand',
  'Success Green': 'success-green',
  'Warning Yellow': 'warning-yellow',
  'Error Red': 'error-red',
  'Dark Gray': 'dark-gray',
  Black: 'black',
};

export type BadgeVariant = 'default' | 'light' | 'light-anchor';
export const BadgeVariants: { [key: string]: BadgeVariant } = {
  Default: 'default',
  Light: 'light',
  'Light anchor': 'light-anchor',
};
export interface BadgeProps {
  text: string;
  variant?: BadgeVariant;
  colorScheme?: BadgeColorScheme;
  size?: BadgeSize;
  className?: string;
}

export const Badge = ({
  text,
  variant = 'default',
  colorScheme = 'brand',
  size = 'md',
  className,
  ...props
}: BadgeProps) => {
  return (
    <div
      className={cn(
        'text-whop-background inline-flex w-auto items-center justify-center rounded-full border border-transparent',
        className,
        {
          'h-[18px] px-1.5': size === 'sm',
          'h-6 px-2': size === 'md',
        },
        {
          // Default variants
          'bg-whop-field-highlight':
            colorScheme === 'purple' && variant === 'default',
          'bg-whop-primary': colorScheme === 'brand' && variant === 'default',
          'bg-whop-success-green':
            colorScheme === 'success-green' && variant === 'default',
          'bg-whop-warning-yellow':
            colorScheme === 'warning-yellow' && variant === 'default',
          'bg-whop-error-red':
            colorScheme === 'error-red' && variant === 'default',
          'bg-whop-dark-gray':
            colorScheme === 'dark-gray' && variant === 'default',
          'bg-whop-black': colorScheme === 'black' && variant === 'default',

          // Light variant
          'bg-whop-field-highlight/10 text-whop-field-highlight':
            colorScheme === 'purple' && variant === 'light',
          'bg-whop-primary/10 text-whop-primary':
            colorScheme === 'brand' && variant === 'light',
          'bg-whop-tag-green-background text-whop-tag-green':
            colorScheme === 'success-green' && variant === 'light',
          'bg-whop-tag-warning-background text-whop-tag-warning':
            colorScheme === 'warning-yellow' && variant === 'light',
          'bg-whop-tag-error-background text-whop-tag-error':
            colorScheme === 'error-red' && variant === 'light',
          'bg-whop-dark-gray/10 text-whop-dark-gray':
            colorScheme === 'dark-gray' && variant === 'light',
          'bg-whop-black/10 text-whop-black':
            colorScheme === 'black' && variant === 'light',

          // Light anchor variant
          'bg-whop-field-highlight/10 text-whop-field-highlight border-whop-field-highlight/[14%]':
            colorScheme === 'purple' && variant === 'light-anchor',
          'bg-whop-primary/10 text-whop-primary border-whop-primary/[14%]':
            colorScheme === 'brand' && variant === 'light-anchor',
          'bg-whop-tag-green-background text-whop-tag-green border-whop-tag-green/[14%]':
            colorScheme === 'success-green' && variant === 'light-anchor',
          'bg-whop-tag-warning-background text-whop-tag-warning border-whop-tag-warning/[14%]':
            colorScheme === 'warning-yellow' && variant === 'light-anchor',
          'bg-whop-tag-error-background text-whop-tag-error border-whop-tag-error/[14%]':
            colorScheme === 'error-red' && variant === 'light-anchor',
          'bg-whop-dark-gray/10 text-whop-dark-gray border-whop-dark-gray/[14%]':
            colorScheme === 'dark-gray' && variant === 'light-anchor',
          'bg-whop-black/10 text-whop-black border-whop-black/[14%]':
            colorScheme === 'black' && variant === 'light-anchor',
        },
      )}
      {...props}
    >
      <Text as="span" variant="button3">
        {text}
      </Text>
    </div>
  );
};
