import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import {
  ButtonHTMLAttributes,
  FormEventHandler,
  MouseEventHandler,
  ReactNode,
} from 'react';
import { cn } from '../../lib/classnames';
import { IconDefinition } from '../../lib/icon-types';
import {
  ButtonType,
  ColorScheme,
  Size,
} from '../../lib/shared-component-types';
import { Icon } from '../Icon';

export type ChipSize = Size;
export const ChipSizes: { [key: string]: ChipSize } = {
  'Extra small': 'xs',
  Small: 'sm',
  Medium: 'md',
  Large: 'lg',
  'Extra large': 'xl',
};

export type ChipVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'elevated'
  | 'blank'
  | 'light-anchor';
export const ChipVariants: { [key: string]: ChipVariant } = {
  Primary: 'primary',
  Secondary: 'secondary',
  Outline: 'outline',
  Elevated: 'elevated',
  Blank: 'blank',
  'Light Anchor': 'light-anchor',
};

type ChipColorScheme = Exclude<
  ColorScheme,
  'blue' | 'gray' | 'off-black' | 'light-gray' | 'gold-gradient'
>;
export const ChipColorSchemes: { [key: string]: ChipColorScheme } = {
  Brand: 'brand',
  Black: 'black',
  White: 'white',
  'Dark Gray': 'dark-gray',
  Purple: 'purple',
  'Success Green': 'success-green',
  'Warning Yellow': 'warning-yellow',
  'Error Red': 'error-red',
  'Twitter Blue': 'twitter-blue',
  'Discord Purple': 'discord-purple',
};

const useShadow = (variant: ChipVariant) => variant === 'elevated';

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: ButtonType;
  size?: ChipSize;
  variant?: ChipVariant;
  colorScheme?: ChipColorScheme;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onSubmit?: FormEventHandler<HTMLButtonElement>;
  onReset?: FormEventHandler<HTMLButtonElement>;
  leftIcon?: IconDefinition;
  rightIcon?: IconDefinition;
  isDisabled?: boolean;
  isLoading?: boolean;
  className?: string;
  leftIconClassName?: string;
  rightIconClassName?: string;
}

