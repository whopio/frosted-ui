import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownSmallBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronDownSmallBoldFilled20"
      {...props}
    >
      <path
        d="M5.75 8l3.955 3.956c.163.162.427.162.59 0L14.25 8"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownSmallBoldFilled20.category = 'Arrows';

export default ChevronDownSmallBoldFilled20;
