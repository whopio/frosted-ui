import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatLeft20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatLeft20"
      {...props}
    >
      <path
        d="M10.556 6.25h6.547c.633 0 1.147.514 1.147 1.147v5.206c0 .633-.514 1.147-1.147 1.147h-6.547c-.169 0-.306.137-.306.306v2.972c0 .397-.47.607-.765.342l-7.47-6.686c-.408-.365-.408-1.003 0-1.368l7.47-6.686c.296-.264.765-.055.765.342v2.972c0 .169.137.306.306.306z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatLeft20.category = 'Arrows';

export default ArrowFatLeft20;
