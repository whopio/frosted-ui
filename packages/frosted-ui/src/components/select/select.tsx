'use client';

import classNames from 'classnames';
import { ScrollArea as ScrollAreaPrimitive, Select as SelectPrimitive } from 'radix-ui';
import * as React from 'react';

import { ThickCheckIcon } from '../../icons';
import { Theme } from '../../theme';
import { selectContentPropDefs, selectRootPropDefs, selectTriggerPropDefs } from './select.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';

type SelectRootOwnProps = GetPropDefTypes<typeof selectRootPropDefs>;

type SelectContextValue = SelectRootOwnProps;
const SelectContext = React.createContext<SelectContextValue>({});

interface SelectRootProps extends React.ComponentProps<typeof SelectPrimitive.Root>, SelectContextValue {}
const SelectRoot: React.FC<SelectRootProps> = (props) => {
  const { children, size = selectRootPropDefs.size.default, ...rootProps } = props;
  return (
    <SelectPrimitive.Root {...rootProps}>
      <SelectContext.Provider value={React.useMemo(() => ({ size }), [size])}>{children}</SelectContext.Provider>
    </SelectPrimitive.Root>
  );
};
SelectRoot.displayName = 'SelectRoot';

type SelectTriggerOwnProps = GetPropDefTypes<typeof selectTriggerPropDefs>;
interface SelectTriggerProps
  extends Omit<PropsWithoutColor<typeof SelectPrimitive.Trigger>, 'asChild'>,
    SelectTriggerOwnProps {
  // TODO: figure out why this is not inferred properly
  placeholder?: React.ReactNode;
}

const SelectTrigger = (props: SelectTriggerProps) => {
  const {
    className,
    variant = selectTriggerPropDefs.variant.default,
    color = selectTriggerPropDefs.color.default,
    placeholder,
    ...triggerProps
  } = props;
  const { size } = React.useContext(SelectContext);
  return (
    <SelectPrimitive.Trigger asChild>
      <button
        data-accent-color={color}
        {...triggerProps}
        className={classNames(
          'fui-reset',
          'fui-SelectTrigger',
          className,
          `fui-r-size-${size}`,
          `fui-variant-${variant}`,
        )}
      >
        <span className="fui-SelectTriggerInner">
          <SelectPrimitive.Value placeholder={placeholder} />
        </span>
        <SelectPrimitive.Icon asChild>
          <svg
            className="fui-SelectIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="3.25 5.25 9.5 5.5"
            fill="none"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SelectPrimitive.Icon>
      </button>
    </SelectPrimitive.Trigger>
  );
};
SelectTrigger.displayName = 'SelectTrigger';

type SelectContentOwnProps = GetPropDefTypes<typeof selectContentPropDefs>;
interface SelectContentProps extends PropsWithoutColor<typeof SelectPrimitive.Content>, SelectContentOwnProps {
  container?: React.ComponentProps<typeof SelectPrimitive.Portal>['container'];
}

const SelectContent = (props: SelectContentProps) => {
  const {
    className,
    children,
    highContrast = selectContentPropDefs.highContrast.default,
    container,
    ...contentProps
  } = props;
  const { size } = React.useContext(SelectContext);
  return (
    <SelectPrimitive.Portal container={container}>
      <Theme asChild>
        <SelectPrimitive.Content
          sideOffset={4}
          {...contentProps}
          className={classNames(
            { 'fui-PopperContent': contentProps.position === 'popper' },
            'fui-SelectContent',
            className,
            `fui-r-size-${size}`,
            { 'fui-high-contrast': highContrast },
          )}
        >
          <ScrollAreaPrimitive.Root type="auto" className="fui-ScrollAreaRoot">
            <SelectPrimitive.Viewport asChild className="fui-SelectViewport">
              <ScrollAreaPrimitive.Viewport className="fui-ScrollAreaViewport" style={{ overflowY: undefined }}>
                {children}
              </ScrollAreaPrimitive.Viewport>
            </SelectPrimitive.Viewport>
            <ScrollAreaPrimitive.Scrollbar className="fui-ScrollAreaScrollbar fui-r-size-1" orientation="vertical">
              <ScrollAreaPrimitive.Thumb className="fui-ScrollAreaThumb" />
            </ScrollAreaPrimitive.Scrollbar>
          </ScrollAreaPrimitive.Root>
        </SelectPrimitive.Content>
      </Theme>
    </SelectPrimitive.Portal>
  );
};
SelectContent.displayName = 'SelectContent';

interface SelectItemProps extends React.ComponentProps<typeof SelectPrimitive.Item> {}

const SelectItem = (props: SelectItemProps) => {
  const { className, children, ...itemProps } = props;
  return (
    <SelectPrimitive.Item {...itemProps} className={classNames('fui-SelectItem', className)}>
      <SelectPrimitive.ItemIndicator className="fui-SelectItemIndicator">
        <ThickCheckIcon className="fui-SelectItemIndicatorIcon" />
      </SelectPrimitive.ItemIndicator>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
};
SelectItem.displayName = 'SelectItem';

interface SelectGroupProps extends React.ComponentProps<typeof SelectPrimitive.Group> {}

const SelectGroup = (props: SelectGroupProps) => (
  <SelectPrimitive.Group {...props} className={classNames('fui-SelectGroup', props.className)} />
);
SelectGroup.displayName = 'SelectGroup';

interface SelectLabelProps extends React.ComponentProps<typeof SelectPrimitive.Label> {}

const SelectLabel = (props: SelectLabelProps) => (
  <SelectPrimitive.Label {...props} className={classNames('fui-SelectLabel', props.className)} />
);
SelectLabel.displayName = 'SelectLabel';

interface SelectSeparatorProps extends React.ComponentProps<typeof SelectPrimitive.Separator> {}

const SelectSeparator = (props: SelectSeparatorProps) => (
  <SelectPrimitive.Separator {...props} className={classNames('fui-SelectSeparator', props.className)} />
);
SelectSeparator.displayName = 'SelectSeparator';

export {
  SelectContent as Content,
  SelectGroup as Group,
  SelectItem as Item,
  SelectLabel as Label,
  SelectRoot as Root,
  SelectSeparator as Separator,
  SelectTrigger as Trigger,
};

export type {
  SelectContentProps as ContentProps,
  SelectGroupProps as GroupProps,
  SelectItemProps as ItemProps,
  SelectLabelProps as LabelProps,
  SelectRootProps as RootProps,
  SelectSeparatorProps as SeparatorProps,
  SelectTriggerProps as TriggerProps,
};
