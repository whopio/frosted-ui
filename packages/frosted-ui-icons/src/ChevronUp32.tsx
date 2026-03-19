import * as React from 'react';
import { IconProps } from './types';

export const ChevronUp32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9 19.25L15.5286 12.7214C15.7889 12.4611 16.2111 12.4611 16.4714 12.7214L22.9999 19.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUp32.category = 'Arrows';

export default ChevronUp32;
