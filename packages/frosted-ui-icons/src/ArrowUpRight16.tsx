import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRight16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M13.25 2.74999V11.25M13.25 2.74999H4.75M13.25 2.74999L2.75 13.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpRight16.category = 'Arrows';

export default ArrowUpRight16;
