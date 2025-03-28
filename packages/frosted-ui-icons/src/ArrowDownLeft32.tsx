import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeft32 = ({
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
        d="M23.9549 8.04503L8.04504 23.9549M8.04504 23.9549L19.8891 23.7782M8.04504 23.9549L8.22182 12.1109"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDownLeft32;
