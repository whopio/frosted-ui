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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M0.75 3.5L5.82322 8.57322C5.92085 8.67085 6.07915 8.67085 6.17678 8.57322L11.2499 3.5"
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
