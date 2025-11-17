import * as React from 'react';
import { IconProps } from './types';

export const Receipt12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4 10L1.75 11V.75H10.25V11L8 10 6.00001 11 4 10zM4.5 3.5H7.5M4.5 6.25H6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Receipt12;
