import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/classnames';
import { IconDefinition } from '../../lib/icon-types';
import { ColorScheme, Size } from '../../lib/shared-component-types';
import { Icon } from '../Icon';

export type TextButtonVariant = 'underline' | 'arrow';
export const TextButtonVariants: { [key: string]: TextButtonVariant } = {
  Underline: 'underline',
  Arrow: 'arrow',
};

export type TextButtonSize = Exclude<Size, 'xs'>;
export const TextButtonSizes: { [key: string]: TextButtonSize } = {
  Small: 'sm',
  Medium: 'md',
  Large: 'lg',
  'Extra large': 'xl',
};

export type TextButtonColorScheme = Extract<
  ColorScheme,
  'dark-gray' | 'black' | 'purple' | 'error-red'
>;
export const TextButtonColorSchemes: { [key: string]: TextButtonColorScheme } =
  {
    Black: 'black',
    'Dark Gray': 'dark-gray',
    Purple: 'purple',
    'Error Red': 'error-red',
  };

export interface TextButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: TextButtonVariant;
  size?: TextButtonSize;
  colorScheme?: TextButtonColorScheme;
  icon?: IconDefinition;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const TextButton = ({
  children,
  variant = 'arrow',
  size = 'md',
  colorScheme = 'dark-gray',
  icon = faArrowRight,
  onClick,
  ...props
}: TextButtonProps) => {
  return (
    <button
      className="group inline-flex items-center"
      onClick={onClick}
      {...props}
    >
      <span
        className={cn(
          'transition',
          {
            'hover:underline': variant === 'underline',
          },
          {
            // Arrow
            'text-button5': size === 'sm' && variant === 'arrow',
            'text-button4': size === 'md' && variant === 'arrow',
            'text-button3': size === 'lg' && variant === 'arrow',
            'text-button2': size === 'xl' && variant === 'arrow',

            // Underline
            'text-text4': size === 'sm' && variant === 'underline',
            'text-text3': size === 'md' && variant === 'underline',
            'text-text2': size === 'lg' && variant === 'underline',
            'text-text1': size === 'xl' && variant === 'underline',
          },
          {
            'text-whop-dark-gray group-hover:text-whop-black':
              colorScheme === 'dark-gray',
            'text-whop-black': colorScheme === 'black',
            'text-whop-field-highlight group-hover:field-highlight-hover':
              colorScheme === 'purple',
            'text-whop-error-red group-hover:text-whop-tag-error':
              colorScheme === 'error-red',
          },
        )}
      >
        {children}
      </span>
      {variant === 'arrow' && (
        <Icon
          icon={icon}
          className={cn(
            'transition group-hover:translate-x-0.5',
            {
              'text-whop-dark-gray group-hover:text-whop-black':
                colorScheme === 'dark-gray',
              'text-whop-black': colorScheme === 'black',
              'text-whop-field-highlight group-hover:field-highlight-hover':
                colorScheme === 'purple',
              'text-whop-error-red group-hover:text-whop-tag-error':
                colorScheme === 'error-red',
            },
            {
              'h-3 w-3': size === 'sm',
              'h-[13px] w-[13px]': size === 'md',
              'h-[14px] w-[14px]': size === 'lg',
              'h-[15px] w-[15px]': size === 'xl',
            },
          )}
        />
      )}
    </button>
  );
};
