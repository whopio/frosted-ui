'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import * as React from 'react';
import {
  GetPropDefTypes,
  MarginProps,
  extractMarginProps,
  getSubtree,
  withMarginProps,
} from '../helpers';
import { segmentedControlNavLinkPropDefs } from './segmented-control-nav.props';

type SegmentedControlNavRootElement = React.ElementRef<
  typeof NavigationMenu.Root
>;
interface SegmentedControlNavRootProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof NavigationMenu.Root>,
      | 'asChild'
      | 'orientation'
      | 'defauValue'
      | 'value'
      | 'onValueChange'
      | 'delayDuration'
      | 'skipDelayDuration'
    >,
    MarginProps {}
const SegmentedControlNavRoot = React.forwardRef<
  SegmentedControlNavRootElement,
  SegmentedControlNavRootProps
>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { children, className, ...rootProps } = marginRest;

  return (
    <NavigationMenu.Root
      className="fui-SegmentedControlNavRoot"
      {...rootProps}
      asChild={false}
      ref={forwardedRef}
      orientation="horizontal"
    >
      <NavigationMenu.List
        className={classNames(
          'fui-reset',
          'fui-BaseSegmentedControlList',
          className,
          withMarginProps(marginProps),
        )}
      >
        {children}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
});
SegmentedControlNavRoot.displayName = 'SegmentedControlNavRoot';

type SegmentedControlNavLinkElement = React.ElementRef<
  typeof NavigationMenu.Link
>;
type SegmentedControlNavLinkOwnProps = GetPropDefTypes<
  typeof segmentedControlNavLinkPropDefs
>;
interface SegmentedControlNavLinkProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof NavigationMenu.Link>,
      'onSelect'
    >,
    SegmentedControlNavLinkOwnProps {}
const SegmentedControlNavLink = React.forwardRef<
  SegmentedControlNavLinkElement,
  SegmentedControlNavLinkProps
>((props, forwardedRef) => {
  const { asChild, children, className, ...linkProps } = props;

  return (
    <NavigationMenu.Item className="fui-SegmentedControlNavItem">
      <NavigationMenu.Link
        {...linkProps}
        ref={forwardedRef}
        className={classNames(
          'fui-reset',
          'fui-BaseSegmentedControlTrigger',
          'fui-SegmentedControlNavLink',
          className,
        )}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onSelect={() => {}}
        asChild={asChild}
      >
        {getSubtree({ asChild, children }, (children) => (
          <span className="fui-BaseSegmentedControlTriggerInner">
            {children}
          </span>
        ))}
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
});

SegmentedControlNavLink.displayName = 'SegmentedControlNavLink';

const SegmentedControlNav = Object.assign(
  {},
  {
    Root: SegmentedControlNavRoot,
    Link: SegmentedControlNavLink,
  },
);

export {
  SegmentedControlNav,
  SegmentedControlNavLink,
  SegmentedControlNavRoot,
};
export type { SegmentedControlNavLinkProps, SegmentedControlNavRootProps };
