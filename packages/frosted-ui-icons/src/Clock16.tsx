import * as React from 'react';
import { IconProps } from './types';

export const Clock16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <circle
        cx="8"
        cy="8"
        r="7.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2499 10.25L7.75 8.5L7.75 4.0001"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Clock16;
