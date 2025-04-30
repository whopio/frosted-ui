'use client';

import classNames from 'classnames';
import { RadioGroup as RadioGroupPrimitive } from 'radix-ui';
import * as React from 'react';

import { type PropsWithoutColor } from '../helpers';

interface SegmentedControlRadioGroupRootProps
  extends Omit<PropsWithoutColor<typeof RadioGroupPrimitive.Root>, 'orientation' | 'loop' | 'required' | 'asChild'> {}

const SegmentedControlRadioGroupRoot = (props: SegmentedControlRadioGroupRootProps) => {
  const { className, children, ...rootProps } = props;
  return (
    <RadioGroupPrimitive.Root
      {...rootProps}
      orientation="horizontal"
      className={classNames('fui-RadioGroupRoot', className)}
    >
      <div className="fui-BaseSegmentedControlList">{children}</div>
    </RadioGroupPrimitive.Root>
  );
};
SegmentedControlRadioGroupRoot.displayName = 'SegmentedControlRadioGroupRoot';

interface SegmentedControlRadioGroupItemProps extends React.ComponentProps<typeof RadioGroupPrimitive.Item> {}

const SegmentedControlRadioGroupItem = (props: SegmentedControlRadioGroupItemProps) => {
  const { children, className, style, ...itemProps } = props;

  return (
    <RadioGroupPrimitive.Item
      {...itemProps}
      className={classNames('fui-reset', 'fui-BaseSegmentedControlTrigger', className)}
      style={style}
    >
      <span className="fui-BaseSegmentedControlTriggerInner">{children}</span>
    </RadioGroupPrimitive.Item>
  );
};
SegmentedControlRadioGroupItem.displayName = 'SegmentedControlRadioGroupItem';

export { SegmentedControlRadioGroupItem as Item, SegmentedControlRadioGroupRoot as Root };
export type { SegmentedControlRadioGroupItemProps as ItemProps, SegmentedControlRadioGroupRootProps as RootProps };
