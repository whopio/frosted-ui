import * as React from 'react';
import { IconProps } from './types';

export const Browser12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <g fill={color} clipPath="url(#clip0_1679_661)">
        <path d="M4.5 3.25C4.5 3.80228 4.05228 4.25 3.5 4.25C2.94772 4.25 2.5 3.80228 2.5 3.25C2.5 2.69772 2.94772 2.25 3.5 2.25C4.05228 2.25 4.5 2.69772 4.5 3.25Z" />
        <path
          d="M0 2.25C0 1.00736 1.00736 0 2.25 0H9.75C10.9926 0 12 1.00736 12 2.25V9.75C12 10.9926 10.9926 12 9.75 12H2.25C1.00736 12 0 10.9926 0 9.75V2.25ZM2.25 1.5C1.83579 1.5 1.5 1.83579 1.5 2.25V5H10.5V2.25C10.5 1.83579 10.1642 1.5 9.75 1.5H2.25ZM9.75 10.5C10.1642 10.5 10.5 10.1642 10.5 9.75V6.5H1.5V9.75C1.5 10.1642 1.83579 10.5 2.25 10.5H9.75Z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="clip0_1679_661">
          <path fill={color} d="M0 0H12V12H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Browser12;
