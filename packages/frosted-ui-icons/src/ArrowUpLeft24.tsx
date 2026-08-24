import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLeft24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpLeft24"
      {...props}
    >
      <path
        d="M15.25 2.75H2.75v12.5m0-12.5l18.5 18.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpLeft24.category = 'Arrows';

export default ArrowUpLeft24;
