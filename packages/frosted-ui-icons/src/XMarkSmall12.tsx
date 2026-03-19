import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmall12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6 6.00001L3.75 8.25001M6 6.00001L3.75 3.75001M6 6.00001L8.25 3.75001M6 6.00001L8.24999 8.25001"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

XMarkSmall12.category = 'Product Icons';

export default XMarkSmall12;
