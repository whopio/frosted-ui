import * as React from 'react';
import { IconProps } from './types';

export const User16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <circle cx="8" cy="4" r="3.25" stroke={color} strokeWidth="1.5" />
      <path
        d="M14.25 15.25C14.25 11.9624 11.4518 9.25 8 9.25C4.54822 9.25 1.75 11.9624 1.75 15.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default User16;
