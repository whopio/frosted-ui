'use client';

import * as DrawerPrimitive from '@radix-ui/react-dialog';
import classNames from 'classnames';
import * as React from 'react';
import { withBreakpoints } from '../helpers';
import { Theme } from '../theme';
import { drawerContentPropDefs } from './drawer.props';
import { Heading } from './heading';

import type { GetPropDefTypes } from '../helpers';

interface DrawerRootProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Root>,
    'modal'
  > {}
const DrawerRoot: React.FC<DrawerRootProps> = (props) => (
  <DrawerPrimitive.Root {...props} modal />
);
DrawerRoot.displayName = 'DrawerRoot';

type DrawerTriggerElement = React.ElementRef<typeof DrawerPrimitive.Trigger>;
interface DrawerTriggerProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Trigger>,
    'asChild'
  > {}
const DrawerTrigger = React.forwardRef<
  DrawerTriggerElement,
  DrawerTriggerProps
>((props, forwardedRef) => (
  <DrawerPrimitive.Trigger {...props} ref={forwardedRef} asChild />
));
DrawerTrigger.displayName = 'DrawerTrigger';

type DrawerContentElement = React.ElementRef<typeof DrawerPrimitive.Content>;
type DrawerContentOwnProps = GetPropDefTypes<typeof drawerContentPropDefs>;
interface DrawerContentProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>,
      'asChild'
    >,
    DrawerContentOwnProps {
  container?: React.ComponentProps<typeof DrawerPrimitive.Portal>['container'];
}
const DrawerContent = React.forwardRef<
  DrawerContentElement,
  DrawerContentProps
>((props, forwardedRef) => {
  const {
    className,
    forceMount,
    container,
    size = drawerContentPropDefs.size.default,
    ...contentProps
  } = props;
  return (
    <DrawerPrimitive.Portal container={container} forceMount={forceMount}>
      <Theme asChild>
        <DrawerPrimitive.Content
          {...contentProps}
          aria-describedby={undefined}
          ref={forwardedRef}
          className={classNames(
            'fui-DrawerContent',
            className,
            withBreakpoints(size, 'fui-r-size'),
          )}
        />
      </Theme>
    </DrawerPrimitive.Portal>
  );
});
DrawerContent.displayName = 'DrawerContent';

type DrawerTitleElement = React.ElementRef<typeof Heading>;
type DrawerTitleProps = React.ComponentPropsWithoutRef<typeof Heading>;
const DrawerTitle = React.forwardRef<DrawerTitleElement, DrawerTitleProps>(
  (props, forwardedRef) => (
    <DrawerPrimitive.Title asChild>
      <Heading size="5" trim="both" {...props} ref={forwardedRef} />
    </DrawerPrimitive.Title>
  ),
);
DrawerTitle.displayName = 'DrawerTitle';

type DrawerCloseElement = React.ElementRef<typeof DrawerPrimitive.Close>;
interface DrawerCloseProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Close>,
    'asChild'
  > {}
const DrawerClose = React.forwardRef<DrawerCloseElement, DrawerCloseProps>(
  (props, forwardedRef) => (
    <DrawerPrimitive.Close {...props} ref={forwardedRef} asChild />
  ),
);
DrawerClose.displayName = 'DrawerClose';

type DrawerStickyFooterElement = React.ElementRef<'div'>;
type DrawerStickyFooterProps = React.ComponentPropsWithoutRef<'div'>;
const DrawerStickyFooter = React.forwardRef<
  DrawerStickyFooterElement,
  DrawerStickyFooterProps
>(({ children, className, ...props }, forwardedRef) => (
  <div
    className={classNames('fui-DrawerStickyFooter', className)}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </div>
));
DrawerStickyFooter.displayName = 'DrawerStickyFooter';

type DrawerHeaderElement = React.ElementRef<'div'>;
type DrawerHeaderProps = React.ComponentPropsWithoutRef<'div'>;
const DrawerHeader = React.forwardRef<DrawerHeaderElement, DrawerHeaderProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <div
      className={classNames('fui-DrawerHeader', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </div>
  ),
);
DrawerHeader.displayName = 'DrawerHeader';

type DrawerBodyElement = React.ElementRef<'div'>;
type DrawerBodyProps = React.ComponentPropsWithoutRef<'div'>;
const DrawerBody = React.forwardRef<DrawerBodyElement, DrawerBodyProps>(
  ({ children, className, ...props }, forwardedRef) => {
    const localRef = React.useRef<HTMLDivElement | null>(null);
    const contentRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
      if (forwardedRef) {
        if (typeof forwardedRef === 'function') {
          forwardedRef(localRef.current);
        } else if (forwardedRef.current) {
          forwardedRef.current = localRef.current;
        }
      }
    }, [forwardedRef]);

    // Track if the content is scrollable and set 'data-is-scrollable' attribute
    React.useEffect(() => {
      if (!contentRef.current) return;
      const resizeObserver = new ResizeObserver((entries) => {
        const contentHeight = entries[0].target.getBoundingClientRect().height;
        // TODO: kinda ugly that we're reaching to a parent element here
        const scrollHeight = localRef.current?.parentElement?.scrollHeight || 0;
        const isScrollable = contentHeight > scrollHeight;

        localRef.current?.setAttribute(
          'data-is-scrollable',
          isScrollable.toString(),
        );
      });
      resizeObserver.observe(contentRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    return (
      <div className="fui-BodyScrollArea" {...props} ref={localRef}>
        <div
          className={classNames('fui-DrawerBody', className)}
          ref={contentRef}
        >
          {children}
        </div>
      </div>
    );
  },
);
DrawerBody.displayName = 'DrawerBody';

const Drawer = Object.assign(
  {},
  {
    Root: DrawerRoot,
    Trigger: DrawerTrigger,
    Content: DrawerContent,
    Title: DrawerTitle,
    Close: DrawerClose,
    Header: DrawerHeader,
    Body: DrawerBody,
    StickyFooter: DrawerStickyFooter,
  },
);

export {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerStickyFooter,
  DrawerTitle,
  DrawerTrigger,
};

export type {
  DrawerBodyProps,
  DrawerCloseProps,
  DrawerContentProps,
  DrawerHeaderProps,
  DrawerRootProps,
  DrawerStickyFooterProps,
  DrawerTitleProps,
  DrawerTriggerProps,
};
