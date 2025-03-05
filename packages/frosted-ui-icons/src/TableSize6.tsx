import * as React from 'react';
import { IconProps } from './types';

export const TableSize6 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3 25.43V6.57C3 4.59834 4.59834 3 6.57 3L25.43 3C27.4017 3 29 4.59835 29 6.57V25.43C29 27.4017 27.4017 29 25.43 29L6.57 29C4.59834 29 3 27.4017 3 25.43zM10.5 3.24548L10.5 28.7549M3.69641 10.1133L28.7678 10.1133"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TableSize6;
