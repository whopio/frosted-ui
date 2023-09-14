import { faLightbulb, faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { ElementType, ReactNode } from 'react';
import { cn } from '../../lib/classnames';
import { IconDefinition } from '../../lib/icon-types';
import { ColorScheme } from '../../lib/shared-component-types';
import { Icon } from '../Icon';
import { IconButton, IconButtonProps } from '../IconButton';
import { TextButton, TextButtonProps } from '../TextButton';

export type AlertBannerVariant = 'default' | 'light-anchor';
export const AlertBannerVariants: { [key: string]: AlertBannerVariant } = {
  Default: 'default',
  'Light anchor': 'light-anchor',
};

export type AlertBannerColorScheme = Extract<
  ColorScheme,
  | 'gray'
  | 'light-gray'
  | 'purple'
  | 'success-green'
  | 'warning-yellow'
  | 'error-red'
>;
export const AlertBannerColorSchemes: {
  [key: string]: AlertBannerColorScheme;
} = {
  Gray: 'gray',
  'Light Gray': 'light-gray',
  Purple: 'purple',
  'Success Green': 'success-green',
  'Warning Yellow': 'warning-yellow',
  'Error Red': 'error-red',
};

export type AlertBannerProps = {
  title?: string;
  description?: string | ReactNode;
  showCta?: boolean;
  closeButtonProps?: IconButtonProps;
  ctaButtonProps?: TextButtonProps<ElementType>;
  icon?: IconDefinition;
  variant?: AlertBannerVariant;
  colorScheme?: AlertBannerColorScheme;
};

export const AlertBanner = ({
  title,
  description,
  variant = 'default',
  colorScheme = 'gray',
  showCta = true,
  icon = faLightbulb,
  closeButtonProps,
  ctaButtonProps,
}: AlertBannerProps) => {
  const textColor = {
    'text-whop-background': variant === 'default',
    'text-whop-tag-gray': colorScheme === 'gray' && variant === 'light-anchor',
    'dark-gray border-whop-stroke':
      colorScheme === 'light-gray' && variant === 'light-anchor',
    'text-whop-field-highlight':
      colorScheme === 'purple' && variant === 'light-anchor',
    'text-whop-tag-green':
      colorScheme === 'success-green' && variant === 'light-anchor',
    'text-whop-tag-warning':
      colorScheme === 'warning-yellow' && variant === 'light-anchor',
    'text-whop-tag-error':
      colorScheme === 'error-red' && variant === 'light-anchor',
  };

  return (
    <div
      role="alert"
      aria-live="polite"
      className={cn(
        'relative flex items-start justify-between rounded-md border border-transparent py-3 pl-3.5 pr-[46px]',
        {
          // Default variants
          'bg-whop-gray text-whop-background':
            colorScheme === 'gray' && variant === 'default',
          'bg-whop-field-highlight text-whop-background':
            colorScheme === 'purple' && variant === 'default',
          'bg-whop-success-green text-whop-background':
            colorScheme === 'success-green' && variant === 'default',
          'bg-whop-warning-yellow text-whop-background':
            colorScheme === 'warning-yellow' && variant === 'default',
          'bg-whop-error-red text-whop-background':
            colorScheme === 'error-red' && variant === 'default',

          // Light-anchor variants
          'bg-whop-tag-gray-background border-whop-tag-gray':
            colorScheme === 'gray' && variant === 'light-anchor',
          'bg-whop-hover-50 border-whop-stroke':
            colorScheme === 'light-gray' && variant === 'light-anchor',
          'bg-whop-field-highlight/[10%] border-whop-field-highlight':
            colorScheme === 'purple' && variant === 'light-anchor',
          'bg-whop-tag-green-background border-whop-tag-green':
            colorScheme === 'success-green' && variant === 'light-anchor',
          'bg-whop-tag-warning-background border-whop-tag-warning':
            colorScheme === 'warning-yellow' && variant === 'light-anchor',
          'bg-whop-tag-error-background border-whop-tag-error':
            colorScheme === 'error-red' && variant === 'light-anchor',
        },
      )}
    >
      <div className="flex items-start">
        <Icon icon={icon} className={cn('mr-2 h-[18px] w-[18px]', textColor)} />
        <div className="space-y-1">
          {title && <p className={cn('text-subtitle2', textColor)}>{title}</p>}
          {description && (
            <p className={cn('text-paragraph3', textColor)}>{description}</p>
          )}
          {showCta && ctaButtonProps && (
            <TextButton
              {...ctaButtonProps}
              colorScheme={
                variant === 'default'
                  ? 'white'
                  : colorScheme === 'gray'
                  ? 'dark-gray'
                  : colorScheme
              }
              className={cn('min-[400px]:hidden mt-2')}
            />
          )}
        </div>
      </div>

      {showCta &&
        (ctaButtonProps ? (
          <TextButton
            {...ctaButtonProps}
            colorScheme={
              variant === 'default'
                ? 'white'
                : colorScheme === 'gray'
                ? 'dark-gray'
                : colorScheme
            }
            className={cn('max-[399px]:hidden absolute top-3 right-3.5')}
          />
        ) : (
          <IconButton
            icon={faXmark}
            size="sm"
            variant="blank"
            colorScheme={
              variant === 'default'
                ? 'white'
                : colorScheme === 'light-gray'
                ? 'dark-gray'
                : colorScheme === 'gray'
                ? 'dark-gray'
                : colorScheme
            }
            {...closeButtonProps}
            className={cn(
              'absolute right-1.5 top-1.5',
              {
                'text-whop-tag-error':
                  colorScheme === 'error-red' && variant === 'light-anchor',
              },
              closeButtonProps?.className,
            )}
          />
        ))}
    </div>
  );
};
