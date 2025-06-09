'use client';

import classNames from 'classnames';
import { HoverCard as HoverCardPrimitive } from 'radix-ui';
import * as React from 'react';
import { Theme } from '../../theme';
import { hoverCardContentPropDefs } from './hover-card.props';

import type { GetPropDefTypes } from '../../helpers';

interface HoverCardRootProps extends React.ComponentProps<typeof HoverCardPrimitive.Root> {}
const HoverCardRoot: React.FC<HoverCardRootProps> = (props) => (
  <HoverCardPrimitive.Root closeDelay={150} openDelay={200} {...props} />
);
HoverCardRoot.displayName = 'HoverCardRoot';

interface HoverCardTriggerProps extends Omit<React.ComponentProps<typeof HoverCardPrimitive.Trigger>, 'asChild'> {}
const HoverCardTrigger = (props: HoverCardTriggerProps) => (
  <HoverCardPrimitive.Trigger className={classNames('fui-HoverCardTrigger', props.className)} {...props} asChild />
);
HoverCardTrigger.displayName = 'HoverCardTrigger';

type HoverCardContentOwnProps = GetPropDefTypes<typeof hoverCardContentPropDefs>;
interface HoverCardContentProps
  extends Omit<React.ComponentProps<typeof HoverCardPrimitive.Content>, 'asChild'>,
    HoverCardContentOwnProps {
  container?: React.ComponentProps<typeof HoverCardPrimitive.Portal>['container'];
}
const HoverCardContent = (props: HoverCardContentProps) => {
  const { className, forceMount, container, size = hoverCardContentPropDefs.size.default, ...contentProps } = props;
  return (
    <HoverCardPrimitive.Portal container={container} forceMount={forceMount}>
      <Theme asChild>
        <HoverCardPrimitive.Content
          align="start"
          sideOffset={8}
          collisionPadding={10}
          {...contentProps}
          className={classNames('fui-PopperContent', 'fui-HoverCardContent', className, `fui-r-size-${size}`)}
        />
      </Theme>
    </HoverCardPrimitive.Portal>
  );
};
HoverCardContent.displayName = 'HoverCardContent';

export { HoverCardContent as Content, HoverCardRoot as Root, HoverCardTrigger as Trigger };
export type {
  HoverCardContentProps as ContentProps,
  HoverCardRootProps as RootProps,
  HoverCardTriggerProps as TriggerProps,
};
