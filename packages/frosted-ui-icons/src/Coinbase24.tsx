import * as React from 'react';
import { IconProps } from './types';

export const Coinbase24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <circle
        cx="12"
        cy="12"
        r="10.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.258 10.0219C17.4158 7.31325 14.8893 5.3465 11.9035 5.3465C8.22888 5.3465 5.25 8.32537 5.25 12C5.25 15.6746 8.22888 18.6535 11.9035 18.6535C14.8893 18.6535 17.4158 16.6868 18.258 13.9781"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Coinbase24;
