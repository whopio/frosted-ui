'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import classNames from 'classnames';
import * as React from 'react';
import type {
  LayoutProps,
  MarginProps,
  PropsWithoutRefOrColor,
} from '../../helpers';
import {
  extractLayoutProps,
  extractMarginProps,
  withLayoutProps,
  withMarginProps,
} from '../../helpers';

type AccordionRootElement = React.ElementRef<typeof AccordionPrimitive.Root>;
type AccordionRootProps = React.ComponentProps<typeof AccordionPrimitive.Root> &
  MarginProps &
  LayoutProps;

const AccordionRoot = React.forwardRef<
  AccordionRootElement,
  AccordionRootProps
>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { rest: layoutRest, ...layoutProps } = extractLayoutProps(marginRest);

  const { className, ...accordionRootProps } = layoutRest;

  return (
    // @ts-expect-error - `type` and 'collapsible' issues
    <AccordionPrimitive.Root
      ref={forwardedRef}
      className={classNames(
        'fui-AccordionRoot',
        className,
        withLayoutProps(layoutProps),
        withMarginProps(marginProps),
      )}
      {...accordionRootProps}
    />
  );
});
AccordionRoot.displayName = 'Root';

type AccordionItemElement = React.ElementRef<typeof AccordionPrimitive.Item>;
interface AccordionItemProps
  extends PropsWithoutRefOrColor<typeof AccordionPrimitive.Item>,
    MarginProps {}

const AccordionItem = React.forwardRef<
  AccordionItemElement,
  AccordionItemProps
>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { className, ...accordionItemProps } = marginRest;

  return (
    <AccordionPrimitive.Item
      ref={forwardedRef}
      className={classNames(
        'fui-AccordionItem',
        className,
        withMarginProps(marginProps),
      )}
      {...accordionItemProps}
    />
  );
});
AccordionItem.displayName = 'Item';

type AccordionTriggerElement = React.ElementRef<
  typeof AccordionPrimitive.Trigger
>;
type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
> &
  MarginProps &
  LayoutProps;
const AccordionTrigger = React.forwardRef<
  AccordionTriggerElement,
  AccordionTriggerProps
>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { rest: layoutRest, ...layoutProps } = extractLayoutProps(marginRest);

  const { className, children, ...accordionTriggerProps } = layoutRest;
  return (
    <AccordionPrimitive.Trigger
      className={classNames(
        'fui-AccordionTrigger',
        'fui-reset',
        className,
        withLayoutProps(layoutProps),
        withMarginProps(marginProps),
      )}
      {...accordionTriggerProps}
      ref={forwardedRef}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fui-AccordionTriggerIcon"
      >
        <path
          d="M6 12L9.64645 8.35355C9.84171 8.15829 10.1583 8.15829 10.3536 8.35355L14 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {children}
    </AccordionPrimitive.Trigger>
  );
});
AccordionTrigger.displayName = 'AccordionTrigger';

type AccordionContentElement = React.ElementRef<
  typeof AccordionPrimitive.Content
>;
type AccordionContentProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Content
>;
const AccordionContent = React.forwardRef<
  AccordionContentElement,
  AccordionContentProps
>(({ className, children, ...props }, forwardedRef) => (
  <AccordionPrimitive.Content className="fui-AccordionContent" {...props}>
    <div
      className={classNames('fui-AccordionContentInner', className)}
      ref={forwardedRef}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = 'AccordionContent';

const Accordion = Object.assign(
  {},
  {
    Root: AccordionRoot,
    Trigger: AccordionTrigger,
    Content: AccordionContent,
    Item: AccordionItem,
  },
);

export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
};

export type {
  AccordionContentProps,
  AccordionItemProps,
  AccordionRootProps,
  AccordionTriggerProps,
};
