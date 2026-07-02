import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.5 10.25L15.5262 22.2762C15.7879 22.5379 16.2121 22.5379 16.4738 22.2762L28.5 10.25"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownBoldFilled32.category = 'Arrows';

export default ChevronDownBoldFilled32;
