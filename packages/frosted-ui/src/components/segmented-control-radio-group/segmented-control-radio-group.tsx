'use client';

import { Radio } from '@base-ui/react/radio';
import { RadioGroup } from '@base-ui/react/radio-group';
import classNames from 'classnames';
import * as React from 'react';

type SegmentedControlRadioGroupRootProps<Value = unknown> = Omit<
  RadioGroup.Props<Value>,
  'className' | 'render' | 'value' | 'defaultValue' | 'onValueChange'
> &
  React.ComponentProps<'div'> & {
    /** The controlled value of the selected radio item */
    value?: Value;
    /** The default value of the selected radio item (uncontrolled) */
    defaultValue?: Value;
    /** Callback fired when the value changes */
    onValueChange?: (value: Value, eventDetails: RadioGroup.ChangeEventDetails) => void;
  };

function SegmentedControlRadioGroupRoot<Value = unknown>(props: SegmentedControlRadioGroupRootProps<Value>) {
  const { className, children, ...rootProps } = props;
  return (
    <RadioGroup
      {...(rootProps as RadioGroup.Props<Value>)}
      className={classNames('fui-SegmentedControlRadioGroupRoot', className)}
    >
      <div className="fui-BaseSegmentedControlList">{children}</div>
    </RadioGroup>
  );
}
SegmentedControlRadioGroupRoot.displayName = 'SegmentedControlRadioGroupRoot';

type SegmentedControlRadioGroupItemProps<Value = unknown> = Omit<
  React.ComponentProps<typeof Radio.Root>,
  'className' | 'render' | 'nativeButton' | 'value'
> &
  React.ComponentProps<'span'> & {
    /** The unique value of this radio item */
    value: Value;
  };

function SegmentedControlRadioGroupItem<Value = unknown>(props: SegmentedControlRadioGroupItemProps<Value>) {
  const { children, className, style, ...itemProps } = props;

  return (
    <Radio.Root
      {...itemProps}
      className={classNames('fui-reset', 'fui-BaseSegmentedControlTrigger', className)}
      style={style}
    >
      <span className="fui-BaseSegmentedControlTriggerInner">{children}</span>
    </Radio.Root>
  );
}
SegmentedControlRadioGroupItem.displayName = 'SegmentedControlRadioGroupItem';

export { SegmentedControlRadioGroupItem as Item, SegmentedControlRadioGroupRoot as Root };
export type { SegmentedControlRadioGroupItemProps as ItemProps, SegmentedControlRadioGroupRootProps as RootProps };
