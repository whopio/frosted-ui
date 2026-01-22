'use client';

import { Radio as RadioPrimitive } from '@base-ui/react/radio';
import { RadioGroup as RadioGroupPrimitive } from '@base-ui/react/radio-group';
import classNames from 'classnames';
import * as React from 'react';

import { radioGroupPropDefs } from './radio-group.props';

import type { GetPropDefTypes } from '../../helpers';

type RadioGroupOwnProps = GetPropDefTypes<typeof radioGroupPropDefs>;

interface RadioGroupRootProps
  extends Omit<React.ComponentProps<typeof RadioGroupPrimitive>, 'className' | 'style' | 'render'>, RadioGroupOwnProps {
  className?: string;
  style?: React.CSSProperties;
}

const RadioGroupRoot = (props: RadioGroupRootProps) => {
  const {
    className,
    size = radioGroupPropDefs.size.default,
    color = radioGroupPropDefs.color.default,
    highContrast = radioGroupPropDefs.highContrast.default,
    ...rootProps
  } = props;
  return (
    <RadioGroupPrimitive
      data-accent-color={color}
      {...rootProps}
      className={classNames('fui-RadioGroupRoot', className, `fui-r-size-${size}`, {
        'fui-high-contrast': highContrast,
      })}
    />
  );
};
RadioGroupRoot.displayName = 'RadioGroupRoot';

interface RadioGroupItemProps extends Omit<
  React.ComponentProps<typeof RadioPrimitive.Root>,
  'children' | 'className' | 'style' | 'render'
> {
  /** Optional label content to display next to the radio button */
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const RadioGroupItem = (props: RadioGroupItemProps) => {
  const { children, className, style, ...itemProps } = props;

  const Comp = children ? 'label' : 'span';

  return (
    <Comp className={classNames('fui-RadioGroupItem', className)} style={style}>
      <RadioPrimitive.Root {...itemProps} className={classNames('fui-reset', 'fui-RadioGroupButton')}>
        <RadioPrimitive.Indicator className="fui-RadioGroupIndicator" />
      </RadioPrimitive.Root>
      {children}
    </Comp>
  );
};
RadioGroupItem.displayName = 'RadioGroupItem';

export { RadioGroupItem as Item, RadioGroupRoot as Root };
export type { RadioGroupItemProps as ItemProps, RadioGroupRootProps as RootProps };
