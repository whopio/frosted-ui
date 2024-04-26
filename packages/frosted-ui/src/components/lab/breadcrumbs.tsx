import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import * as React from 'react';
import { extractMarginProps, withMarginProps } from '../../helpers';
import { breadcrumbsPropDefs } from './breadcrumbs.props';

import { Button, DropdownMenu, Text } from '../';
import type {
  GetPropDefTypes,
  MarginProps,
  PropsWithoutRefOrColor,
} from '../../helpers';
import { ChevronRightIcon } from '../../icons';

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

    color = breadcrumbsPropDefs.color.default,
    highContrast = breadcrumbsPropDefs.highContrast.default,
    ...baseButtonProps
  } = marginRest;
  const Comp = asChild ? Slot : 'nav';
  const count = React.Children.count(children);

  return (
    <Comp
      data-accent-color={color}
      {...baseButtonProps}
      ref={forwardedRef}
      className={classNames(
        'fui-BreadcrumbsRoot',
        className,
        withMarginProps(marginProps),
      )}
    >
      {React.Children.map(
        children as BreadcrumbsRootChildrenTypes,
        (child, index) => {
          const isLastItem = index === count - 1;

          const separator = (
            <ChevronRightIcon className="fui-BreadcrumbsSeparator" />
          );
          if (isLastItem && !child.props.onClick) {
            return (
              <>
                {index > 0 ? separator : null}
                <Text
                  as="div"
                  data-accent-color={color}
                  size={'1'}
                  highContrast={highContrast}
                  children={child.props.children}
                  className={classNames(
                    'fui-reset',
                    'fui-BreadcrumbsLastItem',
                    child.props.className,
                  )}
                />
              </>
            );
          } else {
            const breadcrumbChild = React.cloneElement(child, {
              highContrast,
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
  extends Omit<
    React.ComponentPropsWithoutRef<typeof Button>,
    'variant' | 'size'
  > {}

const BreadcrumbsItem = React.forwardRef<
  BreadcrumbsItemElement,
  BreadcrumbsItemProps
>((props, forwardedRef) => (
  <Button
    {...props}
    size="1"
    variant={'ghost'}
    ref={forwardedRef}
    className={classNames('fui-BreadcrumbsItem', props.className)}
  />
));

BreadcrumbsItem.displayName = 'BreadcrumbsItem';

type BreadcrumbsDropdownElement = React.ElementRef<typeof DropdownMenu.Content>;
interface BreadcrumbsDropdownProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof DropdownMenu.Content>,
    'variant' | 'size'
  > {}

const BreadcrumbsDropdown = React.forwardRef<
  BreadcrumbsDropdownElement,
  BreadcrumbsDropdownProps
>(({ color, highContrast, ...props }, forwardedRef) => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>
      <BreadcrumbsItem color={color} highContrast={highContrast}>
        ...
      </BreadcrumbsItem>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content
      {...props}
      size="2"
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

export {
  BreadcrumbsDropdown as Dropdown,
  BreadcrumbsDropdownItem as DropdownItem,
  BreadcrumbsItem as Item,
  BreadcrumbsRoot as Root,
};

export type {
  BreadcrumbsDropdownItemProps as DropdownItemProps,
  BreadcrumbsDropdownProps as DropdownProps,
  BreadcrumbsItemProps as ItemProps,
  BreadcrumbsRootProps as RootProps,
};
