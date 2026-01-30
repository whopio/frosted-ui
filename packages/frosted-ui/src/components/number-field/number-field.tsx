'use client';

import { NumberField as NumberFieldPrimitive } from '@base-ui/react/number-field';
import classNames from 'classnames';
import * as React from 'react';
import { IconButton } from '../icon-button';
import { numberFieldPropDefs } from './number-field.props';

import type { GetPropDefTypes } from '../../helpers';

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

  return (
    <NumberFieldPrimitive.Root {...rootProps} className={classNames('fui-NumberFieldRoot', className)}>
      <NumberFieldContext.Provider
        value={React.useMemo(() => ({ size, variant, color, buttonLayout }), [size, variant, color, buttonLayout])}
      >
        {children}
      </NumberFieldContext.Provider>
    </NumberFieldPrimitive.Root>
  );
};
NumberFieldRoot.displayName = 'NumberFieldRoot';

interface NumberFieldGroupProps extends Omit<
  React.ComponentProps<typeof NumberFieldPrimitive.Group>,
  'className' | 'render'
> {
  className?: string;
}

const NumberFieldGroup = (props: NumberFieldGroupProps) => {
  const { className, children, ...groupProps } = props;
  const context = React.useContext(NumberFieldContext);
  const layout = context?.buttonLayout ?? 'split';
  const hasButtons = layout !== 'none';

  return (
    <NumberFieldPrimitive.Group
      {...groupProps}
      data-button-layout={layout}
      className={classNames('fui-NumberFieldGroup', className)}
    >
      {hasButtons && layout === 'split' && <NumberFieldDecrement />}
      {children}
      {hasButtons &&
        (layout === 'stacked' ? (
          <div className="fui-NumberFieldButtonGroup">
            <NumberFieldIncrement />
            <NumberFieldDecrement />
          </div>
        ) : layout === 'trailing' ? (
          <div className="fui-NumberFieldButtonGroup">
            <NumberFieldDecrement />
            <NumberFieldIncrement />
          </div>
        ) : (
          <NumberFieldIncrement />
        ))}
    </NumberFieldPrimitive.Group>
  );
};
NumberFieldGroup.displayName = 'NumberFieldGroup';

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
    <IconButton
      render={<NumberFieldPrimitive.Decrement {...decrementProps} />}
      size={context?.size}
      variant={context?.variant}
      color={context?.color}
      className={classNames('fui-NumberFieldButton', 'fui-NumberFieldDecrement', className)}
    >
      {children ?? <MinusIcon />}
    </IconButton>
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
    <IconButton
      render={<NumberFieldPrimitive.Increment {...incrementProps} />}
      nativeButton={false}
      size={context?.size}
      variant={context?.variant}
      color={context?.color}
      className={classNames('fui-NumberFieldButton', 'fui-NumberFieldIncrement', className)}
    >
      {children ?? <PlusIcon />}
    </IconButton>
  );
};
NumberFieldIncrement.displayName = 'NumberFieldIncrement';

interface NumberFieldScrubAreaProps extends Omit<
  React.ComponentProps<typeof NumberFieldPrimitive.ScrubArea>,
  'className' | 'render'
> {
  className?: string;
}

const NumberFieldScrubArea = (props: NumberFieldScrubAreaProps) => {
  const { className, ...scrubAreaProps } = props;
  return (
    <NumberFieldPrimitive.ScrubArea {...scrubAreaProps} className={classNames('fui-NumberFieldScrubArea', className)} />
  );
};
NumberFieldScrubArea.displayName = 'NumberFieldScrubArea';

interface NumberFieldScrubAreaCursorProps extends Omit<
  React.ComponentProps<typeof NumberFieldPrimitive.ScrubAreaCursor>,
  'className' | 'render'
> {
  className?: string;
}

const NumberFieldScrubAreaCursor = (props: NumberFieldScrubAreaCursorProps) => {
  const { className, children, ...cursorProps } = props;
  return (
    <NumberFieldPrimitive.ScrubAreaCursor
      {...cursorProps}
      className={classNames('fui-NumberFieldScrubAreaCursor', className)}
    >
      {children ?? <ScrubCursorIcon />}
    </NumberFieldPrimitive.ScrubAreaCursor>
  );
};
NumberFieldScrubAreaCursor.displayName = 'NumberFieldScrubAreaCursor';

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

function ScrubCursorIcon() {
  return (
    <svg
      width="26"
      height="14"
      viewBox="0 0 24 14"
      fill="currentColor"
      stroke="white"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M19.5 5.5L6.49737 5.51844V2L1 6.9999L6.5 12L6.49737 8.5L19.5 8.5V12L25 6.9999L19.5 2V5.5Z" />
    </svg>
  );
}

export {
  NumberFieldDecrement as Decrement,
  NumberFieldGroup as Group,
  NumberFieldIncrement as Increment,
  NumberFieldInput as Input,
  NumberFieldRoot as Root,
  NumberFieldScrubArea as ScrubArea,
  NumberFieldScrubAreaCursor as ScrubAreaCursor,
};

export type {
  NumberFieldDecrementProps as DecrementProps,
  NumberFieldGroupProps as GroupProps,
  NumberFieldIncrementProps as IncrementProps,
  NumberFieldInputProps as InputProps,
  NumberFieldRootChangeEventDetails as RootChangeEventDetails,
  NumberFieldRootCommitEventDetails as RootCommitEventDetails,
  NumberFieldRootProps as RootProps,
  NumberFieldScrubAreaCursorProps as ScrubAreaCursorProps,
  NumberFieldScrubAreaProps as ScrubAreaProps,
};
