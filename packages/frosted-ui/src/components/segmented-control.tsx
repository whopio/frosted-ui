'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import classNames from 'classnames';
import * as React from 'react';
import { extractMarginProps, withMarginProps } from '../helpers';

import type { MarginProps } from '../helpers';

type SegmentedControlRootElement = React.ElementRef<typeof TabsPrimitive.Root>;
interface SegmentedControlRootProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>,
    MarginProps {}
const SegmentedControlRoot = React.forwardRef<
  SegmentedControlRootElement,
  SegmentedControlRootProps
>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { className, ...rootProps } = marginRest;
  return (
    <TabsPrimitive.Root
      {...rootProps}
      ref={forwardedRef}
      className={classNames(
        'fui-BaseSegmentedControlRoot',
        className,
        withMarginProps(marginProps),
      )}
    />
  );
});
SegmentedControlRoot.displayName = 'SegmentedControlRoot';

type SegmentedControlListElement = React.ElementRef<typeof TabsPrimitive.List>;
interface SegmentedControlListOwnProps
  extends React.ComponentPropsWithoutRef<'div'> {}
interface SegmentedControlListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    SegmentedControlListOwnProps {}
const SegmentedControlList = React.forwardRef<
  SegmentedControlListElement,
  SegmentedControlListProps
>((props, forwardedRef) => {
  const { className, ...listProps } = props;
  return (
    <TabsPrimitive.List
      {...listProps}
      ref={forwardedRef}
      className={classNames('fui-BaseSegmentedControlList', className)}
    />
  );
});
SegmentedControlList.displayName = 'SegmentedControlList';

type SegmentedControlTriggerElement = React.ElementRef<
  typeof TabsPrimitive.Trigger
>;
interface SegmentedControlTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {}
const SegmentedControlTrigger = React.forwardRef<
  SegmentedControlTriggerElement,
  SegmentedControlTriggerProps
>((props, forwardedRef) => {
  const { className, children, ...triggerProps } = props;
  return (
    <TabsPrimitive.Trigger
      {...triggerProps}
      ref={forwardedRef}
      className={classNames(
        'fui-reset',
        'fui-BaseSegmentedControlTrigger',
        className,
      )}
    >
      <span className="fui-BaseSegmentedControlTriggerInner">{children}</span>
    </TabsPrimitive.Trigger>
  );
});
SegmentedControlTrigger.displayName = 'SegmentedControlTrigger';

type SegmentedControlContentElement = React.ElementRef<
  typeof TabsPrimitive.Content
>;
interface SegmentedControlContentProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {}
const SegmentedControlContent = React.forwardRef<
  SegmentedControlContentElement,
  SegmentedControlContentProps
>((props, forwardedRef) => (
  <TabsPrimitive.Content
    {...props}
    ref={forwardedRef}
    className={classNames('fui-SegmentedControlContent', props.className)}
  />
));
SegmentedControlContent.displayName = 'SegmentedControlContent';

export {
  SegmentedControlContent as Content,
  SegmentedControlList as List,
  SegmentedControlRoot as Root,
  SegmentedControlTrigger as Trigger,
};
export type {
  SegmentedControlContentProps as ContentProps,
  SegmentedControlListProps as ListProps,
  SegmentedControlRootProps as RootProps,
  SegmentedControlTriggerProps as TriggerProps,
};
