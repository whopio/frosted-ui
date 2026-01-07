'use client';

import { Tabs as TabsPrimitive } from '@base-ui/react/tabs';
import classNames from 'classnames';
import * as React from 'react';

type SegmentedControlRootProps = Omit<
  React.ComponentProps<typeof TabsPrimitive.Root>,
  'className' | 'render' | 'orientation'
> &
  React.ComponentProps<'div'>;

const SegmentedControlRoot = (props: SegmentedControlRootProps) => {
  const { className, ...rootProps } = props;
  return <TabsPrimitive.Root {...rootProps} className={classNames('fui-BaseSegmentedControlRoot', className)} />;
};
SegmentedControlRoot.displayName = 'SegmentedControlRoot';

type SegmentedControlListProps = Omit<React.ComponentProps<typeof TabsPrimitive.List>, 'className' | 'render'> &
  React.ComponentProps<'div'>;

const SegmentedControlList = (props: SegmentedControlListProps) => {
  const { className, ...listProps } = props;
  return <TabsPrimitive.List {...listProps} className={classNames('fui-BaseSegmentedControlList', className)} />;
};
SegmentedControlList.displayName = 'SegmentedControlList';

type SegmentedControlTriggerProps = Omit<React.ComponentProps<typeof TabsPrimitive.Tab>, 'className' | 'render'> &
  React.ComponentProps<'button'>;

const SegmentedControlTrigger = (props: SegmentedControlTriggerProps) => {
  const { className, children, ...triggerProps } = props;
  return (
    <TabsPrimitive.Tab
      {...triggerProps}
      className={classNames('fui-reset', 'fui-BaseSegmentedControlTrigger', className)}
    >
      <span className="fui-BaseSegmentedControlTriggerInner">{children}</span>
    </TabsPrimitive.Tab>
  );
};
SegmentedControlTrigger.displayName = 'SegmentedControlTrigger';

type SegmentedControlContentProps = Omit<React.ComponentProps<typeof TabsPrimitive.Panel>, 'className' | 'render'> &
  React.ComponentProps<'div'>;

const SegmentedControlContent = (props: SegmentedControlContentProps) => (
  <TabsPrimitive.Panel {...props} className={classNames('fui-SegmentedControlContent', props.className)} />
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
