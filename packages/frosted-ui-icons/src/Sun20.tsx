import * as React from 'react';
import { IconProps } from './types';

export const Sun20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <g
        stroke={color}
        clipPath="url(#clip0_882_678)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="10" cy="10" r="3.784" />
        <path d="M10 3.25L10 1.25M5.22705 5.22705L3.81284 3.81284M3.25 10L1.25 10M5.22705 14.7729L3.81284 16.1872M10 18.75L10 16.75M16.1873 16.1872L14.773 14.773M18.75 10L16.75 10M16.1873 3.81281L14.773 5.22702" />
      </g>
      <defs>
        <clipPath id="clip0_882_678">
          <path fill={color} d="M0 0H20V20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Sun20;
