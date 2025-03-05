'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import * as React from 'react';
import {
  GetPropDefTypes,
  MarginProps,
  extractMarginProps,
  getSubtree,
  withBreakpoints,
  withMarginProps,
} from '../helpers';
import { tabsNavLinkPropDefs, tabsNavPropDefs } from './tabs-nav.props';

type TabsNavOwnProps = GetPropDefTypes<typeof tabsNavPropDefs>;
interface TabsNavRootProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof NavigationMenu.Root>,
      'asChild' | 'orientation' | 'defauValue' | 'value' | 'onValueChange' | 'delayDuration' | 'skipDelayDuration'
    >,
    MarginProps,
    TabsNavOwnProps {}

const TabsNavRoot = (props: TabsNavRootProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { children, className, size = tabsNavPropDefs.size.default, ...rootProps } = marginRest;

  return (
    <NavigationMenu.Root className="fui-TabsNavRoot" {...rootProps} asChild={false} orientation="horizontal">
      <NavigationMenu.List
        className={classNames(
          'fui-reset',
          'fui-BaseTabsList',
          'fui-TabsNavList',
          className,
          withMarginProps(marginProps),
          withBreakpoints(size, 'fui-r-size'),
        )}
      >
        {children}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
TabsNavRoot.displayName = 'TabsNavRoot';

type TabsNavLinkOwnProps = GetPropDefTypes<typeof tabsNavLinkPropDefs>;
interface TabsNavLinkProps
  extends Omit<React.ComponentPropsWithoutRef<typeof NavigationMenu.Link>, 'onSelect'>,
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
