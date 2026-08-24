import * as React from 'react';
import { IconProps } from './types';

export const ChevronDown32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronDown32"
      {...props}
    >
      <path
        d="M2.75 10.25l12.776 12.776c.262.262.686.262.948 0L29.25 10.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDown32.category = 'Arrows';

export default ChevronDown32;
