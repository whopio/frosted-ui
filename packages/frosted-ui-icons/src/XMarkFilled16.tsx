import * as React from 'react';
import { IconProps } from './types';

export const XMarkFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.24997 2.25L7.99995 7.99999M13.75 13.75L7.99995 7.99999M7.99995 7.99999L2.25002 13.75M7.99995 7.99999L13.75 2.24999"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkFilled16.category = 'Interface General';

export default XMarkFilled16;
