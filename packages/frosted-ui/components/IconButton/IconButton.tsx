import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import {
  ButtonHTMLAttributes,
  FormEventHandler,
  MouseEventHandler,
  ReactNode,
  forwardRef,
} from 'react';
import { cn } from '../../lib/classnames';
import { IconDefinition } from '../../lib/icon-types';
import {
  ButtonType,
  ColorScheme,
  Size,
} from '../../lib/shared-component-types';
import { Icon } from '../Icon';

export type IconButtonShape = 'default' | 'circle';
export const IconButtonShapes: { [key: string]: IconButtonShape } = {
  Default: 'default',
  Circle: 'circle',
};

export type IconButtonSize = Size;
export const IconButtonSizes: { [key: string]: IconButtonSize } = {
  'Extra small': 'xs',
  Small: 'sm',
  Medium: 'md',
  Large: 'lg',
  'Extra large': 'xl',
};

export type IconButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'elevated'
  | 'blank';
export const IconButtonVariants: { [key: string]: IconButtonVariant } = {
  Primary: 'primary',
  Secondary: 'secondary',
  Outline: 'outline',
  Elevated: 'elevated',
  Blank: 'blank',
};

type IconButtonColorScheme = Exclude<
  ColorScheme,
  'blue' | 'gray' | 'light-gray' | 'off-black' | 'gold-gradient'
>;
export const IconButtonColorSchemes: { [key: string]: IconButtonColorScheme } =
  {
    Brand: 'brand',
    Black: 'black',
    White: 'white',
    'Dark Gray': 'dark-gray',
    Purple: 'purple',
    'Success Green': 'success-green',
    'Warning Yellow': 'warning-yellow',
    'Error Red': 'error-red',
    'Discord Purple': 'discord-purple',
    'Twitter Blue': 'twitter-blue',
  };

