import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 6L3.75 8.25M6 6L3.75 3.75M6 6L8.25 3.75M6 6L8.24999 8.24999"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

XMarkSmallBold12.category = 'Product Icons';

export default XMarkSmallBold12;
