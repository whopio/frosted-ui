import * as React from 'react';
import { IconProps } from './types';

export const XCircle20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.5 7.50002L7.49996 12.5M12.5 12.5L7.49996 7.50002M17.7083 10C17.7083 14.2572 14.2571 17.7084 9.99996 17.7084C5.74277 17.7084 2.29163 14.2572 2.29163 10C2.29163 5.74283 5.74277 2.29169 9.99996 2.29169C14.2571 2.29169 17.7083 5.74283 17.7083 10Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default XCircle20;
