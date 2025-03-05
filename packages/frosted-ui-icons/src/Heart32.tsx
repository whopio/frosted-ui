import * as React from 'react';
import { IconProps } from './types';

export const Heart32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.4545 6C19.1636 6 17.1455 7.225 16 9.15C14.8545 7.225 12.8364 6 10.5455 6C6.94545 6 4 9.15 4 13C4 19.9417 16 27 16 27C16 27 28 20 28 13C28 9.15 25.0545 6 21.4545 6Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Heart32;
