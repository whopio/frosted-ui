'use client';

import { Menu as MenuPrimitive } from '@base-ui/react/menu';
import classNames from 'classnames';
import * as React from 'react';
import { ThickCheckIcon, ThickChevronRightIcon } from '../../icons';
import { Theme, useThemeContext } from '../../theme';
import { ScrollArea } from '../scroll-area';
import {
  dropdownMenuCheckboxItemPropDefs,
  dropdownMenuContentPropDefs,
  dropdownMenuItemPropDefs,
} from './dropdown-menu.props';

import type { GetPropDefTypes } from '../../helpers';

// Re-export createHandle for detached triggers
const createHandle = MenuPrimitive.createHandle;

// Types from Base UI
type RootProps = React.ComponentProps<typeof MenuPrimitive.Root>;

// Handle type - extracts the return type of createHandle with a generic
type DropdownMenuHandle<T = unknown> = ReturnType<typeof MenuPrimitive.createHandle<T>>;

// Root - generic to infer payload type from handle
interface DropdownMenuRootProps<T = unknown> extends Omit<RootProps, 'className' | 'render' | 'children' | 'handle'> {
  children?: React.ReactNode | ((props: { payload: T | undefined }) => React.ReactNode);
  handle?: DropdownMenuHandle<T>;
}
function DropdownMenuRoot<T = unknown>(props: DropdownMenuRootProps<T>) {
  return <MenuPrimitive.Root {...(props as RootProps)} />;
}
DropdownMenuRoot.displayName = 'DropdownMenuRoot';

// Trigger - generic to infer payload type from handle
interface DropdownMenuTriggerProps<T = unknown> extends Omit<
  React.ComponentProps<typeof MenuPrimitive.Trigger>,
  'render' | 'className' | 'handle' | 'payload'
> {
  className?: string;
  handle?: DropdownMenuHandle<T>;
  payload?: T;
}
function DropdownMenuTrigger<T = unknown>({ children, ...props }: DropdownMenuTriggerProps<T>) {
  return (
    <MenuPrimitive.Trigger
      {...(props as React.ComponentProps<typeof MenuPrimitive.Trigger>)}
      render={children as React.ReactElement}
    />
  );
}
DropdownMenuTrigger.displayName = 'DropdownMenuTrigger';

type DropdownMenuContentOwnProps = GetPropDefTypes<typeof dropdownMenuContentPropDefs>;
type DropdownMenuContentContextValue = DropdownMenuContentOwnProps;
const DropdownMenuContentContext = React.createContext<DropdownMenuContentContextValue>({});

interface DropdownMenuContentProps
  extends
    Omit<React.ComponentProps<typeof MenuPrimitive.Popup>, 'className' | 'render'>,
    DropdownMenuContentContextValue {
  className?: string;
  container?: React.ComponentProps<typeof MenuPrimitive.Portal>['container'];
  keepMounted?: React.ComponentProps<typeof MenuPrimitive.Portal>['keepMounted'];
  // Positioner props
  side?: React.ComponentProps<typeof MenuPrimitive.Positioner>['side'];
  sideOffset?: React.ComponentProps<typeof MenuPrimitive.Positioner>['sideOffset'];
  align?: React.ComponentProps<typeof MenuPrimitive.Positioner>['align'];
  alignOffset?: React.ComponentProps<typeof MenuPrimitive.Positioner>['alignOffset'];
  collisionPadding?: React.ComponentProps<typeof MenuPrimitive.Positioner>['collisionPadding'];
}

