import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownRight12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownRight12"
      {...props}
    >
      <path
        d="M3.75 10.25h6.5v-6.5m0 6.5l-8.5-8.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownRight12.category = 'Arrows';

export default ArrowDownRight12;
