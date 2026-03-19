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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.75 6L6.5 1.75M10.75 6L6.5 10.25M10.75 6L1.25 6"
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
