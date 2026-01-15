'use client';

import * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul-base';

import classNames from 'classnames';
import { ExtractPropsForTag } from '../../helpers';
import { Theme } from '../../theme';
import { Heading } from '../heading';
import { Text } from '../text';

type SheetRootProps = Omit<
  React.ComponentProps<typeof DrawerPrimitive.Root>,
  | 'direction'
  // TODO: add support for snap points
  | 'shouldScaleBackground'
  | 'fadeFromIndex'
  | 'snapPoints'
  | 'activeSnapPoint'
>;

const SheetRoot = ({ ...props }: SheetRootProps) => <DrawerPrimitive.Root {...props} />;
SheetRoot.displayName = 'SheetRoot';

type SheetNestedRootProps = Omit<
  React.ComponentProps<typeof DrawerPrimitive.NestedRoot>,
  | 'direction'
  // TODO: add support for snap points
  | 'shouldScaleBackground'
  | 'fadeFromIndex'
  | 'snapPoints'
  | 'activeSnapPoint'
>;

const SheetNestedRoot = ({ ...props }: SheetNestedRootProps) => <DrawerPrimitive.NestedRoot {...props} />;
SheetNestedRoot.displayName = 'SheetNestedRoot';

interface SheetTriggerProps extends Omit<React.ComponentProps<typeof DrawerPrimitive.Trigger>, 'render' | 'className'> {
  className?: string;
  children: React.ReactElement;
}
const SheetTrigger = ({ children, ...props }: SheetTriggerProps) => (
  <DrawerPrimitive.Trigger {...props} render={children} />
);
SheetTrigger.displayName = 'SheetTrigger';

interface SheetCloseProps extends Omit<React.ComponentProps<typeof DrawerPrimitive.Close>, 'render' | 'className'> {
  className?: string;
  children: React.ReactElement;
}
const SheetClose = ({ children, ...props }: SheetCloseProps) => <DrawerPrimitive.Close {...props} render={children} />;
SheetClose.displayName = 'SheetClose';

const SheetPortal = DrawerPrimitive.Portal as React.ComponentType<{ children?: React.ReactNode }>;

interface SheetOverlayProps extends React.ComponentProps<typeof DrawerPrimitive.Overlay> {}

const SheetOverlay = ({ className, ...props }: SheetOverlayProps) => (
  <DrawerPrimitive.Overlay className={classNames('fui-SheetOverlay', className)} {...props} />
);
SheetOverlay.displayName = 'SheetOverlay';

interface SheetContentProps extends Omit<React.ComponentProps<typeof DrawerPrimitive.Content>, 'className' | 'render'> {
  className?: string;
}

const SheetContent = ({ className, children, ...props }: SheetContentProps) => {
  // Stop keyboard events from propagating to parent floating UI components (e.g., DropdownMenu).
  // This prevents the menu's typeahead from capturing keystrokes when typing in sheet inputs.
  const handleKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    event.stopPropagation();
  }, []);

  return (
    <SheetPortal>
      <>
        <Theme asChild>
          <SheetOverlay />
        </Theme>
        <Theme asChild>
          <DrawerPrimitive.Content
            className={classNames('fui-SheetContent', className)}
            onKeyDownCapture={handleKeyDown}
            {...props}
          >
            <div className="fui-SheetContentHandle" />
            {children}
          </DrawerPrimitive.Content>
        </Theme>
      </>
    </SheetPortal>
  );
};
SheetContent.displayName = 'SheetContent';

type SheetHeaderProps = React.ComponentProps<'div'>;
const SheetHeader = ({ children, className, ...props }: SheetHeaderProps) => (
  <div className={classNames('fui-SheetHeader', className)} {...props}>
    {children}
  </div>
);
SheetHeader.displayName = 'SheetHeader';

type SheetBodyProps = React.ComponentProps<'div'>;
const SheetBody = ({ children, className, ...props }: SheetBodyProps) => (
  <div className={classNames('fui-SheetBody', className)} {...props}>
    {children}
  </div>
);
SheetBody.displayName = 'SheetBody';

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={classNames('fui-SheetFooter', className)} {...props} />
);
SheetFooter.displayName = 'SheetFooter';

type SheetTitleProps = React.ComponentProps<typeof Heading>;

const SheetTitle = ({ size = '5', weight = 'bold', ...props }: SheetTitleProps) => {
  return <DrawerPrimitive.Title render={<Heading weight={weight} size={size} {...props} />} />;
};
SheetTitle.displayName = 'SheetTitle';

type SheetDescriptionProps = ExtractPropsForTag<typeof Text, 'p'>;

const SheetDescription = ({ size = '3', weight = 'regular', ...props }: SheetDescriptionProps) => {
  return <DrawerPrimitive.Description render={<Text as="p" size={size} weight={weight} {...props} />} />;
};
SheetDescription.displayName = 'SheetDescription';

export {
  SheetBody as Body,
  SheetClose as Close,
  SheetContent as Content,
  SheetDescription as Description,
  SheetHeader as Header,
  SheetNestedRoot as NestedRoot,
  SheetRoot as Root,
  SheetTitle as Title,
  SheetTrigger as Trigger,
};

export type {
  SheetBodyProps as BodyProps,
  SheetCloseProps as CloseProps,
  SheetContentProps as ContentProps,
  SheetDescriptionProps as DescriptionProps,
  SheetHeaderProps as HeaderProps,
  SheetNestedRootProps as NestedRootProps,
  SheetRootProps as RootProps,
  SheetTitleProps as TitleProps,
  SheetTriggerProps as TriggerProps,
};
