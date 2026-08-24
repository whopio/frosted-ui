import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightBoldFilled12"
      {...props}
    >
      <path
        d="M3.25 2.25h6.5v6.5m0-6.5l-7.5 7.5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpRightBoldFilled12.category = 'Arrows';

export default ArrowUpRightBoldFilled12;
