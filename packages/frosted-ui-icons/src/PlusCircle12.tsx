import * as React from 'react';
import { IconProps } from './types';

export const PlusCircle12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        clipPath="url(#clip0_1057_1136)"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <circle cx="6" cy="6" r="5.25" strokeLinejoin="round" />
        <path d="M8.12128 6.00025H3.87866M5.99998 8.12155V3.87891" />
      </g>
      <defs>
        <clipPath id="clip0_1057_1136">
          <path fill={color} d="M0 0H12V12H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlusCircle12;
