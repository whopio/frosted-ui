import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRight32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M8.04506 23.955L23.955 8.04507M23.955 8.04507L12.1109 8.22184M23.955 8.04507L23.7782 19.8891"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUpRight32;
