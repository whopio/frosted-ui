import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUp16 = ({
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
        d="M9.49989 14.1668H6.49992C6.13172 14.1668 5.83325 13.8683 5.83325 13.5001V6.83347H3.56017C3.27503 6.83347 3.12152 6.4987 3.30758 6.28263L7.49476 1.42013C7.76069 1.11126 8.23909 1.11126 8.50509 1.42013L12.6922 6.28263C12.8783 6.4987 12.7248 6.83347 12.4396 6.83347H10.1666V13.5001C10.1666 13.8683 9.86809 14.1668 9.49989 14.1668Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowFatUp16;
