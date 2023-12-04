'use client';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import classNames from 'classnames';
import * as React from 'react';
import { Theme } from '../theme';
import { Text } from './text';
import { tooltipPropDefs } from './tooltip.props';

import type { GetPropDefTypes } from '../helpers';

type TooltipElement = React.ElementRef<typeof TooltipPrimitive.Content>;
type TooltipOwnProps = GetPropDefTypes<typeof tooltipPropDefs>;
interface TooltipProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>,
    Omit<
      React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
      'content'
    >,
    TooltipOwnProps {
  // TODO: See if we can automate making prop defs with `required: true` non nullable
  content: NonNullable<TooltipOwnProps['content']>;
  container?: React.ComponentProps<typeof TooltipPrimitive.Portal>['container'];
}
const Tooltip = React.forwardRef<TooltipElement, TooltipProps>(
  (props, forwardedRef) => {
    const {
      children,
      className,
      open,
      defaultOpen,
      onOpenChange,
      delayDuration,
      disableHoverableContent,
      content,
      container,
      forceMount,
      ...tooltipContentProps
    } = props;
    const rootProps = {
      open,
      defaultOpen,
      onOpenChange,
      delayDuration,
      disableHoverableContent,
    };
    return (
      <TooltipPrimitive.Root {...rootProps}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal container={container} forceMount={forceMount}>
          <Theme asChild>
            <TooltipPrimitive.Content
              sideOffset={4}
              collisionPadding={10}
              {...tooltipContentProps}
              ref={forwardedRef}
              className={classNames('fui-TooltipContent', className)}
            >
              <Text as="p" className="fui-TooltipText" size="1">
                {content}
              </Text>
              <TooltipPrimitive.Arrow className="fui-TooltipArrow" />
            </TooltipPrimitive.Content>
          </Theme>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    );
  },
);
Tooltip.displayName = 'Tooltip';

export { Tooltip };
export type { TooltipProps };
