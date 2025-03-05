import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRight24 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M6.1664 17.8335L17.8337 6.16625M17.8337 6.16625L17.6569 15.1819M17.8337 6.16625L8.81805 6.34303"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUpRight24;
