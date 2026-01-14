'use client';

import { ContextMenu as ContextMenuPrimitive } from '@base-ui/react/context-menu';
import classNames from 'classnames';
import * as React from 'react';
import { ThickCheckIcon, ThickChevronRightIcon } from '../../icons';
import { Theme, useThemeContext } from '../../theme';
import { ScrollArea } from '../scroll-area';
import {
  contextMenuCheckboxItemPropDefs,
  contextMenuContentPropDefs,
  contextMenuItemPropDefs,
} from './context-menu.props';

import type { GetPropDefTypes } from '../../helpers';

// Types from Base UI
type RootProps = React.ComponentProps<typeof ContextMenuPrimitive.Root>;

// Root
interface ContextMenuRootProps extends Omit<RootProps, 'className' | 'render'> {}
function ContextMenuRoot(props: ContextMenuRootProps) {
  return <ContextMenuPrimitive.Root {...props} />;
}
ContextMenuRoot.displayName = 'ContextMenuRoot';

// Trigger
interface ContextMenuTriggerProps extends Omit<
  React.ComponentProps<typeof ContextMenuPrimitive.Trigger>,
  'render' | 'className'
> {
  className?: string;
}
function ContextMenuTrigger({ children, ...props }: ContextMenuTriggerProps) {
  return <ContextMenuPrimitive.Trigger {...props} render={children as React.ReactElement} />;
}
ContextMenuTrigger.displayName = 'ContextMenuTrigger';

// Content
type ContextMenuContentOwnProps = GetPropDefTypes<typeof contextMenuContentPropDefs>;
type ContextMenuContentContextValue = ContextMenuContentOwnProps;
const ContextMenuContentContext = React.createContext<ContextMenuContentContextValue>({});

interface ContextMenuContentProps
  extends
    Omit<React.ComponentProps<typeof ContextMenuPrimitive.Popup>, 'className' | 'render'>,
    ContextMenuContentContextValue {
  className?: string;
  container?: React.ComponentProps<typeof ContextMenuPrimitive.Portal>['container'];
  keepMounted?: React.ComponentProps<typeof ContextMenuPrimitive.Portal>['keepMounted'];
  // Positioner props
  side?: React.ComponentProps<typeof ContextMenuPrimitive.Positioner>['side'];
  sideOffset?: React.ComponentProps<typeof ContextMenuPrimitive.Positioner>['sideOffset'];
  align?: React.ComponentProps<typeof ContextMenuPrimitive.Positioner>['align'];
  alignOffset?: React.ComponentProps<typeof ContextMenuPrimitive.Positioner>['alignOffset'];
  collisionPadding?: React.ComponentProps<typeof ContextMenuPrimitive.Positioner>['collisionPadding'];
}

const ContextMenuContent = (props: ContextMenuContentProps) => {
  const themeContext = useThemeContext();
  const {
    className,
    children,
    size = contextMenuContentPropDefs.size.default,
    color = contextMenuContentPropDefs.color.default,
    variant = contextMenuContentPropDefs.variant.default,
    container,
    keepMounted,
    // Positioner props
    side,
    sideOffset,
    align,
    alignOffset,
    collisionPadding = 10,
    ...popupProps
  } = props;
  const resolvedColor = color ?? themeContext.accentColor;
  return (
    <ContextMenuPrimitive.Portal container={container} keepMounted={keepMounted}>
      <ContextMenuPrimitive.Positioner
        className="fui-ContextMenuPositioner"
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        collisionPadding={collisionPadding}
      >
        <Theme asChild>
          <ContextMenuPrimitive.Popup
            data-accent-color={resolvedColor}
            {...popupProps}
            className={classNames(
              'fui-BaseMenuContent',
              'fui-ContextMenuContent',
              `fui-variant-${variant}`,
              className,
              `fui-r-size-${size}`,
            )}
          >
            <ScrollArea type="auto">
              <div className={classNames('fui-BaseMenuViewport', 'fui-ContextMenuViewport')}>
                <ContextMenuContentContext.Provider
                  value={React.useMemo(() => ({ size, color: resolvedColor, variant }), [size, resolvedColor, variant])}
                >
                  {children}
                </ContextMenuContentContext.Provider>
              </div>
            </ScrollArea>
          </ContextMenuPrimitive.Popup>
        </Theme>
      </ContextMenuPrimitive.Positioner>
    </ContextMenuPrimitive.Portal>
  );
};
ContextMenuContent.displayName = 'ContextMenuContent';

// Label (must be inside Group in Base UI)
interface ContextMenuGroupLabelProps extends Omit<
  React.ComponentProps<typeof ContextMenuPrimitive.GroupLabel>,
  'className' | 'render'
> {
  className?: string;
}
const ContextMenuGroupLabel = (props: ContextMenuGroupLabelProps) => (
  <ContextMenuPrimitive.GroupLabel
    {...props}
    className={classNames('fui-BaseMenuGroupLabel', 'fui-ContextMenuGroupLabel', props.className)}
  />
);
ContextMenuGroupLabel.displayName = 'ContextMenuGroupLabel';

