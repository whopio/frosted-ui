import * as React from 'react';
import { IconProps } from './types';

export const Triangle32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <path
        d="M18.6655 4.35406L29.8234 23.6268C31.0122 25.6801 29.5305 28.25 27.1579 28.25H4.8421C2.46948 28.25 0.987818 25.6801 2.17659 23.6268L13.3345 4.35406C14.5208 2.30499 17.4792 2.30499 18.6655 4.35406Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Triangle32;
