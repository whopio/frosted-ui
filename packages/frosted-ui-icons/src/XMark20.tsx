import * as React from 'react';
import { IconProps } from './types';

export const XMark20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 9.99999L1.75001 18.25M10 9.99999L1.75001 1.74999M10 9.99999L18.25 1.74999M10 9.99999L18.25 18.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

XMark20.category = 'Product Icons';

export default XMark20;
