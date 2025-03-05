import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDown16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.50001 1.83331H6.50004C6.13185 1.83331 5.83337 2.13179 5.83337 2.49998V9.16665H3.56029C3.27515 9.16665 3.12165 9.50145 3.30771 9.71751L7.49488 14.58C7.76081 14.8888 8.23921 14.8888 8.50521 14.58L12.6923 9.71751C12.8784 9.50145 12.7249 9.16665 12.4397 9.16665H10.1667V2.49998C10.1667 2.13179 9.86821 1.83331 9.50001 1.83331Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowFatDown16;
