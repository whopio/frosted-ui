'use client';

import { Radio } from '@base-ui/react/radio';
import { RadioGroup } from '@base-ui/react/radio-group';
import classNames from 'classnames';
import * as React from 'react';

type SegmentedControlRadioGroupRootProps = Omit<React.ComponentProps<typeof RadioGroup>, 'className' | 'render'> &
  React.ComponentProps<'div'>;

const SegmentedControlRadioGroupRoot = (props: SegmentedControlRadioGroupRootProps) => {
  const { className, children, ...rootProps } = props;
  return (
    <RadioGroup {...rootProps} className={classNames('fui-SegmentedControlRadioGroupRoot', className)}>
      <div className="fui-BaseSegmentedControlList">{children}</div>
    </RadioGroup>
  );
};
SegmentedControlRadioGroupRoot.displayName = 'SegmentedControlRadioGroupRoot';

type SegmentedControlRadioGroupItemProps = Omit<
  React.ComponentProps<typeof Radio.Root>,
  'className' | 'render' | 'nativeButton'
> &
  React.ComponentProps<'span'>;

const SegmentedControlRadioGroupItem = (props: SegmentedControlRadioGroupItemProps) => {
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
};
SegmentedControlRadioGroupItem.displayName = 'SegmentedControlRadioGroupItem';

export { SegmentedControlRadioGroupItem as Item, SegmentedControlRadioGroupRoot as Root };
export type { SegmentedControlRadioGroupItemProps as ItemProps, SegmentedControlRadioGroupRootProps as RootProps };
