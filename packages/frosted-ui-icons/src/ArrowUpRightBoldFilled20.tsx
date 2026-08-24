import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightBoldFilled20"
      {...props}
    >
      <path
        d="M5.75 3.25h11v11m0-11l-13.5 13.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpRightBoldFilled20.category = 'Arrows';

export default ArrowUpRightBoldFilled20;
