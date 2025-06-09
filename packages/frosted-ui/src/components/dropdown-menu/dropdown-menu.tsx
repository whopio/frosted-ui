'use client';

import classNames from 'classnames';
import { DropdownMenu as DropdownMenuPrimitive, Slot } from 'radix-ui';
import * as React from 'react';
import { ThickCheckIcon, ThickChevronRightIcon } from '../../icons';
import { Theme, useThemeContext } from '../../theme';
import { ScrollArea } from '../scroll-area';
import {
  dropdownMenuCheckboxItemPropDefs,
  dropdownMenuContentPropDefs,
  dropdownMenuItemPropDefs,
} from './dropdown-menu.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';

interface DropdownMenuRootProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Root> {}
const DropdownMenuRoot: React.FC<DropdownMenuRootProps> = (props) => <DropdownMenuPrimitive.Root {...props} />;
DropdownMenuRoot.displayName = 'DropdownMenuRoot';

interface DropdownMenuTriggerProps
  extends Omit<React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>, 'asChild'> {}

const DropdownMenuTrigger = (props: DropdownMenuTriggerProps) => <DropdownMenuPrimitive.Trigger {...props} asChild />;
DropdownMenuTrigger.displayName = 'DropdownMenuTrigger';

type DropdownMenuContentOwnProps = GetPropDefTypes<typeof dropdownMenuContentPropDefs>;
type DropdownMenuContentContextValue = DropdownMenuContentOwnProps;
const DropdownMenuContentContext = React.createContext<DropdownMenuContentContextValue>({});

interface DropdownMenuContentProps
  extends PropsWithoutColor<typeof DropdownMenuPrimitive.Content>,
    DropdownMenuContentContextValue {
  container?: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>['container'];
}

const DropdownMenuContent = (props: DropdownMenuContentProps) => {
  const themeContext = useThemeContext();
  const {
    className,
    children,
    size = dropdownMenuContentPropDefs.size.default,
    highContrast = dropdownMenuContentPropDefs.highContrast.default,
    color = dropdownMenuItemPropDefs.color.default,
    container,
    forceMount,
    ...contentProps
  } = props;
  const resolvedColor = color ?? themeContext.accentColor;
  return (
    <DropdownMenuPrimitive.Portal container={container} forceMount={forceMount}>
      <Theme asChild>
        <DropdownMenuPrimitive.Content
          data-accent-color={resolvedColor}
          align="start"
          sideOffset={4}
          collisionPadding={10}
          {...contentProps}
          className={classNames(
            'fui-PopperContent',
            'fui-BaseMenuContent',
            'fui-DropdownMenuContent',
            className,
            `fui-r-size-${size}`,
            { 'fui-high-contrast': highContrast },
          )}
        >
          <ScrollArea type="auto">
            <div className={classNames('fui-BaseMenuViewport', 'fui-DropdownMenuViewport')}>
              <DropdownMenuContentContext.Provider
                value={React.useMemo(
                  () => ({ size, color: resolvedColor, highContrast }),
                  [size, resolvedColor, highContrast],
                )}
              >
                {children}
              </DropdownMenuContentContext.Provider>
            </div>
          </ScrollArea>
        </DropdownMenuPrimitive.Content>
      </Theme>
    </DropdownMenuPrimitive.Portal>
  );
};
DropdownMenuContent.displayName = 'DropdownMenuContent';

interface DropdownMenuLabelProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Label> {}

const DropdownMenuLabel = (props: DropdownMenuLabelProps) => (
  <DropdownMenuPrimitive.Label
    {...props}
    className={classNames('fui-BaseMenuLabel', 'fui-DropdownMenuLabel', props.className)}
  />
);
DropdownMenuLabel.displayName = 'DropdownMenuLabel';

type DropdownMenuItemOwnProps = GetPropDefTypes<typeof dropdownMenuItemPropDefs>;
interface DropdownMenuItemProps
  extends PropsWithoutColor<typeof DropdownMenuPrimitive.Item>,
    DropdownMenuItemOwnProps {}

const DropdownMenuItem = (props: DropdownMenuItemProps) => {
  const { className, children, color = dropdownMenuItemPropDefs.color.default, shortcut, ...itemProps } = props;
  return (
    <DropdownMenuPrimitive.Item
      data-accent-color={color}
      {...itemProps}
      className={classNames('fui-reset', 'fui-BaseMenuItem', 'fui-DropdownMenuItem', className)}
    >
      <Slot.Slottable>{children}</Slot.Slottable>
      {shortcut && <div className="fui-BaseMenuShortcut fui-DropdownMenuShortcut">{shortcut}</div>}
    </DropdownMenuPrimitive.Item>
  );
};
DropdownMenuItem.displayName = 'DropdownMenuItem';

interface DropdownMenuGroupProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Group> {}

const DropdownMenuGroup = (props: DropdownMenuGroupProps) => (
  <DropdownMenuPrimitive.Group
    {...props}
    className={classNames('fui-BaseMenuGroup', 'fui-DropdownMenuGroup', props.className)}
  />
);
DropdownMenuGroup.displayName = 'DropdownMenuGroup';

interface DropdownMenuRadioGroupProps extends React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup> {}

const DropdownMenuRadioGroup = (props: DropdownMenuRadioGroupProps) => (
  <DropdownMenuPrimitive.RadioGroup
    {...props}
    className={classNames('fui-BaseMenuRadioGroup', 'fui-DropdownMenuRadioGroup', props.className)}
  />
);
DropdownMenuRadioGroup.displayName = 'DropdownMenuRadioGroup';

interface DropdownMenuRadioItemProps extends React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem> {}

