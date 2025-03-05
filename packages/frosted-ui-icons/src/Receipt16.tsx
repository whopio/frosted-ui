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
        d="M4.16668 13.625L2.25 15.125V.875H13.75V15.125L11.8333 13.625 9.91667 15.125 8.00001 13.625 6.08335 15.125 4.16668 13.625zM5.125 5.25H10.875M5.125 8H10.875M5.125 10.75H8.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Receipt16;
