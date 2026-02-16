'use client';

import { NumberField as NumberFieldPrimitive } from '@base-ui/react/number-field';
import classNames from 'classnames';
import * as React from 'react';
import { IconButton } from '../icon-button';
import { numberFieldPropDefs, numberFieldSlotPropDefs } from './number-field.props';

import { composeEventHandlers, type GetPropDefTypes, type PropsWithoutColor } from '../../helpers';

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

  const handlePointerDown = React.useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest('input, button, a')) return;

    const input = event.currentTarget.querySelector('.fui-NumberFieldInput') as HTMLInputElement | null;
    if (!input) return;

    const position = input.compareDocumentPosition(target);
    const targetIsBeforeInput = (position & Node.DOCUMENT_POSITION_PRECEDING) !== 0;
    const cursorPosition = targetIsBeforeInput ? 0 : input.value.length;

    requestAnimationFrame(() => {
      const selectableTypes = ['text', 'search', 'url', 'tel', 'password'];
      if (selectableTypes.includes(input.type)) {
        input.setSelectionRange(cursorPosition, cursorPosition);
      }
      input.focus();
    });
  }, []);

  return (
    <NumberFieldPrimitive.Root
      {...rootProps}
      render={(primitiveProps) => (
        <div
          data-accent-color={color}
          {...primitiveProps}
          role="group"
          className={classNames(
            'fui-NumberFieldRoot',
            `fui-r-size-${size}`,
            `fui-variant-${variant}`,
            `fui-button-layout-${buttonLayout}`,
            className,
          )}
          onPointerDown={composeEventHandlers(primitiveProps.onPointerDown, handlePointerDown)}
        />
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
function MinusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.25 5.25C10.6642 5.25 11 5.58579 11 6C11 6.41421 10.6642 6.75 10.25 6.75H1.75C1.33579 6.75 1 6.41421 1 6C1 5.58579 1.33579 5.25 1.75 5.25H10.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6 1C6.41421 1 6.75 1.33579 6.75 1.75V5.25H10.25C10.6642 5.25 11 5.58579 11 6C11 6.41421 10.6642 6.75 10.25 6.75H6.75V10.25C6.75 10.6642 6.41421 11 6 11C5.58579 11 5.25 10.6642 5.25 10.25V6.75H1.75C1.33579 6.75 1 6.41421 1 6C1 5.58579 1.33579 5.25 1.75 5.25H5.25V1.75C5.25 1.33579 5.58579 1 6 1Z"
        fill="currentColor"
      />
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
