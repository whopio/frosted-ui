'use client';

import { mergeProps, useRender } from '@base-ui/react';
import { Field as FieldPrimitive } from '@base-ui/react/field';
import { Fieldset as FieldsetPrimitive } from '@base-ui/react/fieldset';
import { Input as BaseInput } from '@base-ui/react/input';
import classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import creditCardType from 'credit-card-type';
import type { CreditCardType as CreditCardTypeInfo, CreditCardTypeCardBrandId } from 'credit-card-type/dist/types';

import { useIsomorphicLayoutEffect } from '../../helpers/use-isomorphic-layout-effect';
import { Text, type TextProps } from '../text/text';
import { useCreditCardContext } from './credit-card-context';

// ---------------------------------------------------------------------------
// Card number formatting utilities
// ---------------------------------------------------------------------------

const UNKNOWN_CARD_INFO: CreditCardTypeInfo = {
  niceType: '',
  type: '',
  patterns: [],
  gaps: [4, 8, 12],
  lengths: [16],
  code: { size: 3, name: 'CVV' },
};

function getCardInfo(digits: string): CreditCardTypeInfo {
  if (!digits) return UNKNOWN_CARD_INFO;
  const results = creditCardType(digits);
  if (results.length === 1) return results[0];
  return UNKNOWN_CARD_INFO;
}

function formatWithGaps(digits: string, gaps: number[]): string {
  const parts: string[] = [];
  let prev = 0;
  for (const gap of gaps) {
    if (prev >= digits.length) break;
    parts.push(digits.slice(prev, gap));
    prev = gap;
  }
  if (prev < digits.length) {
    parts.push(digits.slice(prev));
  }
  return parts.join(' ');
}

function digitsBeforeCursor(value: string, cursor: number): number {
  let count = 0;
  for (let i = 0; i < cursor && i < value.length; i++) {
    if (/\d/.test(value[i])) count++;
  }
  return count;
}

function cursorAfterFormat(formatted: string, digitCount: number): number {
  let remaining = digitCount;
  for (let i = 0; i < formatted.length; i++) {
    if (/\d/.test(formatted[i])) remaining--;
    if (remaining <= 0) return i + 1;
  }
  return formatted.length;
}

function formatExpiry(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 4);
  if (digits.length <= 2) return digits;
  return digits.slice(0, 2) + '/' + digits.slice(2);
}

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

interface CreditCardTitleState extends Record<string, unknown> {}

interface CreditCardTitleProps
  extends useRender.ComponentProps<'span', CreditCardTitleState> {}

const CreditCardTitle = React.forwardRef<HTMLSpanElement, CreditCardTitleProps>(
  function CreditCardTitle(props, forwardedRef) {
    const { render, ...elementProps } = props;
    const state = React.useMemo<CreditCardTitleState>(() => ({}), []);

    return useRender({
      render,
      ref: forwardedRef,
      state,
      props: mergeProps<'span'>(
        { className: 'fui-CreditCardTitle' } as React.ComponentPropsWithRef<'span'>,
        elementProps as React.ComponentPropsWithRef<'span'>,
      ),
      defaultTagName: 'span',
    });
  },
);
CreditCardTitle.displayName = 'CreditCardTitle';

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
// MagStripe — magnetic stripe bar on the back
// ---------------------------------------------------------------------------

interface CreditCardMagStripeState extends Record<string, unknown> {}

interface CreditCardMagStripeProps
  extends useRender.ComponentProps<'div', CreditCardMagStripeState> {}

const CreditCardMagStripe = React.forwardRef<HTMLDivElement, CreditCardMagStripeProps>(
  function CreditCardMagStripe(props, forwardedRef) {
    const { render, ...elementProps } = props;
    const state = React.useMemo<CreditCardMagStripeState>(() => ({}), []);

    return useRender({
      render,
      ref: forwardedRef,
      state,
      props: mergeProps<'div'>(
        { className: 'fui-CreditCardMagStripe' } as React.ComponentPropsWithRef<'div'>,
        elementProps as React.ComponentPropsWithRef<'div'>,
      ),
      defaultTagName: 'div',
    });
  },
);
CreditCardMagStripe.displayName = 'CreditCardMagStripe';

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
// Fieldset — semantic group for all related card fields; base-ui Fieldset
// ---------------------------------------------------------------------------

interface CreditCardFieldsetProps
  extends React.ComponentProps<typeof FieldsetPrimitive.Root> {}

