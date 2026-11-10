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
        d="M16 24.25c-4.556 0-8.25-3.694-8.25-8.25S11.444 7.75 16 7.75s8.25 3.694 8.25 8.25-3.694 8.25-8.25 8.25z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Dot32.category = 'Interface General';

export default Dot32;
