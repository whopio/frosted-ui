import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownRight24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownRight24"
      {...props}
    >
      <path
        d="M8.75 21.25h12.5V8.75m0 12.5L2.75 2.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownRight24.category = 'Arrows';

export default ArrowDownRight24;