const DropdownMenuContent = (props: DropdownMenuContentProps) => {
  const themeContext = useThemeContext();
  const {
    className,
    children,
    size = dropdownMenuContentPropDefs.size.default,
    color = dropdownMenuItemPropDefs.color.default,
    variant = dropdownMenuContentPropDefs.variant.default,
    container,
    keepMounted,
    // Positioner props
    side = 'bottom',
    sideOffset = 4,
    align = 'start',
    alignOffset,
    collisionPadding = 10,
    ...popupProps
  } = props;
  const resolvedColor = color ?? themeContext.accentColor;
  return (
    <MenuPrimitive.Portal container={container} keepMounted={keepMounted}>
      <MenuPrimitive.Positioner
        className="fui-DropdownMenuPositioner"
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        collisionPadding={collisionPadding}
      >
        <Theme asChild>
          <MenuPrimitive.Popup
            data-accent-color={resolvedColor}
            {...popupProps}
            className={classNames(
              'fui-PopperContent',
              'fui-BaseMenuContent',
              'fui-DropdownMenuContent',
              `fui-variant-${variant}`,
              className,
              `fui-r-size-${size}`,
            )}
          >
            <ScrollArea type="auto">
              <div className={classNames('fui-BaseMenuViewport', 'fui-DropdownMenuViewport')}>
                <DropdownMenuContentContext.Provider
                  value={React.useMemo(() => ({ size, color: resolvedColor, variant }), [size, resolvedColor, variant])}
                >
                  {children}
                </DropdownMenuContentContext.Provider>
              </div>
            </ScrollArea>
          </MenuPrimitive.Popup>
        </Theme>
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
};
DropdownMenuContent.displayName = 'DropdownMenuContent';

interface DropdownMenuLabelProps extends Omit<
  React.ComponentProps<typeof MenuPrimitive.GroupLabel>,
  'className' | 'render'
> {
  className?: string;
}

const DropdownMenuLabel = (props: DropdownMenuLabelProps) => (
  <MenuPrimitive.GroupLabel
    {...props}
    className={classNames('fui-BaseMenuLabel', 'fui-DropdownMenuLabel', props.className)}
  />
);
DropdownMenuLabel.displayName = 'DropdownMenuLabel';

type DropdownMenuItemOwnProps = GetPropDefTypes<typeof dropdownMenuItemPropDefs>;
interface DropdownMenuItemProps
  extends Omit<React.ComponentProps<typeof MenuPrimitive.Item>, 'className' | 'color'>, DropdownMenuItemOwnProps {
  className?: string;
}

const DropdownMenuItem = (props: DropdownMenuItemProps) => {
  const { className, children, color = dropdownMenuItemPropDefs.color.default, shortcut, ...itemProps } = props;
  return (
    <MenuPrimitive.Item
      data-accent-color={color}
      {...itemProps}
      className={classNames('fui-reset', 'fui-BaseMenuItem', 'fui-DropdownMenuItem', className)}
    >
      {children}
      {shortcut && <div className="fui-BaseMenuShortcut fui-DropdownMenuShortcut">{shortcut}</div>}
    </MenuPrimitive.Item>
  );
};
DropdownMenuItem.displayName = 'DropdownMenuItem';

interface DropdownMenuGroupProps extends Omit<
  React.ComponentProps<typeof MenuPrimitive.Group>,
  'className' | 'render'
> {
  className?: string;
}

const DropdownMenuGroup = (props: DropdownMenuGroupProps) => (
  <MenuPrimitive.Group
    {...props}
    className={classNames('fui-BaseMenuGroup', 'fui-DropdownMenuGroup', props.className)}
  />
);
DropdownMenuGroup.displayName = 'DropdownMenuGroup';

interface DropdownMenuRadioGroupProps extends Omit<
  React.ComponentProps<typeof MenuPrimitive.RadioGroup>,
  'className' | 'render'
> {
  className?: string;
}

const DropdownMenuRadioGroup = (props: DropdownMenuRadioGroupProps) => (
  <MenuPrimitive.RadioGroup
    {...props}
    className={classNames('fui-BaseMenuRadioGroup', 'fui-DropdownMenuRadioGroup', props.className)}
  />
);
DropdownMenuRadioGroup.displayName = 'DropdownMenuRadioGroup';

interface DropdownMenuRadioItemProps extends Omit<
  React.ComponentProps<typeof MenuPrimitive.RadioItem>,
  'className' | 'render'
> {
  className?: string;
}

const DropdownMenuRadioItem = (props: DropdownMenuRadioItemProps) => {
  const { children, className, ...itemProps } = props;
  return (
    <MenuPrimitive.RadioItem
      {...itemProps}
      className={classNames(
        'fui-BaseMenuItem',
        'fui-BaseMenuRadioItem',
        'fui-DropdownMenuItem',
        'fui-DropdownMenuRadioItem',
        className,
      )}
    >
      {children}
      <MenuPrimitive.RadioItemIndicator className="fui-BaseMenuItemIndicator fui-DropdownMenuItemIndicator">
        <ThickCheckIcon className="fui-BaseMenuItemIndicatorIcon fui-DropdownMenuItemIndicatorIcon" />
      </MenuPrimitive.RadioItemIndicator>
    </MenuPrimitive.RadioItem>
  );
};
DropdownMenuRadioItem.displayName = 'DropdownMenuRadioItem';

type DropdownMenuCheckboxItemOwnProps = GetPropDefTypes<typeof dropdownMenuCheckboxItemPropDefs>;
interface DropdownMenuCheckboxItemProps
  extends
    Omit<React.ComponentProps<typeof MenuPrimitive.CheckboxItem>, 'className' | 'render'>,
    DropdownMenuCheckboxItemOwnProps {
  className?: string;
}

const DropdownMenuCheckboxItem = (props: DropdownMenuCheckboxItemProps) => {
  const { children, className, shortcut, ...itemProps } = props;
  return (
    <MenuPrimitive.CheckboxItem
      {...itemProps}
      className={classNames(
        'fui-BaseMenuItem',
        'fui-BaseMenuCheckboxItem',
        'fui-DropdownMenuItem',
        'fui-DropdownMenuCheckboxItem',
        className,
      )}
    >
      {children}
      <MenuPrimitive.CheckboxItemIndicator className="fui-BaseMenuItemIndicator fui-DropdownMenuItemIndicator">
        <ThickCheckIcon className="fui-BaseMenuItemIndicatorIcon fui-DropdownMenuItemIndicatorIcon" />
      </MenuPrimitive.CheckboxItemIndicator>
      {shortcut && <div className="fui-BaseMenuShortcut fui-DropdownMenuShortcut">{shortcut}</div>}
    </MenuPrimitive.CheckboxItem>
  );
};
DropdownMenuCheckboxItem.displayName = 'DropdownMenuCheckboxItem';

interface DropdownMenuSubProps extends Omit<React.ComponentProps<typeof MenuPrimitive.SubmenuRoot>, 'className'> {}
const DropdownMenuSub: React.FC<DropdownMenuSubProps> = (props) => <MenuPrimitive.SubmenuRoot {...props} />;
DropdownMenuSub.displayName = 'DropdownMenuSub';

interface DropdownMenuSubTriggerProps extends Omit<
  React.ComponentProps<typeof MenuPrimitive.SubmenuTrigger>,
  'className' | 'render'
> {
  className?: string;
}

const DropdownMenuSubTrigger = (props: DropdownMenuSubTriggerProps) => {
  const { className, children, ...subTriggerProps } = props;
  return (
    <MenuPrimitive.SubmenuTrigger
      {...subTriggerProps}
      className={classNames(
        'fui-BaseMenuItem',
        'fui-BaseMenuSubTrigger',
        'fui-DropdownMenuItem',
        'fui-DropdownMenuSubTrigger',
        className,
      )}
    >
      {children}
      <div className="fui-BaseMenuShortcut fui-DropdownMenuShortcut">
        <ThickChevronRightIcon className="fui-BaseMenuSubTriggerIcon fui-DropdownMenuSubTriggerIcon" />
      </div>
    </MenuPrimitive.SubmenuTrigger>
  );
};
DropdownMenuSubTrigger.displayName = 'DropdownMenuSubTrigger';

interface DropdownMenuSubContentProps extends Omit<
  React.ComponentProps<typeof MenuPrimitive.Popup>,
  'className' | 'render'
> {
  className?: string;
  container?: React.ComponentProps<typeof MenuPrimitive.Portal>['container'];
  keepMounted?: React.ComponentProps<typeof MenuPrimitive.Portal>['keepMounted'];
  // Positioner props
  sideOffset?: React.ComponentProps<typeof MenuPrimitive.Positioner>['sideOffset'];
  alignOffset?: React.ComponentProps<typeof MenuPrimitive.Positioner>['alignOffset'];
  collisionPadding?: React.ComponentProps<typeof MenuPrimitive.Positioner>['collisionPadding'];
}

const DropdownMenuSubContent = (props: DropdownMenuSubContentProps) => {
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
  const { size, color, variant } = React.useContext(DropdownMenuContentContext);
  return (
    <MenuPrimitive.Portal container={container} keepMounted={keepMounted}>
      <MenuPrimitive.Positioner
        className="fui-DropdownMenuPositioner"
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        collisionPadding={collisionPadding}
      >
        <Theme asChild>
          <MenuPrimitive.Popup
            data-accent-color={color}
            {...popupProps}
            className={classNames(
              'fui-PopperContent',
              'fui-BaseMenuContent',
              'fui-BaseMenuSubContent',
              'fui-DropdownMenuContent',
              'fui-DropdownMenuSubContent',
              `fui-variant-${variant}`,
              className,
              `fui-r-size-${size}`,
            )}
          >
            <ScrollArea type="auto">
              <div className={classNames('fui-BaseMenuViewport', 'fui-DropdownMenuViewport')}>{children}</div>
            </ScrollArea>
          </MenuPrimitive.Popup>
        </Theme>
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
};
DropdownMenuSubContent.displayName = 'DropdownMenuSubContent';

interface DropdownMenuSeparatorProps extends Omit<
  React.ComponentProps<typeof MenuPrimitive.Separator>,
  'className' | 'render'
> {
  className?: string;
}

const DropdownMenuSeparator = (props: DropdownMenuSeparatorProps) => (
  <MenuPrimitive.Separator
    {...props}
    className={classNames('fui-BaseMenuSeparator', 'fui-DropdownMenuSeparator', props.className)}
  />
);
DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';

export {
  DropdownMenuCheckboxItem as CheckboxItem,
  DropdownMenuContent as Content,
  createHandle,
  DropdownMenuGroup as Group,
  DropdownMenuItem as Item,
  DropdownMenuLabel as Label,
  DropdownMenuRadioGroup as RadioGroup,
  DropdownMenuRadioItem as RadioItem,
  DropdownMenuRoot as Root,
  DropdownMenuSeparator as Separator,
  DropdownMenuSub as Sub,
  DropdownMenuSubContent as SubContent,
  DropdownMenuSubTrigger as SubTrigger,
  DropdownMenuTrigger as Trigger,
};

export type {
  DropdownMenuCheckboxItemProps as CheckboxItemProps,
  DropdownMenuContentProps as ContentProps,
  DropdownMenuGroupProps as GroupProps,
  DropdownMenuHandle as Handle,
  DropdownMenuItemProps as ItemProps,
  DropdownMenuLabelProps as LabelProps,
  DropdownMenuRadioGroupProps as RadioGroupProps,
  DropdownMenuRadioItemProps as RadioItemProps,
  DropdownMenuRootProps as RootProps,
  DropdownMenuSeparatorProps as SeparatorProps,
  DropdownMenuSubContentProps as SubContentProps,
  DropdownMenuSubProps as SubProps,
  DropdownMenuSubTriggerProps as SubTriggerProps,
  DropdownMenuTriggerProps as TriggerProps,
};
