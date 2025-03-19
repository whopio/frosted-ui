'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import * as React from 'react';
import { GetPropDefTypes, getSubtree } from '../helpers';
import { tabsNavLinkPropDefs, tabsNavPropDefs } from './tabs-nav.props';

type TabsNavOwnProps = GetPropDefTypes<typeof tabsNavPropDefs>;
interface TabsNavRootProps
  extends Omit<
      React.ComponentProps<typeof NavigationMenu.Root>,
      'asChild' | 'orientation' | 'defauValue' | 'value' | 'onValueChange' | 'delayDuration' | 'skipDelayDuration'
    >,
    TabsNavOwnProps {}

const TabsNavRoot = (props: TabsNavRootProps) => {
  const { children, className, size = tabsNavPropDefs.size.default, ...rootProps } = props;

  return (
    <NavigationMenu.Root className="fui-TabsNavRoot" {...rootProps} asChild={false} orientation="horizontal">
      <NavigationMenu.List
        className={classNames('fui-reset', 'fui-BaseTabsList', 'fui-TabsNavList', className, `fui-r-size-${size}`)}
      >
        {children}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
TabsNavRoot.displayName = 'TabsNavRoot';

type TabsNavLinkOwnProps = GetPropDefTypes<typeof tabsNavLinkPropDefs>;
interface TabsNavLinkProps
  extends Omit<React.ComponentProps<typeof NavigationMenu.Link>, 'onSelect'>,
    TabsNavLinkOwnProps {}

const TabsNavLink = (props: TabsNavLinkProps) => {
  const { asChild, children, className, ...linkProps } = props;

  return (
    <NavigationMenu.Item className="fui-TabsNavItem">
      <NavigationMenu.Link
        {...linkProps}
        className={classNames('fui-reset', 'fui-BaseTabsTrigger', 'fui-TabsNavLink', className)}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onSelect={() => {}}
        asChild={asChild}
      >
        {getSubtree({ asChild, children }, (children) => (
          <>
            <span className="fui-BaseTabsTriggerInner fui-TabsNavLinkInner">{children}</span>
            <span className="fui-BaseTabsTriggerInnerHidden fui-TabsNavLinkInnerHidden">{children}</span>
          </>
        ))}
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
};

TabsNavLink.displayName = 'TabsNavLink';

export { TabsNavLink as Link, TabsNavRoot as Root };
export type { TabsNavLinkProps as LinkProps, TabsNavRootProps as RootProps };
