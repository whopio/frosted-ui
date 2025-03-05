'use client';

import * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';

import classNames from 'classnames';
import { ExtractPropsForTag } from '../helpers';
import { Theme } from '../theme';
import { Heading } from './heading';
import { Text } from './text';

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

interface SheetTriggerProps extends Omit<React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Trigger>, 'asChild'> {}
const SheetTrigger = (props: SheetTriggerProps) => <DrawerPrimitive.Trigger {...props} asChild />;
SheetTrigger.displayName = 'SheetTrigger';

interface SheetCloseProps extends Omit<React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Close>, 'asChild'> {}
const SheetClose = (props: SheetCloseProps) => <DrawerPrimitive.Close {...props} asChild />;
SheetClose.displayName = 'SheetClose';

const SheetPortal = DrawerPrimitive.Portal;

interface SheetOverlayProps extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay> {}

const SheetOverlay = ({ className, ...props }: SheetOverlayProps) => (
  <DrawerPrimitive.Overlay className={classNames('fui-SheetOverlay', className)} {...props} />
);
SheetOverlay.displayName = 'SheetOverlay';

interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> {}

const SheetContent = ({ className, children, ...props }: SheetContentProps) => (
  <SheetPortal>
    <Theme asChild>
      <SheetOverlay />
    </Theme>
    <Theme asChild>
      <DrawerPrimitive.Content className={classNames('fui-SheetContent', className)} {...props}>
        <div className="fui-SheetContentHandle" />
        {children}
      </DrawerPrimitive.Content>
    </Theme>
  </SheetPortal>
);
SheetContent.displayName = 'SheetContent';

type SheetHeaderProps = React.ComponentPropsWithoutRef<'div'>;
const SheetHeader = ({ children, className, ...props }: SheetHeaderProps) => (
  <div className={classNames('fui-SheetHeader', className)} {...props}>
    {children}
  </div>
);
SheetHeader.displayName = 'SheetHeader';

type SheetBodyProps = React.ComponentPropsWithoutRef<'div'>;
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

type SheetTitleProps = React.ComponentPropsWithoutRef<typeof Heading>;

const SheetTitle = ({ size = '5', weight = 'bold', ...props }: SheetTitleProps) => {
  return (
    <DrawerPrimitive.Title asChild>
      <Heading weight={weight} size={size} {...props} />
    </DrawerPrimitive.Title>
  );
};
SheetTitle.displayName = 'SheetTitle';

type SheetDescriptionProps = ExtractPropsForTag<typeof Text, 'p'>;

const SheetDescription = ({ size = '3', weight = 'regular', ...props }: SheetDescriptionProps) => {
  return (
    <DrawerPrimitive.Description asChild>
      <Text as="p" size={size} weight={weight} {...props} />
    </DrawerPrimitive.Description>
  );
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

export {
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
