'use client';

import { composeEventHandlers } from '@radix-ui/primitive';
import classNames from 'classnames';
import * as React from 'react';
import {
  extractMarginProps,
  extractPaddingProps,
  withBreakpoints,
  withMarginProps,
  withPaddingProps,
} from '../helpers';
import { textFieldPropDefs, textFieldSlotPropDefs } from './text-field.props';

import type {
  GetPropDefTypes,
  MarginProps,
  PaddingProps,
  PropsWithoutRefOrColor,
} from '../helpers';

type TextFieldContextValue = GetPropDefTypes<typeof textFieldPropDefs>;
const TextFieldContext = React.createContext<TextFieldContextValue | undefined>(
  undefined,
);

type TextFieldRootElement = React.ElementRef<'div'>;
interface TextFieldRootProps
  extends PropsWithoutRefOrColor<'div'>,
    MarginProps,
    TextFieldContextValue {}
const TextFieldRoot = React.forwardRef<
  TextFieldRootElement,
  TextFieldRootProps
>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const {
    children,
    className,
    size = textFieldPropDefs.size.default,
    variant = textFieldPropDefs.variant.default,
    color = textFieldPropDefs.color.default,
    ...rootProps
  } = marginRest;
  return (
    <div
      {...rootProps}
      ref={forwardedRef}
      className={classNames(
        'rt-TextFieldRoot',
        className,
        withMarginProps(marginProps),
      )}
      onPointerDown={composeEventHandlers(rootProps.onPointerDown, (event) => {
        const target = event.target as HTMLElement;
        if (target.closest('input, button, a')) return;

        const input = event.currentTarget.querySelector(
          '.rt-TextFieldInput',
        ) as HTMLInputElement | null;
        if (!input) return;

        const position = input.compareDocumentPosition(target);
        const targetIsBeforeInput =
          (position & Node.DOCUMENT_POSITION_PRECEDING) !== 0;
        const cursorPosition = targetIsBeforeInput ? 0 : input.value.length;

        requestAnimationFrame(() => {
          input.setSelectionRange(cursorPosition, cursorPosition);
          input.focus();
        });
      })}
    >
      <TextFieldContext.Provider value={{ size, variant, color }}>
        {children}
      </TextFieldContext.Provider>
    </div>
  );
});
TextFieldRoot.displayName = 'TextFieldRoot';

type TextFieldSlotElement = React.ElementRef<'div'>;
type TextFieldSlotOwnProps = GetPropDefTypes<typeof textFieldSlotPropDefs>;
interface TextFieldSlotProps
  extends PropsWithoutRefOrColor<'div'>,
    PaddingProps,
    TextFieldSlotOwnProps {}
const TextFieldSlot = React.forwardRef<
  TextFieldSlotElement,
  TextFieldSlotProps
>((props, forwardedRef) => {
  const { rest: paddingRest, ...paddingProps } = extractPaddingProps(props);
  const {
    className,
    color = textFieldSlotPropDefs.color.default,
    gap = textFieldSlotPropDefs.gap.default,
    ...slotProps
  } = paddingRest;
  const context = React.useContext(TextFieldContext);
  return (
    <div
      data-accent-color={color}
      {...slotProps}
      ref={forwardedRef}
      className={classNames(
        'rt-TextFieldSlot',
        className,
        withBreakpoints(context?.size, 'rt-r-size'),
        withBreakpoints(gap, 'rt-r-gap'),
        withPaddingProps(paddingProps),
      )}
    />
  );
});
TextFieldSlot.displayName = 'TextFieldSlot';

type TextFieldInputElement = React.ElementRef<'input'>;
type TextFieldInputOwnProps = GetPropDefTypes<typeof textFieldPropDefs>;
interface TextFieldInputProps
  extends Omit<PropsWithoutRefOrColor<'input'>, 'size'>,
    MarginProps,
    TextFieldInputOwnProps {}
const TextFieldInput = React.forwardRef<
  TextFieldInputElement,
  TextFieldInputProps
>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const context = React.useContext(TextFieldContext);
  const hasRoot = context !== undefined;
  const {
    className,
    size = context?.size ?? textFieldPropDefs.size.default,
    variant = context?.variant ?? textFieldPropDefs.variant.default,
    color = context?.color ?? textFieldPropDefs.color.default,
    ...inputProps
  } = marginRest;
  const input = (
    <>
      <input
        data-accent-color={color}
        spellCheck="false"
        {...inputProps}
        ref={forwardedRef}
        className={classNames(
          'rt-TextFieldInput',
          className,
          withBreakpoints(size, 'rt-r-size'),
          `rt-variant-${variant}`,
        )}
      />
      <div data-accent-color={color} className="rt-TextFieldChrome" />
    </>
  );

  return hasRoot ? (
    input
  ) : (
    <TextFieldRoot {...marginProps} size={size} variant={variant} color={color}>
      {input}
    </TextFieldRoot>
  );
});
TextFieldInput.displayName = 'TextFieldInput';

const TextField = Object.assign(
  {},
  {
    Root: TextFieldRoot,
    Slot: TextFieldSlot,
    Input: TextFieldInput,
  },
);

export { TextField, TextFieldInput, TextFieldRoot, TextFieldSlot };
export type { TextFieldInputProps, TextFieldRootProps, TextFieldSlotProps };
