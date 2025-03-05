import * as React from 'react';
import { IconProps } from './types';

export const Tag32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M26.21 2.75H16.5843C16.0496 2.75 15.5363 2.95991 15.1548 3.33457L2.96158 15.3101C2.18657 16.0712 1.75 17.1119 1.75 18.1982C1.75 19.2718 2.1765 20.3015 2.93568 21.0607L9.93932 28.0643C10.6985 28.8235 11.7282 29.25 12.8018 29.25C13.8881 29.25 14.9288 28.8134 15.6899 28.0384L27.6654 15.8452C28.0401 15.4637 28.25 14.9504 28.25 14.4157V4.79C28.25 3.66334 27.3367 2.75 26.21 2.75Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="22.5"
        cy="8.5"
        r="1.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Tag32;
