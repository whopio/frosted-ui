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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M17 23V28.0908C17 29.4347 15.4045 30.1393 14.4111 29.2344L1.78809 17.7324C0.767879 16.8026 0.76791 15.1974 1.78809 14.2676L14.4111 2.76562C15.4045 1.86063 17 2.56529 17 3.90918V9H28.2568C29.7716 9 31 10.2284 31 11.7432V20.2568C31 21.7716 29.7716 23 28.2568 23H17Z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatLeftFilled32.category = 'Arrows';

export default ArrowFatLeftFilled32;
