'use client';

import { NavigationMenu } from '@base-ui/react/navigation-menu';
import classNames from 'classnames';
import * as React from 'react';

type SegmentedControlNavRootProps = Omit<React.ComponentProps<typeof NavigationMenu.Root>, 'className' | 'render'> &
  React.ComponentProps<'nav'>;

const SegmentedControlNavRoot = (props: SegmentedControlNavRootProps) => {
  const { children, className, ...rootProps } = props;

  return (
    <NavigationMenu.Root className="fui-SegmentedControlNavRoot" {...rootProps}>
      <NavigationMenu.List className={classNames('fui-reset', 'fui-BaseSegmentedControlList', className)}>
        {children}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
SegmentedControlNavRoot.displayName = 'SegmentedControlNavRoot';

interface SegmentedControlNavLinkOwnProps {
  /** Additional CSS class name */
  className?: string;
}
type SegmentedControlNavLinkProps = Omit<React.ComponentProps<typeof NavigationMenu.Link>, 'className'> &
  Omit<React.ComponentProps<'a'>, 'className'> &
  SegmentedControlNavLinkOwnProps;

const SegmentedControlNavLink = (props: SegmentedControlNavLinkProps) => {
  const { render, children, className, ...linkProps } = props;

  return (
    <NavigationMenu.Item className="fui-SegmentedControlNavItem">
      <NavigationMenu.Link
        {...linkProps}
        render={render}
        className={classNames('fui-reset', 'fui-BaseSegmentedControlTrigger', 'fui-SegmentedControlNavLink', className)}
      >
        <span className="fui-BaseSegmentedControlTriggerInner">{children}</span>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
};

SegmentedControlNavLink.displayName = 'SegmentedControlNavLink';

export { SegmentedControlNavLink as Link, SegmentedControlNavRoot as Root };
export type { SegmentedControlNavLinkProps as LinkProps, SegmentedControlNavRootProps as RootProps };
