import * as React from 'react';
import { IconProps } from './types';

export const PinFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PinFilled16"
      {...props}
    >
      <path
        d="M9.95 1C11.084 1 12 1.918 12 3.05v3.03c0 .143.039.285.11.41l1.41 2.433c.791 1.366-.195 3.077-1.774 3.077H8.75v2.25c0 .414-.336.75-.75.75-.415 0-.75-.336-.75-.75V12H4.255c-1.579 0-2.565-1.71-1.774-3.077l1.41-2.434c.071-.124.11-.266.11-.41V3.05C4 1.919 4.918 1 6.05 1h3.9z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PinFilled16.category = 'Interface General';

export default PinFilled16;
