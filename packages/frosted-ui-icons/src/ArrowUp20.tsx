import * as React from 'react';
import { IconProps } from './types';

export const ArrowUp20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUp20"
      {...props}
    >
      <path
        d="M16.5 8.25L10 1.75l-6.5 6.5m6.5-6.5v16.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUp20.category = 'Arrows';

export default ArrowUp20;
