import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftSmallBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronLeftSmallBold12"
      {...props}
    >
      <path
        d="M7 3.7L4.877 5.823c-.098.098-.098.256 0 .354L7 8.3"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftSmallBold12.category = 'Arrows';

export default ChevronLeftSmallBold12;
