import * as React from 'react';
import { IconProps } from './types';

export const Command20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Command20"
      {...props}
    >
      <path
        d="M7.25 7.25V4.5c0-1.519-1.231-2.75-2.75-2.75S1.75 2.981 1.75 4.5 2.981 7.25 4.5 7.25h2.75zm0 0v5.5m0-5.5h5.5m-5.5 5.5h5.5m-5.5 0H4.5c-1.519 0-2.75 1.231-2.75 2.75s1.231 2.75 2.75 2.75 2.75-1.231 2.75-2.75v-2.75zm5.5 0v-5.5m0 5.5v2.75c0 1.519 1.231 2.75 2.75 2.75s2.75-1.231 2.75-2.75-1.231-2.75-2.75-2.75h-2.75zm0-5.5V4.5c0-1.519 1.231-2.75 2.75-2.75s2.75 1.231 2.75 2.75-1.231 2.75-2.75 2.75h-2.75z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Command20.category = 'Interface General';

export default Command20;
