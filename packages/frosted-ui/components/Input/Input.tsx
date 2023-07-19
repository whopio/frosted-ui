import {
  faExclamationCircle,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/classnames';
import { IconDefinition } from '../../lib/icon-types';
import { Size } from '../../lib/shared-component-types';
import { Icon } from '../Icon';
import { Label, LabelProps } from '../Label';

export type InputSize = Extract<Size, 'sm' | 'md' | 'lg'>;
export const InputSizes: { [key: string]: InputSize } = {
  Small: 'sm',
  Medium: 'md',
  Large: 'lg',
};

export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'size' | 'disabled' | 'readOnly'
  > {
  label?: LabelProps;
  name?: string;
  size?: InputSize;
  placeholder?: string;
  isDisabled?: boolean;
  leftIcon?: IconDefinition;
  leftText?: string;
  messageIcon?: boolean;
  helpMessage?: string;
  errorMessage?: string;
  isReadOnly?: boolean;
  className?: string;
  wrapperClassName?: string;
  leftIconClassName?: string;
  /** This is used for the number input being placed directly in the input */
  rightElementSlot?: React.ReactNode;
}

const inputStyles =
  'bg-whop-background block w-full appearance-none pl-3 pr-3 border-whop-stroke-dark rounded-md shadow-sm focus-within:border-whop-field-highlight focus-within:ring-whop-field-highlight/30 border transition focus-within:outline-none outline-none focus-within:ring';

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    name,
    className,
    wrapperClassName,
    leftIconClassName,
    size = 'md',
    placeholder,
    isDisabled = false,
    leftIcon,
    leftText,
    messageIcon = true,
    helpMessage,
    errorMessage,
    isReadOnly = false,
    rightElementSlot,
    ...props
  },
  ref,
) {
  return (
    <div className={cn('h-fit w-full', wrapperClassName)}>
      {label && <Label wrapperClassName="mb-2" {...label} />}
      <div
        className={cn(
          'relative',
          { [inputStyles]: !leftIcon && leftText },
          'flex items-center',
          {
            '!border-whop-error-red focus-within:!ring-whop-error-red/30':
              !!errorMessage,
          },
          {
            'bg-whop-hover cursor-not-allowed opacity-75': isDisabled,
          },
          {
            'w-full': !className?.includes('w-'),
          },
        )}
      >
        {leftIcon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="sm:text-sm">
              <Icon
                icon={leftIcon}
                className={cn(
                  'text-whop-dark-gray/[75%] absolute top-1/2 h-4 -translate-y-1/2',
                  {
                    'h-[15px] w-[15px]': size === 'sm',
                    'h-[16px] w-[16px]': size === 'md' || size === 'lg',
                  },
                  leftIconClassName,
                )}
              />
            </span>
          </div>
        )}
        {leftText && !leftIcon && (
          <label
            className={cn(
              'text-whop-dark-gray text-text1 mr-1 select-none w-fit max-w-[128px] whitespace-nowrap overflow-x-auto flex flex-row-reverse',
            )}
            htmlFor={name}
          >
            {leftText}
          </label>
        )}
        {rightElementSlot && rightElementSlot}
        <input
          data-hj-allow={props.type == 'password' ? undefined : 'true'}
          ref={ref}
          name={name}
          id={name}
          placeholder={placeholder}
          type="text"
          readOnly={isReadOnly}
          disabled={isDisabled}
          autoComplete="off"
          spellCheck="false"
          autoCorrect="off"
          className={cn(
            { [inputStyles]: !(!leftIcon && leftText) },
            'placeholder:text-whop-dark-gray/[50%] text-whop-black text-text1 bg-whop-background outline-none',
            {
              'h-8': size === 'sm',
              'h-10': size === 'md',
              'h-12': size === 'lg',
            },
            { 'rounded-md': !className?.includes('rounded') },
            { 'w-full': !className?.includes('w-') },
            {
              'pl-[34px]': !!leftIcon,
            },
            {
              '!border-whop-error-red focus:!ring-whop-error-red/30':
                !!errorMessage,
            },
            {
              'bg-whop-hover cursor-not-allowed opacity-75': isDisabled,
            },
            className,
          )}
          {...props}
        />
      </div>
      {(errorMessage || helpMessage) && (
        <div
          className={cn(
            'mt-2 flex items-start gap-1 text-xs',
            { 'opacity-75': isDisabled },
            {
              'text-whop-error-red ': !!errorMessage,
              'text-whop-dark-gray': !!helpMessage,
            },
          )}
        >
          {messageIcon && (
            <Icon
              icon={helpMessage ? faInfoCircle : faExclamationCircle}
              className="mt-px h-3"
            />
          )}
          <div className="text-text5 flex-wrap">
            {errorMessage || helpMessage}
          </div>
        </div>
      )}
    </div>
  );
});
