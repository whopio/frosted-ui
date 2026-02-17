'use client';

import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import { ScrollArea as ScrollAreaPrimitive } from '@base-ui/react/scroll-area';
import classNames from 'classnames';
import * as React from 'react';

import { ThickCheckIcon } from '../../icons';
import { Theme, useThemeContext } from '../../theme';
import {
  comboboxContentPropDefs,
  comboboxItemPropDefs,
  comboboxRootPropDefs,
  comboboxTriggerPropDefs,
} from './combobox.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';

// Re-export useFilter from Base UI (useFilteredItems may be added in a later Base UI version)
const { useFilter } = ComboboxPrimitive;
export { useFilter };

// ============================================================================
// Types
// ============================================================================

type ComboboxRootOwnProps = GetPropDefTypes<typeof comboboxRootPropDefs>;
type ComboboxTriggerOwnProps = GetPropDefTypes<typeof comboboxTriggerPropDefs>;
type ComboboxContentOwnProps = GetPropDefTypes<typeof comboboxContentPropDefs>;
type ComboboxItemOwnProps = GetPropDefTypes<typeof comboboxItemPropDefs>;

// Re-export Base UI types for consumers
type ComboboxRootChangeEventDetails = ComboboxPrimitive.Root.ChangeEventDetails;
type ComboboxRootHighlightEventDetails = ComboboxPrimitive.Root.HighlightEventDetails;
type ComboboxRootActions = ComboboxPrimitive.Root.Actions;

type ComboboxValue<Value, Multiple extends boolean | undefined> = Multiple extends true ? Value[] : Value;

// ============================================================================
// Context
// ============================================================================

interface ComboboxContextValue extends ComboboxRootOwnProps {
  itemsForLabelLookup?: readonly { value: unknown; label?: React.ReactNode }[] | Record<string, React.ReactNode>;
  valueLabelFormatter?: (value: unknown) => string;
}
const ComboboxContext = React.createContext<ComboboxContextValue>({});

type ComboboxContentContextValue = ComboboxContentOwnProps;
const ComboboxContentContext = React.createContext<ComboboxContentContextValue>({});

// ============================================================================
// Root
// ============================================================================

interface ComboboxRootPropsBase<Value, Multiple extends boolean | undefined = false>
  extends Omit<ComboboxPrimitive.Root.Props<Value, Multiple>, 'className' | 'render'>,
    ComboboxContextValue {}

type ComboboxRootProps<Value = unknown, Multiple extends boolean | undefined = false> = ComboboxRootPropsBase<
  Value,
  Multiple
>;

function ComboboxRoot<Value = unknown, Multiple extends boolean | undefined = false>(
  props: ComboboxRootProps<Value, Multiple>,
) {
  const { children, size = comboboxRootPropDefs.size.default, items, itemToStringLabel, ...rootProps } = props;
  return (
    <ComboboxPrimitive.Root
      items={items}
      itemToStringLabel={itemToStringLabel}
      {...(rootProps as ComboboxPrimitive.Root.Props<Value, Multiple>)}
    >
      <ComboboxContext.Provider
        value={React.useMemo(
          () => ({
            size,
            itemsForLabelLookup: items,
            valueLabelFormatter: itemToStringLabel as ((value: unknown) => string) | undefined,
          }),
          [size, items, itemToStringLabel],
        )}
      >
        {children}
      </ComboboxContext.Provider>
    </ComboboxPrimitive.Root>
  );
}
ComboboxRoot.displayName = 'ComboboxRoot';

// ============================================================================
// Input
// ============================================================================

interface ComboboxInputProps extends Omit<React.ComponentProps<typeof ComboboxPrimitive.Input>, 'className'> {
  className?: string;
}

const ComboboxInput = React.forwardRef<HTMLInputElement, ComboboxInputProps>((props, forwardedRef) => {
  return <ComboboxPrimitive.Input {...props} ref={forwardedRef} />;
});
ComboboxInput.displayName = 'ComboboxInput';

// ============================================================================
// Trigger
// ============================================================================

