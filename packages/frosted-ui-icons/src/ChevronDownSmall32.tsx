import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownSmall32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.00012 12.7501L15.5287 19.2787C15.7891 19.539 16.2112 19.539 16.4715 19.2787L23 12.7501"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownSmall32.category = 'Arrows';

export default ChevronDownSmall32;
