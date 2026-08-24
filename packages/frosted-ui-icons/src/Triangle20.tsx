import * as React from 'react';
import { IconProps } from './types';

export const Triangle20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Triangle20"
      {...props}
    >
      <path
        d="M1.978 15.041L8.374 3.17c.695-1.291 2.548-1.287 3.238.007l6.328 11.873c.652 1.223-.235 2.7-1.621 2.7H3.596c-1.39 0-2.277-1.483-1.618-2.707z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Triangle20.category = 'Interface General';

export default Triangle20;
