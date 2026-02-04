'use client';

import { Autocomplete as AutocompletePrimitive } from '@base-ui/react/autocomplete';
import classNames from 'classnames';
import * as React from 'react';
import { composeEventHandlers, type GetPropDefTypes, type PropsWithoutColor } from '../../helpers';
import { Theme, useThemeContext } from '../../theme';
import { ScrollArea } from '../scroll-area';
import { autocompleteInputPropDefs, autocompleteItemPropDefs, autocompletePopupPropDefs } from './autocomplete.props';

// Re-export useFilter hook from Base UI
const { useFilter } = AutocompletePrimitive;
export { useFilter };

// ============================================================================
// Types
// ============================================================================

type AutocompleteFieldOwnProps = GetPropDefTypes<typeof autocompleteInputPropDefs>;
type AutocompletePopupOwnProps = GetPropDefTypes<typeof autocompletePopupPropDefs>;
type AutocompleteItemOwnProps = GetPropDefTypes<typeof autocompleteItemPropDefs>;

// ============================================================================
// Context
// ============================================================================

// Context for sharing anchor ref between FieldRoot and Popup (at Root level)
type AutocompleteAnchorContextValue = {
  anchorRef: React.RefObject<HTMLDivElement | null>;
  setAnchorElement: (element: HTMLDivElement | null) => void;
};
const AutocompleteAnchorContext = React.createContext<AutocompleteAnchorContextValue | undefined>(undefined);

// Context for sharing field props (inside FieldRoot)
type AutocompleteFieldContextValue = AutocompleteFieldOwnProps;
const AutocompleteFieldContext = React.createContext<AutocompleteFieldContextValue | undefined>(undefined);

type AutocompletePopupContextValue = AutocompletePopupOwnProps;
const AutocompletePopupContext = React.createContext<AutocompletePopupContextValue>({});

// ============================================================================
// Root (Base UI Autocomplete Root - handles filtering/state)
// ============================================================================

interface AutocompleteRootProps extends React.ComponentProps<typeof AutocompletePrimitive.Root> {}

function AutocompleteRoot(props: AutocompleteRootProps) {
  const { children, ...rootProps } = props;
  const anchorRef = React.useRef<HTMLDivElement | null>(null);

  const setAnchorElement = React.useCallback((element: HTMLDivElement | null) => {
    anchorRef.current = element;
  }, []);

  const anchorContextValue = React.useMemo(() => ({ anchorRef, setAnchorElement }), [setAnchorElement]);

  return (
    <AutocompletePrimitive.Root {...rootProps}>
      <AutocompleteAnchorContext.Provider value={anchorContextValue}>{children}</AutocompleteAnchorContext.Provider>
    </AutocompletePrimitive.Root>
  );
}
AutocompleteRoot.displayName = 'AutocompleteRoot';

// ============================================================================
// FieldRoot (TextField-like wrapper for visual styling)
// ============================================================================

interface AutocompleteFieldRootProps extends PropsWithoutColor<'div'>, AutocompleteFieldOwnProps {}

const AutocompleteFieldRoot = React.forwardRef<HTMLDivElement, AutocompleteFieldRootProps>((props, forwardedRef) => {
  const {
    children,
    className,
    size = autocompleteInputPropDefs.size.default,
    variant = autocompleteInputPropDefs.variant.default,
    color = autocompleteInputPropDefs.color.default,
    ...rootProps
  } = props;

  const anchorContext = React.useContext(AutocompleteAnchorContext);

  const handlePointerDown = React.useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest('input, button, a')) return;

    const input = event.currentTarget.querySelector('.fui-AutocompleteFieldInput') as HTMLInputElement | null;
    if (!input) return;

    const position = input.compareDocumentPosition(target);
    const targetIsBeforeInput = (position & Node.DOCUMENT_POSITION_PRECEDING) !== 0;
    const cursorPosition = targetIsBeforeInput ? 0 : input.value.length;

    requestAnimationFrame(() => {
      const selectableTypes = ['text', 'search', 'url', 'tel', 'password'];
      if (selectableTypes.includes(input.type)) {
        input.setSelectionRange(cursorPosition, cursorPosition);
      }
      input.focus();
    });
  }, []);

  // Use callback ref to handle forwarded ref and register with anchor context
  const setRef = React.useCallback(
    (node: HTMLDivElement | null) => {
      // Register with anchor context
      anchorContext?.setAnchorElement(node);

      // Forward the ref
      if (typeof forwardedRef === 'function') {
        forwardedRef(node);
      } else if (forwardedRef) {
        (forwardedRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    },
    [forwardedRef, anchorContext],
  );

  return (
    <div
      {...rootProps}
      ref={setRef}
      className={classNames('fui-AutocompleteFieldRoot', 'fui-TextFieldRoot', `fui-r-size-${size}`, className)}
      onPointerDown={composeEventHandlers(rootProps.onPointerDown, handlePointerDown)}
    >
      <AutocompleteFieldContext.Provider
        value={React.useMemo(() => ({ size, variant, color }), [size, variant, color])}
      >
        {children}
      </AutocompleteFieldContext.Provider>
    </div>
  );
});
AutocompleteFieldRoot.displayName = 'AutocompleteFieldRoot';