const DropdownMenuRadioItem = (props: DropdownMenuRadioItemProps) => {
  const { children, className, ...itemProps } = props;
  return (
    <DropdownMenuPrimitive.RadioItem
      {...itemProps}
      className={classNames(
        'fui-BaseMenuItem',
        'fui-BaseMenuRadioItem',
        'fui-DropdownMenuItem',
        'fui-DropdownMenuRadioItem',
        className,
      )}
    >
      <Slot.Slottable>{children}</Slot.Slottable>
      <DropdownMenuPrimitive.ItemIndicator className="fui-BaseMenuItemIndicator fui-DropdownMenuItemIndicator">
        <ThickCheckIcon className="fui-BaseMenuItemIndicatorIcon fui-DropdownMenuItemIndicatorIcon" />
      </DropdownMenuPrimitive.ItemIndicator>
    </DropdownMenuPrimitive.RadioItem>
  );
};
DropdownMenuRadioItem.displayName = 'DropdownMenuRadioItem';

type DropdownMenuCheckboxItemOwnProps = GetPropDefTypes<typeof dropdownMenuCheckboxItemPropDefs>;
interface DropdownMenuCheckboxItemProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>,
    DropdownMenuCheckboxItemOwnProps {}

const DropdownMenuCheckboxItem = (props: DropdownMenuCheckboxItemProps) => {
  const { children, className, shortcut, ...itemProps } = props;
  return (
    <DropdownMenuPrimitive.CheckboxItem
      {...itemProps}
      className={classNames(
        'fui-BaseMenuItem',
        'fui-BaseMenuCheckboxItem',
        'fui-DropdownMenuItem',
        'fui-DropdownMenuCheckboxItem',
        className,
      )}
    >
      <Slot.Slottable>{children}</Slot.Slottable>
      <DropdownMenuPrimitive.ItemIndicator className="fui-BaseMenuItemIndicator fui-DropdownMenuItemIndicator">
        <ThickCheckIcon className="fui-BaseMenuItemIndicatorIcon fui-DropdownMenuItemIndicatorIcon" />
      </DropdownMenuPrimitive.ItemIndicator>
      {shortcut && <div className="fui-BaseMenuShortcut fui-DropdownMenuShortcut">{shortcut}</div>}
    </DropdownMenuPrimitive.CheckboxItem>
  );
};
DropdownMenuCheckboxItem.displayName = 'DropdownMenuCheckboxItem';

interface DropdownMenuSubProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Sub> {}
const DropdownMenuSub: React.FC<DropdownMenuSubProps> = (props) => <DropdownMenuPrimitive.Sub {...props} />;
DropdownMenuSub.displayName = 'DropdownMenuSub';

interface DropdownMenuSubTriggerProps extends React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> {}

const DropdownMenuSubTrigger = (props: DropdownMenuSubTriggerProps) => {
  const { className, children, ...subTriggerProps } = props;
  return (
    <DropdownMenuPrimitive.SubTrigger
      {...subTriggerProps}
      className={classNames(
        'fui-BaseMenuItem',
        'fui-BaseMenuSubTrigger',
        'fui-DropdownMenuItem',
        'fui-DropdownMenuSubTrigger',
        className,
      )}
    >
      <Slot.Slottable>{children}</Slot.Slottable>
      <div className="fui-BaseMenuShortcut fui-DropdownMenuShortcut">
        <ThickChevronRightIcon className="fui-BaseMenuSubTriggerIcon fui-DropdownMenuSubTriggerIcon" />
      </div>
    </DropdownMenuPrimitive.SubTrigger>
  );
};
DropdownMenuSubTrigger.displayName = 'DropdownMenuSubTrigger';

interface DropdownMenuSubContentProps extends React.ComponentProps<typeof DropdownMenuPrimitive.SubContent> {
  container?: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>['container'];
}

const DropdownMenuSubContent = (props: DropdownMenuSubContentProps) => {
  const { className, children, container, forceMount, ...subContentProps } = props;
  const { size, color, highContrast } = React.useContext(DropdownMenuContentContext);
  return (
    <DropdownMenuPrimitive.Portal container={container} forceMount={forceMount}>
      <Theme asChild>
        <DropdownMenuPrimitive.SubContent
          data-accent-color={color}
          alignOffset={-4}
          sideOffset={2}
          collisionPadding={10}
          {...subContentProps}
          className={classNames(
            'fui-PopperContent',
            'fui-BaseMenuContent',
            'fui-BaseMenuSubContent',
            'fui-DropdownMenuContent',
            'fui-DropdownMenuSubContent',
            className,
            `fui-r-size-${size}`,
            { 'fui-high-contrast': highContrast },
          )}
        >
          <ScrollArea type="auto">
            <div className={classNames('fui-BaseMenuViewport', 'fui-DropdownMenuViewport')}>{children}</div>
          </ScrollArea>
        </DropdownMenuPrimitive.SubContent>
      </Theme>
    </DropdownMenuPrimitive.Portal>
  );
};
DropdownMenuSubContent.displayName = 'DropdownMenuSubContent';

interface DropdownMenuSeparatorProps extends React.ComponentProps<typeof DropdownMenuPrimitive.Separator> {}

const DropdownMenuSeparator = (props: DropdownMenuSeparatorProps) => (
  <DropdownMenuPrimitive.Separator
    {...props}
    className={classNames('fui-BaseMenuSeparator', 'fui-DropdownMenuSeparator', props.className)}
  />
);
DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';

export {
  DropdownMenuCheckboxItem as CheckboxItem,
  DropdownMenuContent as Content,
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
