import * as React from 'react';
import { IconProps } from './types';

export const Ethereum20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3.99561 8.53946L9.99999 11.4605L16.0044 8.53946L9.99999 0.749985L3.99561 8.53946Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.99561 11.136L9.99999 14.3816L16.0044 11.136L9.99999 19.25L3.99561 11.136Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Ethereum20;
