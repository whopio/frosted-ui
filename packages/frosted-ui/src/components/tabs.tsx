'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import classNames from 'classnames';
import * as React from 'react';
import { extractMarginProps, withMarginProps } from '../helpers';
import { tabsListPropDefs } from './tabs.props';

import type { GetPropDefTypes, MarginProps } from '../helpers';

interface TabsRootProps extends React.ComponentProps<typeof TabsPrimitive.Root>, MarginProps {}

const TabsRoot = (props: TabsRootProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { className, ...rootProps } = marginRest;
  return (
    <TabsPrimitive.Root
      {...rootProps}
      className={classNames('fui-TabsRoot', className, withMarginProps(marginProps))}
    />
  );
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
