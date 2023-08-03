'use client';

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import { cn } from '../../lib/classnames';
import { Input } from '../Input';

const allowedCharactersValues = ['alpha', 'numeric', 'alphanumeric'] as const;

export type AuthCodeProps = {
  allowedCharacters?: (typeof allowedCharactersValues)[number];
  ariaLabel?: string;
  autoFocus?: boolean;
  containerClassName?: string;
  isDisabled?: boolean;
  inputClassName?: string;
  isPassword?: boolean;
  length?: number;
  placeholder?: string;
  onChange?: (res: string) => void;
  onSuccess?: (res: string) => void;
};

type InputMode = 'text' | 'numeric';

type InputType = 'text' | 'tel' | 'password';

type InputProps = {
  type: InputType;
  inputMode: InputMode;
  pattern: string;
  min?: string;
  max?: string;
};

export type AuthCodeRef = {
  focus: () => void;
  clear: () => void;
};

const propsMap: { [key: string]: InputProps } = {
  alpha: {
    type: 'text',
    inputMode: 'text',
    pattern: '[a-zA-Z]{1}',
  },

  alphanumeric: {
    type: 'text',
    inputMode: 'text',
    pattern: '[a-zA-Z0-9]{1}',
  },

  numeric: {
    type: 'tel',
    inputMode: 'numeric',
    pattern: '[0-9]{1}',
    min: '0',
    max: '9',
  },
};

export const CodeInput = forwardRef<AuthCodeRef, AuthCodeProps>(
  (
    {
      allowedCharacters = 'alphanumeric',
      ariaLabel,
      autoFocus = true,
      containerClassName,
      isDisabled,
      inputClassName,
      isPassword = false,
      length = 6,
      placeholder,
      onChange,
      onSuccess,
    },
    ref,
  ) => {
    if (isNaN(length) || length < 1) {
      throw new Error('Length should be a number and greater than 0');
    }

    if (!allowedCharactersValues.some((value) => value === allowedCharacters)) {
      throw new Error(
        'Invalid value for allowedCharacters. Use alpha, numeric, or alphanumeric',
      );
    }

    const inputsRef = useRef<Array<HTMLInputElement>>([]);
    const inputProps = propsMap[allowedCharacters];

    useImperativeHandle(ref, () => ({
      focus: () => {
        if (inputsRef.current) {
          inputsRef.current[0].focus();
        }
      },
      clear: () => {
        if (inputsRef.current) {
          for (let i = 0; i < inputsRef.current.length; i++) {
            inputsRef.current[i].value = '';
          }
          inputsRef.current[0].focus();
        }
        sendResult();
      },
    }));

    useEffect(() => {
      if (autoFocus) {
        inputsRef.current[0].focus();
      }
    }, [autoFocus]);

    const sendResult = useCallback(() => {
      const res = inputsRef.current.map((input) => input.value).join('');
      if (res.length === length) {
        onSuccess && onSuccess(res);
      }
      onChange && onChange(res);
    }, [onChange, length, onSuccess]);

    const handleOnChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = e;
        const index = inputsRef.current.findIndex((input) => input === target);
        const nextInput = inputsRef.current[index + 1];
        if (target.value.length > 1) {
          e.target.value = target.value.charAt(0);
          if (nextInput) {
            (nextInput as HTMLInputElement).focus();
          }
        } else {
          if (target.value.match(inputProps.pattern)) {
            if (nextInput) {
              (nextInput as HTMLInputElement).focus();
            }
          } else {
            e.target.value = '';
          }
        }
        sendResult();
      },
      [inputProps.pattern, sendResult],
    );

    const handleOnKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        const { key } = e;
        const currentIndex = inputsRef.current.findIndex(
          (input) => input === e.target,
        );
        const target = e.target as HTMLInputElement;
        if (key === 'Backspace') {
          if (target.value === '') {
            if (inputsRef.current[currentIndex - 1]) {
              const t = inputsRef.current[currentIndex - 1];
              t.value = '';
              t.focus();
              e.preventDefault();
            }
          } else {
            target.value = '';
          }
          sendResult();
        }
        if (key === 'Delete') {
          if (target.value === '') {
            if (inputsRef.current[currentIndex + 1]) {
              const t = inputsRef.current[currentIndex + 1];
              t.value = '';
              t.focus();
              e.preventDefault();
            }
          } else {
            target.value = '';
          }
          sendResult();
        }
        if (key === 'ArrowLeft') {
          if (inputsRef.current[currentIndex - 1]) {
            const t = inputsRef.current[currentIndex - 1];
            t.focus();
            e.preventDefault();
          }
        }
        if (key === 'ArrowRight') {
          if (inputsRef.current[currentIndex + 1]) {
            const t = inputsRef.current[currentIndex + 1];
            t.focus();
            e.preventDefault();
          }
        }
      },
      [sendResult],
    );

    const handleOnFocus = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.select();
      },
      [],
    );

    const handleOnPaste = useCallback(
      (e: React.ClipboardEvent<HTMLInputElement>) => {
        const pastedValue = e.clipboardData.getData('Text');

        let currentInput = 0;

        for (let i = 0; i < pastedValue.length; i++) {
          if (currentInput >= length) {
            break;
          }
          const pastedCharacter = pastedValue.charAt(i);
          const currentValue = inputsRef.current[currentInput].value;
          if (currentValue) {
            i--;
            currentInput++;
            continue;
          }
          if (pastedCharacter.match(inputProps.pattern)) {
            inputsRef.current[currentInput].value = pastedCharacter;
            if (inputsRef.current[currentInput + 1]) {
              inputsRef.current[currentInput + 1].focus();
              currentInput++;
            }
          }
        }
        sendResult();

        e.preventDefault();
      },
      [inputProps.pattern, sendResult],
    );

    const refSetters = useMemo(
      () =>
        Array(length)
          .fill(0)
          .map((_, i) => (el: HTMLInputElement) => {
            console.log(el);
            inputsRef.current[i] = el;
          }),
      [length],
    );
    const inputs = useMemo(() => {
      return Array(length)
        .fill(0)
        .map((_, i) => (
          <Input
            key={i}
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown}
            onFocus={handleOnFocus}
            onPaste={handleOnPaste}
            {...inputProps}
            type={isPassword ? 'password' : inputProps.type}
            ref={refSetters[i]}
            maxLength={1}
            className={cn(
              'h-12 w-12 text-center font-mono text-xl font-medium',
              inputClassName,
            )}
            autoComplete={i === 0 ? 'one-time-code' : 'off'}
            aria-label={
              ariaLabel
                ? `${ariaLabel}. Character ${i + 1}.`
                : `Character ${i + 1}.`
            }
            // disabled={isDisabled}
            placeholder={placeholder}
          />
        ));
    }, [
      ariaLabel,
      handleOnChange,
      handleOnFocus,
      handleOnKeyDown,
      handleOnPaste,
      inputClassName,
      inputProps,
      isDisabled,
      isPassword,
      length,
      placeholder,
      refSetters,
    ]);

    return (
      <div
        className={cn('flex w-fit justify-center gap-2', containerClassName)}
      >
        {inputs}
      </div>
    );
  },
);

CodeInput.displayName = 'CodeInput';
