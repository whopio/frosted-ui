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

type PopoverTriggerElement = React.ElementRef<typeof PopoverPrimitive.Trigger>;
interface PopoverTriggerProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>,
    'asChild'
  > {}
const PopoverTrigger = React.forwardRef<
  PopoverTriggerElement,
  PopoverTriggerProps
>((props, forwardedRef) => (
  <PopoverPrimitive.Trigger {...props} ref={forwardedRef} asChild />
));
PopoverTrigger.displayName = 'PopoverTrigger';

type PopoverContentElement = React.ElementRef<typeof PopoverPrimitive.Content>;
type PopoverContentOwnProps = GetPropDefTypes<typeof popoverContentPropDefs>;
interface PopoverContentProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>,
      'asChild'
    >,
    PopoverContentOwnProps {
  container?: React.ComponentProps<typeof PopoverPrimitive.Portal>['container'];
}
const PopoverContent = React.forwardRef<
  PopoverContentElement,
  PopoverContentProps
>((props, forwardedRef) => {
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
          ref={forwardedRef}
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
});
PopoverContent.displayName = 'PopoverContent';

type PopoverCloseElement = React.ElementRef<typeof PopoverPrimitive.Close>;
interface PopoverCloseProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Close>,
    'asChild'
  > {}
const PopoverClose = React.forwardRef<PopoverCloseElement, PopoverCloseProps>(
  (props, forwardedRef) => (
    <PopoverPrimitive.Close {...props} ref={forwardedRef} asChild />
  ),
);
PopoverClose.displayName = 'PopoverClose';

const Popover = Object.assign(
  {},
  {
    Root: PopoverRoot,
    Content: PopoverContent,
    Trigger: PopoverTrigger,
    Close: PopoverClose,
  },
);

export { Popover, PopoverClose, PopoverContent, PopoverRoot, PopoverTrigger };
export type {
  PopoverCloseProps,
  PopoverContentProps,
  PopoverRootProps,
  PopoverTriggerProps,
};