interface ComboboxTriggerProps
  extends Omit<PropsWithoutColor<typeof ComboboxPrimitive.Trigger>, 'render' | 'className' | 'children'>,
    ComboboxTriggerOwnProps {
  className?: string;
  placeholder?: React.ReactNode;
  /** Custom render function for the selected value. */
  renderValue?: React.ComponentProps<typeof ComboboxPrimitive.Value>['children'];
}

const ComboboxTrigger = (props: ComboboxTriggerProps) => {
  const {
    className,
    variant = comboboxTriggerPropDefs.variant.default,
    color = comboboxTriggerPropDefs.color.default,
    placeholder,
    renderValue,
    ...triggerProps
  } = props;
  const { size, itemsForLabelLookup, valueLabelFormatter } = React.useContext(ComboboxContext);

  const valueChildren = React.useMemo(() => {
    if (renderValue) return renderValue;
    if (placeholder) {
      return (value: unknown) => {
        if (itemsForLabelLookup) {
          if (Array.isArray(itemsForLabelLookup)) {
            const item = itemsForLabelLookup.find((i) => i.value === value);
            if (item?.label != null) return item.label;
          } else if (value != null) {
            const label = (itemsForLabelLookup as Record<string, React.ReactNode>)[value as string];
            if (label != null) return label;
          }
        }
        if (value == null) return placeholder;
        if (valueLabelFormatter) return valueLabelFormatter(value);
        return String(value);
      };
    }
    return undefined;
  }, [renderValue, placeholder, itemsForLabelLookup, valueLabelFormatter]);

  return (
    <ComboboxPrimitive.Trigger
      data-accent-color={color || (variant === 'surface' ? 'gray' : color)}
      {...triggerProps}
      className={classNames(
        'fui-reset',
        'fui-ComboboxTrigger',
        className,
        `fui-r-size-${size}`,
        `fui-variant-${variant}`,
      )}
    >
      <span className="fui-ComboboxTriggerValue">
        <ComboboxPrimitive.Value>{valueChildren}</ComboboxPrimitive.Value>
      </span>
      <ComboboxPrimitive.Icon>
        <svg className="fui-ComboboxIcon" xmlns="http://www.w3.org/2000/svg" viewBox="3.25 5.25 9.5 5.5" fill="none">
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </ComboboxPrimitive.Icon>
    </ComboboxPrimitive.Trigger>
  );
};
ComboboxTrigger.displayName = 'ComboboxTrigger';

// ============================================================================
// Value
// ============================================================================

interface ComboboxValueProps extends Omit<React.ComponentProps<typeof ComboboxPrimitive.Value>, 'className' | 'render'> {
  className?: string;
}

const ComboboxValue = (props: ComboboxValueProps) => {
  const { className, ...valueProps } = props;
  return (
    <span className={classNames('fui-ComboboxValue', className)}>
      <ComboboxPrimitive.Value {...valueProps} />
    </span>
  );
};
ComboboxValue.displayName = 'ComboboxValue';

// ============================================================================
// Icon
// ============================================================================

interface ComboboxIconProps extends Omit<React.ComponentProps<typeof ComboboxPrimitive.Icon>, 'className' | 'render'> {
  className?: string;
}

const ComboboxIcon = React.forwardRef<HTMLDivElement, ComboboxIconProps>((props, forwardedRef) => {
  const { className, ...iconProps } = props;
  return (
    <ComboboxPrimitive.Icon
      {...iconProps}
      ref={forwardedRef as React.Ref<HTMLDivElement>}
      className={classNames('fui-ComboboxIcon', className)}
    />
  );
});
ComboboxIcon.displayName = 'ComboboxIcon';

// ============================================================================
// Clear
// ============================================================================

interface ComboboxClearProps extends Omit<React.ComponentProps<typeof ComboboxPrimitive.Clear>, 'className' | 'render'> {
  className?: string;
}

function ComboboxClear({ children, className, ...props }: ComboboxClearProps) {
  return (
    <ComboboxPrimitive.Clear {...props} className={classNames('fui-ComboboxClear', className)}>
      {children}
    </ComboboxPrimitive.Clear>
  );
}
ComboboxClear.displayName = 'ComboboxClear';

