'use client';

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as SelectPrimitive from '@radix-ui/react-select';
import classNames from 'classnames';
import * as React from 'react';
import { extractMarginProps, withBreakpoints, withMarginProps } from '../helpers';
import { ChevronDownIcon, ThickCheckIcon } from '../icons';
import { Theme, useThemeContext } from '../theme';
import { selectContentPropDefs, selectRootPropDefs, selectTriggerPropDefs } from './select.props';

import type { GetPropDefTypes, MarginProps, PropsWithoutRefOrColor } from '../helpers';

type SelectRootOwnProps = GetPropDefTypes<typeof selectRootPropDefs>;

type SelectContextValue = SelectRootOwnProps;
const SelectContext = React.createContext<SelectContextValue>({});

interface SelectRootProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>, SelectContextValue {}
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
  extends Omit<PropsWithoutRefOrColor<typeof SelectPrimitive.Trigger>, 'asChild'>,
    MarginProps,
    SelectTriggerOwnProps {
  // TODO: figure out why this is not inferred properly
  placeholder?: React.ReactNode;
}

const SelectTrigger = (props: SelectTriggerProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const {
    className,
    variant = selectTriggerPropDefs.variant.default,
    color = selectTriggerPropDefs.color.default,
    placeholder,
    ...triggerProps
  } = marginRest;
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
          withBreakpoints(size, 'fui-r-size'),
          `fui-variant-${variant}`,
          withMarginProps(marginProps),
        )}
      >
        <span className="fui-SelectTriggerInner">
          <SelectPrimitive.Value placeholder={placeholder} />
        </span>
        <SelectPrimitive.Icon asChild>
          <ChevronDownIcon className="fui-SelectIcon" />
        </SelectPrimitive.Icon>
      </button>
    </SelectPrimitive.Trigger>
  );
};
SelectTrigger.displayName = 'SelectTrigger';

type SelectContentOwnProps = GetPropDefTypes<typeof selectContentPropDefs>;
interface SelectContentProps extends PropsWithoutRefOrColor<typeof SelectPrimitive.Content>, SelectContentOwnProps {
  container?: React.ComponentProps<typeof SelectPrimitive.Portal>['container'];
}

const SelectContent = (props: SelectContentProps) => {
  const {
    className,
    children,
    variant = selectContentPropDefs.variant.default,
    highContrast = selectContentPropDefs.highContrast.default,
    color = selectContentPropDefs.color.default,
    container,
    ...contentProps
  } = props;
  const { size } = React.useContext(SelectContext);
  const themeContext = useThemeContext();
  const resolvedColor = color ?? themeContext.accentColor;
  return (
    <SelectPrimitive.Portal container={container}>
      <Theme asChild>
        <SelectPrimitive.Content
          data-accent-color={resolvedColor}
          sideOffset={4}
          {...contentProps}
          className={classNames(
            { 'fui-PopperContent': contentProps.position === 'popper' },
            'fui-SelectContent',
            className,
            withBreakpoints(size, 'fui-r-size'),
            `fui-variant-${variant}`,
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

interface SelectItemProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {}

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

interface SelectGroupProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Group> {}

const SelectGroup = (props: SelectGroupProps) => (
  <SelectPrimitive.Group {...props} className={classNames('fui-SelectGroup', props.className)} />
);
SelectGroup.displayName = 'SelectGroup';

interface SelectLabelProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> {}

const SelectLabel = (props: SelectLabelProps) => (
  <SelectPrimitive.Label {...props} className={classNames('fui-SelectLabel', props.className)} />
);
SelectLabel.displayName = 'SelectLabel';

interface SelectSeparatorProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> {}

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
