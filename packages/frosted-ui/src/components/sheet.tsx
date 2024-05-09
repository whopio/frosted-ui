'use client';

import * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';

import classnames from 'classnames';
import { ExtractPropsForTag } from '../helpers';
import { Theme } from '../theme';
import { Heading } from './heading';
import { Text } from './text';

type SheetRootProps = React.ComponentProps<typeof DrawerPrimitive.Root>;
const SheetRoot = ({
  shouldScaleBackground = true,
  ...props
}: SheetRootProps) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
);
SheetRoot.displayName = 'SheetRoot';

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
SheetPortal.displayName = 'SheetPortal';

type SheetOverlayElement = React.ElementRef<typeof DrawerPrimitive.Overlay>;
interface SheetOverlayProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay> {}

const SheetOverlay = React.forwardRef<SheetOverlayElement, SheetOverlayProps>(
  ({ className, ...props }, forwardedRef) => (
    <DrawerPrimitive.Overlay
      ref={forwardedRef}
      className={classnames('fui-SheetOverlay', className)}
      {...props}
    />
  ),
);
SheetOverlay.displayName = 'SheetOverlay';

type SheetContentElement = React.ElementRef<typeof DrawerPrimitive.Content>;
interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> {}

const SheetContent = React.forwardRef<SheetContentElement, SheetContentProps>(
  ({ className, children, ...props }, ref) => (
    <SheetPortal>
      <Theme asChild>
        <SheetOverlay />
      </Theme>
      <Theme asChild>
        <DrawerPrimitive.Content
          ref={ref}
          className={classnames(
            'fui-SheetContent',
            'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background',
            className,
          )}
          {...props}
        >
          <div className="fui-SheetContentSomething mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
          {children}
        </DrawerPrimitive.Content>
      </Theme>
    </SheetPortal>
  ),
);
SheetContent.displayName = 'SheetContent';

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={classnames(
      'fui-SheetHeader grid gap-1.5 p-4 text-center sm:text-left',
      className,
    )}
    {...props}
  />
);
SheetHeader.displayName = 'SheetHeader';

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={classnames(
      'fui-SheetFooter mt-auto flex flex-col gap-2 p-4',
      className,
    )}
    {...props}
  />
);
SheetFooter.displayName = 'SheetFooter';

type SheetTitleElement = React.ElementRef<typeof Heading>;
type SheetTitleProps = React.ComponentPropsWithoutRef<typeof Heading>;

const SheetTitle = React.forwardRef<SheetTitleElement, SheetTitleProps>(
  ({ size = '3', ...props }, forwardedRef) => {
    return (
      <DrawerPrimitive.Title asChild>
        <Heading trim="start" {...props} ref={forwardedRef} size={size} />
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
>(({ size = '3', ...props }, forwardedRef) => {
  return (
    <DrawerPrimitive.Description asChild>
      <Text as="p" size={size} {...props} ref={forwardedRef} />
    </DrawerPrimitive.Description>
  );
});
SheetDescription.displayName = 'SheetDescription';

export {
  SheetClose as Close,
  SheetContent as Content,
  SheetDescription as Description,
  SheetRoot as Root,
  SheetTitle as Title,
  SheetTrigger as Trigger,
};

export {
  //   SheetCloseProps as CloseProps,
  SheetContentProps as ContentProps,
  SheetDescriptionProps as DescriptionProps,
  SheetRootProps as RootProps,
  SheetTitleProps as TitleProps,
};
