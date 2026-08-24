import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronLeftFilled24"
      {...props}
    >
      <path
        d="M15.5 3.25l-8.396 8.396c-.196.196-.196.512 0 .708L15.5 20.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftFilled24.category = 'Arrows';

export default ChevronLeftFilled24;
