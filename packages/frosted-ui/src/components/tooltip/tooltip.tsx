'use client';

import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip';
import classNames from 'classnames';
import * as React from 'react';
import { ReversedTheme } from '../../theme';
import { Text } from '../text';
import { tooltipPropDefs } from './tooltip.props';

import type { GetPropDefTypes } from '../../helpers';

type TooltipOwnProps = GetPropDefTypes<typeof tooltipPropDefs>;
type TooltipActions = React.ComponentProps<typeof TooltipPrimitive.Root>['actionsRef'] extends
  | React.RefObject<infer T>
  | undefined
  ? T
  : never;

interface TooltipProps extends TooltipOwnProps {
  children: React.ReactElement;
  // TODO: See if we can automate making prop defs with `required: true` non nullable
  content: NonNullable<TooltipOwnProps['content']>;
  className?: string;
  // Root props
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /**
   * Event handler called after any animations complete when the tooltip is opened or closed.
   */
  onOpenChangeComplete?: (open: boolean) => void;
  delay?: number;
  closeDelay?: number;
  /**
   * Whether the tooltip contents can be hovered without closing the tooltip.
   * @default false
   */
  disableHoverablePopup?: boolean;
  /**
   * Determines which axis the tooltip should track the cursor on.
   * @default 'none'
   */
  trackCursorAxis?: 'none' | 'x' | 'y' | 'both';
  /**
   * A ref to imperative actions.
   * - `close`: Closes the tooltip imperatively when called.
   * - `unmount`: Unmounts the tooltip manually (useful with external animation libraries).
   */
  actionsRef?: React.RefObject<TooltipActions>;
  // Portal props
  container?: React.ComponentProps<typeof TooltipPrimitive.Portal>['container'];
  keepMounted?: boolean;
  // Positioner props
  side?: React.ComponentProps<typeof TooltipPrimitive.Positioner>['side'];
  sideOffset?: React.ComponentProps<typeof TooltipPrimitive.Positioner>['sideOffset'];
  align?: React.ComponentProps<typeof TooltipPrimitive.Positioner>['align'];
  alignOffset?: React.ComponentProps<typeof TooltipPrimitive.Positioner>['alignOffset'];
  collisionPadding?: React.ComponentProps<typeof TooltipPrimitive.Positioner>['collisionPadding'];
  sticky?: React.ComponentProps<typeof TooltipPrimitive.Positioner>['sticky'];
}

const TooltipImpl = (props: TooltipProps) => {
  const {
    children,
    className,
    open,
    defaultOpen,
    onOpenChange,
    onOpenChangeComplete,
    delay = 400,
    closeDelay,
    disableHoverablePopup,
    trackCursorAxis,
    actionsRef,
    content,
    container,
    keepMounted,
    // Positioner props
    side,
    sideOffset = 4,
    align,
    alignOffset,
    collisionPadding = 10,
    sticky,
    ...tooltipProps
  } = props;

  const rootProps = {
    open,
    defaultOpen,
    onOpenChange,
    onOpenChangeComplete,
    disableHoverablePopup,
    trackCursorAxis,
    actionsRef,
  };

  const triggerProps = {
    delay,
    closeDelay,
  };

  const positionerProps = {
    side,
    sideOffset,
    align,
    alignOffset,
    collisionPadding,
    sticky,
  };

  return (
    <TooltipPrimitive.Root {...rootProps}>
      <TooltipPrimitive.Trigger render={children} {...triggerProps} />
      <TooltipPrimitive.Portal container={container} keepMounted={keepMounted}>
        <TooltipPrimitive.Positioner className="fui-TooltipPositioner" {...positionerProps}>
          <ReversedTheme
            render={<TooltipPrimitive.Popup />}
            {...tooltipProps}
            className={classNames('fui-TooltipContent', className)}
          >
            <Text as="p" className="fui-TooltipText" size="2">
              {content}
            </Text>
            <TooltipPrimitive.Arrow className="fui-TooltipArrow" />
          </ReversedTheme>
        </TooltipPrimitive.Positioner>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
};
TooltipImpl.displayName = 'Tooltip';

// Create compound component with Provider
const Tooltip = Object.assign(TooltipImpl, {
  Provider: TooltipPrimitive.Provider,
});

export { Tooltip, type TooltipActions };
export type { TooltipProps };
