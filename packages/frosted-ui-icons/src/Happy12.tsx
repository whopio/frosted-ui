import * as React from 'react';
import { IconProps } from './types';

export const Happy12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <g clipPath="url(#clip0_882_1312)">
        <circle
          cx="6"
          cy="6"
          r="5.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="3.813" cy="5.781" r=".75" fill={color} />
        <circle
          cx=".75"
          cy=".75"
          r=".75"
          transform="matrix(-1 0 0 1 9.094 5.031)"
          fill={color}
        />
        <path
          d="M7.59375 8.0625C7.59375 8.0625 7.125 9 6 9C4.875 9 4.40625 8.0625 4.40625 8.0625"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_882_1312">
          <path fill={color} d="M0 0H12V12H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Happy12;
