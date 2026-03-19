import * as React from 'react';
import { IconProps } from './types';

export const XMarkBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.00003 1.99997L16 16M30.0001 30L16 16M16 16L1.99999 30M16 16L30.0001 1.99999"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkBold32.category = 'Product Icons';

export default XMarkBold32;
