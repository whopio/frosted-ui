'use client';

import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import classNames from 'classnames';
import * as React from 'react';

import { ThickCheckIcon, XIcon } from '../../icons';
import { Theme, useThemeContext } from '../../theme';
import type { RootProps as TextFieldRootProps } from '../text-field/text-field';
import { Input as TextFieldInput, Root as TextFieldRoot, Slot as TextFieldSlot } from '../text-field/text-field';
import {
  comboboxChipPropDefs,
  comboboxContentPropDefs,
  comboboxItemPropDefs,
  comboboxRootPropDefs,
} from './combobox.props';

import type { GetPropDefTypes } from '../../helpers';

// Re-export useFilter from Base UI (useFilteredItems may be added in a later Base UI version)
const { useFilter } = ComboboxPrimitive;
export { useFilter };

// ============================================================================
// Types
// ============================================================================

type ComboboxRootOwnProps = GetPropDefTypes<typeof comboboxRootPropDefs>;
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
  inputAnchorRef?: React.RefObject<HTMLDivElement | null>;
}
const ComboboxContext = React.createContext<ComboboxContextValue>({});

type ComboboxContentContextValue = ComboboxContentOwnProps;
const ComboboxContentContext = React.createContext<ComboboxContentContextValue | null>(null);

// ============================================================================
// Root
// ============================================================================

interface ComboboxRootPropsBase<Value, Multiple extends boolean | undefined = false>
  extends Omit<ComboboxPrimitive.Root.Props<Value, Multiple>, 'className' | 'render'>, ComboboxContextValue {}

type ComboboxRootProps<Value = unknown, Multiple extends boolean | undefined = false> = ComboboxRootPropsBase<
  Value,
  Multiple
>;

/**
 * Groups all parts of the combobox. Provides `size` context to child components
 * (`Input`, `Chips`, `Content`) so they inherit sizing automatically.
 *
 * All Base UI Combobox Root props are forwarded, including `name`, `required`,
 * `readOnly`, `disabled`, `autoHighlight`, `openOnInputClick`, `filter`, etc.
 */
function ComboboxRoot<Value = unknown, Multiple extends boolean | undefined = false>(
  props: ComboboxRootProps<Value, Multiple>,
) {
  const { children, size = comboboxRootPropDefs.size.default, items, itemToStringLabel, ...rootProps } = props;
  const inputAnchorRef = React.useRef<HTMLDivElement | null>(null);
  return (
    <ComboboxPrimitive.Root
      items={items}
      itemToStringLabel={itemToStringLabel}
      {...(rootProps as ComboboxPrimitive.Root.Props<Value, Multiple>)}
    >
      <ComboboxContext.Provider value={React.useMemo(() => ({ size, inputAnchorRef }), [size])}>
        {children}
      </ComboboxContext.Provider>
    </ComboboxPrimitive.Root>
  );
}
ComboboxRoot.displayName = 'ComboboxRoot';

// ============================================================================
// InputRoot (renders TextField.Root + optional trigger/clear trailing slot)
// ============================================================================

const ComboboxInputRootContext = React.createContext<boolean>(false);

interface ComboboxInputRootProps extends TextFieldRootProps {
  /**
   * Whether to render the dropdown trigger icon. Defaults to `true` when outside
   * `Content`, and `false` when rendered inside `Content` (e.g., input-inside-popup pattern).
   */
  showTrigger?: boolean;
  /** Whether to render a clear button in the trailing slot. @default false */
  showClear?: boolean;
}

/**
 * Renders a `TextField.Root` with optional trigger/clear trailing slot.
 * Auto-registers as the popup anchor when rendered outside `Content`.
 * Inherits `size` from `Combobox.Root` context (overridable via prop).
 */
