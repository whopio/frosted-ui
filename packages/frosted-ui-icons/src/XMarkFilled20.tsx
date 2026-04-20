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
        d="M2.24998 2.24999L9.99996 9.99997M17.75 17.75L9.99996 9.99997M9.99996 9.99997L2.25002 17.75M9.99996 9.99997L17.75 2.24999"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkFilled20.category = 'Interface General';

export default XMarkFilled20;
