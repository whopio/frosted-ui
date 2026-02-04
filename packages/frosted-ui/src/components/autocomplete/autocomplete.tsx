'use client';

import { Autocomplete as AutocompletePrimitive } from '@base-ui/react/autocomplete';
import classNames from 'classnames';
import * as React from 'react';
import { type GetPropDefTypes } from '../../helpers';
import { Theme, useThemeContext } from '../../theme';
import { autocompleteContentPropDefs, autocompleteItemPropDefs } from './autocomplete.props';

// Re-export useFilter hook from Base UI
const { useFilter } = AutocompletePrimitive;
export { useFilter };

// ============================================================================
// Types
// ============================================================================

type AutocompleteContentOwnProps = GetPropDefTypes<typeof autocompleteContentPropDefs>;
type AutocompleteItemOwnProps = GetPropDefTypes<typeof autocompleteItemPropDefs>;

// ============================================================================
// Context
// ============================================================================

type AutocompleteContentContextValue = AutocompleteContentOwnProps;
const AutocompleteContentContext = React.createContext<AutocompleteContentContextValue>({});

// ============================================================================
// Root
// ============================================================================

interface AutocompleteRootProps extends React.ComponentProps<typeof AutocompletePrimitive.Root> {}

function AutocompleteRoot(props: AutocompleteRootProps) {
  return <AutocompletePrimitive.Root {...props} />;
}
AutocompleteRoot.displayName = 'AutocompleteRoot';

// ============================================================================
// Input
// ============================================================================

interface AutocompleteInputProps extends React.ComponentProps<typeof AutocompletePrimitive.Input> {}

const AutocompleteInput = React.forwardRef<HTMLInputElement, AutocompleteInputProps>((props, forwardedRef) => {
  return <AutocompletePrimitive.Input {...props} ref={forwardedRef} />;
});
AutocompleteInput.displayName = 'AutocompleteInput';

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
// Content
// ============================================================================

interface AutocompleteContentProps
  extends
    Omit<React.ComponentProps<typeof AutocompletePrimitive.Popup>, 'className' | 'render'>,
    AutocompleteContentOwnProps {
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

const AutocompleteContent = (props: AutocompleteContentProps) => {
  const themeContext = useThemeContext();
  const {
    className,
    children,
    size = autocompleteContentPropDefs.size.default,
    color,
    variant = autocompleteContentPropDefs.variant.default,
    container,
    keepMounted,
    // Positioner props
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
    <AutocompletePrimitive.Portal container={container} keepMounted={keepMounted}>
      <AutocompletePrimitive.Positioner
        className="fui-AutocompletePositioner"
        anchor={anchor}
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        collisionPadding={collisionPadding}
      >
        <Theme
          render={<AutocompletePrimitive.Popup />}
          data-accent-color={resolvedColor}
          {...contentProps}
          className={classNames(
            'fui-AutocompleteContent',
            'fui-BaseMenuContent',
            `fui-variant-${variant}`,
            className,
            `fui-r-size-${size}`,
          )}
        >
          <AutocompleteContentContext.Provider
            value={React.useMemo(() => ({ size, color: resolvedColor, variant }), [size, resolvedColor, variant])}
          >
            {children}
          </AutocompleteContentContext.Provider>
        </Theme>
      </AutocompletePrimitive.Positioner>
    </AutocompletePrimitive.Portal>
  );
};
AutocompleteContent.displayName = 'AutocompleteContent';

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
// Row (for grid layouts)
// ============================================================================

interface AutocompleteRowProps extends Omit<
  React.ComponentProps<typeof AutocompletePrimitive.Row>,
  'className' | 'render'
> {
  className?: string;
}

const AutocompleteRow = React.forwardRef<HTMLDivElement, AutocompleteRowProps>((props, forwardedRef) => {
  const { className, ...rowProps } = props;
  return (
    <AutocompletePrimitive.Row
      {...rowProps}
      ref={forwardedRef}
      className={classNames('fui-AutocompleteRow', className)}
    />
  );
});
AutocompleteRow.displayName = 'AutocompleteRow';

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
  AutocompleteContent as Content,
  AutocompleteEmpty as Empty,
  AutocompleteGroup as Group,
  AutocompleteGroupLabel as GroupLabel,
  AutocompleteIcon as Icon,
  AutocompleteInput as Input,
  AutocompleteItem as Item,
  AutocompleteList as List,
  AutocompleteRoot as Root,
  AutocompleteRow as Row,
  AutocompleteSeparator as Separator,
  AutocompleteStatus as Status,
  AutocompleteTrigger as Trigger,
};

export type {
  AutocompleteClearProps as ClearProps,
  AutocompleteContentProps as ContentProps,
  AutocompleteEmptyProps as EmptyProps,
  AutocompleteGroupLabelProps as GroupLabelProps,
  AutocompleteGroupProps as GroupProps,
  AutocompleteIconProps as IconProps,
  AutocompleteInputProps as InputProps,
  AutocompleteItemProps as ItemProps,
  AutocompleteListProps as ListProps,
  AutocompleteRootProps as RootProps,
  AutocompleteRowProps as RowProps,
  AutocompleteSeparatorProps as SeparatorProps,
  AutocompleteStatusProps as StatusProps,
  AutocompleteTriggerProps as TriggerProps,
};
