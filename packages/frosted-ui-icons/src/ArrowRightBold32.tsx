import * as React from 'react';
import { IconProps } from './types';

export const ArrowRightBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowRightBold32"
      {...props}
    >
      <path
        d="M19 27l11.001-11-11-11m11 11h-28"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowRightBold32.category = 'Arrows';

export default ArrowRightBold32;
