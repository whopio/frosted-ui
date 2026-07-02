import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpSmallBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.7002 6.94995L5.82332 4.82674C5.92095 4.7291 6.07925 4.7291 6.17688 4.82673L8.3001 6.95"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpSmallBoldFilled12.category = 'Arrows';

export default ChevronUpSmallBoldFilled12;
