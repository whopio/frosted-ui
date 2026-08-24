import * as React from 'react';
import { IconProps } from './types';

export const ChevronDown12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronDown12"
      {...props}
    >
      <path
        d="M1.75 4.5l4.073 4.073c.098.098.256.098.354 0L10.25 4.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDown12.category = 'Arrows';

export default ChevronDown12;