// ============================================================================
// FieldInput (the actual input with TextField styling)
// ============================================================================

interface AutocompleteFieldInputProps
  extends
    Omit<React.ComponentProps<typeof AutocompletePrimitive.Input>, 'className' | 'render' | 'size'>,
    AutocompleteFieldOwnProps {
  className?: string;
}

const AutocompleteFieldInput = React.forwardRef<HTMLInputElement, AutocompleteFieldInputProps>(
  (props, forwardedRef) => {
    const context = React.useContext(AutocompleteFieldContext);
    const hasFieldRoot = context !== undefined;
    const {
      className,
      size = context?.size ?? autocompleteInputPropDefs.size.default,
      variant = context?.variant ?? autocompleteInputPropDefs.variant.default,
      color = context?.color ?? autocompleteInputPropDefs.color.default,
      ...inputProps
    } = props;

    const input = (
      <>
        <AutocompletePrimitive.Input
          data-accent-color={color}
          spellCheck="false"
          {...inputProps}
          ref={forwardedRef}
          className={classNames(
            'fui-AutocompleteFieldInput',
            'fui-TextFieldInput',
            className,
            `fui-r-size-${size}`,
            `fui-variant-${variant}`,
          )}
        />
        <div data-accent-color={color} className="fui-TextFieldChrome" />
      </>
    );

    // If there's no FieldRoot, wrap the input in one automatically
    return hasFieldRoot ? (
      input
    ) : (
      <AutocompleteFieldRoot size={size} variant={variant} color={color}>
        {input}
      </AutocompleteFieldRoot>
    );
  },
);
AutocompleteFieldInput.displayName = 'AutocompleteFieldInput';

// ============================================================================
// FieldSlot (for icons/buttons - same pattern as TextField.Slot)
// ============================================================================

type AutocompleteFieldSlotElement = React.ElementRef<'div'>;
interface AutocompleteFieldSlotProps extends PropsWithoutColor<'div'> {
  color?: GetPropDefTypes<typeof autocompleteItemPropDefs>['color'];
}

const AutocompleteFieldSlot = React.forwardRef<AutocompleteFieldSlotElement, AutocompleteFieldSlotProps>(
  (props, forwardedRef) => {
    const { className, color, ...slotProps } = props;
    const context = React.useContext(AutocompleteFieldContext);
    return (
      <div
        data-accent-color={color}
        {...slotProps}
        ref={forwardedRef}
        className={classNames(
          'fui-AutocompleteFieldSlot',
          'fui-TextFieldSlot',
          className,
          `fui-r-size-${context?.size}`,
        )}
      />
    );
  },
);
AutocompleteFieldSlot.displayName = 'AutocompleteFieldSlot';

// ============================================================================
// Trigger
// ============================================================================

interface AutocompleteTriggerProps extends Omit<
  React.ComponentProps<typeof AutocompletePrimitive.Trigger>,
  'className' | 'render'
> {
  className?: string;
}

const AutocompleteTrigger = React.forwardRef<HTMLButtonElement, AutocompleteTriggerProps>((props, forwardedRef) => {
  const { className, ...triggerProps } = props;
  return (
    <AutocompletePrimitive.Trigger
      {...triggerProps}
      ref={forwardedRef}
      className={classNames('fui-AutocompleteTrigger', className)}
    />
  );
});
AutocompleteTrigger.displayName = 'AutocompleteTrigger';

// ============================================================================
// Icon
// ============================================================================

interface AutocompleteIconProps extends Omit<
  React.ComponentProps<typeof AutocompletePrimitive.Icon>,
  'className' | 'render'
> {
  className?: string;
}

const AutocompleteIcon = React.forwardRef<HTMLDivElement, AutocompleteIconProps>((props, forwardedRef) => {
  const { className, ...iconProps } = props;
  return (
    <AutocompletePrimitive.Icon
      {...iconProps}
      ref={forwardedRef}
      className={classNames('fui-AutocompleteIcon', className)}
    />
  );
});
AutocompleteIcon.displayName = 'AutocompleteIcon';

// ============================================================================
// Clear
// ============================================================================

