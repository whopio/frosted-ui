import * as React from 'react';
import { IconProps } from './types';

export const ArrowDown12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6.00024 0C6.41431 0.000176728 6.75024 0.335895 6.75024 0.75V9.36426L9.70532 6.23535C9.98975 5.93437 10.4638 5.92072 10.7649 6.20508C11.0658 6.48945 11.0794 6.96356 10.7952 7.26465L6.54517 11.7646C6.40356 11.9146 6.20647 11.9999 6.00024 12C5.79397 12 5.59699 11.9146 5.45532 11.7646L1.20532 7.26465C0.920913 6.96351 0.934457 6.48949 1.2356 6.20508C1.53674 5.92084 2.01081 5.93427 2.29517 6.23535L5.25024 9.36426V0.75C5.25024 0.335786 5.58603 -1.81059e-08 6.00024 0Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowDown12;
