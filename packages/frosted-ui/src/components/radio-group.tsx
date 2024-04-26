'use client';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import classNames from 'classnames';
import * as React from 'react';
import {
  extractMarginProps,
  withBreakpoints,
  withMarginProps,
} from '../helpers';
import { radioGroupPropDefs } from './radio-group.props';

import type {
  GetPropDefTypes,
  MarginProps,
  PropsWithoutRefOrColor,
} from '../helpers';

type RadioGroupElement = React.ElementRef<typeof RadioGroupPrimitive.Root>;
type RadioGroupOwnProps = GetPropDefTypes<typeof radioGroupPropDefs>;
interface RadioGroupRootProps
  extends PropsWithoutRefOrColor<typeof RadioGroupPrimitive.Root>,
    MarginProps,
    RadioGroupOwnProps {}
const RadioGroupRoot = React.forwardRef<RadioGroupElement, RadioGroupRootProps>(
  (props, forwardedRef) => {
    const { rest: marginRest, ...marginProps } = extractMarginProps(props);
    const {
      className,
      size = radioGroupPropDefs.size.default,
      variant = radioGroupPropDefs.variant.default,
      color = radioGroupPropDefs.color.default,
      highContrast = radioGroupPropDefs.highContrast.default,
      ...rootProps
    } = marginRest;
    return (
      <RadioGroupPrimitive.Root
        data-accent-color={color}
        {...rootProps}
        ref={forwardedRef}
        className={classNames(
          'fui-RadioGroupRoot',
          className,
          withBreakpoints(size, 'fui-r-size'),
          `fui-variant-${variant}`,
          { 'fui-high-contrast': highContrast },
          withMarginProps(marginProps),
        )}
      />
    );
  },
);
RadioGroupRoot.displayName = 'RadioGroupRoot';

type RadioGroupItemElement = React.ElementRef<typeof RadioGroupPrimitive.Item>;
interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    MarginProps {}
const RadioGroupItem = React.forwardRef<
  RadioGroupItemElement,
  RadioGroupItemProps
>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { children, className, style, ...itemProps } = marginRest;

  const Comp = children ? 'label' : 'span';

  return (
    <Comp
      className={classNames(
        'fui-RadioGroupItem',
        className,
        withMarginProps(marginProps),
      )}
      style={style}
    >
      <RadioGroupPrimitive.Item
        {...itemProps}
        ref={forwardedRef}
        className={classNames('fui-reset', 'fui-RadioGroupButton')}
      >
        <RadioGroupPrimitive.Indicator className="fui-RadioGroupIndicator" />
      </RadioGroupPrimitive.Item>
      {children}
    </Comp>
  );
});
RadioGroupItem.displayName = 'RadioGroupItem';

export { RadioGroupItem as Item, RadioGroupRoot as Root };
export type {
  RadioGroupItemProps as ItemProps,
  RadioGroupRootProps as RootProps,
};
