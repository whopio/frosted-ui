import * as React from 'react';
import { IconProps } from './types';

export const XMark16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.00001 7.99999L1.75001 14.25M8.00001 7.99999L1.75001 1.74999M8.00001 7.99999L14.25 1.74999M8.00001 7.99999L14.25 14.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

XMark16.category = 'Product Icons';

export default XMark16;
