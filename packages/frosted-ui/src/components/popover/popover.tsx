'use client';

import { Popover as PopoverPrimitive } from '@base-ui/react/popover';
import classNames from 'classnames';
import * as React from 'react';
import { Theme } from '../../theme';
import { popoverContentPropDefs } from './popover.props';

import type { GetPropDefTypes } from '../../helpers';

type PopoverRootOwnProps = Omit<React.ComponentProps<typeof PopoverPrimitive.Root>, 'className' | 'render'>;
interface PopoverRootProps extends PopoverRootOwnProps {}
const PopoverRoot: React.FC<PopoverRootProps> = (props: PopoverRootProps) => <PopoverPrimitive.Root {...props} />;
PopoverRoot.displayName = 'PopoverRoot';

interface PopoverTriggerProps extends Omit<
  React.ComponentProps<typeof PopoverPrimitive.Trigger>,
  'className' | 'render'
> {}

const PopoverTrigger = ({ children, ...props }: PopoverTriggerProps) => (
  <PopoverPrimitive.Trigger {...props} render={children as React.ReactElement} />
);
PopoverTrigger.displayName = 'PopoverTrigger';

type PopoverContentOwnProps = GetPropDefTypes<typeof popoverContentPropDefs>;
interface PopoverContentProps extends Omit<
  React.ComponentProps<typeof PopoverPrimitive.Popup>,
  'className' | 'render'
> {
  className?: string;
  container?: React.ComponentProps<typeof PopoverPrimitive.Portal>['container'];
  keepMounted?: React.ComponentProps<typeof PopoverPrimitive.Portal>['keepMounted'];
  // Positioner props - we expose `alignment` which maps to Base UI's `align`
  anchor?: React.ComponentProps<typeof PopoverPrimitive.Positioner>['anchor'];
  alignment?: React.ComponentProps<typeof PopoverPrimitive.Positioner>['align'];
  side?: React.ComponentProps<typeof PopoverPrimitive.Positioner>['side'];
  sideOffset?: React.ComponentProps<typeof PopoverPrimitive.Positioner>['sideOffset'];
  alignmentOffset?: React.ComponentProps<typeof PopoverPrimitive.Positioner>['alignOffset'];
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
    alignment = 'start',
    side,
    sideOffset = 8,
    alignmentOffset,
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
        align={alignment}
        side={side}
        sideOffset={sideOffset}
        alignOffset={alignmentOffset}
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
  PopoverRootProps as RootProps,
  PopoverTriggerProps as TriggerProps,
};
