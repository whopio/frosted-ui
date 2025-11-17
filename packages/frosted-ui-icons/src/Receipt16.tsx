import * as React from 'react';
import { IconProps } from './types';

export const Receipt16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.5 13.5L2.5 15V1H13.5V15L11.5 13.5 9.75 15 8 13.5 6.25 15 4.5 13.5zM5.5 4H10.5M5.5 7H8.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Receipt16;
