import * as React from 'react';
import { IconProps } from './types';

export const XMarkBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2.00003 1.99997L9.99996 9.99995M18.0001 18L9.99996 9.99995M9.99996 9.99995L1.99998 18M9.99996 9.99995L18.0001 2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkBold20.category = 'Product Icons';

export default XMarkBold20;
