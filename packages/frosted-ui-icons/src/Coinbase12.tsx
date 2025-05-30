import * as React from 'react';
import { IconProps } from './types';

export const Coinbase12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <g
        stroke={color}
        clipPath="url(#clip0_882_553)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="6" cy="6" r="5.25" />
        <path d="M8.56253 7C8.1625 8.02434 7.16599 8.75 6 8.75C4.48122 8.75 3.25 7.51878 3.25 6C3.25 4.48122 4.48122 3.25 6 3.25C7.16599 3.25 8.1625 3.97566 8.56253 5" />
      </g>
      <defs>
        <clipPath id="clip0_882_553">
          <path fill={color} d="M0 0H12V12H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Coinbase12;
