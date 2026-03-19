import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmall20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.28751 6.28769L9.99982 10M13.7121 13.7123L9.99982 10M9.99982 10L6.28751 13.7123M9.99982 10L13.7121 6.28769"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkSmall20.category = 'Product Icons';

export default XMarkSmall20;
