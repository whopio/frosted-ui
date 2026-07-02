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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7 3.69971L4.87657 5.82314C4.77894 5.92077 4.77894 6.07905 4.87656 6.17668L6.9997 8.3001"
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