const ComboboxInputRoot = React.forwardRef<HTMLDivElement, ComboboxInputRootProps>((props, forwardedRef) => {
  const context = React.useContext(ComboboxContext);
  const contentContext = React.useContext(ComboboxContentContext);
  const isInsideContent = contentContext !== null;
  const {
    className,
    children,
    showTrigger = !isInsideContent,
    showClear = false,
    size = context.size,
    ...textFieldRootProps
  } = props;

  const mergedRef = React.useCallback(
    (node: HTMLDivElement | null) => {
      if (!isInsideContent && context.inputAnchorRef) context.inputAnchorRef.current = node;
      if (typeof forwardedRef === 'function') forwardedRef(node);
      else if (forwardedRef) forwardedRef.current = node;
    },
    [isInsideContent, context.inputAnchorRef, forwardedRef],
  );

  return (
    <TextFieldRoot
      ref={mergedRef}
      size={size}
      {...textFieldRootProps}
      className={classNames('fui-ComboboxInputRoot', className)}
    >
      <ComboboxInputRootContext.Provider value={true}>{children}</ComboboxInputRootContext.Provider>
      {(showTrigger || showClear) && (
        <TextFieldSlot>
          {showClear && (
            <ComboboxPrimitive.Clear className="fui-ComboboxClearButton" aria-label="Clear">
              <XIcon />
            </ComboboxPrimitive.Clear>
          )}
          {showTrigger && (
            <ComboboxPrimitive.Trigger className="fui-ComboboxTriggerButton">
              <svg
                className="fui-ComboboxTriggerIcon"
                xmlns="http://www.w3.org/2000/svg"
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
            </ComboboxPrimitive.Trigger>
          )}
        </TextFieldSlot>
      )}
    </TextFieldRoot>
  );
});
ComboboxInputRoot.displayName = 'ComboboxInputRoot';

// ============================================================================
// InputSlot (re-export of TextFieldSlot for custom slots)
// ============================================================================

const ComboboxInputSlot = TextFieldSlot;

// ============================================================================
// Input (renders ComboboxPrimitive.Input via TextFieldInput; auto-wraps in InputRoot)
// ============================================================================

interface ComboboxInputProps extends Omit<
  React.ComponentProps<typeof ComboboxPrimitive.Input>,
  'className' | 'render'
> {
  className?: string;
  placeholder?: string;
}

/**
 * The text input for the combobox. If not already wrapped in `Combobox.InputRoot`,
 * it automatically wraps itself in one (with default `showTrigger` and `showClear` behavior).
 */
const ComboboxInput = React.forwardRef<HTMLInputElement, ComboboxInputProps>((props, forwardedRef) => {
  const hasRoot = React.useContext(ComboboxInputRootContext);
  const { className, ...rest } = props;

  const input = (
    <ComboboxPrimitive.Input
      {...rest}
      ref={forwardedRef}
      render={<TextFieldInput className={classNames('fui-ComboboxInput', className)} />}
    />
  );

  return hasRoot ? input : <ComboboxInputRoot>{input}</ComboboxInputRoot>;
});
ComboboxInput.displayName = 'ComboboxInput';

// ============================================================================
// ChipsInput – renders TextField.Input internally for use inside Chips
// ============================================================================

interface ComboboxChipsInputProps extends Omit<React.ComponentProps<typeof ComboboxPrimitive.Input>, 'className'> {
  className?: string;
}

const ComboboxChipsInput = React.forwardRef<HTMLInputElement, ComboboxChipsInputProps>((props, forwardedRef) => {
  const { className, ...rest } = props;
  return (
    <ComboboxPrimitive.Input
      {...rest}
      ref={forwardedRef}
      render={<TextFieldInput className={classNames('fui-ComboboxChipsInput', className)} />}
    />
  );
});
ComboboxChipsInput.displayName = 'ComboboxChipsInput';

// ============================================================================
// Trigger (render prop – use Button or any element, e.g. render={<Button><Combobox.Value /></Button>})
// ============================================================================

interface ComboboxTriggerProps extends Omit<React.ComponentProps<typeof ComboboxPrimitive.Trigger>, 'className'> {
  render: React.ReactElement;
}

const ComboboxTrigger = (props: ComboboxTriggerProps) => {
  const { render, ...triggerProps } = props;
  return <ComboboxPrimitive.Trigger render={render} {...triggerProps} />;
};
ComboboxTrigger.displayName = 'ComboboxTrigger';

// ============================================================================
// Value
// ============================================================================

interface ComboboxValueProps extends Omit<
  React.ComponentProps<typeof ComboboxPrimitive.Value>,
  'className' | 'render'
