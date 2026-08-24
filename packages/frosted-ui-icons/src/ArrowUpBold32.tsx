import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpBold32"
      {...props}
    >
      <path
        d="M27.001 13l-11-11L5 13M16 2v28"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpBold32.category = 'Arrows';

export default ArrowUpBold32;
