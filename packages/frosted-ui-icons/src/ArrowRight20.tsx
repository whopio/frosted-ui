import * as React from 'react';
import { IconProps } from './types';

export const ArrowRight20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowRight20"
      {...props}
    >
      <path
        d="M11.75 16.5l6.5-6.5-6.5-6.5m6.5 6.5H1.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowRight20.category = 'Arrows';

export default ArrowRight20;
