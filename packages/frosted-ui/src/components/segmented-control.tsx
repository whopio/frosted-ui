'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import classNames from 'classnames';
import * as React from 'react';

interface SegmentedControlRootProps extends React.ComponentProps<typeof TabsPrimitive.Root> {}

const SegmentedControlRoot = (props: SegmentedControlRootProps) => {
  const { className, ...rootProps } = props;
  return <TabsPrimitive.Root {...rootProps} className={classNames('fui-BaseSegmentedControlRoot', className)} />;
};
SegmentedControlRoot.displayName = 'SegmentedControlRoot';

interface SegmentedControlListOwnProps extends React.ComponentProps<'div'> {}
interface SegmentedControlListProps
  extends React.ComponentProps<typeof TabsPrimitive.List>,
    SegmentedControlListOwnProps {}

const SegmentedControlList = (props: SegmentedControlListProps) => {
  const { className, ...listProps } = props;
  return <TabsPrimitive.List {...listProps} className={classNames('fui-BaseSegmentedControlList', className)} />;
};
SegmentedControlList.displayName = 'SegmentedControlList';

interface SegmentedControlTriggerProps extends React.ComponentProps<typeof TabsPrimitive.Trigger> {}

const SegmentedControlTrigger = (props: SegmentedControlTriggerProps) => {
  const { className, children, ...triggerProps } = props;
  return (
    <TabsPrimitive.Trigger
      {...triggerProps}
      className={classNames('fui-reset', 'fui-BaseSegmentedControlTrigger', className)}
    >
      <span className="fui-BaseSegmentedControlTriggerInner">{children}</span>
    </TabsPrimitive.Trigger>
  );
};
SegmentedControlTrigger.displayName = 'SegmentedControlTrigger';

interface SegmentedControlContentProps extends React.ComponentProps<typeof TabsPrimitive.Content> {}

const SegmentedControlContent = (props: SegmentedControlContentProps) => (
  <TabsPrimitive.Content {...props} className={classNames('fui-SegmentedControlContent', props.className)} />
);
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
