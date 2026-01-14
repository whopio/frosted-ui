'use client';

import { Popover as PopoverPrimitive } from '@base-ui/react/popover';
import classNames from 'classnames';
import * as React from 'react';
import { Theme } from '../../theme';
import { popoverContentPropDefs } from './popover.props';

import type { GetPropDefTypes } from '../../helpers';

// Handle type - extracts the return type of createHandle with a generic
type PopoverHandle<T = unknown> = ReturnType<typeof PopoverPrimitive.createHandle<T>>;

// Root - generic to infer payload type from handle
type PopoverRootOwnProps = Omit<
  React.ComponentProps<typeof PopoverPrimitive.Root>,
  'className' | 'render' | 'children' | 'handle'
>;
interface PopoverRootProps<T = unknown> extends PopoverRootOwnProps {
  children?: React.ReactNode | ((props: { payload: T | undefined }) => React.ReactNode);
  handle?: PopoverHandle<T>;
}
function PopoverRoot<T = unknown>(props: PopoverRootProps<T>) {
  return <PopoverPrimitive.Root {...(props as React.ComponentProps<typeof PopoverPrimitive.Root>)} />;
}
PopoverRoot.displayName = 'PopoverRoot';

// Trigger - generic to infer payload type from handle
interface PopoverTriggerProps<T = unknown> extends Omit<
  React.ComponentProps<typeof PopoverPrimitive.Trigger>,
  'render' | 'className' | 'handle' | 'payload'
> {
  className?: string;
  handle?: PopoverHandle<T>;
  payload?: T;
}

function PopoverTrigger<T = unknown>({ children, ...props }: PopoverTriggerProps<T>) {
  return (
    <PopoverPrimitive.Trigger
      {...(props as React.ComponentProps<typeof PopoverPrimitive.Trigger>)}
      render={children as React.ReactElement}
    />
  );
}
PopoverTrigger.displayName = 'PopoverTrigger';

type PopoverContentOwnProps = GetPropDefTypes<typeof popoverContentPropDefs>;
interface PopoverContentProps extends Omit<
  React.ComponentProps<typeof PopoverPrimitive.Popup>,
  'className' | 'render'
> {
  className?: string;
  container?: React.ComponentProps<typeof PopoverPrimitive.Portal>['container'];
  keepMounted?: React.ComponentProps<typeof PopoverPrimitive.Portal>['keepMounted'];
  // Positioner props
  anchor?: React.ComponentProps<typeof PopoverPrimitive.Positioner>['anchor'];
  align?: React.ComponentProps<typeof PopoverPrimitive.Positioner>['align'];
  side?: React.ComponentProps<typeof PopoverPrimitive.Positioner>['side'];
  sideOffset?: React.ComponentProps<typeof PopoverPrimitive.Positioner>['sideOffset'];
  alignOffset?: React.ComponentProps<typeof PopoverPrimitive.Positioner>['alignOffset'];
  collisionPadding?: React.ComponentProps<typeof PopoverPrimitive.Positioner>['collisionPadding'];
  collisionBoundary?: React.ComponentProps<typeof PopoverPrimitive.Positioner>['collisionBoundary'];
  collisionAvoidance?: React.ComponentProps<typeof PopoverPrimitive.Positioner>['collisionAvoidance'];
  arrowPadding?: React.ComponentProps<typeof PopoverPrimitive.Positioner>['arrowPadding'];
  sticky?: React.ComponentProps<typeof PopoverPrimitive.Positioner>['sticky'];
  disableAnchorTracking?: React.ComponentProps<typeof PopoverPrimitive.Positioner>['disableAnchorTracking'];
}

const PopoverContent = (props: PopoverContentProps & PopoverContentOwnProps) => {
  const {
    className,
    keepMounted,
    container,
    size = popoverContentPropDefs.size.default,
    variant = popoverContentPropDefs.variant.default,
    // Positioner props
    anchor,
    align = 'center',
    side,
    sideOffset = 8,
    alignOffset,
    collisionPadding = 10,
    collisionBoundary,
    collisionAvoidance,
    arrowPadding,
    sticky,
    disableAnchorTracking,
    // Popup props
    ...popupProps
  } = props;

  return (
    <PopoverPrimitive.Portal container={container} keepMounted={keepMounted}>
      <PopoverPrimitive.Positioner
        className="fui-PopoverPositioner"
        anchor={anchor}
        align={align}
        side={side}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        collisionPadding={collisionPadding}
        collisionBoundary={collisionBoundary}
        collisionAvoidance={collisionAvoidance}
        arrowPadding={arrowPadding}
        sticky={sticky}
        disableAnchorTracking={disableAnchorTracking}
      >
        <Theme asChild>
          <PopoverPrimitive.Popup
            {...popupProps}
            className={classNames('fui-PopoverContent', `fui-variant-${variant}`, className, `fui-r-size-${size}`)}
          />
        </Theme>
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  );
};
PopoverContent.displayName = 'PopoverContent';

interface PopoverCloseProps extends Omit<React.ComponentProps<typeof PopoverPrimitive.Close>, 'className' | 'render'> {}

const PopoverClose = ({ children, ...props }: PopoverCloseProps) => (
  <PopoverPrimitive.Close {...props} render={children as React.ReactElement} />
);
PopoverClose.displayName = 'PopoverClose';

const createHandle = PopoverPrimitive.createHandle;

export {
  PopoverClose as Close,
  PopoverContent as Content,
  createHandle,
  PopoverRoot as Root,
  PopoverTrigger as Trigger,
};
export type {
  PopoverCloseProps as CloseProps,
  PopoverContentProps as ContentProps,
  PopoverHandle as Handle,
  PopoverRootProps as RootProps,
  PopoverTriggerProps as TriggerProps,
};
