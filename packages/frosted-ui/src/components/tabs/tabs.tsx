'use client';

import { Tabs as TabsPrimitive } from '@base-ui/react/tabs';
import classNames from 'classnames';
import * as React from 'react';

import { tabsListPropDefs } from './tabs.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';

type TabsRootProps = Omit<PropsWithoutColor<typeof TabsPrimitive.Root>, 'className' | 'render' | 'orientation'> &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue'>;

const TabsRoot = (props: TabsRootProps) => {
  const { className, ...rootProps } = props;
  return <TabsPrimitive.Root {...rootProps} className={classNames('fui-TabsRoot', className)} />;
};
TabsRoot.displayName = 'TabsRoot';

type TabsListOwnProps = GetPropDefTypes<typeof tabsListPropDefs>;
type TabsListProps = Omit<PropsWithoutColor<typeof TabsPrimitive.List>, 'className' | 'render'> &
  React.HTMLAttributes<HTMLDivElement> &
  TabsListOwnProps;

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

type TabsTriggerProps = Omit<PropsWithoutColor<typeof TabsPrimitive.Tab>, 'className' | 'render'> &
  React.HTMLAttributes<HTMLButtonElement>;

const TabsTrigger = (props: TabsTriggerProps) => {
  const { className, children, ...triggerProps } = props;
  return (
    <TabsPrimitive.Tab
      {...triggerProps}
      className={classNames('fui-reset', 'fui-BaseTabsTrigger', 'fui-TabsTrigger', className)}
    >
      <span className="fui-BaseTabsTriggerInner fui-TabsTriggerInner">{children}</span>
    </TabsPrimitive.Tab>
  );
};
TabsTrigger.displayName = 'TabsTrigger';

type TabsContentProps = Omit<PropsWithoutColor<typeof TabsPrimitive.Panel>, 'className' | 'render'> &
  React.HTMLAttributes<HTMLDivElement>;

const TabsContent = (props: TabsContentProps) => (
  <TabsPrimitive.Panel {...props} className={classNames('fui-TabsContent', props.className)} />
);
TabsContent.displayName = 'TabsContent';

export { TabsContent as Content, TabsList as List, TabsRoot as Root, TabsTrigger as Trigger };
export type {
  TabsContentProps as ContentProps,
  TabsListProps as ListProps,
  TabsRootProps as RootProps,
  TabsTriggerProps as TriggerProps,
};
