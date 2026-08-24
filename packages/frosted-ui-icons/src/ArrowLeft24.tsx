import * as React from 'react';
import { IconProps } from './types';

export const ArrowLeft24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowLeft24"
      {...props}
    >
      <path
        d="M10 20.25L1.75 12 10 3.75M1.75 12h20.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowLeft24.category = 'Arrows';

export default ArrowLeft24;
