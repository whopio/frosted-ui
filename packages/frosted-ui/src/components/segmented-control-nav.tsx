'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import * as React from 'react';
import { GetPropDefTypes, MarginProps, extractMarginProps, getSubtree, withMarginProps } from '../helpers';
import { segmentedControlNavLinkPropDefs } from './segmented-control-nav.props';

interface SegmentedControlNavRootProps
  extends Omit<
      React.ComponentProps<typeof NavigationMenu.Root>,
      'asChild' | 'orientation' | 'defauValue' | 'value' | 'onValueChange' | 'delayDuration' | 'skipDelayDuration'
    >,
    MarginProps {}

const SegmentedControlNavRoot = (props: SegmentedControlNavRootProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { children, className, ...rootProps } = marginRest;

  return (
    <NavigationMenu.Root
      className="fui-SegmentedControlNavRoot"
      {...rootProps}
      asChild={false}
      orientation="horizontal"
    >
      <NavigationMenu.List
        className={classNames('fui-reset', 'fui-BaseSegmentedControlList', className, withMarginProps(marginProps))}
      >
        {children}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
SegmentedControlNavRoot.displayName = 'SegmentedControlNavRoot';

type SegmentedControlNavLinkOwnProps = GetPropDefTypes<typeof segmentedControlNavLinkPropDefs>;
interface SegmentedControlNavLinkProps
  extends Omit<React.ComponentProps<typeof NavigationMenu.Link>, 'onSelect'>,
    SegmentedControlNavLinkOwnProps {}

const SegmentedControlNavLink = (props: SegmentedControlNavLinkProps) => {
  const { asChild, children, className, ...linkProps } = props;

  return (
    <NavigationMenu.Item className="fui-SegmentedControlNavItem">
      <NavigationMenu.Link
        {...linkProps}
        className={classNames('fui-reset', 'fui-BaseSegmentedControlTrigger', 'fui-SegmentedControlNavLink', className)}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onSelect={() => {}}
        asChild={asChild}
      >
        {getSubtree({ asChild, children }, (children) => (
          <span className="fui-BaseSegmentedControlTriggerInner">{children}</span>
        ))}
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
};

SegmentedControlNavLink.displayName = 'SegmentedControlNavLink';

export { SegmentedControlNavLink as Link, SegmentedControlNavRoot as Root };
export type { SegmentedControlNavLinkProps as LinkProps, SegmentedControlNavRootProps as RootProps };
