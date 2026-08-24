import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpFilled24"
      {...props}
    >
      <path
        d="M19.75 10l-7.749-7.75L4.251 10m7.75-7.75v19.5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpFilled24.category = 'Arrows';

export default ArrowUpFilled24;
