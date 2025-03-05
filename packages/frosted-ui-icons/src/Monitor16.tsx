import * as React from 'react';
import { IconProps } from './types';

export const Monitor16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.83338 8.83331H13.3751M5.00004 14.2083L11 14.2083M6.13546 11.5V14.2083M9.86462 11.5V14.2083M3.16671 11.5H12.8334C13.5698 11.5 14.1667 10.9031 14.1667 10.1667V3.83333C14.1667 3.09695 13.5698 2.5 12.8334 2.5H3.16671C2.43033 2.5 1.83337 3.09695 1.83337 3.83333V10.1667C1.83337 10.9031 2.43033 11.5 3.16671 11.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Monitor16;
