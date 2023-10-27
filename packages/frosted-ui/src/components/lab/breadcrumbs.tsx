import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import * as React from 'react';
import {
  extractMarginProps,
  withBreakpoints,
  withMarginProps,
} from '../../helpers';
import { breadcrumbsPropDefs } from './breadcrumbs.props';

import { Button, DropdownMenu, Separator, Text } from '../';
import type {
  GetPropDefTypes,
  MarginProps,
  PropsWithoutRefOrColor,
} from '../../helpers';

type BreadcrumbsRootChildrenTypes = React.ReactElement<
  BreadcrumbsItemProps | BreadcrumbsDropdownProps
>;

type BreadcrumbsRootElement = React.ElementRef<'nav'>;
type BreadcrumbsRootOwnProps = GetPropDefTypes<typeof breadcrumbsPropDefs>;
interface BreadcrumbsRootProps
  extends PropsWithoutRefOrColor<'nav'>,
    MarginProps,
    BreadcrumbsRootOwnProps {
  asChild?: boolean;
}
const BreadcrumbsRoot = React.forwardRef<
  BreadcrumbsRootElement,
  BreadcrumbsRootProps
>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const {
    className,
    children,
    asChild = false,

    size = breadcrumbsPropDefs.size.default,
    color = breadcrumbsPropDefs.color.default,
    highContrast = breadcrumbsPropDefs.highContrast.default,
    ...baseButtonProps
  } = marginRest;
  const Comp = asChild ? Slot : 'nav';
  const count = React.Children.count(children);

  return (
    <Comp
      {...baseButtonProps}
      ref={forwardedRef}
      className={classNames(
        'rt-BreadcrumbsRoot',
        className,
        withBreakpoints(size, 'rt-r-size'),
        withMarginProps(marginProps),
      )}
    >
      {React.Children.map(
        children as BreadcrumbsRootChildrenTypes,
        (child, index) => {
          const isLastItem = index === count - 1;

          const separator = (
            <Separator orientation="vertical" size="1" color={color} />
          );
          if (isLastItem && !child.props.onClick) {
            return (
              <>
                {index > 0 ? separator : null}
                <Text
                  as="div"
                  color={color}
                  size={size}
                  highContrast={highContrast}
                  children={child.props.children}
                  className={classNames(
                    'rt-reset',
                    'rt-BreadcrumbsLastItem',
                    child.props.className,
                  )}
                />
              </>
            );
          } else {
            const breadcrumbChild = React.cloneElement(child, {
              highContrast,
              size,
              color,
              ...child.props,
            });
            return (
              <>
                {index > 0 ? separator : null}
                {breadcrumbChild}
              </>
            );
          }
        },
      )}
    </Comp>
  );
});
BreadcrumbsRoot.displayName = 'BreadcrumbsRoot';

type BreadcrumbsItemElement = React.ElementRef<typeof Button>;
interface BreadcrumbsItemProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Button>, 'variant'> {}

const BreadcrumbsItem = React.forwardRef<
  BreadcrumbsItemElement,
  BreadcrumbsItemProps
>((props, forwardedRef) => (
  <Button
    {...props}
    variant={'ghost'}
    ref={forwardedRef}
    className={classNames('rt-BreadcrumbsItem', props.className)}
  />
));

BreadcrumbsItem.displayName = 'BreadcrumbsItem';

type BreadcrumbsDropdownElement = React.ElementRef<typeof DropdownMenu.Content>;
interface BreadcrumbsDropdownProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof DropdownMenu.Content>,
    'variant'
  > {}

const BreadcrumbsDropdown = React.forwardRef<
  BreadcrumbsDropdownElement,
  BreadcrumbsDropdownProps
>(({ color, highContrast, size, ...props }, forwardedRef) => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>
      <Breadcrumbs.Item color={color} size={size} highContrast={highContrast}>
        ...
      </Breadcrumbs.Item>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content
      {...props}
      variant="soft"
      color={color}
      highContrast={highContrast}
      ref={forwardedRef}
    >
      {props.children}
    </DropdownMenu.Content>
  </DropdownMenu.Root>
));

BreadcrumbsDropdown.displayName = 'BreadcrumbsDropdown';

type BreadcrumbsDropdownItemElement = React.ElementRef<
  typeof DropdownMenu.Item
>;
interface BreadcrumbsDropdownItemProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof DropdownMenu.Item>,
    'color'
  > {}

const BreadcrumbsDropdownItem = React.forwardRef<
  BreadcrumbsDropdownItemElement,
  BreadcrumbsDropdownItemProps
>((props, forwardedRef) => <DropdownMenu.Item {...props} ref={forwardedRef} />);

BreadcrumbsDropdownItem.displayName = 'BreadcrumbsDropdownItem';

const Breadcrumbs = Object.assign(
  {},
  {
    Root: BreadcrumbsRoot,
    Item: BreadcrumbsItem,
    Dropdown: BreadcrumbsDropdown,
    DropdownItem: BreadcrumbsDropdownItem,
  },
);

export {
  Breadcrumbs,
  BreadcrumbsDropdown,
  BreadcrumbsDropdownItem,
  BreadcrumbsItem,
  BreadcrumbsRoot,
};

export type {
  BreadcrumbsDropdownItemProps,
  BreadcrumbsDropdownProps,
  BreadcrumbsItemProps,
  BreadcrumbsRootProps,
};
