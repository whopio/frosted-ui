import * as React from 'react';
import { IconProps } from './types';

export const XCircle16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 5.99998L6.00004 9.99998M10 9.99998L6.00004 5.99998M14.1667 7.99998C14.1667 11.4057 11.4058 14.1666 8.00004 14.1666C4.59429 14.1666 1.83337 11.4057 1.83337 7.99998C1.83337 4.59423 4.59429 1.83331 8.00004 1.83331C11.4058 1.83331 14.1667 4.59423 14.1667 7.99998Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default XCircle16;