const CreditCardFieldset = React.forwardRef<HTMLFieldSetElement, CreditCardFieldsetProps>(
  function CreditCardFieldset(props, forwardedRef) {
    const { className, ...rootProps } = props;
    return (
      <FieldsetPrimitive.Root
        {...rootProps}
        ref={forwardedRef}
        className={classNames('fui-CreditCardFieldset', className)}
      />
    );
  },
);
CreditCardFieldset.displayName = 'CreditCardFieldset';

// ---------------------------------------------------------------------------
// Field — wraps a single label + input pair on the card
// ---------------------------------------------------------------------------

interface CreditCardFieldProps
  extends React.ComponentProps<typeof FieldPrimitive.Root> {}

const CreditCardField = React.forwardRef<HTMLDivElement, CreditCardFieldProps>(
  function CreditCardField(props, forwardedRef) {
    const { className, ...rootProps } = props;
    return (
      <FieldPrimitive.Root
        {...rootProps}
        ref={forwardedRef}
        className={classNames('fui-CreditCardField', className)}
      />
    );
  },
);
CreditCardField.displayName = 'CreditCardField';

// ---------------------------------------------------------------------------
// FieldGroup — horizontal row layout for related fields (e.g. Expiry + CVV)
// ---------------------------------------------------------------------------

interface CreditCardFieldGroupState extends Record<string, unknown> {}

interface CreditCardFieldGroupProps
  extends useRender.ComponentProps<'div', CreditCardFieldGroupState> {}

const CreditCardFieldGroup = React.forwardRef<HTMLDivElement, CreditCardFieldGroupProps>(
  function CreditCardFieldGroup(props, forwardedRef) {
    const { render, ...elementProps } = props;
    const state = React.useMemo<CreditCardFieldGroupState>(() => ({}), []);

    return useRender({
      render,
      ref: forwardedRef,
      state,
      props: mergeProps<'div'>(
        { className: 'fui-CreditCardFieldGroup' } as React.ComponentPropsWithRef<'div'>,
        elementProps as React.ComponentPropsWithRef<'div'>,
      ),
      defaultTagName: 'div',
    });
  },
);
CreditCardFieldGroup.displayName = 'CreditCardFieldGroup';

// ---------------------------------------------------------------------------
// FieldLabel — accessible label automatically associated with its field input
// ---------------------------------------------------------------------------

interface CreditCardFieldLabelProps
  extends
    Omit<React.ComponentProps<typeof FieldPrimitive.Label>, 'color'>,
    Pick<TextProps, 'size' | 'weight' | 'align' | 'trim' | 'color' | 'highContrast'> {}

const CreditCardFieldLabel = React.forwardRef<HTMLLabelElement, CreditCardFieldLabelProps>(
  function CreditCardFieldLabel(props, forwardedRef) {
    const {
      className,
      size = '2',
      weight = 'regular',
      align,
      trim,
      color = 'gray',
      highContrast,
      render,
      ...labelProps
    } = props;

    const defaultRender = (
      <Text
        render={<label />}
        size={size}
        weight={weight}
        align={align}
        trim={trim}
        color={color}
        highContrast={highContrast}
      />
    );

    return (
      <FieldPrimitive.Label
        {...labelProps}
        ref={forwardedRef}
        className={classNames('fui-CreditCardFieldLabel', className)}
        render={render ?? defaultRender}
      />
    );
  },
);
CreditCardFieldLabel.displayName = 'CreditCardFieldLabel';

// ---------------------------------------------------------------------------
// Errors — portal target for field error messages rendered outside the card
// ---------------------------------------------------------------------------

interface CreditCardErrorsProps extends React.ComponentPropsWithRef<'div'> {}

const CreditCardErrors = React.forwardRef<HTMLDivElement, CreditCardErrorsProps>(
  function CreditCardErrors(props, forwardedRef) {
    const { className, ...divProps } = props;
    const { setErrorsContainer } = useCreditCardContext();

    const callbackRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        setErrorsContainer(node);
        if (typeof forwardedRef === 'function') forwardedRef(node);
        else if (forwardedRef) forwardedRef.current = node;
      },
      [setErrorsContainer, forwardedRef],
    );

    return (
      <div
        aria-live="polite"
        {...divProps}
        ref={callbackRef}
        className={classNames('fui-CreditCardErrors', className)}
      />
    );
  },
);
CreditCardErrors.displayName = 'CreditCardErrors';

// ---------------------------------------------------------------------------
// FieldError — validation error message for a card field
// ---------------------------------------------------------------------------

interface CreditCardFieldErrorProps
  extends
    Omit<React.ComponentProps<typeof FieldPrimitive.Error>, 'color'>,
    Pick<TextProps, 'size' | 'weight' | 'align' | 'trim' | 'color' | 'highContrast'> {}

