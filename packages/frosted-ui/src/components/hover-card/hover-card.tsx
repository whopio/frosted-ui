'use client';

import { PreviewCard as PreviewCardPrimitive } from '@base-ui/react/preview-card';
import classNames from 'classnames';
import * as React from 'react';
import { Theme } from '../../theme';
import { hoverCardContentPropDefs } from './hover-card.props';

import type { GetPropDefTypes } from '../../helpers';

interface HoverCardRootProps extends Omit<
  React.ComponentProps<typeof PreviewCardPrimitive.Root>,
  'className' | 'render'
> {}
const HoverCardRoot: React.FC<HoverCardRootProps> = (props) => <PreviewCardPrimitive.Root {...props} />;
HoverCardRoot.displayName = 'HoverCardRoot';

interface HoverCardTriggerProps extends Omit<
  React.ComponentProps<typeof PreviewCardPrimitive.Trigger>,
  'className' | 'render'
> {
  children: React.ReactElement;
  /** How long to wait before the preview card opens. Specified in milliseconds. */
  delay?: number;
  /** How long to wait before closing the preview card. Specified in milliseconds. */
  closeDelay?: number;
}
const HoverCardTrigger = (props: HoverCardTriggerProps) => {
  const { children, delay = 200, closeDelay = 150, ...rest } = props;
  return (
    <PreviewCardPrimitive.Trigger
      className="fui-HoverCardTrigger"
      delay={delay}
      closeDelay={closeDelay}
      render={children}
      {...rest}
    />
  );
};
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
    >,
    HoverCardContentOwnProps {
  className?: string;
  container?: PortalProps['container'];
  keepMounted?: PortalProps['keepMounted'];
  /** The alignment of the content relative to the trigger. */
  alignment?: PositionerProps['align'];
  /** The offset from the alignment edge in pixels. */
  alignmentOffset?: PositionerProps['alignOffset'];
}
const HoverCardContent = (props: HoverCardContentProps) => {
  const {
    className,
    keepMounted,
    container,
    size = hoverCardContentPropDefs.size.default,
    variant = hoverCardContentPropDefs.variant.default,
    alignment = 'center',
    side,
    sideOffset = 8,
    alignmentOffset,
    collisionPadding = 10,
    collisionBoundary,
    collisionAvoidance,
    arrowPadding,
    sticky,
    anchor,
    children,
    ...contentProps
  } = props;
  return (
    <PreviewCardPrimitive.Portal container={container} keepMounted={keepMounted}>
      <PreviewCardPrimitive.Positioner
        align={alignment}
        side={side}
        sideOffset={sideOffset}
        alignOffset={alignmentOffset}
        collisionPadding={collisionPadding}
        collisionBoundary={collisionBoundary}
        collisionAvoidance={collisionAvoidance}
        arrowPadding={arrowPadding}
        sticky={sticky}
        anchor={anchor}
        className="fui-HoverCardPositioner"
      >
        <Theme asChild>
          <PreviewCardPrimitive.Popup
            {...contentProps}
            className={classNames('fui-HoverCardContent', `fui-variant-${variant}`, className, `fui-r-size-${size}`)}
          >
            {children}
          </PreviewCardPrimitive.Popup>
        </Theme>
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
  );
};
HoverCardContent.displayName = 'HoverCardContent';

export { HoverCardContent as Content, HoverCardRoot as Root, HoverCardTrigger as Trigger };
export type {
  HoverCardContentProps as ContentProps,
  HoverCardRootProps as RootProps,
  HoverCardTriggerProps as TriggerProps,
};