// ============================================================================
// Content
// ============================================================================

interface ComboboxContentProps
  extends Omit<React.ComponentProps<typeof ComboboxPrimitive.Popup>, 'className' | 'render'>,
    ComboboxContentOwnProps {
  className?: string;
  container?: React.ComponentProps<typeof ComboboxPrimitive.Portal>['container'];
  keepMounted?: React.ComponentProps<typeof ComboboxPrimitive.Portal>['keepMounted'];
  anchor?: React.ComponentProps<typeof ComboboxPrimitive.Positioner>['anchor'];
  side?: React.ComponentProps<typeof ComboboxPrimitive.Positioner>['side'];
  sideOffset?: React.ComponentProps<typeof ComboboxPrimitive.Positioner>['sideOffset'];
  align?: React.ComponentProps<typeof ComboboxPrimitive.Positioner>['align'];
  alignOffset?: React.ComponentProps<typeof ComboboxPrimitive.Positioner>['alignOffset'];
  collisionPadding?: React.ComponentProps<typeof ComboboxPrimitive.Positioner>['collisionPadding'];
}

const ComboboxContent = (props: ComboboxContentProps) => {
  const themeContext = useThemeContext();
  const {
    className,
    children,
    size = comboboxContentPropDefs.size.default,
    color,
    variant = comboboxContentPropDefs.variant.default,
    highContrast = comboboxContentPropDefs.highContrast.default,
    container,
    keepMounted,
    anchor,
    side = 'bottom',
    sideOffset = 4,
    align = 'start',
    alignOffset,
    collisionPadding = 10,
    ...contentProps
  } = props;
  const resolvedColor = color ?? themeContext.accentColor;

  return (
    <ComboboxPrimitive.Portal container={container} keepMounted={keepMounted}>
      <ComboboxPrimitive.Positioner
        className="fui-ComboboxPositioner"
        anchor={anchor}
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        collisionPadding={collisionPadding}
      >
        <Theme
          render={<ComboboxPrimitive.Popup />}
          data-accent-color={resolvedColor}
          {...contentProps}
          className={classNames(
            'fui-ComboboxContent',
            'fui-BaseMenuContent',
            `fui-variant-${variant}`,
            className,
            `fui-r-size-${size}`,
            { 'fui-high-contrast': highContrast },
          )}
        >
          <ComboboxContentContext.Provider
            value={React.useMemo(
              () => ({ size, color: resolvedColor, variant, highContrast }),
              [size, resolvedColor, variant, highContrast],
            )}
          >
            <ScrollAreaPrimitive.Root className="fui-ScrollAreaRoot">
              <ScrollAreaPrimitive.Viewport className="fui-ScrollAreaViewport" tabIndex={undefined}>
                <ScrollAreaPrimitive.Content>
                  <div className="fui-ComboboxViewport">{children}</div>
                </ScrollAreaPrimitive.Content>
              </ScrollAreaPrimitive.Viewport>
              <ScrollAreaPrimitive.Scrollbar
                orientation="vertical"
                className="fui-ScrollAreaScrollbar fui-r-size-1"
                data-type="auto"
              >
                <ScrollAreaPrimitive.Thumb className="fui-ScrollAreaThumb" />
              </ScrollAreaPrimitive.Scrollbar>
            </ScrollAreaPrimitive.Root>
          </ComboboxContentContext.Provider>
        </Theme>
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  );
};
ComboboxContent.displayName = 'ComboboxContent';

// ============================================================================
// List (standalone when used without Content's default ScrollArea - e.g. custom content)
// ============================================================================

interface ComboboxListProps extends Omit<React.ComponentProps<typeof ComboboxPrimitive.List>, 'className' | 'render'> {
  className?: string;
}

const ComboboxList = (props: ComboboxListProps) => {
  const { className, ...listProps } = props;
  return <ComboboxPrimitive.List {...listProps} className={classNames('fui-ComboboxList', className)} />;
};
ComboboxList.displayName = 'ComboboxList';

