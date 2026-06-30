import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.5 21.25L15.5262 9.22376C15.7879 8.96211 16.2121 8.96211 16.4738 9.22376L28.5 21.25"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpBoldFilled32.category = 'Arrows';

export default ChevronUpBoldFilled32;
