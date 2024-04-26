'use client';

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as SelectPrimitive from '@radix-ui/react-select';
import classNames from 'classnames';
import * as React from 'react';
import {
  extractMarginProps,
  withBreakpoints,
  withMarginProps,
} from '../helpers';
import { ChevronDownIcon, ThickCheckIcon } from '../icons';
import { Theme, useThemeContext } from '../theme';
import {
  selectContentPropDefs,
  selectRootPropDefs,
  selectTriggerPropDefs,
} from './select.props';

import type {
  GetPropDefTypes,
  MarginProps,
  PropsWithoutRefOrColor,
} from '../helpers';

type SelectRootOwnProps = GetPropDefTypes<typeof selectRootPropDefs>;

type SelectContextValue = SelectRootOwnProps;
const SelectContext = React.createContext<SelectContextValue>({});

interface SelectRootProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>,
    SelectContextValue {}
const SelectRoot: React.FC<SelectRootProps> = (props) => {
  const {
    children,
    size = selectRootPropDefs.size.default,
    ...rootProps
  } = props;
  return (
    <SelectPrimitive.Root {...rootProps}>
      <SelectContext.Provider value={React.useMemo(() => ({ size }), [size])}>
        {children}
      </SelectContext.Provider>
    </SelectPrimitive.Root>
  );
};
SelectRoot.displayName = 'SelectRoot';

type SelectTriggerElement = React.ElementRef<typeof SelectPrimitive.Trigger>;
type SelectTriggerOwnProps = GetPropDefTypes<typeof selectTriggerPropDefs>;
interface SelectTriggerProps
  extends Omit<
      PropsWithoutRefOrColor<typeof SelectPrimitive.Trigger>,
      'asChild'
    >,
    MarginProps,
    SelectTriggerOwnProps {
  // TODO: figure out why this is not inferred properly
  placeholder?: React.ReactNode;
}
const SelectTrigger = React.forwardRef<
  SelectTriggerElement,
  SelectTriggerProps
>((props, forwardedRef) => {
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
        ref={forwardedRef}
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
});
SelectTrigger.displayName = 'SelectTrigger';

type SelectContentElement = React.ElementRef<typeof SelectPrimitive.Content>;
type SelectContentOwnProps = GetPropDefTypes<typeof selectContentPropDefs>;
interface SelectContentProps
  extends PropsWithoutRefOrColor<typeof SelectPrimitive.Content>,
    SelectContentOwnProps {
  container?: React.ComponentProps<typeof SelectPrimitive.Portal>['container'];
}
const SelectContent = React.forwardRef<
  SelectContentElement,
  SelectContentProps
>((props, forwardedRef) => {
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
          ref={forwardedRef}
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
              <ScrollAreaPrimitive.Viewport
                className="fui-ScrollAreaViewport"
                style={{ overflowY: undefined }}
              >
                {children}
              </ScrollAreaPrimitive.Viewport>
            </SelectPrimitive.Viewport>
            <ScrollAreaPrimitive.Scrollbar
              className="fui-ScrollAreaScrollbar fui-r-size-1"
              orientation="vertical"
            >
              <ScrollAreaPrimitive.Thumb className="fui-ScrollAreaThumb" />
            </ScrollAreaPrimitive.Scrollbar>
          </ScrollAreaPrimitive.Root>
        </SelectPrimitive.Content>
      </Theme>
    </SelectPrimitive.Portal>
  );
});
SelectContent.displayName = 'SelectContent';

type SelectItemElement = React.ElementRef<typeof SelectPrimitive.Item>;
interface SelectItemProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {}
const SelectItem = React.forwardRef<SelectItemElement, SelectItemProps>(
  (props, forwardedRef) => {
    const { className, children, ...itemProps } = props;
    return (
      <SelectPrimitive.Item
        {...itemProps}
        ref={forwardedRef}
        className={classNames('fui-SelectItem', className)}
      >
        <SelectPrimitive.ItemIndicator className="fui-SelectItemIndicator">
          <ThickCheckIcon className="fui-SelectItemIndicatorIcon" />
        </SelectPrimitive.ItemIndicator>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    );
  },
);
SelectItem.displayName = 'SelectItem';

type SelectGroupElement = React.ElementRef<typeof SelectPrimitive.Group>;
interface SelectGroupProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Group> {}
const SelectGroup = React.forwardRef<SelectGroupElement, SelectGroupProps>(
  (props, forwardedRef) => (
    <SelectPrimitive.Group
      {...props}
      ref={forwardedRef}
      className={classNames('fui-SelectGroup', props.className)}
    />
  ),
);
SelectGroup.displayName = 'SelectGroup';

type SelectLabelElement = React.ElementRef<typeof SelectPrimitive.Label>;
interface SelectLabelProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> {}
const SelectLabel = React.forwardRef<SelectLabelElement, SelectLabelProps>(
  (props, forwardedRef) => (
    <SelectPrimitive.Label
      {...props}
      ref={forwardedRef}
      className={classNames('fui-SelectLabel', props.className)}
    />
  ),
);
SelectLabel.displayName = 'SelectLabel';

type SelectSeparatorElement = React.ElementRef<
  typeof SelectPrimitive.Separator
>;
interface SelectSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> {}
const SelectSeparator = React.forwardRef<
  SelectSeparatorElement,
  SelectSeparatorProps
>((props, forwardedRef) => (
  <SelectPrimitive.Separator
    {...props}
    ref={forwardedRef}
    className={classNames('fui-SelectSeparator', props.className)}
  />
));
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