// ============================================================================
// Item
// ============================================================================

interface ComboboxItemProps
  extends Omit<React.ComponentProps<typeof ComboboxPrimitive.Item>, 'className' | 'render'>,
    ComboboxItemOwnProps {
  className?: string;
}

const ComboboxItem = React.forwardRef<HTMLDivElement, ComboboxItemProps>((props, forwardedRef) => {
  const { className, color, children, ...itemProps } = props;
  return (
    <ComboboxPrimitive.Item
      data-accent-color={color}
      {...itemProps}
      ref={forwardedRef}
      className={classNames('fui-ComboboxItem', 'fui-BaseMenuItem', className)}
    >
      <ComboboxPrimitive.ItemIndicator className="fui-ComboboxItemIndicator" keepMounted>
        <ThickCheckIcon className="fui-ComboboxItemIndicatorIcon" />
      </ComboboxPrimitive.ItemIndicator>
      {children}
    </ComboboxPrimitive.Item>
  );
});
ComboboxItem.displayName = 'ComboboxItem';

// ============================================================================
// ItemIndicator
// ============================================================================

interface ComboboxItemIndicatorProps
  extends Omit<React.ComponentProps<typeof ComboboxPrimitive.ItemIndicator>, 'className' | 'render'> {
  className?: string;
}

const ComboboxItemIndicator = (props: ComboboxItemIndicatorProps) => {
  const { className, children, ...indicatorProps } = props;
  return (
    <ComboboxPrimitive.ItemIndicator
      {...indicatorProps}
      className={classNames('fui-ComboboxItemIndicator', className)}
    >
      {children ?? <ThickCheckIcon className="fui-ComboboxItemIndicatorIcon" />}
    </ComboboxPrimitive.ItemIndicator>
  );
};
ComboboxItemIndicator.displayName = 'ComboboxItemIndicator';

// ============================================================================
// Empty
// ============================================================================

interface ComboboxEmptyProps extends Omit<React.ComponentProps<typeof ComboboxPrimitive.Empty>, 'className' | 'render'> {
  className?: string;
}

const ComboboxEmpty = (props: ComboboxEmptyProps) => {
  const { className, ...emptyProps } = props;
  return <ComboboxPrimitive.Empty {...emptyProps} className={classNames('fui-ComboboxEmpty', className)} />;
};
ComboboxEmpty.displayName = 'ComboboxEmpty';

// ============================================================================
// Group
// ============================================================================

interface ComboboxGroupProps extends Omit<React.ComponentProps<typeof ComboboxPrimitive.Group>, 'className' | 'render'> {
  className?: string;
}

const ComboboxGroup = (props: ComboboxGroupProps) => {
  const { className, ...groupProps } = props;
  return (
    <ComboboxPrimitive.Group {...groupProps} className={classNames('fui-ComboboxGroup', 'fui-BaseMenuGroup', className)} />
  );
};
ComboboxGroup.displayName = 'ComboboxGroup';

// ============================================================================
// GroupLabel
// ============================================================================

interface ComboboxGroupLabelProps
  extends Omit<React.ComponentProps<typeof ComboboxPrimitive.GroupLabel>, 'className' | 'render'> {
  className?: string;
}

const ComboboxGroupLabel = (props: ComboboxGroupLabelProps) => {
  const { className, ...groupLabelProps } = props;
  return (
    <ComboboxPrimitive.GroupLabel
      {...groupLabelProps}
      className={classNames('fui-ComboboxGroupLabel', 'fui-BaseMenuGroupLabel', className)}
    />
  );
};
ComboboxGroupLabel.displayName = 'ComboboxGroupLabel';

// ============================================================================
// Collection (for grouped lists; doesn't render its own element)
// ============================================================================

interface ComboboxCollectionProps {
  children: (item: unknown, index: number) => React.ReactNode;
}

const ComboboxCollection = (props: ComboboxCollectionProps) => {
  return <ComboboxPrimitive.Collection {...props} />;
};
ComboboxCollection.displayName = 'ComboboxCollection';

// ============================================================================
// Separator
// ============================================================================

