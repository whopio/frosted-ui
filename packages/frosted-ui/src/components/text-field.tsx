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

import type { GetPropDefTypes, MarginProps, PaddingProps, PropsWithoutColor } from '../helpers';

type TextFieldContextValue = GetPropDefTypes<typeof textFieldPropDefs>;
const TextFieldContext = React.createContext<TextFieldContextValue | undefined>(undefined);

interface TextFieldRootProps extends PropsWithoutColor<'div'>, MarginProps, TextFieldContextValue {}

const TextFieldRoot = (props: TextFieldRootProps) => {
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
      className={classNames('fui-TextFieldRoot', className, withMarginProps(marginProps))}
      onPointerDown={composeEventHandlers(rootProps.onPointerDown, (event) => {
        const target = event.target as HTMLElement;
        if (target.closest('input, button, a')) return;

        const input = event.currentTarget.querySelector('.fui-TextFieldInput') as HTMLInputElement | null;
        if (!input) return;

        const position = input.compareDocumentPosition(target);
        const targetIsBeforeInput = (position & Node.DOCUMENT_POSITION_PRECEDING) !== 0;
        const cursorPosition = targetIsBeforeInput ? 0 : input.value.length;

        requestAnimationFrame(() => {
          input.setSelectionRange(cursorPosition, cursorPosition);
          input.focus();
        });
      })}
    >
      <TextFieldContext.Provider value={{ size, variant, color }}>{children}</TextFieldContext.Provider>
    </div>
  );
};
TextFieldRoot.displayName = 'TextFieldRoot';

type TextFieldSlotElement = React.ElementRef<'div'>;
type TextFieldSlotOwnProps = GetPropDefTypes<typeof textFieldSlotPropDefs>;
interface TextFieldSlotProps extends PropsWithoutColor<'div'>, PaddingProps, TextFieldSlotOwnProps {}
const TextFieldSlot = React.forwardRef<TextFieldSlotElement, TextFieldSlotProps>((props, forwardedRef) => {
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
        'fui-TextFieldSlot',
        className,
        withBreakpoints(context?.size, 'fui-r-size'),
        withBreakpoints(gap, 'fui-r-gap'),
        withPaddingProps(paddingProps),
      )}
    />
  );
});
TextFieldSlot.displayName = 'TextFieldSlot';

type TextFieldInputElement = React.ElementRef<'input'>;
type TextFieldInputOwnProps = GetPropDefTypes<typeof textFieldPropDefs>;
interface TextFieldInputProps extends Omit<PropsWithoutColor<'input'>, 'size'>, MarginProps, TextFieldInputOwnProps {}
const TextFieldInput = React.forwardRef<TextFieldInputElement, TextFieldInputProps>((props, forwardedRef) => {
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
          'fui-TextFieldInput',
          className,
          withBreakpoints(size, 'fui-r-size'),
          `fui-variant-${variant}`,
        )}
      />
      <div data-accent-color={color} className="fui-TextFieldChrome" />
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

export { TextFieldInput as Input, TextFieldRoot as Root, TextFieldSlot as Slot };
export type { TextFieldInputProps as InputProps, TextFieldRootProps as RootProps, TextFieldSlotProps as SlotProps };
