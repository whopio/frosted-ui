'use client';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import classNames from 'classnames';
import * as React from 'react';

import { radioGroupPropDefs } from './radio-group.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../helpers';

type RadioGroupOwnProps = GetPropDefTypes<typeof radioGroupPropDefs>;
interface RadioGroupRootProps extends PropsWithoutColor<typeof RadioGroupPrimitive.Root>, RadioGroupOwnProps {}

const RadioGroupRoot = (props: RadioGroupRootProps) => {
  const {
    className,
    size = radioGroupPropDefs.size.default,
    variant = radioGroupPropDefs.variant.default,
    color = radioGroupPropDefs.color.default,
    highContrast = radioGroupPropDefs.highContrast.default,
    ...rootProps
  } = props;
  return (
    <RadioGroupPrimitive.Root
      data-accent-color={color}
      {...rootProps}
      className={classNames('fui-RadioGroupRoot', className, `fui-r-size-${size}`, `fui-variant-${variant}`, {
        'fui-high-contrast': highContrast,
      })}
    />
  );
};
RadioGroupRoot.displayName = 'RadioGroupRoot';

interface RadioGroupItemProps extends React.ComponentProps<typeof RadioGroupPrimitive.Item> {}

const RadioGroupItem = (props: RadioGroupItemProps) => {
  const { children, className, style, ...itemProps } = props;

  const Comp = children ? 'label' : 'span';

  return (
    <Comp className={classNames('fui-RadioGroupItem', className)} style={style}>
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
