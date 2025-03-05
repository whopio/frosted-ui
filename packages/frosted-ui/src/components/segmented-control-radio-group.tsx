'use client';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import classNames from 'classnames';
import * as React from 'react';
import { extractMarginProps, withMarginProps } from '../helpers';

import type { MarginProps, PropsWithoutRefOrColor } from '../helpers';

interface SegmentedControlRadioGroupRootProps
  extends Omit<
      PropsWithoutRefOrColor<typeof RadioGroupPrimitive.Root>,
      'orientation' | 'loop' | 'required' | 'asChild'
    >,
    MarginProps {}

const SegmentedControlRadioGroupRoot = (props: SegmentedControlRadioGroupRootProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { className, children, ...rootProps } = marginRest;
  return (
    <RadioGroupPrimitive.Root
      {...rootProps}
      orientation="horizontal"
      className={classNames('fui-RadioGroupRoot', className, withMarginProps(marginProps))}
    >
      <div className="fui-BaseSegmentedControlList">{children}</div>
    </RadioGroupPrimitive.Root>
  );
};
SegmentedControlRadioGroupRoot.displayName = 'SegmentedControlRadioGroupRoot';

interface SegmentedControlRadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    MarginProps {}

const SegmentedControlRadioGroupItem = (props: SegmentedControlRadioGroupItemProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { children, className, style, ...itemProps } = marginRest;

  return (
    <RadioGroupPrimitive.Item
      {...itemProps}
      className={classNames('fui-reset', 'fui-BaseSegmentedControlTrigger', className, withMarginProps(marginProps))}
      style={style}
    >
      <span className="fui-BaseSegmentedControlTriggerInner">{children}</span>
    </RadioGroupPrimitive.Item>
  );
};
SegmentedControlRadioGroupItem.displayName = 'SegmentedControlRadioGroupItem';

export { SegmentedControlRadioGroupItem as Item, SegmentedControlRadioGroupRoot as Root };
export type { SegmentedControlRadioGroupItemProps as ItemProps, SegmentedControlRadioGroupRootProps as RootProps };
