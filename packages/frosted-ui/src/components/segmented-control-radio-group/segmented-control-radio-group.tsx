'use client';

import { Radio } from '@base-ui/react/radio';
import { RadioGroup } from '@base-ui/react/radio-group';
import classNames from 'classnames';
import * as React from 'react';

type SegmentedControlRadioGroupRootProps<T extends string = string> = Omit<
  React.ComponentProps<typeof RadioGroup>,
  'className' | 'render' | 'value' | 'defaultValue' | 'onValueChange'
> &
  React.ComponentProps<'div'> & {
    /** The controlled value of the selected radio item */
    value?: T;
    /** The default value of the selected radio item (uncontrolled) */
    defaultValue?: T;
    /** Callback fired when the value changes */
    onValueChange?: (value: T, eventDetails: RadioGroup.ChangeEventDetails) => void;
  };

function SegmentedControlRadioGroupRoot<T extends string = string>(props: SegmentedControlRadioGroupRootProps<T>) {
  const { className, children, ...rootProps } = props;
  return (
    <RadioGroup
      {...(rootProps as React.ComponentProps<typeof RadioGroup>)}
      className={classNames('fui-SegmentedControlRadioGroupRoot', className)}
    >
      <div className="fui-BaseSegmentedControlList">{children}</div>
    </RadioGroup>
  );
}
SegmentedControlRadioGroupRoot.displayName = 'SegmentedControlRadioGroupRoot';

type SegmentedControlRadioGroupItemProps<T extends string = string> = Omit<
  React.ComponentProps<typeof Radio.Root>,
  'className' | 'render' | 'nativeButton' | 'value'
> &
  React.ComponentProps<'span'> & {
    /** The unique string value of this radio item */
    value: T;
  };

function SegmentedControlRadioGroupItem<T extends string = string>(props: SegmentedControlRadioGroupItemProps<T>) {
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
