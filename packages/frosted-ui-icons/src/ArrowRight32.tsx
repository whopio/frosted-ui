import * as React from 'react';
import { IconProps } from './types';

export const ArrowRight32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M30.2505 16.0002L18.781 4.53052M30.2505 16.0002L18.781 27.4695M30.2505 16.0002H1.75049"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowRight32.category = 'Arrows';

export default ArrowRight32;
