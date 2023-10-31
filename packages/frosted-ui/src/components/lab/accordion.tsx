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

<AccordionPrimitive.Root collapsible type="single" />;
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
        'rt-AccordionRoot',
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
        'rt-AccordionItem',
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

  const { className, ...accordionTriggerProps } = layoutRest;
  return (
    <AccordionPrimitive.Trigger
      className={classNames(
        'rt-AccordionTrigger',
        'rt-reset',
        className,
        withLayoutProps(layoutProps),
        withMarginProps(marginProps),
      )}
      {...accordionTriggerProps}
      ref={forwardedRef}
    />
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
>(({ className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Content
    className={classNames('rt-AccordionContent', className)}
    {...props}
    ref={forwardedRef}
  />
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