const CreditCardFieldError = React.forwardRef<HTMLDivElement, CreditCardFieldErrorProps>(
  function CreditCardFieldError(props, forwardedRef) {
    const {
      className,
      size = '1',
      weight,
      align,
      trim,
      color = 'danger',
      highContrast,
      render,
      ...errorProps
    } = props;

    const { errorsContainer } = useCreditCardContext();

    const defaultRender = (
      <Text
        render={<div />}
        size={size}
        weight={weight}
        align={align}
        trim={trim}
        color={color}
        highContrast={highContrast}
      />
    );

    const element = (
      <FieldPrimitive.Error
        {...errorProps}
        ref={forwardedRef}
        className={classNames('fui-CreditCardFieldError', className)}
        render={render ?? defaultRender}
      />
    );

    if (errorsContainer) {
      return ReactDOM.createPortal(element, errorsContainer);
    }

    return element;
  },
);
CreditCardFieldError.displayName = 'CreditCardFieldError';

// ---------------------------------------------------------------------------
// Input — base input primitive for card fields
// ---------------------------------------------------------------------------

interface CreditCardInputProps
  extends Omit<React.ComponentProps<typeof BaseInput>, 'className'> {
  className?: string;
}

type CreditCardInputChangeHandler = NonNullable<CreditCardInputProps['onChange']>;

const CreditCardInput = React.forwardRef<HTMLInputElement, CreditCardInputProps>(
  function CreditCardInput(props, forwardedRef) {
    const { className, ...inputProps } = props;
    return (
      <BaseInput
        spellCheck="false"
        {...inputProps}
        ref={forwardedRef}
        className={classNames('fui-CreditCardInput', className)}
      />
    );
  },
);
CreditCardInput.displayName = 'CreditCardInput';

// ---------------------------------------------------------------------------
// Number — card number input field
// ---------------------------------------------------------------------------

interface CreditCardNumberProps extends CreditCardInputProps {}

