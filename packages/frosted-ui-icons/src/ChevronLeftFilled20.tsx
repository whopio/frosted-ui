import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronLeftFilled20"
      {...props}
    >
      <path
        d="M12.5 3.25L6.047 9.703c-.164.164-.164.43 0 .594L12.5 16.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftFilled20.category = 'Arrows';

export default ChevronLeftFilled20;
