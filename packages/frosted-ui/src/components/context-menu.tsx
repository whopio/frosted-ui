'use client';

import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { Slottable } from '@radix-ui/react-slot';
import classNames from 'classnames';
import * as React from 'react';
import { withBreakpoints } from '../helpers';
import { ThickCheckIcon, ThickChevronRightIcon } from '../icons';
import { Theme, useThemeContext } from '../theme';
import {
  contextMenuCheckboxItemPropDefs,
  contextMenuContentPropDefs,
  contextMenuItemPropDefs,
} from './context-menu.props';
import { ScrollArea } from './scroll-area';

import type { GetPropDefTypes, PropsWithoutRefOrColor } from '../helpers';

interface ContextMenuRootProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Root> {}
const ContextMenuRoot: React.FC<ContextMenuRootProps> = (props) => (
  <ContextMenuPrimitive.Root {...props} />
);
ContextMenuRoot.displayName = 'ContextMenuRoot';

type ContextMenuTriggerElement = React.ElementRef<
  typeof ContextMenuPrimitive.Trigger
>;
interface ContextMenuTriggerProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Trigger>,
    'asChild'
  > {}
const ContextMenuTrigger = React.forwardRef<
  ContextMenuTriggerElement,
  ContextMenuTriggerProps
>((props, forwardedRef) => (
  <ContextMenuPrimitive.Trigger {...props} ref={forwardedRef} asChild />
));
ContextMenuTrigger.displayName = 'ContextMenuTrigger';

type ContextMenuContentOwnProps = GetPropDefTypes<
  typeof contextMenuContentPropDefs
>;
type ContextMenuContentContextValue = ContextMenuContentOwnProps;
const ContextMenuContentContext =
  React.createContext<ContextMenuContentContextValue>({});
type ContextMenuContentElement = React.ElementRef<
  typeof ContextMenuPrimitive.Content
>;
interface ContextMenuContentProps
  extends PropsWithoutRefOrColor<typeof ContextMenuPrimitive.Content>,
    ContextMenuContentContextValue {
  container?: React.ComponentProps<
    typeof ContextMenuPrimitive.Portal
  >['container'];
}
const ContextMenuContent = React.forwardRef<
  ContextMenuContentElement,
  ContextMenuContentProps
>((props, forwardedRef) => {
  const themeContext = useThemeContext();
  const {
    className,
    children,
    size = contextMenuContentPropDefs.size.default,
    color = contextMenuContentPropDefs.color.default,
    highContrast = contextMenuContentPropDefs.highContrast.default,
    container,
    forceMount,
    ...contentProps
  } = props;
  const resolvedColor = color ?? themeContext.accentColor;
  return (
    <ContextMenuPrimitive.Portal container={container} forceMount={forceMount}>
      <Theme asChild>
        <ContextMenuPrimitive.Content
          data-accent-color={resolvedColor}
          alignOffset={-Number(size) * 4}
          collisionPadding={10}
          {...contentProps}
          ref={forwardedRef}
          className={classNames(
            'fui-PopperContent',
            'fui-BaseMenuContent',
            'fui-ContextMenuContent',
            className,
            withBreakpoints(size, 'fui-r-size'),
            { 'fui-high-contrast': highContrast },
          )}
        >
          <ScrollArea type="auto">
            <div
              className={classNames(
                'fui-BaseMenuViewport',
                'fui-ContextMenuViewport',
              )}
            >
              <ContextMenuContentContext.Provider
                value={React.useMemo(
                  () => ({ size, color: resolvedColor, highContrast }),
                  [size, resolvedColor, highContrast],
                )}
              >
                {children}
              </ContextMenuContentContext.Provider>
            </div>
          </ScrollArea>
        </ContextMenuPrimitive.Content>
      </Theme>
    </ContextMenuPrimitive.Portal>
  );
});
ContextMenuContent.displayName = 'ContextMenuContent';

type ContextMenuLabelElement = React.ElementRef<
  typeof ContextMenuPrimitive.Label
>;
interface ContextMenuLabelProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> {}
const ContextMenuLabel = React.forwardRef<
  ContextMenuLabelElement,
  ContextMenuLabelProps
>((props, forwardedRef) => (
  <ContextMenuPrimitive.Label
    {...props}
    ref={forwardedRef}
    className={classNames(
      'fui-BaseMenuLabel',
      'fui-ContextMenuLabel',
      props.className,
    )}
  />
));
ContextMenuLabel.displayName = 'ContextMenuLabel';

type ContextMenuItemElement = React.ElementRef<
  typeof ContextMenuPrimitive.Item
>;
type ContextMenuItemOwnProps = GetPropDefTypes<typeof contextMenuItemPropDefs>;
interface ContextMenuItemProps
  extends PropsWithoutRefOrColor<typeof ContextMenuPrimitive.Item>,
    ContextMenuItemOwnProps {}
const ContextMenuItem = React.forwardRef<
  ContextMenuItemElement,
  ContextMenuItemProps
