import * as React from 'react';
import { IconProps } from './types';

export const K24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.25 21.25V2.75M17.6875 2.75L6.25 14.1875M17.6875 21.25L8.5 12.0625"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default K24;
