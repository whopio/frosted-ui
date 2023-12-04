'use client';

import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import classNames from 'classnames';
import * as React from 'react';
import { withBreakpoints } from '../helpers';
import { Theme } from '../theme';
import { hoverCardContentPropDefs } from './hover-card.props';

import type { GetPropDefTypes } from '../helpers';

interface HoverCardRootProps
  extends React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Root> {}
const HoverCardRoot: React.FC<HoverCardRootProps> = (props) => (
  <HoverCardPrimitive.Root closeDelay={150} openDelay={200} {...props} />
);
HoverCardRoot.displayName = 'HoverCardRoot';

type HoverCardTriggerElement = React.ElementRef<
  typeof HoverCardPrimitive.Trigger
>;
interface HoverCardTriggerProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Trigger>,
    'asChild'
  > {}
const HoverCardTrigger = React.forwardRef<
  HoverCardTriggerElement,
  HoverCardTriggerProps
>((props, forwardedRef) => (
  <HoverCardPrimitive.Trigger
    ref={forwardedRef}
    className={classNames('fui-HoverCardTrigger', props.className)}
    {...props}
    asChild
  />
));
HoverCardTrigger.displayName = 'HoverCardTrigger';

type HoverCardContentElement = React.ElementRef<
  typeof HoverCardPrimitive.Content
>;
type HoverCardContentOwnProps = GetPropDefTypes<
  typeof hoverCardContentPropDefs
>;
interface HoverCardContentProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>,
      'asChild'
    >,
    HoverCardContentOwnProps {
  container?: React.ComponentProps<
    typeof HoverCardPrimitive.Portal
  >['container'];
}
const HoverCardContent = React.forwardRef<
  HoverCardContentElement,
  HoverCardContentProps
>((props, forwardedRef) => {
  const {
    className,
    forceMount,
    container,
    size = hoverCardContentPropDefs.size.default,
    ...contentProps
  } = props;
  return (
    <HoverCardPrimitive.Portal container={container} forceMount={forceMount}>
      <Theme asChild>
        <HoverCardPrimitive.Content
          align="start"
          sideOffset={8}
          collisionPadding={10}
          {...contentProps}
          ref={forwardedRef}
          className={classNames(
            'fui-PopperContent',
            'fui-HoverCardContent',
            className,
            withBreakpoints(size, 'fui-r-size'),
          )}
        />
      </Theme>
    </HoverCardPrimitive.Portal>
  );
});
HoverCardContent.displayName = 'HoverCardContent';

const HoverCard = Object.assign(
  {},
  {
    Root: HoverCardRoot,
    Trigger: HoverCardTrigger,
    Content: HoverCardContent,
  },
);

export { HoverCard, HoverCardContent, HoverCardRoot, HoverCardTrigger };
export type {
  HoverCardContentProps,
  HoverCardRootProps,
  HoverCardTriggerProps,
};
