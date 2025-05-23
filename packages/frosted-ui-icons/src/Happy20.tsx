import * as React from 'react';
import { IconProps } from './types';

export const Happy20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <g clipPath="url(#clip0_882_1300)">
        <circle
          cx="10"
          cy="10"
          r="8.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="6" cy="11" r="1" fill={color} />
        <circle
          cx="1"
          cy="1"
          r="1"
          transform="matrix(-1 0 0 1 15 10)"
          fill={color}
        />
        <path
          d="M12.6563 13.5938C12.6563 13.5938 11.875 15.1562 10 15.1562C8.125 15.1562 7.34375 13.5938 7.34375 13.5938"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_882_1300">
          <path fill={color} d="M0 0H20V20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Happy20;
