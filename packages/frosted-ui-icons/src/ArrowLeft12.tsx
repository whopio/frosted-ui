import * as React from 'react';
import { IconProps } from './types';

export const ArrowLeft12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowLeft12"
      {...props}
    >
      <path
        d="M5 10.25L.75 6 5 1.75M.75 6h10.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowLeft12.category = 'Arrows';

export default ArrowLeft12;
