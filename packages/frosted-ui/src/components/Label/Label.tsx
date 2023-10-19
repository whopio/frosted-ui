'use client';

import { LabelProps as RadixLabelProps, Root } from '@radix-ui/react-label';
import React from 'react';
import { cn } from '../../lib/classnames';
import { Tooltip, TooltipProps } from '../Tooltip';

export type LabelVariant = 'default' | 'emphasized';
export const LabelVariants: { [key: string]: LabelVariant } = {
  Default: 'default',
  Emphasized: 'emphasized',
};

export interface LabelProps extends RadixLabelProps {
  variant?: LabelVariant;
  className?: string;
  wrapperClassName?: string;
  tooltip?: TooltipProps;
}

export const Label = ({
  children,
  variant = 'default',
  className,
  wrapperClassName,
  tooltip,
  ...rest
}: LabelProps) => {
  return (
    <div className={cn('flex items-center', wrapperClassName)}>
      <Root
        className={cn(
          'mr-1.5',
          {
            'text-text3 text-whop-dark-gray': variant === 'default',
            'text-subtitle3 text-whop-black': variant === 'emphasized',
          },
          className,
        )}
        {...rest}
      >
        {children}
      </Root>
      {tooltip && (
        <Tooltip
          {...tooltip}
          buttonClassName="text-xs leading-[12px] text-whop-dark-gray"
        />
      )}
    </div>
  );
};
