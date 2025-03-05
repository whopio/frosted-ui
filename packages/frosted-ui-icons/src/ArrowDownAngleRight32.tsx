import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRight32 = ({
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
        d="M30.25 20H4.25C2.86929 20 1.75 18.8807 1.75 17.5V5.75002M30.25 20L23.75 26.25M30.25 20L23.75 13.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDownAngleRight32;
