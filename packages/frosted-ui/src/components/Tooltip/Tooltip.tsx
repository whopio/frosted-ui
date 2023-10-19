'use client';

import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import {
  Content,
  Portal,
  TooltipProps as RadixTooltipProps,
  Root,
  TooltipContentProps,
  Trigger,
} from '@radix-ui/react-tooltip';
import React, { ElementType, ReactNode, forwardRef } from 'react';
import { cn } from '../../lib/classnames';
import { Icon } from '../Icon';
import { TextButton, type TextButtonProps } from '../TextButton';

export type TooltipVariant = 'default' | 'compact';
export const TooltipVariants: { [key: string]: TooltipVariant } = {
  Default: 'default',
  Compact: 'compact',
};

export type PlacementType =
  | 'top-start'
  | 'top-center'
  | 'top-end'
  | 'right-start'
  | 'right-center'
  | 'right-end'
  | 'bottom-start'
  | 'bottom-center'
  | 'bottom-end'
  | 'left-start'
  | 'left-center'
  | 'left-end';
export const TooltipPlacements: { [key: string]: PlacementType } = {
  'Top Start': 'top-start',
  'Top Center': 'top-center',
  'Top End': 'top-end',
  'Right Start': 'right-start',
  'Right Center': 'right-center',
  'Right End': 'right-end',
  'Bottom Start': 'bottom-start',
  'Bottom Center': 'bottom-center',
  'Bottom End': 'bottom-end',
  'Left Start': 'left-start',
  'Left Center': 'left-center',
  'Left End': 'left-end',
};

export interface TooltipProps extends RadixTooltipProps {
  /**The element hovered that triggers this tooltip, will default to the info icon */
  children?: ReactNode;
  title?: string;
  description: string | ReactNode;
  variant?: TooltipVariant;
  placement?: PlacementType;
  buttonClassName?: string;
  contentClassName?: string;
  linkProps?: TextButtonProps<ElementType>;
}

export type SideAlign = {
  side: TooltipContentProps['side'];
  align: TooltipContentProps['align'];
};

export const Tooltip = forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content> & TooltipProps
>(
  (
    {
      children,
      title,
      description,
      variant = 'default',
      buttonClassName,
      contentClassName,
      open,
      defaultOpen,
      onOpenChange,
      placement = 'bottom-start',
      linkProps,
      ...props
    },
    ref,
  ) => {
    const { side, align } = ((placement: PlacementType): SideAlign => {
      const [side, align] = placement.split('-');
      return { side, align } as SideAlign;
    })(placement);

    return (
      <Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
        <Trigger
          className={cn(
            'text-whop-gray focus:outline-none cursor-default',
            buttonClassName,
          )}
          type="button"
        >
          {children || <Icon icon={faInfoCircle} className="h-3 w-3" />}
        </Trigger>
        <Portal>
          <Content
            ref={ref}
            side={side}
            align={align}
            sideOffset={8}
            className={cn(
              'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
              // Z-INDEX: toast 500 -> tooltip 400 -> dropdowns 300 -> modal 200 -> drawer 100
              'w-max-content relative z-[400] max-w-[276px] whitespace-normal rounded-md shadow',
              {
                'bg-whop-black px-2 py-1.5': variant === 'compact',
                'bg-whop-background border-whop-stroke w-[276px] border px-[14px] py-2.5':
                  variant === 'default',
              },
              contentClassName,
            )}
            {...props}
          >
            <>
              {title && variant === 'default' && (
                <p className="text-subtitle3 text-whop-black mb-2">{title}</p>
              )}
              <p
                className={cn('overflow-hidden', {
                  'text-paragraph3 text-whop-black': variant === 'default',
                  'text-subtitle5 text-whop-background': variant === 'compact',
                })}
              >
                {description}
              </p>
              {variant === 'default' && linkProps && (
                <TextButton
                  colorScheme="purple"
                  size="sm"
                  variant="arrow"
                  {...linkProps}
                />
              )}
            </>
          </Content>
        </Portal>
      </Root>
    );
  },
);
