'use client';

import classNames from 'classnames';
import { Tooltip as TooltipPrimitive } from 'radix-ui';
import * as React from 'react';
import { ReversedTheme } from '../../theme';
import { Text } from '../text';
import { tooltipPropDefs } from './tooltip.props';

import type { GetPropDefTypes } from '../../helpers';

type TooltipOwnProps = GetPropDefTypes<typeof tooltipPropDefs>;
interface TooltipProps
  extends React.ComponentProps<typeof TooltipPrimitive.Root>,
    Omit<React.ComponentProps<typeof TooltipPrimitive.Content>, 'content'>,
    TooltipOwnProps {
  // TODO: See if we can automate making prop defs with `required: true` non nullable
  content: NonNullable<TooltipOwnProps['content']>;
  container?: React.ComponentProps<typeof TooltipPrimitive.Portal>['container'];
}

const Tooltip = (props: TooltipProps) => {
  const {
    children,
    className,
    open,
    defaultOpen,
    onOpenChange,
    delayDuration = 400,
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
        <ReversedTheme asChild>
          <TooltipPrimitive.Content
            sideOffset={4}
            collisionPadding={10}
            {...tooltipContentProps}
            className={classNames('fui-TooltipContent', className)}
          >
            <Text as="p" className="fui-TooltipText" size="2">
              {content}
            </Text>
            <TooltipPrimitive.Arrow className="fui-TooltipArrow" />
          </TooltipPrimitive.Content>
        </ReversedTheme>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
};
Tooltip.displayName = 'Tooltip';

export { Tooltip };
export type { TooltipProps };
