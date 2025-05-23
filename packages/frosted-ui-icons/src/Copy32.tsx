import * as React from 'react';
import { IconProps } from './types';

export const Copy32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.25 17.66V5.34C13.25 3.90958 14.4096 2.75 15.84 2.75H26.66C28.0904 2.75 29.25 3.90958 29.25 5.34V17.66C29.25 19.0904 28.0904 20.25 26.66 20.25H15.84C14.4096 20.25 13.25 19.0904 13.25 17.66Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25 11.75H5.34C3.90958 11.75 2.75 12.9096 2.75 14.34V26.66C2.75 28.0904 3.90958 29.25 5.34 29.25H16.16C17.5904 29.25 18.75 28.0904 18.75 26.66V24.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Copy32;
