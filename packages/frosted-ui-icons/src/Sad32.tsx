import * as React from 'react';
import { IconProps } from './types';

export const Sad32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <circle
        cx="16"
        cy="16"
        r="14.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9.5" cy="17.5" r="1.5" fill={color} />
      <circle cx="22.499" cy="17.5" r="1.5" fill={color} />
      <path
        d="M20.25 23.75C20.25 23.75 19 21.25 16 21.25C13 21.25 11.75 23.75 11.75 23.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Sad32;
