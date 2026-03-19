import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownRightBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16.75 16.75L16.75 5.75001M16.75 16.75L5.75001 16.75M16.75 16.75L3.25 3.25"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownRightBoldFilled20.category = 'Arrows';

export default ArrowDownRightBoldFilled20;
