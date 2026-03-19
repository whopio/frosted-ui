import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.00012 12.75L15.5287 19.2786C15.7891 19.5389 16.2112 19.5389 16.4715 19.2786L23 12.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownFilled32.category = 'Arrows';

export default ChevronDownFilled32;
