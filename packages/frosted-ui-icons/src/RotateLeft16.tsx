import * as React from 'react';
import { IconProps } from './types';

export const RotateLeft16 = ({
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
      <path
        d="M2.82685 9.83333C3.58192 11.9695 5.61918 13.5 8.01392 13.5C11.0515 13.5 13.5139 11.0375 13.5139 8C13.5139 4.96243 11.0515 2.5 8.01392 2.5C6.13578 2.5 4.88052 3.30292 3.66658 4.67261M3.16658 2.66667V4.83333C3.16658 5.10947 3.39045 5.33333 3.66658 5.33333L5.83325 5.33333"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RotateLeft16;
