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
        d="M7 3.69971L4.87658 5.82313C4.77895 5.92076 4.77895 6.07905 4.87658 6.17668L7 8.3001"
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
