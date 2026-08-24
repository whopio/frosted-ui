import * as React from 'react';
import { IconProps } from './types';

export const Dot32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Dot32"
      {...props}
    >
      <path
        d="M7.75 16c0-4.556 3.694-8.25 8.25-8.25s8.25 3.694 8.25 8.25-3.694 8.25-8.25 8.25S7.75 20.556 7.75 16z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Dot32.category = 'Interface General';

export default Dot32;
