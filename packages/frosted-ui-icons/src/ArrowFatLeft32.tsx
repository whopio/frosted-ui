import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatLeft32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.7814 9.75H28.2572C29.3578 9.75 30.25 10.6422 30.25 11.7428V20.2572C30.25 21.3578 29.3578 22.25 28.2572 22.25H16.7814C16.4879 22.25 16.25 22.4879 16.25 22.7814V28.0908C16.25 28.7832 15.4278 29.1463 14.916 28.68L2.29327 17.1784C1.59929 16.546 1.59929 15.4539 2.29327 14.8216L14.916 3.31998C15.4279 2.85361 16.25 3.21675 16.25 3.90918V9.21859C16.25 9.51208 16.4879 9.75 16.7814 9.75Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatLeft32.category = 'Arrows';

export default ArrowFatLeft32;
