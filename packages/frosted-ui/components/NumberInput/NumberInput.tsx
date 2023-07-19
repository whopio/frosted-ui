'use client';

import {
  faCaretDown,
  faCaretUp,
  faPercent,
  faUsd,
} from '@fortawesome/free-solid-svg-icons';
import {
  ChangeEvent,
  ChangeEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { cn } from '../../lib/classnames';
import { Icon } from '../Icon';
import { Input, InputProps } from '../Input';

export type NumberInputVariant = 'default' | 'price' | 'percent';
export const NumberInputVariants: { [key: string]: NumberInputVariant } = {
  Default: 'default',
  Price: 'price',
  Percent: 'percent',
};

export interface NumberInputProps extends Exclude<InputProps, 'type'> {
  variant?: NumberInputVariant;
}

export const NumberInput = ({
  variant = 'default',
  id,
  defaultValue,
  value,
  onChange,
  size,
  ...props
}: NumberInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const step =
    variant === 'price' ? '0.01' : variant === 'percent' ? '0.1' : '1';
  const initialValue = parseNumberValue({ value, step });
  const initialDefaultValue = parseNumberValue({ value: defaultValue, step });
  const [parsedValue, setParsedValue] = useState<string | undefined>(
    initialValue !== undefined ? initialValue : initialDefaultValue,
  );

  const handleSetValue = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      setParsedValue(event.target.value);
    },
    [],
  );
  type PartialChangeEvent = {
    target: HTMLInputElement;
  };

  const handleIncrement = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.stepUp();
      const syntheticEvent: PartialChangeEvent = {
        target: inputRef.current,
      };
      onChange && onChange(syntheticEvent as ChangeEvent<HTMLInputElement>);
    }
  }, [onChange]);

  const handleDecrement = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.stepDown();
      const syntheticEvent: PartialChangeEvent = {
        target: inputRef.current,
      };
      onChange && onChange(syntheticEvent as ChangeEvent<HTMLInputElement>);
    }
  }, [onChange]);

  // Only parse the value on blur because the cursor moves to the end of the input (after the decimal places) when the value is parsed on change
  const handleSetParsedValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setParsedValue(parseNumberValue({ value: event.target.value, step }));
    },
    [step],
  );

  useEffect(() => {
    const parsed = parseNumberValue({ value, step });
    setParsedValue(parsed);
  }, [step, value]);

  useEffect(() => {
    if (onChange) {
      onChange({
        target: {
          value: parsedValue,
        },
      } as ChangeEvent<HTMLInputElement>);
    }
  }, [onChange, parsedValue]);

  return (
    <div className="group relative">
      <Input
        ref={inputRef}
        id={id}
        type="number"
        step={step}
        leftIcon={
          variant === 'percent'
            ? faPercent
            : variant === 'price'
            ? faUsd
            : undefined
        }
        size={size}
        rightElementSlot={
          <div
            className={cn(
              'hidden overflow-hidden rounded-r-md border-b border-r border-t border-transparent transition',
              'group-hover:absolute group-hover:bottom-[0px] group-hover:right-0 group-hover:top-[0px] group-hover:flex group-hover:flex-col',
            )}
          >
            <button
              className="hover:bg-whop-hover active:bg-whop-hover-press flex h-[50%] items-end justify-center px-[7.5px] transition"
              onClick={handleIncrement}
            >
              <Icon icon={faCaretUp} className="text-whop-dark-gray h-3 w-3" />
            </button>
            <button
              className="hover:bg-whop-hover active:bg-whop-hover-press flex h-[50%] items-start justify-center px-[7.5px] transition"
              onClick={handleDecrement}
            >
              <Icon
                icon={faCaretDown}
                className="text-whop-dark-gray h-3 w-3"
              />
            </button>
          </div>
        }
        {...props}
        defaultValue={initialDefaultValue}
        value={parsedValue}
        onChange={handleSetValue}
        onBlur={handleSetParsedValue}
      />
    </div>
  );
};

const parseNumberValue = ({
  value,
  step,
}: {
  value: string | number | readonly string[] | undefined;
  step: string;
}): string | undefined => {
  if (value === undefined || value === null || typeof value === 'object') {
    return undefined;
  }

  const floatValue = typeof value === 'string' ? parseFloat(value) : value;
  const decimalPlaces = step === '0.01' ? 2 : step === '0.1' ? 1 : 0;

  return floatValue.toFixed(decimalPlaces);
};
