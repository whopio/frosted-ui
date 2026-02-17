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
  const {
    children,
    className,
    size = tabsNavPropDefs.size.default,
    color = tabsNavPropDefs.color.default,
    highContrast = tabsNavPropDefs.highContrast.default,
    ...rootProps
  } = props;

  return (
    <NavigationMenu.Root className="fui-TabsNavRoot" {...rootProps}>
      <NavigationMenu.List
        data-accent-color={color}
        className={classNames('fui-reset', 'fui-BaseTabsList', 'fui-TabsNavList', className, `fui-r-size-${size}`, {
          'fui-high-contrast': highContrast,
        })}
      >
        {children}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
TabsNavRoot.displayName = 'TabsNavRoot';

interface TabsNavLinkOwnProps {
  className?: string;
}
type TabsNavLinkProps = Omit<React.ComponentProps<typeof NavigationMenu.Link>, 'className'> &
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
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
};

TabsNavLink.displayName = 'TabsNavLink';

export { TabsNavLink as Link, TabsNavRoot as Root };
export type { TabsNavLinkProps as LinkProps, TabsNavRootProps as RootProps };