interface ComboboxSeparatorProps
  extends Omit<React.ComponentProps<typeof ComboboxPrimitive.Separator>, 'className' | 'render'> {
  className?: string;
}

const ComboboxSeparator = (props: ComboboxSeparatorProps) => {
  const { className, ...separatorProps } = props;
  return (
    <ComboboxPrimitive.Separator
      {...separatorProps}
      className={classNames('fui-ComboboxSeparator', 'fui-BaseMenuSeparator', className)}
    />
  );
};
ComboboxSeparator.displayName = 'ComboboxSeparator';

// ============================================================================
// Chips
// ============================================================================

interface ComboboxChipsProps extends Omit<React.ComponentProps<typeof ComboboxPrimitive.Chips>, 'className' | 'render'> {
  className?: string;
}

const ComboboxChips = (props: ComboboxChipsProps) => {
  const { className, ...chipsProps } = props;
  return <ComboboxPrimitive.Chips {...chipsProps} className={classNames('fui-ComboboxChips', className)} />;
};
ComboboxChips.displayName = 'ComboboxChips';

// ============================================================================
// Chip
// ============================================================================

interface ComboboxChipProps extends Omit<React.ComponentProps<typeof ComboboxPrimitive.Chip>, 'className' | 'render'> {
  className?: string;
}

const ComboboxChip = (props: ComboboxChipProps) => {
  const { className, ...chipProps } = props;
  return <ComboboxPrimitive.Chip {...chipProps} className={classNames('fui-ComboboxChip', className)} />;
};
ComboboxChip.displayName = 'ComboboxChip';

// ============================================================================
// ChipRemove
// ============================================================================

interface ComboboxChipRemoveProps
  extends Omit<React.ComponentProps<typeof ComboboxPrimitive.ChipRemove>, 'className' | 'render'> {
  className?: string;
}

const ComboboxChipRemove = (props: ComboboxChipRemoveProps) => {
  const { className, ...removeProps } = props;
  return (
    <ComboboxPrimitive.ChipRemove {...removeProps} className={classNames('fui-ComboboxChipRemove', className)} />
  );
};
ComboboxChipRemove.displayName = 'ComboboxChipRemove';

// ============================================================================
// Exports
// ============================================================================

export {
  ComboboxChip as Chip,
  ComboboxChipRemove as ChipRemove,
  ComboboxChips as Chips,
  ComboboxClear as Clear,
  ComboboxCollection as Collection,
  ComboboxContent as Content,
  ComboboxEmpty as Empty,
  ComboboxGroup as Group,
  ComboboxGroupLabel as GroupLabel,
  ComboboxIcon as Icon,
  ComboboxInput as Input,
  ComboboxItem as Item,
  ComboboxItemIndicator as ItemIndicator,
  ComboboxList as List,
  ComboboxRoot as Root,
  ComboboxSeparator as Separator,
  ComboboxTrigger as Trigger,
  ComboboxValue as Value,
};

export type {
  ComboboxChipProps as ChipProps,
  ComboboxChipRemoveProps as ChipRemoveProps,
  ComboboxChipsProps as ChipsProps,
  ComboboxClearProps as ClearProps,
  ComboboxCollectionProps as CollectionProps,
  ComboboxContentProps as ContentProps,
  ComboboxEmptyProps as EmptyProps,
  ComboboxGroupLabelProps as GroupLabelProps,
  ComboboxGroupProps as GroupProps,
  ComboboxIconProps as IconProps,
  ComboboxInputProps as InputProps,
  ComboboxItemIndicatorProps as ItemIndicatorProps,
  ComboboxItemProps as ItemProps,
  ComboboxListProps as ListProps,
  ComboboxRootActions as RootActions,
  ComboboxRootChangeEventDetails as RootChangeEventDetails,
  ComboboxRootHighlightEventDetails as RootHighlightEventDetails,
  ComboboxRootProps as RootProps,
  ComboboxSeparatorProps as SeparatorProps,
  ComboboxTriggerProps as TriggerProps,
  ComboboxValue as ComboboxValueType,
  ComboboxValueProps as ValueProps,
};
