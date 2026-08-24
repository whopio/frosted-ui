import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVerticalFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsVerticalFilled32"
      {...props}
    >
      <path
        d="M13.248 26.165c0-1.518 1.232-2.75 2.75-2.75 1.519 0 2.75 1.232 2.75 2.75 0 1.519-1.231 2.75-2.75 2.75-1.518 0-2.75-1.231-2.75-2.75zm0-10.166c0-1.519 1.231-2.75 2.75-2.75s2.75 1.231 2.75 2.75c0 1.518-1.232 2.75-2.75 2.75s-2.75-1.232-2.75-2.75zm0-10.164c0-1.518 1.232-2.75 2.75-2.75 1.519 0 2.75 1.232 2.75 2.75s-1.231 2.75-2.75 2.75c-1.518 0-2.75-1.232-2.75-2.75z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVerticalFilled32.category = 'Interface General';

export default ThreeDotsVerticalFilled32;
