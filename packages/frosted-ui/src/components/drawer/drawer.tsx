'use client';

import classNames from 'classnames';
import { Dialog as DrawerPrimitive } from 'radix-ui';
import * as React from 'react';
import { Theme } from '../../theme';
import { Heading } from '../heading';

interface DrawerRootProps extends Omit<React.ComponentProps<typeof DrawerPrimitive.Root>, 'modal'> {}
const DrawerRoot: React.FC<DrawerRootProps> = (props) => <DrawerPrimitive.Root {...props} modal />;
DrawerRoot.displayName = 'DrawerRoot';

interface DrawerTriggerProps extends Omit<React.ComponentProps<typeof DrawerPrimitive.Trigger>, 'asChild'> {}
const DrawerTrigger = (props: DrawerTriggerProps) => <DrawerPrimitive.Trigger {...props} asChild />;
DrawerTrigger.displayName = 'DrawerTrigger';

interface DrawerContentProps extends Omit<React.ComponentProps<typeof DrawerPrimitive.Content>, 'asChild'> {
  container?: React.ComponentProps<typeof DrawerPrimitive.Portal>['container'];
}
const DrawerContent = (props: DrawerContentProps) => {
  const { className, forceMount, container, ...contentProps } = props;
  return (
    <DrawerPrimitive.Portal container={container} forceMount={forceMount}>
      <Theme asChild>
        <DrawerPrimitive.Overlay className="fui-DialogOverlay">
          <DrawerPrimitive.Content
            {...contentProps}
            aria-describedby={undefined}
            className={classNames('fui-DrawerContent', className)}
          />
        </DrawerPrimitive.Overlay>
      </Theme>
    </DrawerPrimitive.Portal>
  );
};
DrawerContent.displayName = 'DrawerContent';

type DrawerTitleProps = React.ComponentProps<typeof Heading>;
const DrawerTitle = (props: DrawerTitleProps) => (
  <DrawerPrimitive.Title asChild>
    <Heading size="4" weight="semi-bold" {...props} />
  </DrawerPrimitive.Title>
);
DrawerTitle.displayName = 'DrawerTitle';

interface DrawerCloseProps extends Omit<React.ComponentProps<typeof DrawerPrimitive.Close>, 'asChild'> {}
const DrawerClose = (props: DrawerCloseProps) => <DrawerPrimitive.Close {...props} asChild />;
DrawerClose.displayName = 'DrawerClose';

type DrawerStickyFooterProps = React.ComponentProps<'div'>;
const DrawerStickyFooter = ({ children, className, ...props }: DrawerStickyFooterProps) => (
  <div className={classNames('fui-DrawerStickyFooter', className)} {...props}>
    {children}
  </div>
);
DrawerStickyFooter.displayName = 'DrawerStickyFooter';

type DrawerHeaderProps = React.ComponentProps<'div'>;
const DrawerHeader = ({ children, className, ...props }: DrawerHeaderProps) => (
  <div className={classNames('fui-DrawerHeader', className)} {...props}>
    {children}
  </div>
);
DrawerHeader.displayName = 'DrawerHeader';

type DrawerBodyProps = React.ComponentProps<'div'>;
const DrawerBody = ({ children, className, ...props }: DrawerBodyProps) => {
  const localRef = React.useRef<HTMLDivElement | null>(null);
  const contentRef = React.useRef<HTMLDivElement | null>(null);

  // Track if the content is scrollable and set 'data-is-scrollable' attribute
  React.useEffect(() => {
    if (!contentRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      const contentHeight = entries[0].target.getBoundingClientRect().height;
      // TODO: kinda ugly that we're reaching to a parent element here
      const scrollHeight = localRef.current?.parentElement?.scrollHeight || 0;
      const isScrollable = contentHeight > scrollHeight;

      localRef.current?.setAttribute('data-is-scrollable', isScrollable.toString());
    });
    resizeObserver.observe(contentRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="fui-BodyScrollArea" {...props} ref={localRef}>
      <div className={classNames('fui-DrawerBody', className)} ref={contentRef}>
        {children}
      </div>
    </div>
  );
};
DrawerBody.displayName = 'DrawerBody';

export {
  DrawerBody as Body,
  DrawerClose as Close,
  DrawerContent as Content,
  DrawerHeader as Header,
  DrawerRoot as Root,
  DrawerStickyFooter as StickyFooter,
  DrawerTitle as Title,
  DrawerTrigger as Trigger,
};

export type {
  DrawerBodyProps as BodyProps,
  DrawerCloseProps as CloseProps,
  DrawerContentProps as ContentProps,
  DrawerHeaderProps as HeaderProps,
  DrawerRootProps as RootProps,
  DrawerStickyFooterProps as StickyFooterProps,
  DrawerTitleProps as TitleProps,
  DrawerTriggerProps as TriggerProps,
};
