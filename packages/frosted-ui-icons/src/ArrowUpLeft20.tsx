import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLeft20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M15.1266 15.1266L4.87351 4.87357M4.87351 4.87357L12.4749 5.05035M4.87351 4.87357L5.05029 12.475"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUpLeft20;