const hasShadow = (variant: string) => variant === 'elevated';

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  shape?: IconButtonShape;
  type?: ButtonType;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
  colorScheme?: IconButtonColorScheme;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onSubmit?: FormEventHandler<HTMLButtonElement>;
  onReset?: FormEventHandler<HTMLButtonElement>;
  icon?: IconDefinition;
  isDisabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  className?: string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      shape = 'default',
      type = 'button',
      size = 'md',
      variant = 'primary',
      colorScheme = 'brand',
      icon,
      onClick,
      onSubmit,
      onReset,
      isDisabled = false,
      isLoading = false,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        onSubmit={onSubmit}
        onReset={onReset}
        disabled={isDisabled || isLoading}
        type={type}
        className={cn(
          'group/icon-button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md transition',
          'focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring',
          'font-sans tracking-[-0.005em]',
          {
            'h-6 !w-6': size === 'xs',
            'h-8 !w-8': size === 'sm',
            'h-10 !w-10': size === 'md',
            'h-12 !w-12': size === 'lg',
            'h-14 !w-14': size === 'xl',
          },
          {
            '!cursor-not-allowed': isDisabled || isLoading,
            'opacity-40': isDisabled,
            'shadow-sm':
              hasShadow(variant as string) && colorScheme !== 'white',
            'shadow-sm shadow-white/[50%]':
              hasShadow(variant as string) && colorScheme === 'white',
          },
          {
            'rounded-full': shape === 'circle',
            'rounded-md': shape === 'default',
          },
          {
            // Primary variants
            'bg-whop-primary text-whop-fixed-white':
              variant === 'primary' && colorScheme === 'brand',
            'bg-whop-field-highlight text-whop-fixed-white':
              variant === 'primary' && colorScheme === 'purple',
            'bg-whop-black text-whop-fixed-white':
              variant === 'primary' && colorScheme === 'black',
            'bg-whop-dark-gray text-whop-fixed-white':
              variant === 'primary' && colorScheme === 'dark-gray',
            'bg-whop-brands-discord text-whop-fixed-white':
              variant === 'primary' && colorScheme === 'discord-purple',
            'bg-whop-brands-twitter text-whop-fixed-white':
              variant === 'primary' && colorScheme === 'twitter-blue',
            'bg-whop-background text-whop-black':
              variant === 'primary' && colorScheme === 'white',
            'bg-whop-error-red text-whop-fixed-white':
              variant === 'primary' && colorScheme == 'error-red',
            'bg-whop-warning-yellow text-whop-fixed-white':
              variant === 'primary' && colorScheme == 'warning-yellow',
            'bg-whop-success-green text-whop-fixed-white':
              variant === 'primary' && colorScheme === 'success-green',

            // Secondary variants
            'bg-whop-hover text-whop-black':
              variant === 'secondary' && colorScheme == 'black',
            'bg-whop-background/[12%] text-whop-background':
              variant === 'secondary' && colorScheme == 'white',

            // Stroke variants
            'bg-whop-background text-whop-primary border-whop-stroke border':
              variant === 'outline' && colorScheme == 'brand',
            'bg-whop-background text-whop-field-highlight border-whop-stroke border':
              variant === 'outline' && colorScheme == 'purple',
            'bg-whop-background text-whop-black border-whop-stroke border':
              variant === 'outline' && colorScheme == 'black',
            'bg-whop-background text-whop-dark-gray border-whop-stroke border':
              variant === 'outline' && colorScheme == 'dark-gray',
            'bg-whop-background text-whop-error-red border-whop-stroke border':
              variant === 'outline' && colorScheme == 'error-red',
            'bg-whop-background text-whop-warning-yellow border-whop-stroke border':
              variant === 'outline' && colorScheme == 'warning-yellow',
            'bg-whop-background text-whop-success-green border-whop-stroke border':
              variant === 'outline' && colorScheme == 'success-green',
            'bg-whop-background text-whop-brands-twitter border-whop-stroke border':
              variant === 'outline' && colorScheme == 'twitter-blue',
            'bg-whop-background text-whop-brands-discord border-whop-stroke border':
              variant === 'outline' && colorScheme == 'discord-purple',
            'bg-whop-transparent text-whop-background border-whop-stroke border':
              variant === 'outline' && colorScheme == 'white',

            // Elevated variants
            'bg-whop-background text-whop-black border-whop-stroke-dark border':
              variant === 'elevated' && colorScheme == 'black',
            'bg-whop-background text-whop-dark-gray border-whop-stroke-dark border':
              variant === 'elevated' && colorScheme == 'dark-gray',
            'bg-whop-background text-whop-error-red border-whop-stroke-dark border':
              variant === 'elevated' && colorScheme == 'error-red',
            'bg-whop-background text-whop-warning-yellow border-whop-stroke-dark border':
              variant === 'elevated' && colorScheme == 'warning-yellow',
            'bg-whop-background text-whop-success-green border-whop-stroke-dark border':
              variant === 'elevated' && colorScheme == 'success-green',
            'bg-whop-background text-whop-field-highlight border-whop-stroke-dark border':
              variant === 'elevated' && colorScheme == 'purple',
            'bg-whop-background text-whop-primary border-whop-stroke-dark border':
              variant === 'elevated' && colorScheme == 'brand',
            'bg-whop-background text-whop-brands-twitter border-whop-stroke-dark border':
              variant === 'elevated' && colorScheme == 'twitter-blue',
            'bg-whop-background text-whop-brands-discord border-whop-stroke-dark border':
              variant === 'elevated' && colorScheme == 'discord-purple',
            'bg-whop-transparent text-whop-background border-whop-stroke-light border':
              variant === 'elevated' && colorScheme == 'white',

            // Blank variants
            'bg-whop-white text-whop-black':
              variant === 'blank' && colorScheme == 'black',
            'bg-whop-white text-whop-dark-gray':
              variant === 'blank' && colorScheme == 'dark-gray',
            'bg-whop-white text-whop-primary':
              variant === 'blank' && colorScheme == 'brand',
            'bg-whop-white text-whop-field-highlight':
              variant === 'blank' && colorScheme == 'purple',
            'bg-whop-white text-whop-tag-green':
              variant === 'blank' && colorScheme == 'success-green',
            'bg-whop-white text-whop-error-red':
              variant === 'blank' && colorScheme == 'error-red',
            'bg-whop-white text-whop-tag-warning':
              variant === 'blank' && colorScheme == 'warning-yellow',
            'bg-whop-white text-whop-brands-twitter':
              variant === 'blank' && colorScheme == 'twitter-blue',
            'bg-whop-white text-whop-brands-discord':
              variant === 'blank' && colorScheme == 'discord-purple',
            'bg-whop-transparent text-whop-background':
              variant === 'blank' && colorScheme == 'white',
          },
          className,
        )}
        {...props}
      >
        {/* Hover and focus state overlay */}
        <div
          className={cn('absolute inset-0 transition', {
            // White outline, White blank
            'group-hover/icon-button:bg-whop-background/[12%] group-active/icon-button:bg-whop-background/[18%]':
              colorScheme === 'white' && (variant === 'blank' || 'outline'),
            // White secondary
            'group-hover/icon-button:bg-whop-background/[18%] group-active/icon-button:bg-whop-background/[24%]':
              colorScheme === 'white' && variant === 'secondary',
            // White primary
            'group-hover/icon-button:bg-black/[16%] group-active/icon-button:bg-black/[32%]':
              variant === 'primary' && colorScheme === 'white',
            // Primary
            'group-hover/icon-button:bg-black/[12%] group-active/icon-button:bg-black/[18%]':
              variant === 'primary' &&
              colorScheme !== 'white' &&
              !isDisabled &&
              !isLoading,
            // Black secondary
            'group-hover/icon-button:bg-whop-hover-press':
              colorScheme === 'black' && variant === 'secondary',
            // Outline, blank, elevated light | default theme
            'group-hover/icon-button:bg-black/[4%] group-active/icon-button:bg-black/[8%]':
              variant !== 'primary' &&
              variant !== 'secondary' &&
              colorScheme !== 'white' &&
              !isDisabled &&
              !isLoading,
            // Outline, blank, elevated | biz-dark-1
            'biz-dark-1:group-hover/icon-button:bg-white/[8%] biz-dark-1:group-active/icon-button:bg-white/[16%]':
              variant !== 'primary' &&
              variant !== 'secondary' &&
              colorScheme !== 'white' &&
              !isDisabled &&
              !isLoading,
            // Outline, blank, elevated biz-dark-2
            'biz-dark-2:group-hover/icon-button:bg-white/[8%] biz-dark-2:group-active/icon-button:bg-white/[16%]':
              variant !== 'primary' &&
              variant !== 'secondary' &&
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
          {/* If icon and no children are present, render them as usual if not loading, and transparent if loading */}
          {icon && (
            <Icon
              icon={icon}
              className={cn(
                { hidden: isLoading },
                // The size of icon based on the button size
                { 'text-[12px]': size === 'xs' },
                { 'text-[14px]': size === 'sm' },
                { 'text-[16px]': size === 'md' },
                { 'text-[17px]': size === 'lg' },
                { 'text-[18px]': size === 'xl' },
              )}
            />
          )}
        </div>
      </button>
    );
  },
);
