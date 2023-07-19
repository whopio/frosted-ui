'use client';

import { Switch as HeadlessSwitch } from '@headlessui/react';
import { cn } from '../../lib/classnames';
import { ColorScheme, Size } from '../../lib/shared-component-types';

type SwitchSize = Exclude<Size, 'xs' | 'xl'>;
export const SwitchSizes: { [key: string]: SwitchSize } = {
  Small: 'sm',
  Medium: 'md',
  Large: 'lg',
};

type SwitchColorScheme = Extract<
  ColorScheme,
  'black' | 'purple' | 'success-green'
>;
export const SwitchColorSchemes: { [key: string]: SwitchColorScheme } = {
  Purple: 'purple',
  'Success Green': 'success-green',
  Black: 'black',
};

export interface SwitchProps {
  checked: boolean;
  defaultChecked?: boolean;
  setChecked: (checked: boolean) => void;
  colorScheme?: SwitchColorScheme;
  size?: SwitchSize;
  label: string;
  isDisabled?: boolean;
  id?: string;
}

export const Switch = ({
  checked,
  defaultChecked,
  setChecked,
  size = 'md',
  colorScheme = 'black',
  label,
  isDisabled = false,
  id,
}: SwitchProps) => {
  return (
    // TODO: redo this component for full form functionality
    <HeadlessSwitch
      id={id}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={isDisabled}
      onChange={setChecked}
      className={cn(
        'bg-whop-stroke relative inline-flex items-center rounded-full border border-transparent',
        'focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring ui-disabled:opacity-40 ui-disabled:cursor-not-allowed',
        {
          'bg-whop-black': colorScheme === 'black' && checked,
          'bg-whop-success-green': colorScheme === 'success-green' && checked,
          'bg-whop-field-highlight': colorScheme === 'purple' && checked,
        },
        {
          'h-5 w-[36px]': size === 'sm',
          'h-6 w-11': size === 'md',
          'h-8 w-[60px]': size === 'lg',
        },
      )}
    >
      <span className="sr-only">{label}</span>
      <span
        className={cn(
          'inline-block transform rounded-full bg-white shadow-sm transition duration-75',
          {
            'h-[14px] w-[14px]': size === 'sm',
            'h-4 w-4': size === 'md',
            'h-[22px] w-[22px]': size === 'lg',
          },
          {
            'translate-x-[3px]': size === 'sm' && !checked,
            'translate-x-[18px]': size === 'sm' && checked,

            'translate-x-[4px]': size === 'md' && !checked,
            'translate-x-[23px]': size === 'md' && checked,

            'translate-x-[5px]': size === 'lg' && !checked,
            'translate-x-[32px]': size === 'lg' && checked,
          },
        )}
      />
    </HeadlessSwitch>
  );
};