// Item
type ContextMenuItemOwnProps = GetPropDefTypes<typeof contextMenuItemPropDefs>;
interface ContextMenuItemProps
  extends Omit<React.ComponentProps<typeof ContextMenuPrimitive.Item>, 'className' | 'color'>, ContextMenuItemOwnProps {
  className?: string;
}
const ContextMenuItem = (props: ContextMenuItemProps) => {
  const { className, children, color = contextMenuItemPropDefs.color.default, shortcut, ...itemProps } = props;
  return (
    <ContextMenuPrimitive.Item
      data-accent-color={color}
      {...itemProps}
      className={classNames('fui-reset', 'fui-BaseMenuItem', 'fui-ContextMenuItem', className)}
    >
      {children}
      {shortcut && <div className="fui-BaseMenuShortcut fui-ContextMenuShortcut">{shortcut}</div>}
    </ContextMenuPrimitive.Item>
  );
};
ContextMenuItem.displayName = 'ContextMenuItem';

// Group
interface ContextMenuGroupProps extends Omit<
  React.ComponentProps<typeof ContextMenuPrimitive.Group>,
  'className' | 'render'
> {
  className?: string;
}
const ContextMenuGroup = (props: ContextMenuGroupProps) => (
  <ContextMenuPrimitive.Group
    {...props}
    className={classNames('fui-BaseMenuGroup', 'fui-ContextMenuGroup', props.className)}
  />
);
ContextMenuGroup.displayName = 'ContextMenuGroup';

// RadioGroup
interface ContextMenuRadioGroupProps extends Omit<
  React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>,
  'className' | 'render'
> {
  className?: string;
}
const ContextMenuRadioGroup = (props: ContextMenuRadioGroupProps) => (
  <ContextMenuPrimitive.RadioGroup
    {...props}
    className={classNames('fui-BaseMenuRadioGroup', 'fui-ContextMenuRadioGroup', props.className)}
  />
);
ContextMenuRadioGroup.displayName = 'ContextMenuRadioGroup';

// RadioItem
interface ContextMenuRadioItemProps extends Omit<
  React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>,
  'className' | 'render'
> {
  className?: string;
}
const ContextMenuRadioItem = (props: ContextMenuRadioItemProps) => {
  const { children, className, ...itemProps } = props;
  return (
    <ContextMenuPrimitive.RadioItem
      {...itemProps}
      className={classNames(
        'fui-BaseMenuItem',
        'fui-BaseMenuRadioItem',
        'fui-ContextMenuItem',
        'fui-ContextMenuRadioItem',
        className,
      )}
    >
      {children}
      <ContextMenuPrimitive.RadioItemIndicator className="fui-BaseMenuItemIndicator fui-ContextMenuItemIndicator">
        <ThickCheckIcon className="fui-BaseMenuItemIndicatorIcon fui-ContextMenuItemIndicatorIcon" />
      </ContextMenuPrimitive.RadioItemIndicator>
    </ContextMenuPrimitive.RadioItem>
  );
};
ContextMenuRadioItem.displayName = 'ContextMenuRadioItem';

// CheckboxItem
type ContextMenuCheckboxItemOwnProps = GetPropDefTypes<typeof contextMenuCheckboxItemPropDefs>;
interface ContextMenuCheckboxItemProps
  extends
    Omit<React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>, 'className' | 'render'>,
    ContextMenuCheckboxItemOwnProps {
  className?: string;
}
const ContextMenuCheckboxItem = (props: ContextMenuCheckboxItemProps) => {
  const { children, className, shortcut, ...itemProps } = props;
  return (
    <ContextMenuPrimitive.CheckboxItem
      {...itemProps}
      className={classNames(
        'fui-BaseMenuItem',
        'fui-BaseMenuCheckboxItem',
        'fui-ContextMenuItem',
        'fui-ContextMenuCheckboxItem',
        className,
      )}
    >
      {children}
      <ContextMenuPrimitive.CheckboxItemIndicator className="fui-BaseMenuItemIndicator fui-ContextMenuItemIndicator">
        <ThickCheckIcon className="fui-BaseMenuItemIndicatorIcon fui-ContextMenuItemIndicatorIcon" />
      </ContextMenuPrimitive.CheckboxItemIndicator>
      {shortcut && <div className="fui-BaseMenuShortcut fui-ContextMenuShortcut">{shortcut}</div>}
    </ContextMenuPrimitive.CheckboxItem>
  );
};
ContextMenuCheckboxItem.displayName = 'ContextMenuCheckboxItem';

// Sub (SubmenuRoot in Base UI)
interface ContextMenuSubProps extends Omit<
  React.ComponentProps<typeof ContextMenuPrimitive.SubmenuRoot>,
  'className'
> {}
const ContextMenuSub: React.FC<ContextMenuSubProps> = (props) => <ContextMenuPrimitive.SubmenuRoot {...props} />;
ContextMenuSub.displayName = 'ContextMenuSub';

// SubTrigger (SubmenuTrigger in Base UI)
interface ContextMenuSubTriggerProps extends Omit<
  React.ComponentProps<typeof ContextMenuPrimitive.SubmenuTrigger>,
  'className' | 'render'
