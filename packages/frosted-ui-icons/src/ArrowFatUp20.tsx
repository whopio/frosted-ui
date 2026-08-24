import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUp20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatUp20"
      {...props}
    >
      <path
        d="M6.25 10.556v6.547c0 .633.513 1.147 1.147 1.147h5.205c.634 0 1.148-.514 1.148-1.147v-6.547c0-.169.137-.306.306-.306h2.972c.396 0 .606-.47.342-.765l-6.686-7.47c-.365-.408-1.003-.408-1.368 0L2.63 9.484c-.265.296-.055.765.342.765h2.972c.169 0 .306.137.306.306z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatUp20.category = 'Arrows';

export default ArrowFatUp20;
