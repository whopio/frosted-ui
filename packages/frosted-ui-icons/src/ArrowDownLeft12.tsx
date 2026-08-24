import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeft12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownLeft12"
      {...props}
    >
      <path
        d="M8.25 10.25h-6.5v-6.5m0 6.5l8.5-8.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownLeft12.category = 'Arrows';

export default ArrowDownLeft12;
