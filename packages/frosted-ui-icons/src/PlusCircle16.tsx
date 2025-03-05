import * as React from 'react';
import { IconProps } from './types';

export const PlusCircle16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
      <g
        stroke={color}
        clipPath="url(#clip0_1057_1133)"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <circle cx="8" cy="8" r="7.25" strokeLinejoin="round" />
        <path d="M10.8285 8.00033H5.17163M8.00006 10.8287V5.17188" />
      </g>
      <defs>
        <clipPath id="clip0_1057_1133">
          <path fill={color} d="M0 0H16V16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlusCircle16;
