import * as React from 'react';
import { IconProps } from './types';

export const ArrowRightBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowRightBoldFilled12"
      {...props}
    >
      <path
        d="M6.5 10.25L10.75 6 6.5 1.75M10.75 6h-9.5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowRightBoldFilled12.category = 'Arrows';

export default ArrowRightBoldFilled12;