const CreditCardNumber = React.forwardRef<HTMLInputElement, CreditCardNumberProps>(
  function CreditCardNumber(props, forwardedRef) {
    const { onChange, defaultValue, value, ...rest } = props;
    const inputRef = React.useRef<HTMLInputElement>(null);
    const { setCardType } = useCreditCardContext();

    const mergedRef = React.useCallback(
      (node: HTMLInputElement | null) => {
        (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = node;
        if (typeof forwardedRef === 'function') forwardedRef(node);
        else if (forwardedRef) forwardedRef.current = node;
      },
      [forwardedRef],
    );

    const handleChange = React.useCallback<CreditCardInputChangeHandler>(
      (event) => {
        const input = event.target as HTMLInputElement;
        const cursorPos = input.selectionStart ?? 0;
        const prevValue = input.value;

        const digits = prevValue.replace(/\D/g, '');
        const info = getCardInfo(digits);
        const maxDigits = Math.max(...info.lengths);
        const truncated = digits.slice(0, maxDigits);
        const formatted = formatWithGaps(truncated, info.gaps);

        const dc = digitsBeforeCursor(prevValue, cursorPos);
        input.value = formatted;

        const newCursor = cursorAfterFormat(formatted, dc);
        requestAnimationFrame(() => {
          input.setSelectionRange(newCursor, newCursor);
        });

        setCardType((info.type || null) as CreditCardTypeCardBrandId | null);
        onChange?.(event);
      },
      [onChange, setCardType],
    );

    const formatDefaultOrValue = (raw: string) => {
      const digits = raw.replace(/\D/g, '');
      const info = getCardInfo(digits);
      const maxDigits = Math.max(...info.lengths);
      return formatWithGaps(digits.slice(0, maxDigits), info.gaps);
    };

    const formattedDefault =
      defaultValue != null ? formatDefaultOrValue(String(defaultValue)) : undefined;
    const formattedValue =
      value != null ? formatDefaultOrValue(String(value)) : undefined;

    useIsomorphicLayoutEffect(() => {
      const raw = value ?? defaultValue;
      if (raw != null) {
        const digits = String(raw).replace(/\D/g, '');
        const info = getCardInfo(digits);
        setCardType((info.type || null) as CreditCardTypeCardBrandId | null);
      }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
      <CreditCardInput
        inputMode="numeric"
        pattern="[0-9 ]*"
        maxLength={23}
        placeholder="0000 0000 0000 0000"
        autoComplete="cc-number"
        {...rest}
        defaultValue={formattedDefault}
        value={formattedValue}
        onChange={handleChange}
        ref={mergedRef}
        className={classNames('fui-CreditCardNumber', rest.className)}
      />
    );
  },
);
CreditCardNumber.displayName = 'CreditCardNumber';

// ---------------------------------------------------------------------------
// Expiry — expiration date input field
// ---------------------------------------------------------------------------

interface CreditCardExpiryProps extends CreditCardInputProps {}

const CreditCardExpiry = React.forwardRef<HTMLInputElement, CreditCardExpiryProps>(
  function CreditCardExpiry(props, forwardedRef) {
    const { onChange, defaultValue, value, ...rest } = props;
    const inputRef = React.useRef<HTMLInputElement>(null);

    const mergedRef = React.useCallback(
      (node: HTMLInputElement | null) => {
        (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = node;
        if (typeof forwardedRef === 'function') forwardedRef(node);
        else if (forwardedRef) forwardedRef.current = node;
      },
      [forwardedRef],
    );

    const handleChange = React.useCallback<CreditCardInputChangeHandler>(
      (event) => {
        const input = event.target as HTMLInputElement;
        const cursorPos = input.selectionStart ?? 0;
        const prevValue = input.value;

        const dc = digitsBeforeCursor(prevValue, cursorPos);
        const formatted = formatExpiry(prevValue);

        input.value = formatted;

        const newCursor = cursorAfterFormat(formatted, dc);
        requestAnimationFrame(() => {
          input.setSelectionRange(newCursor, newCursor);
        });

        onChange?.(event);
      },
      [onChange],
    );

    const formattedDefault =
      defaultValue != null ? formatExpiry(String(defaultValue)) : undefined;
    const formattedValue =
      value != null ? formatExpiry(String(value)) : undefined;

    return (
      <CreditCardInput
        inputMode="numeric"
        maxLength={5}
        placeholder="MM/YY"
        autoComplete="cc-exp"
        {...rest}
        defaultValue={formattedDefault}
        value={formattedValue}
        onChange={handleChange}
        ref={mergedRef}
        className={classNames('fui-CreditCardExpiry', rest.className)}
      />
    );
  },
);
CreditCardExpiry.displayName = 'CreditCardExpiry';

// ---------------------------------------------------------------------------
// CVV — CVV code input field
// ---------------------------------------------------------------------------

interface CreditCardCVVProps extends CreditCardInputProps {}

const CreditCardCVV = React.forwardRef<HTMLInputElement, CreditCardCVVProps>(
  function CreditCardCVV(props, forwardedRef) {
    const { cardType } = useCreditCardContext();
    const codeInfo = cardType ? creditCardType.getTypeInfo(cardType)?.code : null;
    const cvcSize = codeInfo?.size ?? 3;

    return (
      <CreditCardInput
        inputMode="numeric"
        type="password"
        maxLength={cvcSize}
        placeholder={'0'.repeat(cvcSize)}
        autoComplete="cc-csc"
        {...props}
        ref={forwardedRef}
        className={classNames('fui-CreditCardCVV', props.className)}
      />
    );
  },
);
CreditCardCVV.displayName = 'CreditCardCVV';

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  CreditCardBackContent,
  CreditCardBrand,
  CreditCardCVV,
  CreditCardErrors,
  CreditCardExpiry,
  CreditCardField,
  CreditCardFieldError,
  CreditCardFieldGroup,
  CreditCardFieldLabel,
  CreditCardFieldset,
  CreditCardFrontFooter,
  CreditCardFrontHeader,
  CreditCardInput,
  CreditCardLastFour,
  CreditCardLogo,
  CreditCardMagStripe,
  CreditCardNumber,
  CreditCardTitle,
};
export type {
  CreditCardBackContentProps,
  CreditCardBackContentState,
  CreditCardBrandProps,
  CreditCardBrandState,
  CreditCardCVVProps,
  CreditCardErrorsProps,
  CreditCardExpiryProps,
  CreditCardFieldErrorProps,
  CreditCardFieldGroupProps,
  CreditCardFieldGroupState,
  CreditCardFieldLabelProps,
  CreditCardFieldProps,
  CreditCardFieldsetProps,
  CreditCardFrontFooterProps,
  CreditCardFrontFooterState,
  CreditCardFrontHeaderProps,
  CreditCardFrontHeaderState,
  CreditCardInputProps,
  CreditCardLastFourProps,
  CreditCardLastFourState,
  CreditCardLogoProps,
  CreditCardLogoState,
  CreditCardMagStripeProps,
  CreditCardMagStripeState,
  CreditCardNumberProps,
  CreditCardTitleProps,
  CreditCardTitleState,
};

