import * as React from 'react';
import { IconProps } from './types';

export const ArrowLeft32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.75049 16.0002L13.22 4.53052M1.75049 16.0002L13.22 27.4695M1.75049 16.0002H30.2505"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowLeft32.category = 'Arrows';

export default ArrowLeft32;
