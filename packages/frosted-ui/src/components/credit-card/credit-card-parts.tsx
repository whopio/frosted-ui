'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

// ---------------------------------------------------------------------------
// Logo — slot for the card issuer / org logo
// ---------------------------------------------------------------------------

interface CreditCardLogoState extends Record<string, unknown> {}

interface CreditCardLogoProps
  extends useRender.ComponentProps<'div', CreditCardLogoState> {}

const CreditCardLogo = React.forwardRef<HTMLDivElement, CreditCardLogoProps>(
  function CreditCardLogo(props, forwardedRef) {
    const { render, ...elementProps } = props;
    const state = React.useMemo<CreditCardLogoState>(() => ({}), []);

    return useRender({
      render,
      ref: forwardedRef,
      state,
      props: mergeProps<'div'>(
        { className: 'fui-CreditCardLogo' } as React.ComponentPropsWithRef<'div'>,
        elementProps as React.ComponentPropsWithRef<'div'>,
      ),
      defaultTagName: 'div',
    });
  },
);
CreditCardLogo.displayName = 'CreditCardLogo';

// ---------------------------------------------------------------------------
// Brand — card network + tier text (e.g. "Visa Platinum")
// ---------------------------------------------------------------------------

interface CreditCardBrandState extends Record<string, unknown> {}

interface CreditCardBrandProps
  extends useRender.ComponentProps<'span', CreditCardBrandState> {}

const CreditCardBrand = React.forwardRef<HTMLSpanElement, CreditCardBrandProps>(
  function CreditCardBrand(props, forwardedRef) {
    const { render, ...elementProps } = props;
    const state = React.useMemo<CreditCardBrandState>(() => ({}), []);

    return useRender({
      render,
      ref: forwardedRef,
      state,
      props: mergeProps<'span'>(
        { className: 'fui-CreditCardBrand' } as React.ComponentPropsWithRef<'span'>,
        elementProps as React.ComponentPropsWithRef<'span'>,
      ),
      defaultTagName: 'span',
    });
  },
);
CreditCardBrand.displayName = 'CreditCardBrand';

// ---------------------------------------------------------------------------
// Label — card name / description (e.g. "Claude credits")
// ---------------------------------------------------------------------------

interface CreditCardLabelState extends Record<string, unknown> {}

interface CreditCardLabelProps
  extends useRender.ComponentProps<'span', CreditCardLabelState> {}

const CreditCardLabel = React.forwardRef<HTMLSpanElement, CreditCardLabelProps>(
  function CreditCardLabel(props, forwardedRef) {
    const { render, ...elementProps } = props;
    const state = React.useMemo<CreditCardLabelState>(() => ({}), []);

    return useRender({
      render,
      ref: forwardedRef,
      state,
      props: mergeProps<'span'>(
        { className: 'fui-CreditCardLabel' } as React.ComponentPropsWithRef<'span'>,
        elementProps as React.ComponentPropsWithRef<'span'>,
      ),
      defaultTagName: 'span',
    });
  },
);
CreditCardLabel.displayName = 'CreditCardLabel';

// ---------------------------------------------------------------------------
// LastFour — masked card number on front face (e.g. "•••• 0991")
// ---------------------------------------------------------------------------

interface CreditCardLastFourState extends Record<string, unknown> {}

interface CreditCardLastFourProps
  extends useRender.ComponentProps<'span', CreditCardLastFourState> {}

const CreditCardLastFour = React.forwardRef<HTMLSpanElement, CreditCardLastFourProps>(
  function CreditCardLastFour(props, forwardedRef) {
    const { render, ...elementProps } = props;
    const state = React.useMemo<CreditCardLastFourState>(() => ({}), []);

    return useRender({
      render,
      ref: forwardedRef,
      state,
      props: mergeProps<'span'>(
        { className: 'fui-CreditCardLastFour' } as React.ComponentPropsWithRef<'span'>,
        elementProps as React.ComponentPropsWithRef<'span'>,
      ),
      defaultTagName: 'span',
    });
  },
);
CreditCardLastFour.displayName = 'CreditCardLastFour';

// ---------------------------------------------------------------------------
// Stripe — magnetic stripe bar on the back
// ---------------------------------------------------------------------------

interface CreditCardStripeState extends Record<string, unknown> {}

interface CreditCardStripeProps
  extends useRender.ComponentProps<'div', CreditCardStripeState> {}

const CreditCardStripe = React.forwardRef<HTMLDivElement, CreditCardStripeProps>(
  function CreditCardStripe(props, forwardedRef) {
    const { render, ...elementProps } = props;
    const state = React.useMemo<CreditCardStripeState>(() => ({}), []);

    return useRender({
      render,
      ref: forwardedRef,
      state,
      props: mergeProps<'div'>(
        { className: 'fui-CreditCardStripe' } as React.ComponentPropsWithRef<'div'>,
        elementProps as React.ComponentPropsWithRef<'div'>,
      ),
      defaultTagName: 'div',
    });
  },
);
CreditCardStripe.displayName = 'CreditCardStripe';

