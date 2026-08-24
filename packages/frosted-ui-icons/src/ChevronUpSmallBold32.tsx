import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpSmallBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronUpSmallBold32"
      {...props}
    >
      <path
        d="M9 19.25l6.529-6.529c.26-.26.682-.26.942 0L23 19.25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpSmallBold32.category = 'Arrows';

export default ChevronUpSmallBold32;
