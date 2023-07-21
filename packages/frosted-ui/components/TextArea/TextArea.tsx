import {
  faExclamationCircle,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import React, { TextareaHTMLAttributes } from 'react';
import { cn } from '../../lib/classnames';
import { Icon } from '../Icon';
import { Label, LabelProps } from '../Label';

export interface TextAreaProps
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'disabled' | 'required'
  > {
  name: string;
  placeholder?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  label?: LabelProps;
  value?: string;
  messageIcon?: boolean;
  errorMessage?: string;
  helpMessage?: string;
  resizable?: boolean;
  maxLength?: number | undefined;
  className?: string;
  wrapperClassName?: string;
}

export const TextArea = ({
  name,
  placeholder,
  value,
  onChange,
  maxLength,
  label,
  isDisabled = false,
  isRequired = false,
  messageIcon = true,
  errorMessage,
  helpMessage,
  resizable = true,
  className,
  wrapperClassName,
  ...props
}: TextAreaProps) => {
  return (
    <div className={cn(wrapperClassName)}>
      {label && <Label wrapperClassName="mb-2" {...label} />}
      <textarea
        name={name}
        className={cn(
          'bg-whop-background text-whop-black text-text1 w-full appearance-none rounded-md border px-[10px] py-3 shadow-sm transition',
          'border-whop-stroke-dark focus:border-whop-field-highlight focus:ring-whop-field-highlight/30 border outline-none transition focus:outline-none focus:ring',
          {
            '!border-whop-error-red focus:!ring-whop-error-red/30':
              !!errorMessage,
          },
          {
            'resize-none': !resizable,
          },
          {
            'bg-whop-hover cursor-not-allowed opacity-75': isDisabled,
          },
          className,
        )}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        disabled={isDisabled}
        required={isRequired}
        {...props}
      />
      <div className="flex w-full justify-between">
        {(errorMessage || helpMessage) && (
          <div
            className={cn(
              'flex shrink-0 items-start',
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
                className="mt-px h-3 w-3"
              />
            )}
            <div className="text-text5 ml-1 flex-wrap">
              {errorMessage || helpMessage}
            </div>
          </div>
        )}
        {maxLength && (
          <span
            className={cn('text-text5 flex w-full justify-end', {
              'text-whop-error-red': value?.length === maxLength,
              'text-whop-dark-gray': (value?.length || 0) < maxLength,
            })}
          >
            {value?.length || 0} / {maxLength}
          </span>
        )}
      </div>
    </div>
  );
};
