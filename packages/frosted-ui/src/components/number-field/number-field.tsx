'use client';

import { NumberField as NumberFieldPrimitive } from '@base-ui/react/number-field';
import classNames from 'classnames';
import * as React from 'react';
import { IconButton } from '../icon-button';
import { numberFieldPropDefs, numberFieldSlotPropDefs } from './number-field.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';

type NumberFieldOwnProps = GetPropDefTypes<typeof numberFieldPropDefs>;

type NumberFieldContextValue = NumberFieldOwnProps;
const NumberFieldContext = React.createContext<NumberFieldContextValue | undefined>(undefined);

// Re-export Base UI types for consumers
type NumberFieldRootChangeEventDetails = NumberFieldPrimitive.Root.ChangeEventDetails;
type NumberFieldRootCommitEventDetails = NumberFieldPrimitive.Root.CommitEventDetails;

interface NumberFieldRootProps
  extends Omit<React.ComponentProps<typeof NumberFieldPrimitive.Root>, 'className' | 'render'>, NumberFieldOwnProps {
  className?: string;
}

const NumberFieldRoot = (props: NumberFieldRootProps) => {
  const {
    children,
    className,
    size = numberFieldPropDefs.size.default,
    variant = numberFieldPropDefs.variant.default,
    color = numberFieldPropDefs.color.default,
    buttonLayout = numberFieldPropDefs.buttonLayout.default,
    ...rootProps
  } = props;

  const hasButtons = buttonLayout !== 'none';

  return (
    <NumberFieldPrimitive.Root
      {...rootProps}
      role="group"
      className={classNames(
        'fui-NumberFieldRoot',
        `fui-r-size-${size}`,
        `fui-button-layout-${buttonLayout}`,
        className,
      )}
    >
      <NumberFieldContext.Provider
        value={React.useMemo(() => ({ size, variant, color, buttonLayout }), [size, variant, color, buttonLayout])}
      >
        {hasButtons && buttonLayout === 'split' && <NumberFieldDecrement />}
        {children}
        {hasButtons &&
          (buttonLayout === 'trailing' ? (
            <div className="fui-NumberFieldButtonGroup">
              <NumberFieldDecrement />
              <NumberFieldIncrement />
            </div>
          ) : (
            <NumberFieldIncrement />
          ))}
      </NumberFieldContext.Provider>
    </NumberFieldPrimitive.Root>
  );
};
NumberFieldRoot.displayName = 'NumberFieldRoot';

type NumberFieldSlotElement = React.ElementRef<'div'>;
type NumberFieldSlotOwnProps = GetPropDefTypes<typeof numberFieldSlotPropDefs>;
interface NumberFieldSlotProps extends PropsWithoutColor<'div'>, NumberFieldSlotOwnProps {}

const NumberFieldSlot = React.forwardRef<NumberFieldSlotElement, NumberFieldSlotProps>((props, forwardedRef) => {
  const { className, color = numberFieldSlotPropDefs.color.default, ...slotProps } = props;
  const context = React.useContext(NumberFieldContext);
  return (
    <div
      data-accent-color={color}
      {...slotProps}
      ref={forwardedRef}
      className={classNames('fui-NumberFieldSlot', className, `fui-r-size-${context?.size}`)}
    />
  );
});
NumberFieldSlot.displayName = 'NumberFieldSlot';

interface NumberFieldInputProps
  extends
    Omit<React.ComponentProps<typeof NumberFieldPrimitive.Input>, 'className' | 'render' | 'size'>,
    NumberFieldOwnProps {
  className?: string;
}

const NumberFieldInput = React.forwardRef<HTMLInputElement, NumberFieldInputProps>((props, forwardedRef) => {
  const context = React.useContext(NumberFieldContext);
  const {
    className,
    size = context?.size ?? numberFieldPropDefs.size.default,
    variant = context?.variant ?? numberFieldPropDefs.variant.default,
    color = context?.color ?? numberFieldPropDefs.color.default,
    ...inputProps
  } = props;

  return (
    <>
      <NumberFieldPrimitive.Input
        data-accent-color={color}
        {...inputProps}
        ref={forwardedRef}
        className={classNames(
          'fui-NumberFieldInput',
          'fui-TextFieldInput',
          className,
          `fui-r-size-${size}`,
          `fui-variant-${variant}`,
        )}
      />
      <div data-accent-color={color} className="fui-TextFieldChrome" />
    </>
  );
});
NumberFieldInput.displayName = 'NumberFieldInput';

interface NumberFieldDecrementProps extends Omit<
  React.ComponentProps<typeof NumberFieldPrimitive.Decrement>,
  'className' | 'render'
> {
  className?: string;
}

const NumberFieldDecrement = (props: NumberFieldDecrementProps) => {
  const { className, children, ...decrementProps } = props;
  const context = React.useContext(NumberFieldContext);

  return (
    <NumberFieldPrimitive.Decrement
      {...decrementProps}
      render={(primitiveProps) => {
        const {
          className: primitiveClassName,
          disabled,
          tabIndex,
          ...restProps
        } = primitiveProps as typeof primitiveProps & { disabled?: boolean; tabIndex?: number };
        return (
          <IconButton
            {...restProps}
            disabled={disabled}
            tabIndex={tabIndex}
            size={context?.size}
            variant={context?.variant}
            color={context?.color}
            className={classNames('fui-NumberFieldButton', 'fui-NumberFieldDecrement', className, primitiveClassName)}
          >
            {children ?? <MinusIcon />}
          </IconButton>
        );
      }}
    />
  );
};
NumberFieldDecrement.displayName = 'NumberFieldDecrement';

interface NumberFieldIncrementProps extends Omit<
  React.ComponentProps<typeof NumberFieldPrimitive.Increment>,
  'className' | 'render'
> {
  className?: string;
}

const NumberFieldIncrement = (props: NumberFieldIncrementProps) => {
  const { className, children, ...incrementProps } = props;
  const context = React.useContext(NumberFieldContext);

  return (
    <NumberFieldPrimitive.Increment
      {...incrementProps}
      render={(primitiveProps) => {
        const {
          className: primitiveClassName,
          disabled,
          tabIndex,
          ...restProps
        } = primitiveProps as typeof primitiveProps & { disabled?: boolean; tabIndex?: number };
        return (
          <IconButton
            {...restProps}
            disabled={disabled}
            tabIndex={tabIndex}
            size={context?.size}
            variant={context?.variant}
            color={context?.color}
            className={classNames('fui-NumberFieldButton', 'fui-NumberFieldIncrement', className, primitiveClassName)}
          >
            {children ?? <PlusIcon />}
          </IconButton>
        );
      }}
    />
  );
};
NumberFieldIncrement.displayName = 'NumberFieldIncrement';

// Default icons
function MinusIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M2 5H8" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M2 5H8M5 2V8" />
    </svg>
  );
}

export {
  NumberFieldDecrement as Decrement,
  NumberFieldIncrement as Increment,
  NumberFieldInput as Input,
  NumberFieldRoot as Root,
  NumberFieldSlot as Slot,
};

export type {
  NumberFieldDecrementProps as DecrementProps,
  NumberFieldIncrementProps as IncrementProps,
  NumberFieldInputProps as InputProps,
  NumberFieldRootChangeEventDetails as RootChangeEventDetails,
  NumberFieldRootCommitEventDetails as RootCommitEventDetails,
  NumberFieldRootProps as RootProps,
  NumberFieldSlotProps as SlotProps,
};
