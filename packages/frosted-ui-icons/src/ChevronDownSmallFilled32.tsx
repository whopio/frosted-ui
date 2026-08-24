import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownSmallFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronDownSmallFilled32"
      {...props}
    >
      <path
        d="M9 12.75l6.529 6.529c.26.26.682.26.942 0L23 12.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownSmallFilled32.category = 'Arrows';

export default ChevronDownSmallFilled32;