export const Chip = ({
  type = 'button',
  size = 'md',
  variant = 'light-anchor',
  colorScheme = 'purple',
  children,
  onClick,
  onSubmit,
  onReset,
  leftIcon,
  rightIcon,
  isDisabled = false,
  isLoading = false,
  leftIconClassName,
  rightIconClassName,
  className,
  ...props
}: ChipProps) => {
  return (
    // TODO: Add errors for variant / colorScheme permutations that aren't accepted
    <button
      onClick={onClick}
      onSubmit={onSubmit}
      onReset={onReset}
      disabled={isDisabled}
      type={type}
      className={cn(
        'group relative flex shrink-0 items-center justify-center overflow-hidden rounded-full transition',
        'focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring',
        className,
        {
          // Light anchor variant
          'bg-whop-field-highlight/[6%] text-whop-field-highlight border-whop-field-highlight border':
            variant === 'light-anchor' && colorScheme === 'purple',

          // Primary variants
          'bg-whop-primary text-whop-background':
            variant === 'primary' && colorScheme === 'brand',
          'bg-whop-field-highlight text-whop-background':
            variant === 'primary' && colorScheme === 'purple',
          'bg-whop-black text-whop-background':
            variant === 'primary' && colorScheme === 'black',
          'bg-whop-background text-whop-black':
            variant === 'primary' && colorScheme === 'white',
          'bg-whop-dark-gray text-whop-background':
            variant === 'primary' && colorScheme === 'dark-gray',
          'bg-whop-error-red text-whop-background':
            variant === 'primary' && colorScheme === 'error-red',
          'bg-whop-warning-yellow text-whop-background':
            variant === 'primary' && colorScheme === 'warning-yellow',
          'bg-whop-success-green text-whop-background':
            variant === 'primary' && colorScheme === 'success-green',
          'bg-whop-brands-twitter text-whop-fixed-white':
            variant === 'primary' && colorScheme === 'twitter-blue',
          'bg-whop-brands-discord text-whop-fixed-white':
            variant === 'primary' && colorScheme === 'discord-purple',

          // Secondary variants
          'bg-whop-hover text-whop-black':
            variant === 'secondary' && colorScheme === 'black',
          'bg-whop-background/[12%] text-whop-background':
            variant === 'secondary' && colorScheme === 'white',

          // Outline variants
          'bg-whop-background text-whop-black border-whop-stroke border':
            variant === 'outline' && colorScheme === 'black',
          'bg-whop-background text-whop-dark-gray border-whop-stroke border':
            variant === 'outline' && colorScheme === 'dark-gray',
          'bg-whop-background text-whop-error-red border-whop-stroke border':
            variant === 'outline' && colorScheme === 'error-red',
          'bg-whop-background text-whop-warning-yellow border-whop-stroke border':
            variant === 'outline' && colorScheme === 'warning-yellow',
          'bg-whop-background text-whop-success-green border-whop-stroke border':
            variant === 'outline' && colorScheme === 'success-green',
          'bg-whop-background text-whop-field-highlight border-whop-stroke border':
            variant === 'outline' && colorScheme === 'purple',
          'bg-whop-background text-whop-primary border-whop-stroke border':
            variant === 'outline' && colorScheme === 'brand',
          'bg-whop-background text-whop-brands-twitter border-whop-stroke border':
            variant === 'outline' && colorScheme === 'twitter-blue',
          'bg-whop-background text-whop-brands-discord border-whop-stroke border':
            variant === 'outline' && colorScheme === 'discord-purple',
          'bg-whop-transparent text-whop-background border-whop-stroke border':
            variant === 'outline' && colorScheme === 'white',

          // Elevated variants
          'bg-whop-background text-whop-black border-whop-stroke-dark border':
            variant === 'elevated' && colorScheme === 'black',
          'bg-whop-background text-whop-dark-gray border-whop-stroke-dark border':
            variant === 'elevated' && colorScheme === 'dark-gray',
          'bg-whop-background text-whop-error-red border-whop-stroke-dark border':
            variant === 'elevated' && colorScheme === 'error-red',
          'bg-whop-background text-whop-warning-yellow border-whop-stroke-dark border':
            variant === 'elevated' && colorScheme === 'warning-yellow',
          'bg-whop-background text-whop-success-green border-whop-stroke-dark border':
            variant === 'elevated' && colorScheme === 'success-green',
          'bg-whop-background text-whop-field-highlight border-whop-stroke-dark border':
            variant === 'elevated' && colorScheme === 'purple',
          'bg-whop-background text-whop-primary border-whop-stroke-dark border':
            variant === 'elevated' && colorScheme === 'brand',
          'bg-whop-background text-whop-brands-twitter border-whop-stroke-dark border':
            variant === 'elevated' && colorScheme === 'twitter-blue',
          'bg-whop-background text-whop-brands-discord border-whop-stroke-dark border':
            variant === 'elevated' && colorScheme === 'discord-purple',
          'bg-whop-transparent text-whop-background border-whop-stroke-light border':
            variant === 'elevated' && colorScheme == 'white',

          // Blank variants
          'bg-whop-background text-whop-primary':
            variant === 'blank' && colorScheme == 'brand',
          'bg-whop-background text-whop-field-highlight':
            variant === 'blank' && colorScheme == 'purple',
          'bg-whop-background text-whop-black hover:bg-whop-hover':
            variant === 'blank' && colorScheme === 'black',
          'bg-whop-background text-whop-dark-gray':
            variant === 'blank' && colorScheme === 'dark-gray',
          'bg-whop-background text-whop-error-red':
            variant === 'blank' && colorScheme === 'error-red',
          'bg-whop-background text-whop-warning-yellow':
            variant === 'blank' && colorScheme === 'warning-yellow',
          'bg-whop-background text-whop-success-green':
            variant === 'blank' && colorScheme === 'success-green',
          'bg-whop-background text-whop-brands-twitter':
            variant === 'blank' && colorScheme === 'twitter-blue',
          'bg-whop-background text-whop-brands-discord':
            variant === 'blank' && colorScheme === 'discord-purple',
          'bg-whop-transparent text-whop-background':
            variant === 'blank' && colorScheme == 'white',
        },
        {
          'text-subtitle4 h-6 px-[10px]': size === 'xs',
          'text-subtitle3 h-8 px-[14px]': size === 'sm',
          'text-button4 h-10 px-[18px]': size === 'md',
          'text-button2 h-12 px-[22px]': size === 'lg',
          'text-button1 h-14 px-[26px]': size === 'xl',
        },
        {
          '!cursor-not-allowed': isDisabled || isLoading,
          'opacity-40': isDisabled,
          'shadow-sm': useShadow(variant),
        },
      )}
      {...props}
    >
      {/* Hover and focus state overlay */}
      <div
        className={cn('absolute inset-0 transition', {
          // Purple light anchor
          'group-hover:bg-whop-field-highlight/[10%] group-active:bg-whop-field-highlight/[14%]':
            colorScheme === 'purple' && variant === 'light-anchor',
          // White outline, White blank
          'group-hover:bg-whop-background/[12%] group-active:bg-whop-background/[18%]':
            colorScheme === 'white' && (variant === 'blank' || 'outline'),
          // White secondary
          'group-hover:bg-whop-background/[18%] group-active:bg-whop-background/[24%]':
            colorScheme === 'white' && variant === 'secondary',
          // White primary
          'group-hover:bg-black/[16%] group-active:bg-black/[32%]':
            variant === 'primary' && colorScheme === 'white',
          // Primary
          'group-hover:bg-black/[12%] group-active:bg-black/[18%]':
            variant === 'primary' &&
            colorScheme !== 'white' &&
            !isDisabled &&
            !isLoading,
          // Light gray secondary
          'group-hover:bg-whop-hover-press':
            colorScheme === 'black' && variant === 'secondary',
          // Outline, blank, elevated
          'group-hover:bg-whop-hover group-active:bg-whop-hover-press':
            variant !== 'primary' &&
            variant !== 'secondary' &&
            variant !== 'light-anchor' &&
            colorScheme !== 'white' &&
            !isDisabled &&
            !isLoading,
        })}
      />

      {/* Render children with a z-index of 10 so they are immune to the backdrop filter */}
      <div className="z-10 flex items-center justify-center">
        {/* The loading icon is absolute positioned in the center of the box */}
        {isLoading && (
          <Icon className="fa-spin absolute z-20" icon={faSpinner} />
        )}

        {/* The left icon is rendered to the left of the children with 2em of margin on the right if children are present */}
        {leftIcon && (
          <Icon
            icon={leftIcon}
            className={cn(
              {
                '!text-transparent': isLoading,
              },
              // The size and spacing of a left icon based on the button size
              { 'mr-[5px] text-[12px]': !!children && size === 'xs' },
              { 'mr-[6px] text-[14px]': !!children && size === 'sm' },
              { 'mr-[7px] text-[14px]': !!children && size === 'md' },
              { 'mr-[8px] text-[16px]': !!children && size === 'lg' },
              { 'mr-[9px] text-[16px]': !!children && size === 'xl' },
              leftIconClassName,
            )}
          />
        )}

        {/* If children are present, render them as usual if not loading, and transparent if loading */}
        {children && (
          <div className={cn({ '!text-transparent': isLoading })}>
            {children}
          </div>
        )}

        {/* The right icon is rendered to the right of the children with 2em of margin on the left if children are present */}
        {rightIcon && (
          <Icon
            icon={rightIcon}
            className={cn(
              {
                '!text-transparent': isLoading,
              },
              // The size and spacing of a right icon based on the button size
              { 'ml-[5px] text-[10px]': !!children && size === 'xs' },
              { 'ml-[6px] text-[12px]': !!children && size === 'sm' },
              { 'ml-[7px] text-[12px]': !!children && size === 'md' },
              { 'ml-[8px] text-[14px]': !!children && size === 'lg' },
              { 'ml-[9px] text-[14px]': !!children && size === 'xl' },
              rightIconClassName,
            )}
          />
        )}
      </div>
    </button>
  );
};
