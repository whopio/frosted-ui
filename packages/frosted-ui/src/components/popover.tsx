'use client';

import * as PopoverPrimitive from '@radix-ui/react-popover';
import classNames from 'classnames';
import * as React from 'react';
import { withBreakpoints } from '../helpers';
import { Theme } from '../theme';
import { popoverContentPropDefs } from './popover.props';

import type { GetPropDefTypes } from '../helpers';

interface PopoverRootProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Root> {}
const PopoverRoot: React.FC<PopoverRootProps> = (props: PopoverRootProps) => (
  <PopoverPrimitive.Root {...props} />
);
PopoverRoot.displayName = 'PopoverRoot';

interface PopoverTriggerProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>,
    'asChild'
  > {}

const PopoverTrigger = (props: PopoverTriggerProps) => (
  <PopoverPrimitive.Trigger {...props} asChild />
);
PopoverTrigger.displayName = 'PopoverTrigger';

type PopoverContentOwnProps = GetPropDefTypes<typeof popoverContentPropDefs>;
interface PopoverContentProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>,
      'asChild'
    >,
    PopoverContentOwnProps {
  container?: React.ComponentProps<typeof PopoverPrimitive.Portal>['container'];
}

const PopoverContent = (props: PopoverContentProps) => {
  const {
    className,
    forceMount,
    container,
    size = popoverContentPropDefs.size.default,
    variant = popoverContentPropDefs.variant.default,
    ...contentProps
  } = props;
  return (
    <PopoverPrimitive.Portal container={container} forceMount={forceMount}>
      <Theme asChild>
        <PopoverPrimitive.Content
          align="start"
          sideOffset={8}
          collisionPadding={10}
          {...contentProps}
          className={classNames(
            'fui-PopperContent',
            'fui-PopoverContent',
            `fui-variant-${variant}`,
            className,
            withBreakpoints(size, 'fui-r-size'),
          )}
        />
      </Theme>
    </PopoverPrimitive.Portal>
  );
};
PopoverContent.displayName = 'PopoverContent';

interface PopoverCloseProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Close>,
    'asChild'
  > {}

const PopoverClose = (props: PopoverCloseProps) => (
  <PopoverPrimitive.Close {...props} asChild />
);
PopoverClose.displayName = 'PopoverClose';

export {
  PopoverClose as Close,
  PopoverContent as Content,
  PopoverRoot as Root,
  PopoverTrigger as Trigger,
};
export type {
  PopoverCloseProps as CloseProps,
  PopoverContentProps as ContentProps,
  PopoverRootProps as RootProps,
  PopoverTriggerProps as TriggerProps,
};
