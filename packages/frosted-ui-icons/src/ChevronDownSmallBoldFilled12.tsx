import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownSmallBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronDownSmallBoldFilled12"
      {...props}
    >
      <path
        d="M3.7 5.05l2.123 2.123c.098.098.256.098.354 0L8.3 5.05"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownSmallBoldFilled12.category = 'Arrows';

export default ChevronDownSmallBoldFilled12;
