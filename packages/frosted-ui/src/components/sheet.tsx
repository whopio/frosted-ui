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

const SheetRoot = ({ ...props }: SheetRootProps) => (
  <DrawerPrimitive.Root {...props} />
);
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

const SheetNestedRoot = ({ ...props }: SheetNestedRootProps) => (
  <DrawerPrimitive.NestedRoot {...props} />
);
SheetNestedRoot.displayName = 'SheetNestedRoot';

type SheetTriggerElement = React.ElementRef<typeof DrawerPrimitive.Trigger>;
interface SheetTriggerProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Trigger>,
    'asChild'
  > {}
const SheetTrigger = React.forwardRef<SheetTriggerElement, SheetTriggerProps>(
  (props, forwardedRef) => (
    <DrawerPrimitive.Trigger {...props} ref={forwardedRef} asChild />
  ),
);
SheetTrigger.displayName = 'SheetTrigger';

type SheetCloseElement = React.ElementRef<typeof DrawerPrimitive.Close>;
interface SheetCloseProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Close>,
    'asChild'
  > {}
const SheetClose = React.forwardRef<SheetCloseElement, SheetCloseProps>(
  (props, forwardedRef) => (
    <DrawerPrimitive.Close {...props} ref={forwardedRef} asChild />
  ),
);
SheetClose.displayName = 'SheetClose';

const SheetPortal = DrawerPrimitive.Portal;

type SheetOverlayElement = React.ElementRef<typeof DrawerPrimitive.Overlay>;
interface SheetOverlayProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay> {}

const SheetOverlay = React.forwardRef<SheetOverlayElement, SheetOverlayProps>(
  ({ className, ...props }, forwardedRef) => (
    <DrawerPrimitive.Overlay
      ref={forwardedRef}
      className={classNames('fui-SheetOverlay', className)}
      {...props}
    />
  ),
);
SheetOverlay.displayName = 'SheetOverlay';

type SheetContentElement = React.ElementRef<typeof DrawerPrimitive.Content>;
interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> {}

const SheetContent = React.forwardRef<SheetContentElement, SheetContentProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <SheetPortal>
      <Theme asChild>
        <SheetOverlay />
      </Theme>
      <Theme asChild>
        <DrawerPrimitive.Content
          ref={forwardedRef}
          className={classNames('fui-SheetContent', className)}
          {...props}
        >
          <div className="fui-SheetContentHandle" />
          {children}
        </DrawerPrimitive.Content>
      </Theme>
    </SheetPortal>
  ),
);
SheetContent.displayName = 'SheetContent';

type SheetHeaderElement = React.ElementRef<'div'>;
type SheetHeaderProps = React.ComponentPropsWithoutRef<'div'>;
const SheetHeader = React.forwardRef<SheetHeaderElement, SheetHeaderProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <div
      className={classNames('fui-SheetHeader', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </div>
  ),
);
SheetHeader.displayName = 'SheetHeader';

type SheetBodyElement = React.ElementRef<'div'>;
type SheetBodyProps = React.ComponentPropsWithoutRef<'div'>;
const SheetBody = React.forwardRef<SheetBodyElement, SheetBodyProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <div
      className={classNames('fui-SheetBody', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </div>
  ),
);
SheetBody.displayName = 'SheetBody';

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={classNames('fui-SheetFooter', className)} {...props} />
);
SheetFooter.displayName = 'SheetFooter';

type SheetTitleElement = React.ElementRef<typeof Heading>;
type SheetTitleProps = React.ComponentPropsWithoutRef<typeof Heading>;

const SheetTitle = React.forwardRef<SheetTitleElement, SheetTitleProps>(
  ({ size = '5', weight = 'bold', ...props }, forwardedRef) => {
    return (
      <DrawerPrimitive.Title asChild>
        <Heading weight={weight} size={size} {...props} ref={forwardedRef} />
      </DrawerPrimitive.Title>
    );
  },
);
SheetTitle.displayName = 'SheetTitle';

type SheetDescriptionElement = HTMLParagraphElement;
type SheetDescriptionProps = ExtractPropsForTag<typeof Text, 'p'>;

const SheetDescription = React.forwardRef<
  SheetDescriptionElement,
  SheetDescriptionProps
>(({ size = '3', weight = 'regular', ...props }, forwardedRef) => {
  return (
    <DrawerPrimitive.Description asChild>
      <Text as="p" size={size} weight={weight} {...props} ref={forwardedRef} />
    </DrawerPrimitive.Description>
  );
});
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
