import * as React from 'react';
import { IconProps } from './types';

export const Sad16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <g clipPath="url(#clip0_882_983)">
        <circle
          cx="8"
          cy="8"
          r="7.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="4.875" cy="8.875" r=".875" fill={color} />
        <circle
          cx=".875"
          cy=".875"
          r=".875"
          transform="matrix(-1 0 0 1 12 8)"
          fill={color}
        />
        <path
          d="M10.125 12C10.125 12 9.5 10.75 8 10.75C6.5 10.75 5.875 12 5.875 12"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_882_983">
          <path fill={color} d="M0 0H16V16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Sad16;