> {
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

interface ComboboxClearProps extends Omit<
  React.ComponentProps<typeof ComboboxPrimitive.Clear>,
  'render' | 'className'
> {
  className?: string;
}

function ComboboxClear({ children, ...props }: ComboboxClearProps) {
  return <ComboboxPrimitive.Clear {...props} render={children as React.ReactElement} />;
}
ComboboxClear.displayName = 'ComboboxClear';

// ============================================================================
// Content
// ============================================================================

interface ComboboxContentProps
  extends Omit<React.ComponentProps<typeof ComboboxPrimitive.Popup>, 'className' | 'render'>, ComboboxContentOwnProps {
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

/**
 * The popup content container. Encapsulates `Portal`, `Positioner`, and `Popup` internally.
 * Inherits `size` from `Combobox.Root` context (overridable via prop).
 * Anchors to the `InputRoot` or `Chips` element automatically unless an explicit `anchor` is provided.
 */
const ComboboxContent = (props: ComboboxContentProps) => {
  const rootContext = React.useContext(ComboboxContext);
  const themeContext = useThemeContext();
  const {
    className,
    children,
    size = rootContext.size ?? comboboxContentPropDefs.size.default,
    color,
    variant = comboboxContentPropDefs.variant.default,
    highContrast = comboboxContentPropDefs.highContrast.default,
    container,
    keepMounted,
    anchor = rootContext.inputAnchorRef,
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
            {children}
          </ComboboxContentContext.Provider>
        </Theme>
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  );
};
ComboboxContent.displayName = 'ComboboxContent';

// ============================================================================
// List
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
  extends Omit<React.ComponentProps<typeof ComboboxPrimitive.Item>, 'className' | 'render'>, ComboboxItemOwnProps {
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

interface ComboboxItemIndicatorProps extends Omit<
  React.ComponentProps<typeof ComboboxPrimitive.ItemIndicator>,
  'className' | 'render'
> {
  className?: string;
}

const ComboboxItemIndicator = (props: ComboboxItemIndicatorProps) => {
  const { className, children, ...indicatorProps } = props;
  return (
    <ComboboxPrimitive.ItemIndicator {...indicatorProps} className={classNames('fui-ComboboxItemIndicator', className)}>
      {children ?? <ThickCheckIcon className="fui-ComboboxItemIndicatorIcon" />}
    </ComboboxPrimitive.ItemIndicator>
  );
};
ComboboxItemIndicator.displayName = 'ComboboxItemIndicator';

// ============================================================================
// Empty
// ============================================================================

interface ComboboxEmptyProps extends Omit<
  React.ComponentProps<typeof ComboboxPrimitive.Empty>,
  'className' | 'render'
> {
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

interface ComboboxGroupProps extends Omit<
  React.ComponentProps<typeof ComboboxPrimitive.Group>,
  'className' | 'render'
> {
  className?: string;
}

const ComboboxGroup = (props: ComboboxGroupProps) => {
  const { className, ...groupProps } = props;
  return (
    <ComboboxPrimitive.Group
      {...groupProps}
      className={classNames('fui-ComboboxGroup', 'fui-BaseMenuGroup', className)}
    />
  );
};
ComboboxGroup.displayName = 'ComboboxGroup';

// ============================================================================
// GroupLabel
// ============================================================================

interface ComboboxGroupLabelProps extends Omit<
  React.ComponentProps<typeof ComboboxPrimitive.GroupLabel>,
  'className' | 'render'
> {
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

interface ComboboxSeparatorProps extends Omit<
  React.ComponentProps<typeof ComboboxPrimitive.Separator>,
  'className' | 'render'
> {
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
// Status (announces list status changes to screen readers)
// ============================================================================

interface ComboboxStatusProps extends Omit<
  React.ComponentProps<typeof ComboboxPrimitive.Status>,
  'className' | 'render'
> {
  className?: string;
}

/**
 * Visually hidden live region that announces list status changes to screen readers
 * (e.g., "3 results available"). Place inside `Combobox.Root` for accessibility.
 */
const ComboboxStatus = React.forwardRef<HTMLDivElement, ComboboxStatusProps>((props, forwardedRef) => {
  const { className, ...statusProps } = props;
  return (
    <ComboboxPrimitive.Status
      {...statusProps}
      ref={forwardedRef}
      className={classNames('fui-ComboboxStatus', className)}
    />
  );
});
ComboboxStatus.displayName = 'ComboboxStatus';

// ============================================================================
// Chips (renders TextField.Root internally, auto-registers as anchor)
// ============================================================================

interface ComboboxChipsProps extends TextFieldRootProps {}

/**
 * Container for multi-select chips. Renders a `TextField.Root` internally
 * and auto-registers as the popup anchor for `Content` positioning.
 * Inherits `size` from `Combobox.Root` context (overridable via prop).
 * Accepts all `TextField.Root` props (`size`, `variant`, `color`, etc.).
 */
const ComboboxChips = React.forwardRef<HTMLDivElement, ComboboxChipsProps>((props, forwardedRef) => {
  const context = React.useContext(ComboboxContext);
  const { className, size = context.size, variant, color, children, ...rest } = props;

  const mergedRef = React.useCallback(
    (node: HTMLDivElement | null) => {
      if (context.inputAnchorRef) context.inputAnchorRef.current = node;
      if (typeof forwardedRef === 'function') forwardedRef(node);
      else if (forwardedRef) forwardedRef.current = node;
    },
    [context.inputAnchorRef, forwardedRef],
  );

  const textFieldRootProps: TextFieldRootProps = {
    className: classNames('fui-ComboboxChips', className),
    size,
    variant,
    color,
    ...rest,
  };
  return (
    <ComboboxPrimitive.Chips
      ref={mergedRef}
      render={<TextFieldRoot {...textFieldRootProps}>{children}</TextFieldRoot>}
    />
  );
});
ComboboxChips.displayName = 'ComboboxChips';

// ============================================================================
// useComboboxAnchor – ref to attach to Chips and pass to Content anchor for positioning
// ============================================================================

function useComboboxAnchor() {
  return React.useRef<HTMLDivElement | null>(null);
}

// ============================================================================
// Chip (includes remove button with XIcon baked in)
// ============================================================================

type ComboboxChipOwnProps = GetPropDefTypes<typeof comboboxChipPropDefs>;

interface ComboboxChipProps
  extends Omit<React.ComponentProps<typeof ComboboxPrimitive.Chip>, 'className' | 'render'>, ComboboxChipOwnProps {
  className?: string;
  /** When false, the built-in remove button is not rendered. @default true */
  showRemove?: boolean;
}

const ComboboxChip = (props: ComboboxChipProps) => {
  const {
    className,
    children,
    color,
    variant = comboboxChipPropDefs.variant.default,
    highContrast = comboboxChipPropDefs.highContrast.default,
    showRemove = true,
    ...chipProps
  } = props;
  return (
    <ComboboxPrimitive.Chip
      data-accent-color={color}
      {...chipProps}
      className={classNames('fui-ComboboxChip', `fui-variant-${variant}`, className, {
        'fui-high-contrast': highContrast,
      })}
    >
      {children}
      {showRemove && (
        <ComboboxPrimitive.ChipRemove className="fui-ComboboxChipRemove">
          <XIcon className="fui-ComboboxChipRemoveIcon" />
        </ComboboxPrimitive.ChipRemove>
      )}
    </ComboboxPrimitive.Chip>
  );
};
ComboboxChip.displayName = 'ComboboxChip';

// ============================================================================
// Exports
// ============================================================================

export {
  ComboboxChip as Chip,
  ComboboxChips as Chips,
  ComboboxChipsInput as ChipsInput,
  ComboboxClear as Clear,
  ComboboxCollection as Collection,
  ComboboxContent as Content,
  ComboboxEmpty as Empty,
  ComboboxGroup as Group,
  ComboboxGroupLabel as GroupLabel,
  ComboboxIcon as Icon,
  ComboboxInput as Input,
  ComboboxInputRoot as InputRoot,
  ComboboxInputSlot as InputSlot,
  ComboboxItem as Item,
  ComboboxItemIndicator as ItemIndicator,
  ComboboxList as List,
  ComboboxRoot as Root,
  ComboboxSeparator as Separator,
  ComboboxStatus as Status,
  ComboboxTrigger as Trigger,
  useComboboxAnchor,
  ComboboxValue as Value,
};

export type {
  ComboboxChipProps as ChipProps,
  ComboboxChipsInputProps as ChipsInputProps,
  ComboboxChipsProps as ChipsProps,
  ComboboxClearProps as ClearProps,
  ComboboxCollectionProps as CollectionProps,
  ComboboxValue as ComboboxValueType,
  ComboboxContentProps as ContentProps,
  ComboboxEmptyProps as EmptyProps,
  ComboboxGroupLabelProps as GroupLabelProps,
  ComboboxGroupProps as GroupProps,
  ComboboxIconProps as IconProps,
  ComboboxInputProps as InputProps,
  ComboboxInputRootProps as InputRootProps,
  ComboboxItemIndicatorProps as ItemIndicatorProps,
  ComboboxItemProps as ItemProps,
  ComboboxListProps as ListProps,
  ComboboxRootActions as RootActions,
  ComboboxRootChangeEventDetails as RootChangeEventDetails,
  ComboboxRootHighlightEventDetails as RootHighlightEventDetails,
  ComboboxRootProps as RootProps,
  ComboboxSeparatorProps as SeparatorProps,
  ComboboxStatusProps as StatusProps,
  ComboboxTriggerProps as TriggerProps,
  ComboboxValueProps as ValueProps,
};
