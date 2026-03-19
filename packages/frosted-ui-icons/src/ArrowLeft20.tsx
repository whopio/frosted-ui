import * as React from 'react';
import { IconProps } from './types';

export const ArrowLeft20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <path
        d="M1.75024 10L8.25039 3.49976M1.75024 10L8.25039 16.5001M1.75024 10H18.2502"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowLeft20.category = 'Arrows';

export default ArrowLeft20;
