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
      data-fui-icon="ChevronDownFilled32"
      {...props}
    >
      <path
        d="M3.25 10.25l12.276 12.276c.262.262.686.262.948 0L28.75 10.25"
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
