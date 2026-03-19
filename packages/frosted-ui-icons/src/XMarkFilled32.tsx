import * as React from 'react';
import { IconProps } from './types';

export const XMarkFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2.24988 2.25L16 16M29.75 29.75L16 16M16 16L2.2501 29.75M16 16L29.75 2.24998"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkFilled32.category = 'Product Icons';

export default XMarkFilled32;