interface AutocompleteClearProps extends Omit<
  React.ComponentProps<typeof AutocompletePrimitive.Clear>,
  'className' | 'render'
> {
  className?: string;
}

const AutocompleteClear = React.forwardRef<HTMLButtonElement, AutocompleteClearProps>((props, forwardedRef) => {
  const { className, ...clearProps } = props;
  return (
    <AutocompletePrimitive.Clear
      {...clearProps}
      ref={forwardedRef}
      className={classNames('fui-AutocompleteClear', className)}
    />
  );
});
AutocompleteClear.displayName = 'AutocompleteClear';

// ============================================================================
// Popup
// ============================================================================

interface AutocompletePopupProps
  extends
    Omit<React.ComponentProps<typeof AutocompletePrimitive.Popup>, 'className' | 'render'>,
    AutocompletePopupOwnProps {
  className?: string;
  container?: React.ComponentProps<typeof AutocompletePrimitive.Portal>['container'];
  keepMounted?: React.ComponentProps<typeof AutocompletePrimitive.Portal>['keepMounted'];
  // Positioner props
  anchor?: React.ComponentProps<typeof AutocompletePrimitive.Positioner>['anchor'];
  side?: React.ComponentProps<typeof AutocompletePrimitive.Positioner>['side'];
  sideOffset?: React.ComponentProps<typeof AutocompletePrimitive.Positioner>['sideOffset'];
  align?: React.ComponentProps<typeof AutocompletePrimitive.Positioner>['align'];
  alignOffset?: React.ComponentProps<typeof AutocompletePrimitive.Positioner>['alignOffset'];
  collisionPadding?: React.ComponentProps<typeof AutocompletePrimitive.Positioner>['collisionPadding'];
}

const AutocompletePopup = (props: AutocompletePopupProps) => {
  const themeContext = useThemeContext();
  const anchorContext = React.useContext(AutocompleteAnchorContext);
  const {
    className,
    children,
    size = autocompletePopupPropDefs.size.default,
    color,
    variant = autocompletePopupPropDefs.variant.default,
    container,
    keepMounted,
    // Positioner props
    anchor,
    side = 'bottom',
    sideOffset = 4,
    align = 'start',
    alignOffset,
    collisionPadding = 10,
    ...popupProps
  } = props;
  const resolvedColor = color ?? themeContext.accentColor;

  // Use FieldRoot as anchor by default if available
  const resolvedAnchor = anchor ?? anchorContext?.anchorRef;

  return (
    <AutocompletePrimitive.Portal container={container} keepMounted={keepMounted}>
      <AutocompletePrimitive.Positioner
        className="fui-AutocompletePositioner"
        anchor={resolvedAnchor}
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        collisionPadding={collisionPadding}
      >
        <Theme
          render={<AutocompletePrimitive.Popup />}
          data-accent-color={resolvedColor}
          {...popupProps}
          className={classNames(
            'fui-AutocompletePopup',
            'fui-BaseMenuContent',
            `fui-variant-${variant}`,
            className,
            `fui-r-size-${size}`,
          )}
        >
          <ScrollArea type="auto">
            <div className={classNames('fui-AutocompleteViewport', 'fui-BaseMenuViewport')}>
              <AutocompletePopupContext.Provider
                value={React.useMemo(() => ({ size, color: resolvedColor, variant }), [size, resolvedColor, variant])}
              >
                {children}
              </AutocompletePopupContext.Provider>
            </div>
          </ScrollArea>
        </Theme>
      </AutocompletePrimitive.Positioner>
    </AutocompletePrimitive.Portal>
  );
};
AutocompletePopup.displayName = 'AutocompletePopup';

// ============================================================================
// List
// ============================================================================

interface AutocompleteListProps extends Omit<
  React.ComponentProps<typeof AutocompletePrimitive.List>,
  'className' | 'render'
> {
  className?: string;
}

const AutocompleteList = (props: AutocompleteListProps) => {
  const { className, ...listProps } = props;
  return <AutocompletePrimitive.List {...listProps} className={classNames('fui-AutocompleteList', className)} />;
};
AutocompleteList.displayName = 'AutocompleteList';

// ============================================================================
// Item
// ============================================================================

interface AutocompleteItemProps
  extends
    Omit<React.ComponentProps<typeof AutocompletePrimitive.Item>, 'className' | 'render'>,
    AutocompleteItemOwnProps {
  className?: string;
}

const AutocompleteItem = React.forwardRef<HTMLDivElement, AutocompleteItemProps>((props, forwardedRef) => {
  const { className, color, ...itemProps } = props;
  return (
    <AutocompletePrimitive.Item
      data-accent-color={color}
      {...itemProps}
      ref={forwardedRef}
      className={classNames('fui-AutocompleteItem', 'fui-BaseMenuItem', className)}
    />
  );
});
AutocompleteItem.displayName = 'AutocompleteItem';

