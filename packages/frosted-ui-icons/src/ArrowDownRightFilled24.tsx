import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownRightFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M20.75 20.75L20.75 7.75001M20.75 20.75L7.75001 20.75M20.75 20.75L3.25 3.25"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownRightFilled24.category = 'Arrows';

export default ArrowDownRightFilled24;
