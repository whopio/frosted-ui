'use client';
import {
  Indicator,
  CheckboxProps as RadixCheckboxProps,
  Root,
} from '@radix-ui/react-checkbox';
import { Root as Label } from '@radix-ui/react-label';
import { AnimatePresence, motion } from 'framer-motion';
import { useId } from 'react';
import { cn } from '../../lib/classnames';
import { ColorScheme, Size } from '../../lib/shared-component-types';

export type CheckboxSize = Extract<Size, 'md' | 'lg'>;
export const CheckboxSizes: { [key: string]: CheckboxSize } = {
  Medium: 'md',
  Large: 'lg',
};

export type CheckboxColorScheme = Extract<ColorScheme, 'brand' | 'black'>;
export const CheckboxColorSchemes: { [key: string]: CheckboxColorScheme } = {
  Brand: 'brand',
  Black: 'black',
};

export interface CheckboxProps {
  size?: CheckboxSize;
  colorScheme?: CheckboxColorScheme;
  wrapperClassName?: string;
  className?: string;
  iconClassName?: string;
  labelClassName?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  /** Label to the left of the checkbox */
  label?: string;
  /** Remove the check, path animation */
  removeMotion?: boolean;
  /** This is the intrinsic id prop, and will also link the label to the checkbox when clicking */
  id?: string;
}

export const Checkbox = ({
  size = 'md',
  colorScheme = 'brand',
  label,
  removeMotion = false,
  wrapperClassName,
  className,
  iconClassName,
  labelClassName,
  defaultChecked,
  checked,
  onCheckedChange,
  isDisabled = false,
  isRequired = false,
  name,
  value,
  id,
}: CheckboxProps & Omit<RadixCheckboxProps, 'disabled' | 'id'>) => {
  const defaultId = useId();

  console.log({
    checked,
    defaultChecked,
    shouldShow: checked === true || defaultChecked === true,
  });
  return (
    <div className={cn('flex items-center', wrapperClassName)}>
      <Root
        defaultChecked={defaultChecked}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={isDisabled}
        required={isRequired}
        name={name}
        value={value}
        className={cn(
          'text-whop-background flex appearance-none items-center justify-center border-2 outline-none',
          'disabled:cursor-not-allowed disabled:opacity-40',
          {
            'h-4 w-4 rounded-[2.25px]': size === 'md',
            'h-5 w-5 rounded-[3px]': size === 'lg',
          },
          {
            'data-[state=checked]:bg-whop-primary data-[state=indeterminate]:bg-whop-primary data-[state=checked]:border-whop-primary data-[state=indeterminate]:border-whop-primary':
              colorScheme === 'brand',
            'data-[state=checked]:bg-whop-black data-[state=indeterminate]:bg-whop-black data-[state=checked]:border-whop-black data-[state=indeterminate]:border-whop-black':
              colorScheme === 'black',
          },
          className,
        )}
        id={id || defaultId}
      >
        <Indicator className={cn('text-whop-background', iconClassName)}>
          {(checked === 'indeterminate' ||
            defaultChecked === 'indeterminate') && (
            <IndeterminateIcon
              className={cn({ 'h-5 w-5 stroke-2': size === 'lg' })}
            />
          )}
          {checked !== 'indeterminate' &&
            (removeMotion ? (
              <CheckIcon
                className={cn({ 'h-5 w-5 stroke-2': size === 'lg' })}
              />
            ) : (
              <MotionCheckIcon
                className={cn({ 'h-5 w-5 stroke-2 text-white': size === 'lg' })}
              />
            ))}
        </Indicator>
      </Root>
      {label && (
        <Label
          className={cn(
            'ml-3 cursor-pointer',
            { 'cursor-not-allowed opacity-40': isDisabled },
            {
              'text-text3 text-whop-black': size === 'md',
              'text-text1 text-whop-black': size === 'lg',
            },
            labelClassName,
          )}
          htmlFor={id || defaultId}
        >
          {label}
        </Label>
      )}
    </div>
  );
};

const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn('h-4 w-4', className)}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 8L6.83333 10.5L11.5 5.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IndeterminateIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn('h-4 w-4', className)}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 8H11"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
};
const MotionCheckIcon = ({ className }: { className?: string }) => {
  return (
    <AnimatePresence>
      <svg
        className={cn('h-4 w-4', className)}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M4.5 8L6.83333 10.5L11.5 5.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
          }}
          transition={{ type: 'spring', duration: 0.3 }}
          exit={{ pathLength: 0 }}
        />
      </svg>
    </AnimatePresence>
  );
};