// ============================================================================
// Group
// ============================================================================

interface AutocompleteGroupProps extends Omit<
  React.ComponentProps<typeof AutocompletePrimitive.Group>,
  'className' | 'render'
> {
  className?: string;
}

const AutocompleteGroup = (props: AutocompleteGroupProps) => {
  const { className, ...groupProps } = props;
  return (
    <AutocompletePrimitive.Group
      {...groupProps}
      className={classNames('fui-AutocompleteGroup', 'fui-BaseMenuGroup', className)}
    />
  );
};
AutocompleteGroup.displayName = 'AutocompleteGroup';

// ============================================================================
// GroupLabel
// ============================================================================

interface AutocompleteGroupLabelProps extends Omit<
  React.ComponentProps<typeof AutocompletePrimitive.GroupLabel>,
  'className' | 'render'
> {
  className?: string;
}

const AutocompleteGroupLabel = (props: AutocompleteGroupLabelProps) => {
  const { className, ...groupLabelProps } = props;
  return (
    <AutocompletePrimitive.GroupLabel
      {...groupLabelProps}
      className={classNames('fui-AutocompleteGroupLabel', 'fui-BaseMenuGroupLabel', className)}
    />
  );
};
AutocompleteGroupLabel.displayName = 'AutocompleteGroupLabel';

// ============================================================================
// Separator
// ============================================================================

interface AutocompleteSeparatorProps extends Omit<
  React.ComponentProps<typeof AutocompletePrimitive.Separator>,
  'className' | 'render'
> {
  className?: string;
}

const AutocompleteSeparator = (props: AutocompleteSeparatorProps) => {
  const { className, ...separatorProps } = props;
  return (
    <AutocompletePrimitive.Separator
      {...separatorProps}
      className={classNames('fui-AutocompleteSeparator', 'fui-BaseMenuSeparator', className)}
    />
  );
};
AutocompleteSeparator.displayName = 'AutocompleteSeparator';

// ============================================================================
// Empty
// ============================================================================

interface AutocompleteEmptyProps extends Omit<
  React.ComponentProps<typeof AutocompletePrimitive.Empty>,
  'className' | 'render'
> {
  className?: string;
}

const AutocompleteEmpty = (props: AutocompleteEmptyProps) => {
  const { className, ...emptyProps } = props;
  return <AutocompletePrimitive.Empty {...emptyProps} className={classNames('fui-AutocompleteEmpty', className)} />;
};
AutocompleteEmpty.displayName = 'AutocompleteEmpty';

// ============================================================================
// Status
// ============================================================================

interface AutocompleteStatusProps extends Omit<
  React.ComponentProps<typeof AutocompletePrimitive.Status>,
  'className' | 'render'
> {
  className?: string;
}

const AutocompleteStatus = (props: AutocompleteStatusProps) => {
  const { className, ...statusProps } = props;
  return <AutocompletePrimitive.Status {...statusProps} className={classNames('fui-AutocompleteStatus', className)} />;
};
AutocompleteStatus.displayName = 'AutocompleteStatus';

// ============================================================================
// Exports
// ============================================================================

export {
  AutocompleteClear as Clear,
  AutocompleteEmpty as Empty,
  AutocompleteFieldInput as FieldInput,
  AutocompleteFieldRoot as FieldRoot,
  AutocompleteFieldSlot as FieldSlot,
  AutocompleteGroup as Group,
  AutocompleteGroupLabel as GroupLabel,
  AutocompleteIcon as Icon,
  AutocompleteItem as Item,
  AutocompleteList as List,
  AutocompletePopup as Popup,
  AutocompleteRoot as Root,
  AutocompleteSeparator as Separator,
  AutocompleteStatus as Status,
  AutocompleteTrigger as Trigger,
};

export type {
  AutocompleteClearProps as ClearProps,
  AutocompleteEmptyProps as EmptyProps,
  AutocompleteFieldInputProps as FieldInputProps,
  AutocompleteFieldRootProps as FieldRootProps,
  AutocompleteFieldSlotProps as FieldSlotProps,
  AutocompleteGroupLabelProps as GroupLabelProps,
  AutocompleteGroupProps as GroupProps,
  AutocompleteIconProps as IconProps,
  AutocompleteItemProps as ItemProps,
  AutocompleteListProps as ListProps,
  AutocompletePopupProps as PopupProps,
  AutocompleteRootProps as RootProps,
  AutocompleteSeparatorProps as SeparatorProps,
  AutocompleteStatusProps as StatusProps,
  AutocompleteTriggerProps as TriggerProps,
};
