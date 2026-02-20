import * as React from 'react';
import { IconProps } from './types';

export const ArrowUp12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 11.25L6 0.75M6 0.75L10.25 5M6 0.75L1.75 5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUp12.category = 'Arrows';

export default ArrowUp12;
