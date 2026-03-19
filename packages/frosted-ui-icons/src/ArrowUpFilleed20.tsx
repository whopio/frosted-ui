import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpFilleed20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.0003 2.25L3.50012 8.75024M10.0003 2.25L16.5005 8.75024M10.0003 2.25V17.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpFilleed20.category = 'Arrows';

export default ArrowUpFilleed20;
