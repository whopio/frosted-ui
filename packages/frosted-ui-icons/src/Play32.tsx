import * as React from 'react';
import { IconProps } from './types';

export const Play32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Play32"
      {...props}
    >
      <path
        d="M6.75 4.767v22.466c0 2.428 2.734 3.85 4.722 2.457l16.024-11.234c1.704-1.194 1.704-3.718 0-4.912L11.472 2.31C9.484.917 6.75 2.34 6.75 4.767z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Play32.category = 'Sound & Music';

export default Play32;
