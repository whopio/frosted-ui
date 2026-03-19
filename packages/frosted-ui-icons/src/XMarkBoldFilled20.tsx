import * as React from 'react';
import { IconProps } from './types';

export const XMarkBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.5 2.5L10.0001 9.99999M17.5 17.5L10.0001 9.99999M10.0001 9.99999L2.5 17.5M10.0001 9.99999L17.5 2.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkBoldFilled20.category = 'Product Icons';

export default XMarkBoldFilled20;
