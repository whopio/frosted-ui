import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownSmall24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronDownSmall24"
      {...props}
    >
      <path
        d="M6.75 9.5l4.896 4.896c.196.196.512.196.708 0L17.25 9.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownSmall24.category = 'Arrows';

export default ChevronDownSmall24;
