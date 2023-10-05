import React from 'react';
import { cn } from '../../lib/classnames';
import type { IconDefinition } from '../../lib/icon-types';
import type { ColorScheme } from '../../lib/shared-component-types';
import { Icon } from '../Icon';
import { Text } from '../Text';

export type TagColorScheme = Extract<
  ColorScheme,
  'purple' | 'blue' | 'gray' | 'success-green' | 'warning-yellow' | 'error-red'
>;
export const TagColorSchemes: { [key: string]: TagColorScheme } = {
  Purple: 'purple',
  Blue: 'blue',
  Gray: 'gray',
  'Success Green': 'success-green',
  'Warning Yellow': 'warning-yellow',
  'Error Red': 'error-red',
};

export interface TagProps {
  text: string;
  colorScheme?: TagColorScheme;
  rightIcon?: IconDefinition;
  leftIcon?: IconDefinition;
  className?: string;
  leftIconClassName?: string;
  rightIconClassName?: string;
}

export const Tag = ({
  text,
  colorScheme = 'purple',
  rightIcon,
  leftIcon,
  className,
  leftIconClassName,
  rightIconClassName,
}: TagProps) => {
  return (
    <Text
      as="div"
      variant="button3"
      className={cn(
        'inline-flex w-auto items-center justify-center rounded px-1.5 h-[18px]',
        {
          'bg-whop-field-highlight/[14%] text-whop-field-highlight':
            colorScheme === 'purple',
          'bg-whop-tag-blue-background text-whop-tag-blue':
            colorScheme === 'blue',
          'bg-whop-tag-gray-background text-whop-tag-gray':
            colorScheme === 'gray',
          'bg-whop-tag-green-background text-whop-tag-green':
            colorScheme === 'success-green',
          'bg-whop-tag-warning-background text-whop-tag-warning':
            colorScheme === 'warning-yellow',
          'bg-whop-tag-error-background text-whop-tag-error':
            colorScheme === 'error-red',
        },
        className,
      )}
    >
      {leftIcon && (
        <Icon
          icon={leftIcon}
          className={cn('mr-1 text-[14px]', leftIconClassName)}
        />
      )}
      {text}
      {rightIcon && (
        <Icon
          icon={rightIcon}
          className={cn('ml-1 text-[14px]', rightIconClassName)}
        />
      )}
    </Text>
  );
};
