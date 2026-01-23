'use client';

import { ScrollArea as ScrollAreaPrimitive } from '@base-ui/react/scroll-area';
import { Select as SelectPrimitive } from '@base-ui/react/select';
import classNames from 'classnames';
import * as React from 'react';

import { ThickCheckIcon } from '../../icons';
import { Theme } from '../../theme';
import { selectContentPropDefs, selectRootPropDefs, selectTriggerPropDefs } from './select.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';

type SelectRootOwnProps = GetPropDefTypes<typeof selectRootPropDefs>;

type SelectContextValue = SelectRootOwnProps;
const SelectContext = React.createContext<SelectContextValue>({});

interface SelectRootProps
  extends Omit<React.ComponentProps<typeof SelectPrimitive.Root>, 'className' | 'render'>, SelectContextValue {}

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
  extends Omit<PropsWithoutColor<typeof SelectPrimitive.Trigger>, 'render' | 'className'>, SelectTriggerOwnProps {
  className?: string;
  placeholder?: React.ReactNode;
  /** Custom render function for the selected value. Useful for multiple selection. */
  renderValue?: React.ComponentProps<typeof SelectPrimitive.Value>['children'];
}

const SelectTrigger = (props: SelectTriggerProps) => {
  const {
    className,
    variant = selectTriggerPropDefs.variant.default,
    color = selectTriggerPropDefs.color.default,
    placeholder,
    renderValue,
    ...triggerProps
  } = props;
  const { size } = React.useContext(SelectContext);

  // Handle placeholder: Base UI's Select.Value uses children as a render function
  const valueChildren = React.useMemo(() => {
    if (renderValue) return renderValue;
    if (placeholder) return (value: unknown) => (value != null ? String(value) : placeholder);
    return undefined;
  }, [renderValue, placeholder]);

  return (
    <SelectPrimitive.Trigger
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
        <SelectPrimitive.Value>{valueChildren}</SelectPrimitive.Value>
      </span>
      <SelectPrimitive.Icon>
        <svg className="fui-SelectIcon" xmlns="http://www.w3.org/2000/svg" viewBox="3.25 5.25 9.5 5.5" fill="none">
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
};
SelectTrigger.displayName = 'SelectTrigger';

type SelectContentOwnProps = GetPropDefTypes<typeof selectContentPropDefs>;
interface SelectContentProps
  extends Omit<React.ComponentProps<typeof SelectPrimitive.Popup>, 'className' | 'render'>, SelectContentOwnProps {
  className?: string;
  container?: React.ComponentProps<typeof SelectPrimitive.Portal>['container'];
  /** @deprecated Use alignItemWithTrigger={false} instead */
  position?: 'item-aligned' | 'popper';
  /** Whether to align the selected item with the trigger (native select-like behavior). Default: true */
  alignItemWithTrigger?: boolean;
  side?: React.ComponentProps<typeof SelectPrimitive.Positioner>['side'];
  sideOffset?: React.ComponentProps<typeof SelectPrimitive.Positioner>['sideOffset'];
  align?: React.ComponentProps<typeof SelectPrimitive.Positioner>['align'];
  alignOffset?: React.ComponentProps<typeof SelectPrimitive.Positioner>['alignOffset'];
  collisionPadding?: React.ComponentProps<typeof SelectPrimitive.Positioner>['collisionPadding'];
}

const SelectContent = (props: SelectContentProps) => {
  const {
    className,
    children,
    highContrast = selectContentPropDefs.highContrast.default,
    container,
    position,
    alignItemWithTrigger: alignItemWithTriggerProp,
    side = 'bottom',
    sideOffset = 4,
    align = 'start',
    alignOffset,
    collisionPadding = 10,
    ...popupProps
  } = props;
  const { size } = React.useContext(SelectContext);

  // Handle deprecated position prop
  const alignItemWithTrigger = alignItemWithTriggerProp ?? (position === 'popper' ? false : true);

  return (
    <SelectPrimitive.Portal container={container}>
      <SelectPrimitive.Positioner
        className="fui-SelectPositioner"
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        collisionPadding={collisionPadding}
        alignItemWithTrigger={alignItemWithTrigger}
      >
        <Theme asChild>
          <SelectPrimitive.Popup
            {...popupProps}
            className={classNames(
              { 'fui-PopperContent': !alignItemWithTrigger },
              'fui-SelectContent',
              className,
              `fui-r-size-${size}`,
              { 'fui-high-contrast': highContrast },
            )}
          >
            <ScrollAreaPrimitive.Root className="fui-ScrollAreaRoot">
              <SelectPrimitive.List
                render={<ScrollAreaPrimitive.Viewport className="fui-ScrollAreaViewport" tabIndex={undefined} />}
              >
                <ScrollAreaPrimitive.Content>
                  <div className="fui-SelectViewport">{children}</div>
                </ScrollAreaPrimitive.Content>
              </SelectPrimitive.List>
              <ScrollAreaPrimitive.Scrollbar
                orientation="vertical"
                className="fui-ScrollAreaScrollbar fui-r-size-1"
                data-type="auto"
              >
                <ScrollAreaPrimitive.Thumb className="fui-ScrollAreaThumb" />
              </ScrollAreaPrimitive.Scrollbar>
            </ScrollAreaPrimitive.Root>
          </SelectPrimitive.Popup>
        </Theme>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
};
SelectContent.displayName = 'SelectContent';

interface SelectItemProps extends Omit<React.ComponentProps<typeof SelectPrimitive.Item>, 'className' | 'render'> {
  className?: string;
}

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

interface SelectGroupProps extends Omit<React.ComponentProps<typeof SelectPrimitive.Group>, 'className' | 'render'> {
  className?: string;
}

const SelectGroup = (props: SelectGroupProps) => (
  <SelectPrimitive.Group {...props} className={classNames('fui-SelectGroup', props.className)} />
);
SelectGroup.displayName = 'SelectGroup';

interface SelectGroupLabelProps extends Omit<
  React.ComponentProps<typeof SelectPrimitive.GroupLabel>,
  'className' | 'render'
> {
  className?: string;
}

const SelectGroupLabel = (props: SelectGroupLabelProps) => (
  <SelectPrimitive.GroupLabel {...props} className={classNames('fui-SelectLabel', props.className)} />
);
SelectGroupLabel.displayName = 'SelectGroupLabel';

interface SelectSeparatorProps extends Omit<
  React.ComponentProps<typeof SelectPrimitive.Separator>,
  'className' | 'render'
> {
  className?: string;
}

const SelectSeparator = (props: SelectSeparatorProps) => (
  <SelectPrimitive.Separator {...props} className={classNames('fui-SelectSeparator', props.className)} />
);
SelectSeparator.displayName = 'SelectSeparator';

export {
  SelectContent as Content,
  SelectGroup as Group,
  SelectGroupLabel as GroupLabel,
  SelectItem as Item,
  SelectRoot as Root,
  SelectSeparator as Separator,
  SelectTrigger as Trigger,
};

export type {
  SelectContentProps as ContentProps,
  SelectGroupLabelProps as GroupLabelProps,
  SelectGroupProps as GroupProps,
  SelectItemProps as ItemProps,
  SelectRootProps as RootProps,
  SelectSeparatorProps as SeparatorProps,
  SelectTriggerProps as TriggerProps,
};
