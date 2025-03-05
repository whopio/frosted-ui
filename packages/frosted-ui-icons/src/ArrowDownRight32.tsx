import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownRight32 = ({
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
        d="M8.04503 8.04506L23.9549 23.955M23.9549 23.955L23.7782 12.1109M23.9549 23.955L12.1109 23.7782"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDownRight32;
