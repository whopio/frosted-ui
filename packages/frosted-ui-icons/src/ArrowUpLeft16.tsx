import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLeft16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpLeft16"
      {...props}
    >
      <path
        d="M11.25 2.75h-8.5v8.5m0-8.5l10.5 10.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpLeft16.category = 'Arrows';

export default ArrowUpLeft16;