> {
  className?: string;
}
const ContextMenuSubTrigger = (props: ContextMenuSubTriggerProps) => {
  const { className, children, ...subTriggerProps } = props;
  return (
    <ContextMenuPrimitive.SubmenuTrigger
      {...subTriggerProps}
      className={classNames(
        'fui-BaseMenuItem',
        'fui-BaseMenuSubTrigger',
        'fui-ContextMenuItem',
        'fui-ContextMenuSubTrigger',
        className,
      )}
    >
      {children}
      <div className="fui-BaseMenuShortcut fui-ContextMenuShortcut">
        <ThickChevronRightIcon className="fui-BaseMenuSubTriggerIcon fui-ContextMenuSubTriggerIcon" />
      </div>
    </ContextMenuPrimitive.SubmenuTrigger>
  );
};
ContextMenuSubTrigger.displayName = 'ContextMenuSubTrigger';

// SubContent
interface ContextMenuSubContentProps extends Omit<
  React.ComponentProps<typeof ContextMenuPrimitive.Popup>,
  'className' | 'render'
> {
  className?: string;
  container?: React.ComponentProps<typeof ContextMenuPrimitive.Portal>['container'];
  keepMounted?: React.ComponentProps<typeof ContextMenuPrimitive.Portal>['keepMounted'];
  // Positioner props
  sideOffset?: React.ComponentProps<typeof ContextMenuPrimitive.Positioner>['sideOffset'];
  alignOffset?: React.ComponentProps<typeof ContextMenuPrimitive.Positioner>['alignOffset'];
  collisionPadding?: React.ComponentProps<typeof ContextMenuPrimitive.Positioner>['collisionPadding'];
}
const ContextMenuSubContent = (props: ContextMenuSubContentProps) => {
  const {
    className,
    children,
    container,
    keepMounted,
    sideOffset = 2,
    alignOffset = -4,
    collisionPadding = 10,
    ...popupProps
  } = props;
  const { size, color, variant } = React.useContext(ContextMenuContentContext);
  return (
    <ContextMenuPrimitive.Portal container={container} keepMounted={keepMounted}>
      <ContextMenuPrimitive.Positioner
        className="fui-ContextMenuPositioner"
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        collisionPadding={collisionPadding}
      >
        <Theme asChild>
          <ContextMenuPrimitive.Popup
            data-accent-color={color}
            {...popupProps}
            className={classNames(
              'fui-BaseMenuContent',
              'fui-BaseMenuSubContent',
              'fui-ContextMenuContent',
              'fui-ContextMenuSubContent',
              `fui-variant-${variant}`,
              className,
              `fui-r-size-${size}`,
            )}
          >
            <ScrollArea type="auto">
              <div className={classNames('fui-BaseMenuViewport', 'fui-ContextMenuViewport')}>{children}</div>
            </ScrollArea>
          </ContextMenuPrimitive.Popup>
        </Theme>
      </ContextMenuPrimitive.Positioner>
    </ContextMenuPrimitive.Portal>
  );
};
ContextMenuSubContent.displayName = 'ContextMenuSubContent';

// Separator
interface ContextMenuSeparatorProps extends Omit<
  React.ComponentProps<typeof ContextMenuPrimitive.Separator>,
  'className' | 'render'
> {
  className?: string;
}
const ContextMenuSeparator = (props: ContextMenuSeparatorProps) => (
  <ContextMenuPrimitive.Separator
    {...props}
    className={classNames('fui-BaseMenuSeparator', 'fui-ContextMenuSeparator', props.className)}
  />
);
ContextMenuSeparator.displayName = 'ContextMenuSeparator';

export {
  ContextMenuCheckboxItem as CheckboxItem,
  ContextMenuContent as Content,
  ContextMenuGroup as Group,
  ContextMenuGroupLabel as GroupLabel,
  ContextMenuItem as Item,
  ContextMenuRadioGroup as RadioGroup,
  ContextMenuRadioItem as RadioItem,
  ContextMenuRoot as Root,
  ContextMenuSeparator as Separator,
  ContextMenuSub as Sub,
  ContextMenuSubContent as SubContent,
  ContextMenuSubTrigger as SubTrigger,
  ContextMenuTrigger as Trigger,
};

export type {
  ContextMenuCheckboxItemProps as CheckboxItemProps,
  ContextMenuContentProps as ContentProps,
  ContextMenuGroupLabelProps as GroupLabelProps,
  ContextMenuGroupProps as GroupProps,
  ContextMenuItemProps as ItemProps,
  ContextMenuRadioGroupProps as RadioGroupProps,
  ContextMenuRadioItemProps as RadioItemProps,
  ContextMenuRootProps as RootProps,
  ContextMenuSeparatorProps as SeparatorProps,
  ContextMenuSubContentProps as SubContentProps,
  ContextMenuSubProps as SubProps,
  ContextMenuSubTriggerProps as SubTriggerProps,
  ContextMenuTriggerProps as TriggerProps,
};