// ---------------------------------------------------------------------------
// Number — full card number on the back
// ---------------------------------------------------------------------------

interface CreditCardNumberState extends Record<string, unknown> {}

interface CreditCardNumberProps
  extends useRender.ComponentProps<'span', CreditCardNumberState> {}

const CreditCardNumber = React.forwardRef<HTMLSpanElement, CreditCardNumberProps>(
  function CreditCardNumber(props, forwardedRef) {
    const { render, ...elementProps } = props;
    const state = React.useMemo<CreditCardNumberState>(() => ({}), []);

    return useRender({
      render,
      ref: forwardedRef,
      state,
      props: mergeProps<'span'>(
        { className: 'fui-CreditCardNumber' } as React.ComponentPropsWithRef<'span'>,
        elementProps as React.ComponentPropsWithRef<'span'>,
      ),
      defaultTagName: 'span',
    });
  },
);
CreditCardNumber.displayName = 'CreditCardNumber';

// ---------------------------------------------------------------------------
// Expiry — expiration date on the back
// ---------------------------------------------------------------------------

interface CreditCardExpiryState extends Record<string, unknown> {}

interface CreditCardExpiryProps
  extends useRender.ComponentProps<'span', CreditCardExpiryState> {}

const CreditCardExpiry = React.forwardRef<HTMLSpanElement, CreditCardExpiryProps>(
  function CreditCardExpiry(props, forwardedRef) {
    const { render, ...elementProps } = props;
    const state = React.useMemo<CreditCardExpiryState>(() => ({}), []);

    return useRender({
      render,
      ref: forwardedRef,
      state,
      props: mergeProps<'span'>(
        { className: 'fui-CreditCardExpiry' } as React.ComponentPropsWithRef<'span'>,
        elementProps as React.ComponentPropsWithRef<'span'>,
      ),
      defaultTagName: 'span',
    });
  },
);
CreditCardExpiry.displayName = 'CreditCardExpiry';

// ---------------------------------------------------------------------------
// CVV — CVV code on the back
// ---------------------------------------------------------------------------

interface CreditCardCVVState extends Record<string, unknown> {}

interface CreditCardCVVProps
  extends useRender.ComponentProps<'span', CreditCardCVVState> {}

const CreditCardCVV = React.forwardRef<HTMLSpanElement, CreditCardCVVProps>(
  function CreditCardCVV(props, forwardedRef) {
    const { render, ...elementProps } = props;
    const state = React.useMemo<CreditCardCVVState>(() => ({}), []);

    return useRender({
      render,
      ref: forwardedRef,
      state,
      props: mergeProps<'span'>(
        { className: 'fui-CreditCardCVV' } as React.ComponentPropsWithRef<'span'>,
        elementProps as React.ComponentPropsWithRef<'span'>,
      ),
      defaultTagName: 'span',
    });
  },
);
CreditCardCVV.displayName = 'CreditCardCVV';

// ---------------------------------------------------------------------------
// FrontHeader — top row of the front face (logo left, brand right)
// ---------------------------------------------------------------------------

interface CreditCardFrontHeaderState extends Record<string, unknown> {}

interface CreditCardFrontHeaderProps
  extends useRender.ComponentProps<'div', CreditCardFrontHeaderState> {}

const CreditCardFrontHeader = React.forwardRef<HTMLDivElement, CreditCardFrontHeaderProps>(
  function CreditCardFrontHeader(props, forwardedRef) {
    const { render, ...elementProps } = props;
    const state = React.useMemo<CreditCardFrontHeaderState>(() => ({}), []);

    return useRender({
      render,
      ref: forwardedRef,
      state,
      props: mergeProps<'div'>(
        { className: 'fui-CreditCardFrontHeader' } as React.ComponentPropsWithRef<'div'>,
        elementProps as React.ComponentPropsWithRef<'div'>,
      ),
      defaultTagName: 'div',
    });
  },
);
CreditCardFrontHeader.displayName = 'CreditCardFrontHeader';

// ---------------------------------------------------------------------------
// FrontFooter — bottom row of the front face (label left, last four right)
// ---------------------------------------------------------------------------

interface CreditCardFrontFooterState extends Record<string, unknown> {}

interface CreditCardFrontFooterProps
  extends useRender.ComponentProps<'div', CreditCardFrontFooterState> {}

