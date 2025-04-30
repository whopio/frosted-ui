'use client';

import classNames from 'classnames';
import { Tabs as TabsPrimitive } from 'radix-ui';
import * as React from 'react';

import { tabsListPropDefs } from './tabs.props';

import type { GetPropDefTypes } from '../helpers';

interface TabsRootProps extends React.ComponentProps<typeof TabsPrimitive.Root> {}

const TabsRoot = (props: TabsRootProps) => {
  const { className, ...rootProps } = props;
  return <TabsPrimitive.Root {...rootProps} className={classNames('fui-TabsRoot', className)} />;
};
TabsRoot.displayName = 'TabsRoot';

type TabsListOwnProps = GetPropDefTypes<typeof tabsListPropDefs>;
interface TabsListProps extends React.ComponentProps<typeof TabsPrimitive.List>, TabsListOwnProps {}

const TabsList = (props: TabsListProps) => {
  const { className, size = tabsListPropDefs.size.default, ...listProps } = props;
  return (
    <TabsPrimitive.List
      {...listProps}
      className={classNames('fui-BaseTabsList', 'fui-TabsList', className, `fui-r-size-${size}`)}
    />
  );
};
TabsList.displayName = 'TabsList';

interface TabsTriggerProps extends React.ComponentProps<typeof TabsPrimitive.Trigger> {}

const TabsTrigger = (props: TabsTriggerProps) => {
  const { className, children, ...triggerProps } = props;
  return (
    <TabsPrimitive.Trigger
      {...triggerProps}
      className={classNames('fui-reset', 'fui-BaseTabsTrigger', 'fui-TabsTrigger', className)}
    >
      <span className="fui-BaseTabsTriggerInner fui-TabsTriggerInner">{children}</span>
      <span className="fui-BaseTabsTriggerInnerHidden fui-TabsTriggerInnerHidden">{children}</span>
    </TabsPrimitive.Trigger>
  );
};
TabsTrigger.displayName = 'TabsTrigger';

interface TabsContentProps extends React.ComponentProps<typeof TabsPrimitive.Content> {}

const TabsContent = (props: TabsContentProps) => (
  <TabsPrimitive.Content {...props} className={classNames('fui-TabsContent', props.className)} />
);
TabsContent.displayName = 'TabsContent';

export { TabsContent as Content, TabsList as List, TabsRoot as Root, TabsTrigger as Trigger };
export type {
  TabsContentProps as ContentProps,
  TabsListProps as ListProps,
  TabsRootProps as RootProps,
  TabsTriggerProps as TriggerProps,
};
