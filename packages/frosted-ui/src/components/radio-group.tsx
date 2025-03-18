'use client';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import classNames from 'classnames';
import * as React from 'react';
import { extractMarginProps, withMarginProps } from '../helpers';
import { radioGroupPropDefs } from './radio-group.props';

import type { GetPropDefTypes, MarginProps, PropsWithoutColor } from '../helpers';

type RadioGroupOwnProps = GetPropDefTypes<typeof radioGroupPropDefs>;
interface RadioGroupRootProps
  extends PropsWithoutColor<typeof RadioGroupPrimitive.Root>,
    MarginProps,
    RadioGroupOwnProps {}

const RadioGroupRoot = (props: RadioGroupRootProps) => {
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
      className={classNames(
        'fui-RadioGroupRoot',
        className,
        `fui-r-size-${size}`,
        `fui-variant-${variant}`,
        { 'fui-high-contrast': highContrast },
        withMarginProps(marginProps),
      )}
    />
  );
};
RadioGroupRoot.displayName = 'RadioGroupRoot';

interface RadioGroupItemProps extends React.ComponentProps<typeof RadioGroupPrimitive.Item>, MarginProps {}

const RadioGroupItem = (props: RadioGroupItemProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { children, className, style, ...itemProps } = marginRest;

  const Comp = children ? 'label' : 'span';

  return (
    <Comp className={classNames('fui-RadioGroupItem', className, withMarginProps(marginProps))} style={style}>
      <RadioGroupPrimitive.Item {...itemProps} className={classNames('fui-reset', 'fui-RadioGroupButton')}>
        <RadioGroupPrimitive.Indicator className="fui-RadioGroupIndicator" />
      </RadioGroupPrimitive.Item>
      {children}
    </Comp>
  );
};
RadioGroupItem.displayName = 'RadioGroupItem';

export { RadioGroupItem as Item, RadioGroupRoot as Root };
export type { RadioGroupItemProps as ItemProps, RadioGroupRootProps as RootProps };
