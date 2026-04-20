import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftSmallFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.30005 3.40002L4.87682 5.82325C4.77919 5.92088 4.77919 6.07917 4.87682 6.1768L7.30005 8.60003"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftSmallFilled12.category = 'Arrows';

export default ChevronLeftSmallFilled12;
