import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownRightFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M27.75 27.75L27.75 9.25001M27.75 27.75L9.25 27.75M27.75 27.75L4.25 4.25"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownRightFilled32.category = 'Arrows';

export default ArrowDownRightFilled32;
