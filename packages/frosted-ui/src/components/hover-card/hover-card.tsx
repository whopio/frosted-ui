'use client';

import { PreviewCard as PreviewCardPrimitive } from '@base-ui/react/preview-card';
import classNames from 'classnames';
import * as React from 'react';
import { Theme } from '../../theme';
import { hoverCardContentPropDefs } from './hover-card.props';

import type { GetPropDefTypes } from '../../helpers';

const createHandle = PreviewCardPrimitive.createHandle;

type HoverCardHandle<T = unknown> = ReturnType<typeof PreviewCardPrimitive.createHandle<T>>;

interface HoverCardRootProps<T = unknown> extends Omit<
  React.ComponentProps<typeof PreviewCardPrimitive.Root>,
  'className' | 'render' | 'children' | 'handle'
> {
  children?: React.ReactNode | ((props: { payload: T | undefined }) => React.ReactNode);
  handle?: HoverCardHandle<T>;
}
function HoverCardRoot<T = unknown>(props: HoverCardRootProps<T>) {
  return <PreviewCardPrimitive.Root {...(props as React.ComponentProps<typeof PreviewCardPrimitive.Root>)} />;
}
HoverCardRoot.displayName = 'HoverCardRoot';

interface HoverCardTriggerProps<T = unknown> extends Omit<
  React.ComponentProps<typeof PreviewCardPrimitive.Trigger>,
  'render' | 'className' | 'handle' | 'payload'
> {
  className?: string;
  children: React.ReactElement;
  handle?: HoverCardHandle<T>;
  payload?: T;
  /** How long to wait before the preview card opens. Specified in milliseconds. */
  delay?: number;
  /** How long to wait before closing the preview card. Specified in milliseconds. */
  closeDelay?: number;
}
function HoverCardTrigger<T = unknown>(props: HoverCardTriggerProps<T>) {
  const { children, delay = 200, closeDelay = 150, ...rest } = props;
  return (
    <PreviewCardPrimitive.Trigger
      className="fui-HoverCardTrigger"
      delay={delay}
      closeDelay={closeDelay}
      render={children}
      {...(rest as React.ComponentProps<typeof PreviewCardPrimitive.Trigger>)}
    />
  );
}
HoverCardTrigger.displayName = 'HoverCardTrigger';

type PositionerProps = React.ComponentProps<typeof PreviewCardPrimitive.Positioner>;
type PortalProps = React.ComponentProps<typeof PreviewCardPrimitive.Portal>;
type PopupProps = React.ComponentProps<typeof PreviewCardPrimitive.Popup>;

type HoverCardContentOwnProps = GetPropDefTypes<typeof hoverCardContentPropDefs>;
interface HoverCardContentProps
  extends
    Omit<PopupProps, 'className' | 'render'>,
    Pick<
      PositionerProps,
      | 'side'
      | 'sideOffset'
      | 'collisionPadding'
      | 'collisionBoundary'
      | 'collisionAvoidance'
      | 'arrowPadding'
      | 'sticky'
      | 'anchor'
      | 'disableAnchorTracking'
    >,
    HoverCardContentOwnProps {
  className?: string;
  container?: PortalProps['container'];
  keepMounted?: PortalProps['keepMounted'];
  /** The alignment of the content relative to the trigger. */
  align?: PositionerProps['align'];
  /** The offset from the alignment edge in pixels. */
  alignOffset?: PositionerProps['alignOffset'];
}
const HoverCardContent = (props: HoverCardContentProps) => {
  const {
    className,
    keepMounted,
    container,
    size = hoverCardContentPropDefs.size.default,
    variant = hoverCardContentPropDefs.variant.default,
    align = 'center',
    side,
    sideOffset = 8,
    alignOffset,
    collisionPadding = 10,
    collisionBoundary,
    collisionAvoidance,
    arrowPadding,
    sticky,
    anchor,
    disableAnchorTracking,
    children,
    ...contentProps
  } = props;
  return (
    <PreviewCardPrimitive.Portal container={container} keepMounted={keepMounted}>
      <PreviewCardPrimitive.Positioner
        align={align}
        side={side}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        collisionPadding={collisionPadding}
        collisionBoundary={collisionBoundary}
        collisionAvoidance={collisionAvoidance}
        arrowPadding={arrowPadding}
        sticky={sticky}
        anchor={anchor}
        disableAnchorTracking={disableAnchorTracking}
        className="fui-HoverCardPositioner"
      >
        <Theme
          render={<PreviewCardPrimitive.Popup />}
          {...contentProps}
          className={classNames('fui-HoverCardContent', `fui-variant-${variant}`, className, `fui-r-size-${size}`)}
        >
          {children}
        </Theme>
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
  );
};
HoverCardContent.displayName = 'HoverCardContent';

export { HoverCardContent as Content, createHandle, HoverCardRoot as Root, HoverCardTrigger as Trigger };
export type {
  HoverCardContentProps as ContentProps,
  HoverCardHandle as Handle,
  HoverCardRootProps as RootProps,
  HoverCardTriggerProps as TriggerProps
};

