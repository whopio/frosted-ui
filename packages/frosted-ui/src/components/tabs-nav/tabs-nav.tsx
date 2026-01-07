'use client';

import { NavigationMenu } from '@base-ui/react/navigation-menu';
import classNames from 'classnames';
import * as React from 'react';
import { GetPropDefTypes } from '../../helpers';
import { tabsNavPropDefs } from './tabs-nav.props';

type TabsNavOwnProps = GetPropDefTypes<typeof tabsNavPropDefs>;
type TabsNavRootProps = Omit<React.ComponentProps<typeof NavigationMenu.Root>, 'className' | 'render' | 'orientation'> &
  React.ComponentProps<'nav'> &
  TabsNavOwnProps;

const TabsNavRoot = (props: TabsNavRootProps) => {
  const { children, className, size = tabsNavPropDefs.size.default, ...rootProps } = props;

  return (
    <NavigationMenu.Root className="fui-TabsNavRoot" {...rootProps}>
      <NavigationMenu.List
        className={classNames('fui-reset', 'fui-BaseTabsList', 'fui-TabsNavList', className, `fui-r-size-${size}`)}
      >
        {children}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
TabsNavRoot.displayName = 'TabsNavRoot';

interface TabsNavLinkOwnProps {
  /** Render the link as a custom element */
  render?: React.ReactElement;
  /** Additional CSS class name */
  className?: string;
}
type TabsNavLinkProps = Omit<React.ComponentProps<typeof NavigationMenu.Link>, 'className' | 'render'> &
  Omit<React.ComponentProps<'a'>, 'className'> &
  TabsNavLinkOwnProps;

const TabsNavLink = (props: TabsNavLinkProps) => {
  const { render, children, className, ...linkProps } = props;

  return (
    <NavigationMenu.Item className="fui-TabsNavItem">
      <NavigationMenu.Link
        {...linkProps}
        render={render}
        className={classNames('fui-reset', 'fui-BaseTabsTrigger', 'fui-TabsNavLink', className)}
      >
        <span className="fui-BaseTabsTriggerInner fui-TabsNavLinkInner">{children}</span>
        <span className="fui-BaseTabsTriggerInnerHidden fui-TabsNavLinkInnerHidden">{children}</span>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
};

TabsNavLink.displayName = 'TabsNavLink';

export { TabsNavLink as Link, TabsNavRoot as Root };
export type { TabsNavLinkProps as LinkProps, TabsNavRootProps as RootProps };