const CreditCardFrontFooter = React.forwardRef<HTMLDivElement, CreditCardFrontFooterProps>(
  function CreditCardFrontFooter(props, forwardedRef) {
    const { render, ...elementProps } = props;
    const state = React.useMemo<CreditCardFrontFooterState>(() => ({}), []);

    return useRender({
      render,
      ref: forwardedRef,
      state,
      props: mergeProps<'div'>(
        { className: 'fui-CreditCardFrontFooter' } as React.ComponentPropsWithRef<'div'>,
        elementProps as React.ComponentPropsWithRef<'div'>,
      ),
      defaultTagName: 'div',
    });
  },
);
CreditCardFrontFooter.displayName = 'CreditCardFrontFooter';

// ---------------------------------------------------------------------------
// BackContent — main content area below the stripe on the back face
// ---------------------------------------------------------------------------

interface CreditCardBackContentState extends Record<string, unknown> {}

interface CreditCardBackContentProps
  extends useRender.ComponentProps<'div', CreditCardBackContentState> {}

const CreditCardBackContent = React.forwardRef<HTMLDivElement, CreditCardBackContentProps>(
  function CreditCardBackContent(props, forwardedRef) {
    const { render, ...elementProps } = props;
    const state = React.useMemo<CreditCardBackContentState>(() => ({}), []);

    return useRender({
      render,
      ref: forwardedRef,
      state,
      props: mergeProps<'div'>(
        { className: 'fui-CreditCardBackContent' } as React.ComponentPropsWithRef<'div'>,
        elementProps as React.ComponentPropsWithRef<'div'>,
      ),
      defaultTagName: 'div',
    });
  },
);
CreditCardBackContent.displayName = 'CreditCardBackContent';

// ---------------------------------------------------------------------------
// BackFields — horizontal row for Expiry + CVV on the back face
// ---------------------------------------------------------------------------

interface CreditCardBackFieldsState extends Record<string, unknown> {}

interface CreditCardBackFieldsProps
  extends useRender.ComponentProps<'div', CreditCardBackFieldsState> {}

const CreditCardBackFields = React.forwardRef<HTMLDivElement, CreditCardBackFieldsProps>(
  function CreditCardBackFields(props, forwardedRef) {
    const { render, ...elementProps } = props;
    const state = React.useMemo<CreditCardBackFieldsState>(() => ({}), []);

    return useRender({
      render,
      ref: forwardedRef,
      state,
      props: mergeProps<'div'>(
        { className: 'fui-CreditCardBackFields' } as React.ComponentPropsWithRef<'div'>,
        elementProps as React.ComponentPropsWithRef<'div'>,
      ),
      defaultTagName: 'div',
    });
  },
);
CreditCardBackFields.displayName = 'CreditCardBackFields';

// ---------------------------------------------------------------------------
// FieldLabel — small label above a data field (e.g. "Card number", "Exp")
// ---------------------------------------------------------------------------

interface CreditCardFieldLabelState extends Record<string, unknown> {}

interface CreditCardFieldLabelProps
  extends useRender.ComponentProps<'span', CreditCardFieldLabelState> {}

const CreditCardFieldLabel = React.forwardRef<HTMLSpanElement, CreditCardFieldLabelProps>(
  function CreditCardFieldLabel(props, forwardedRef) {
    const { render, ...elementProps } = props;
    const state = React.useMemo<CreditCardFieldLabelState>(() => ({}), []);

    return useRender({
      render,
      ref: forwardedRef,
      state,
      props: mergeProps<'span'>(
        { className: 'fui-CreditCardFieldLabel' } as React.ComponentPropsWithRef<'span'>,
        elementProps as React.ComponentPropsWithRef<'span'>,
      ),
      defaultTagName: 'span',
    });
  },
);
CreditCardFieldLabel.displayName = 'CreditCardFieldLabel';

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  CreditCardBackContent,
  CreditCardBackFields,
  CreditCardBrand,
  CreditCardCVV,
  CreditCardExpiry,
  CreditCardFieldLabel,
  CreditCardFrontFooter,
  CreditCardFrontHeader,
  CreditCardLabel,
  CreditCardLastFour,
  CreditCardLogo,
  CreditCardNumber,
  CreditCardStripe,
};
export type {
  CreditCardBackContentProps,
  CreditCardBackContentState,
  CreditCardBackFieldsProps,
  CreditCardBackFieldsState,
  CreditCardBrandProps,
  CreditCardBrandState,
  CreditCardCVVProps,
  CreditCardCVVState,
  CreditCardExpiryProps,
  CreditCardExpiryState,
  CreditCardFieldLabelProps,
  CreditCardFieldLabelState,
  CreditCardFrontFooterProps,
  CreditCardFrontFooterState,
  CreditCardFrontHeaderProps,
  CreditCardFrontHeaderState,
  CreditCardLabelProps,
  CreditCardLabelState,
  CreditCardLastFourProps,
  CreditCardLastFourState,
  CreditCardLogoProps,
  CreditCardLogoState,
  CreditCardNumberProps,
  CreditCardNumberState,
  CreditCardStripeProps,
  CreditCardStripeState,
};