>((props, forwardedRef) => {
  const {
    className,
    children,
    color = contextMenuItemPropDefs.color.default,
    shortcut,
    ...itemProps
  } = props;
  return (
    <ContextMenuPrimitive.Item
      data-accent-color={color}
      {...itemProps}
      ref={forwardedRef}
      className={classNames(
        'fui-reset',
        'fui-BaseMenuItem',
        'fui-ContextMenuItem',
        className,
      )}
    >
      <Slottable>{children}</Slottable>
      {shortcut && (
        <div className="fui-BaseMenuShortcut fui-ContextMenuShortcut">
          {shortcut}
        </div>
      )}
    </ContextMenuPrimitive.Item>
  );
});
ContextMenuItem.displayName = 'ContextMenuItem';

type ContextMenuGroupElement = React.ElementRef<
  typeof ContextMenuPrimitive.Group
>;
interface ContextMenuGroupProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Group> {}
const ContextMenuGroup = React.forwardRef<
  ContextMenuGroupElement,
  ContextMenuGroupProps
>((props, forwardedRef) => (
  <ContextMenuPrimitive.Group
    {...props}
    ref={forwardedRef}
    className={classNames(
      'fui-BaseMenuGroup',
      'fui-ContextMenuGroup',
      props.className,
    )}
  />
));
ContextMenuGroup.displayName = 'ContextMenuGroup';

type ContextMenuRadioGroupElement = React.ElementRef<
  typeof ContextMenuPrimitive.RadioGroup
>;
interface ContextMenuRadioGroupProps
  extends React.ComponentPropsWithoutRef<
    typeof ContextMenuPrimitive.RadioGroup
  > {}
const ContextMenuRadioGroup = React.forwardRef<
  ContextMenuRadioGroupElement,
  ContextMenuRadioGroupProps
>((props, forwardedRef) => (
  <ContextMenuPrimitive.RadioGroup
    {...props}
    ref={forwardedRef}
    className={classNames(
      'fui-BaseMenuRadioGroup',
      'fui-ContextMenuRadioGroup',
      props.className,
    )}
  />
));
ContextMenuRadioGroup.displayName = 'ContextMenuRadioGroup';

type ContextMenuRadioItemElement = React.ElementRef<
  typeof ContextMenuPrimitive.RadioItem
>;
interface ContextMenuRadioItemProps
  extends React.ComponentPropsWithoutRef<
    typeof ContextMenuPrimitive.RadioItem
  > {}
const ContextMenuRadioItem = React.forwardRef<
  ContextMenuRadioItemElement,
  ContextMenuRadioItemProps
>((props, forwardedRef) => {
  const { children, className, ...itemProps } = props;
  return (
    <ContextMenuPrimitive.RadioItem
      {...itemProps}
      ref={forwardedRef}
      className={classNames(
        'fui-BaseMenuItem',
        'fui-BaseMenuRadioItem',
        'fui-ContextMenuItem',
        'fui-ContextMenuRadioItem',
        className,
      )}
    >
      <Slottable>{children}</Slottable>
      <ContextMenuPrimitive.ItemIndicator className="fui-BaseMenuItemIndicator fui-ContextMenuItemIndicator">
        <ThickCheckIcon className="fui-BaseMenuItemIndicatorIcon fui-ContextMenuItemIndicatorIcon" />
      </ContextMenuPrimitive.ItemIndicator>
    </ContextMenuPrimitive.RadioItem>
  );
});
ContextMenuRadioItem.displayName = 'ContextMenuRadioItem';

type ContextMenuCheckboxItemElement = React.ElementRef<
  typeof ContextMenuPrimitive.CheckboxItem
>;
type ContextMenuCheckboxItemOwnProps = GetPropDefTypes<
  typeof contextMenuCheckboxItemPropDefs
>;
interface ContextMenuCheckboxItemProps
  extends React.ComponentPropsWithoutRef<
      typeof ContextMenuPrimitive.CheckboxItem
    >,
    ContextMenuCheckboxItemOwnProps {}
const ContextMenuCheckboxItem = React.forwardRef<
  ContextMenuCheckboxItemElement,
  ContextMenuCheckboxItemProps
>((props, forwardedRef) => {
  const { children, className, shortcut, ...itemProps } = props;
  return (
    <ContextMenuPrimitive.CheckboxItem
      {...itemProps}
      ref={forwardedRef}
      className={classNames(
        'fui-BaseMenuItem',
        'fui-BaseMenuCheckboxItem',
        'fui-ContextMenuItem',
        'fui-ContextMenuCheckboxItem',
        className,
      )}
    >
      <Slottable>{children}</Slottable>
      <ContextMenuPrimitive.ItemIndicator className="fui-BaseMenuItemIndicator fui-ContextMenuItemIndicator">
        <ThickCheckIcon className="fui-BaseMenuItemIndicatorIcon fui-ContextMenuItemIndicatorIcon" />
      </ContextMenuPrimitive.ItemIndicator>
      {shortcut && (
        <div className="fui-BaseMenuShortcut fui-ContextMenuShortcut">
          {shortcut}
        </div>
      )}
    </ContextMenuPrimitive.CheckboxItem>
  );
});
ContextMenuCheckboxItem.displayName = 'ContextMenuCheckboxItem';

