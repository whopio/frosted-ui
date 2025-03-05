import * as React from 'react';
import { IconProps } from './types';

export const Receipt24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6.16669 20.4868L3.25 22.75V1.25L6.16669 3.51316 9.08335 1.25 12 3.51316 14.9167 1.25 17.8333 3.51316 20.75 1.25V22.75L17.8333 20.4868 14.9167 22.75 12 20.4868 9.08335 22.75 6.16669 20.4868zM7.75 8.25H16.25M7.75 12H16.25M7.75 15.75H13.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Receipt24;
