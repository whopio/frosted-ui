import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDown16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.49989 1.83334H6.49992C6.13172 1.83334 5.83325 2.13182 5.83325 2.50001V9.16668H3.56017C3.27503 9.16668 3.12152 9.50148 3.30758 9.71754L7.49476 14.58C7.76069 14.8889 8.23909 14.8889 8.50509 14.58L12.6922 9.71754C12.8783 9.50148 12.7248 9.16668 12.4396 9.16668H10.1666V2.50001C10.1666 2.13182 9.86809 1.83334 9.49989 1.83334Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowFatDown16;