interface ContextMenuSubProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Sub> {}
const ContextMenuSub: React.FC<ContextMenuSubProps> = (props) => (
  <ContextMenuPrimitive.Sub {...props} />
);
ContextMenuSub.displayName = 'ContextMenuSub';

type ContextMenuSubTriggerElement = React.ElementRef<
  typeof ContextMenuPrimitive.SubTrigger
>;
interface ContextMenuSubTriggerProps
  extends React.ComponentPropsWithoutRef<
    typeof ContextMenuPrimitive.SubTrigger
  > {}
const ContextMenuSubTrigger = React.forwardRef<
  ContextMenuSubTriggerElement,
  ContextMenuSubTriggerProps
>((props, forwardedRef) => {
  const { className, children, ...subTriggerProps } = props;
  return (
    <ContextMenuPrimitive.SubTrigger
      {...subTriggerProps}
      ref={forwardedRef}
      className={classNames(
        'fui-BaseMenuItem',
        'fui-BaseMenuSubTrigger',
        'fui-ContextMenuItem',
        'fui-ContextMenuSubTrigger',
        className,
      )}
    >
      <Slottable>{children}</Slottable>
      <div className="fui-BaseMenuShortcut fui-ContextMenuShortcut">
        <ThickChevronRightIcon className="fui-BaseMenuSubTriggerIcon fui-ContextMenuSubTriggerIcon" />
      </div>
    </ContextMenuPrimitive.SubTrigger>
  );
});
ContextMenuSubTrigger.displayName = 'ContextMenuSubTrigger';

type ContextMenuSubContentElement = React.ElementRef<
  typeof ContextMenuPrimitive.SubContent
>;
interface ContextMenuSubContentProps
  extends React.ComponentPropsWithoutRef<
    typeof ContextMenuPrimitive.SubContent
  > {
  container?: React.ComponentProps<
    typeof ContextMenuPrimitive.Portal
  >['container'];
}
const ContextMenuSubContent = React.forwardRef<
  ContextMenuSubContentElement,
  ContextMenuSubContentProps
>((props, forwardedRef) => {
  const { className, children, container, forceMount, ...subContentProps } =
    props;
  const { size, color, highContrast } = React.useContext(
    ContextMenuContentContext,
  );
  return (
    <ContextMenuPrimitive.Portal container={container} forceMount={forceMount}>
      <Theme asChild>
        <ContextMenuPrimitive.SubContent
          data-accent-color={color}
          alignOffset={-Number(size) * 4}
          // Side offset accounts for the outer solid box-shadow
          sideOffset={1}
          collisionPadding={10}
          {...subContentProps}
          ref={forwardedRef}
          className={classNames(
            'fui-PopperContent',
            'fui-BaseMenuContent',
            'fui-BaseMenuSubContent',
            'fui-ContextMenuContent',
            'fui-ContextMenuSubContent',
            className,
            withBreakpoints(size, 'fui-r-size'),
            { 'fui-high-contrast': highContrast },
          )}
        >
          <ScrollArea type="auto">
            <div
              className={classNames(
                'fui-BaseMenuViewport',
                'fui-ContextMenuViewport',
              )}
            >
              {children}
            </div>
          </ScrollArea>
        </ContextMenuPrimitive.SubContent>
      </Theme>
    </ContextMenuPrimitive.Portal>
  );
});
ContextMenuSubContent.displayName = 'ContextMenuSubContent';

type ContextMenuSeparatorElement = React.ElementRef<
  typeof ContextMenuPrimitive.Separator
>;
interface ContextMenuSeparatorProps
  extends React.ComponentPropsWithoutRef<
    typeof ContextMenuPrimitive.Separator
  > {}
const ContextMenuSeparator = React.forwardRef<
  ContextMenuSeparatorElement,
  ContextMenuSeparatorProps
>((props, forwardedRef) => (
  <ContextMenuPrimitive.Separator
    {...props}
    ref={forwardedRef}
    className={classNames(
      'fui-BaseMenuSeparator',
      'fui-ContextMenuSeparator',
      props.className,
    )}
  />
));
ContextMenuSeparator.displayName = 'ContextMenuSeparator';

export {
  ContextMenuCheckboxItem as CheckboxItem,
  ContextMenuContent as Content,
  ContextMenuGroup as Group,
  ContextMenuItem as Item,
  ContextMenuLabel as Label,
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
  ContextMenuGroupProps as GroupProps,
  ContextMenuItemProps as ItemProps,
  ContextMenuLabelProps as LabelProps,
  ContextMenuRadioGroupProps as RadioGroupProps,
  ContextMenuRadioItemProps as RadioItemProps,
  ContextMenuRootProps as RootProps,
  ContextMenuSeparatorProps as SeparatorProps,
  ContextMenuSubContentProps as SubContentProps,
  ContextMenuSubProps as SubProps,
  ContextMenuSubTriggerProps as SubTriggerProps,
  ContextMenuTriggerProps as TriggerProps,
};
