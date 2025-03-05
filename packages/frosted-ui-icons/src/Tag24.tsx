import * as React from 'react';
import { IconProps } from './types';

export const Tag24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M19.75 2.75H12.8713C12.4735 2.75 12.092 2.90804 11.8107 3.18934L2.58969 12.4103C2.05205 12.948 1.75 13.6772 1.75 14.4375C1.75 15.1978 2.05205 15.927 2.58969 16.4647L7.53531 21.4103C8.07296 21.948 8.80216 22.25 9.5625 22.25C10.3228 22.25 11.052 21.948 11.5897 21.4103L20.8107 12.1893C21.092 11.908 21.25 11.5265 21.25 11.1287V4.25C21.25 3.42157 20.5784 2.75 19.75 2.75Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="16.5"
        cy="7.5"
        r="1.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Tag24;
