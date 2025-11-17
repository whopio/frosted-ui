import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUp16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.50001 14.1668H6.50004C6.13185 14.1668 5.83337 13.8683 5.83337 13.5001V6.83347H3.56029C3.27515 6.83347 3.12165 6.4987 3.30771 6.28263L7.49488 1.42013C7.76081 1.11126 8.23921 1.11126 8.50521 1.42013L12.6923 6.28263C12.8784 6.4987 12.7249 6.83347 12.4397 6.83347H10.1667V13.5001C10.1667 13.8683 9.86821 14.1668 9.50001 14.1668Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowFatUp16;
