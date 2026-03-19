import * as React from 'react';
import { IconProps } from './types';

export const XMarkBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <path
        d="M2.00003 1.99997L7.99996 7.99995M14.0001 14L7.99996 7.99995M7.99996 7.99995L1.99999 14M7.99996 7.99995L14.0001 2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkBold16.category = 'Product Icons';

export default XMarkBold16;
