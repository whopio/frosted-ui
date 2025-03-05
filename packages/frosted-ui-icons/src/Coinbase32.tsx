import * as React from 'react';
import { IconProps } from './types';

export const Coinbase32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <circle
        cx="16"
        cy="16"
        r="14.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.7838 13.25C23.6129 9.48427 20.1005 6.75 15.9495 6.75C10.8408 6.75 6.69946 10.8914 6.69946 16C6.69946 21.1086 10.8408 25.25 15.9495 25.25C20.1005 25.25 23.6129 22.5157 24.7838 18.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Coinbase32;
