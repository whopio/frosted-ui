import * as React from 'react';
import { IconProps } from './types';

export const Ethereum24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.25 10.3816L11.9999 13.6184L18.75 10.3816L11.9999 1.74998L5.25 10.3816Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.25 13.2588L11.9999 16.8553L18.75 13.2588L11.9999 22.25L5.25 13.2588Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Ethereum24;
