import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpSmallFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronUpSmallFilled12"
      {...props}
    >
      <path
        d="M3.7 6.95l2.123-2.123c.098-.098.256-.098.354 0L8.3 6.95"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpSmallFilled12.category = 'Arrows';

export default ChevronUpSmallFilled12;
