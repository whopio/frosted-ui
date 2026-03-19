import * as React from 'react';
import { IconProps } from './types';

export const XMarkFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.24988 2.25L9.99999 9.99998M17.75 17.75L9.99999 9.99998M9.99999 9.99998L2.2501 17.75M9.99999 9.99998L17.75 2.25"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkFilled20.category = 'Product Icons';

export default XMarkFilled20;
