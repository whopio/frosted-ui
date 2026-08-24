import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightBoldFilled16"
      {...props}
    >
      <path
        d="M4.25 3.25h8.5v8.5m0-8.5l-9.5 9.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpRightBoldFilled16.category = 'Arrows';

export default ArrowUpRightBoldFilled16;
