import * as React from 'react';
import { IconProps } from './types';

export const ChevronDown20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M1.75 6.5L9.70301 14.453C9.86703 14.617 10.133 14.617 10.297 14.453L18.25 6.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDown20.category = 'Arrows';

export default ChevronDown20;
