'use client';

import * as RadioItemsGroupPrimitive from '@radix-ui/react-radio-group';
import classNames from 'classnames';
import * as React from 'react';
import {
  extractMarginProps,
  withBreakpoints,
  withMarginProps,
} from '../helpers';
import { radioItemsGroupPropDefs } from './radio-items-group.props';

import type {
  GetPropDefTypes,
  MarginProps,
  PropsWithoutRefOrColor,
} from '../helpers';

type RadioItemsGroupElement = React.ElementRef<
  typeof RadioItemsGroupPrimitive.Root
>;
type RadioItemsGroupOwnProps = GetPropDefTypes<typeof radioItemsGroupPropDefs>;
interface RadioItemsGroupRootProps
  extends PropsWithoutRefOrColor<typeof RadioItemsGroupPrimitive.Root>,
    MarginProps,
    RadioItemsGroupOwnProps {}
const RadioItemsGroupRoot = React.forwardRef<
  RadioItemsGroupElement,
  RadioItemsGroupRootProps
>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const {
    className,
    size = radioItemsGroupPropDefs.size.default,
    variant = radioItemsGroupPropDefs.variant.default,
    color = radioItemsGroupPropDefs.color.default,
    highContrast = radioItemsGroupPropDefs.highContrast.default,
    ...rootProps
  } = marginRest;
  return (
    <RadioItemsGroupPrimitive.Root
      data-accent-color={color}
      {...rootProps}
      ref={forwardedRef}
      className={classNames(
        'fui-RadioItemsGroupRoot',
        className,
        withBreakpoints(size, 'fui-r-size'),
        `fui-variant-${variant}`,
        { 'fui-high-contrast': highContrast },
        withMarginProps(marginProps),
      )}
    />
  );
});
RadioItemsGroupRoot.displayName = 'RadioItemsGroupRoot';

type RadioItemsGroupItemElement = React.ElementRef<
  typeof RadioItemsGroupPrimitive.Item
>;
interface RadioItemsGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioItemsGroupPrimitive.Item>,
    MarginProps {}
const RadioItemsGroupItem = React.forwardRef<
  RadioItemsGroupItemElement,
  RadioItemsGroupItemProps
>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { children, className, style, ...itemProps } = marginRest;

  return (
    <RadioItemsGroupPrimitive.Item
      style={style}
      {...itemProps}
      ref={forwardedRef}
      className={classNames(
        'fui-reset',
        'fui-RadioItemsGroupButton',
        'fui-RadioItemsGroupItem',
        className,
        withMarginProps(marginProps),
      )}
      asChild
    >
      {/* <RadioItemsGroupPrimitive.Indicator className="fui-RadioItemsGroupIndicator" /> */}
      {children}
    </RadioItemsGroupPrimitive.Item>
  );
});
RadioItemsGroupItem.displayName = 'RadioItemsGroupItem';

const RadioItemsGroup = Object.assign(
  {},
  {
    Root: RadioItemsGroupRoot,
    Item: RadioItemsGroupItem,
  },
);

export { RadioItemsGroup, RadioItemsGroupItem, RadioItemsGroupRoot };
export type { RadioItemsGroupItemProps, RadioItemsGroupRootProps };
