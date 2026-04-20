import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2 9.75L15.5262 23.2762C15.7879 23.5379 16.2121 23.5379 16.4738 23.2762L30 9.75"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownBold32.category = 'Arrows';

export default ChevronDownBold32;
