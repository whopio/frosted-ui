import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronDownBold24"
      {...props}
    >
      <path
        d="M3 8.25l8.646 8.646c.196.196.512.196.708 0L21 8.25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownBold24.category = 'Arrows';

export default ChevronDownBold24;
