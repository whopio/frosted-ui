import * as React from 'react';
import { IconProps } from './types';

export const ArrowRight12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowRight12"
      {...props}
    >
      <path
        d="M7 10.25L11.25 6 7 1.75M11.25 6H.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowRight12.category = 'Arrows';

export default ArrowRight12;
