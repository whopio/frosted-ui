import * as React from 'react';
import { IconProps } from './types';

export const ArrowRight32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowRight32"
      {...props}
    >
      <path
        d="M18.781 27.47L30.251 16 18.78 4.53M30.251 16H1.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowRight32.category = 'Arrows';

export default ArrowRight32;
