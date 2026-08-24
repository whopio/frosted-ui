import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatLeftFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatLeftFilled32"
      {...props}
    >
      <path
        d="M17 23v5.09c0 1.345-1.595 2.05-2.589 1.144L1.788 17.732c-1.02-.93-1.02-2.535 0-3.464L14.411 2.766C15.405 1.86 17 2.566 17 3.909V9h11.257C29.772 9 31 10.228 31 11.743v8.514C31 21.772 29.772 23 28.257 23H17z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatLeftFilled32.category = 'Arrows';

export default ArrowFatLeftFilled32;
