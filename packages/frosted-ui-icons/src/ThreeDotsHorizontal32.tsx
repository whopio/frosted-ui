import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsHorizontal32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsHorizontal32"
      {...props}
    >
      <path
        d="M6.25 13.75c1.243 0 2.25 1.007 2.25 2.25s-1.007 2.25-2.25 2.25S4 17.243 4 16s1.007-2.25 2.25-2.25zm9.75 0c1.243 0 2.25 1.007 2.25 2.25s-1.007 2.25-2.25 2.25-2.25-1.007-2.25-2.25 1.007-2.25 2.25-2.25zm9.75 0c1.243 0 2.25 1.007 2.25 2.25s-1.007 2.25-2.25 2.25S23.5 17.243 23.5 16s1.007-2.25 2.25-2.25z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsHorizontal32.category = 'Interface General';

export default ThreeDotsHorizontal32;
