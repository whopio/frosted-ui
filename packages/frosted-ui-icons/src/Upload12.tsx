import * as React from 'react';
import { IconProps } from './types';

export const Upload12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <g stroke={color} clipPath="url(#clip0_882_960)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M.75 6.75L.75 9.1C.75 10.2874 1.71259 11.25 2.9 11.25L9.1 11.25C10.2874 11.25 11.25 10.2874 11.25 9.1L11.25 6.75M6 7.25L6 .75M6 .75L3.25 3.75M6 .75L8.75 3.75" />
      </g>
      <defs>
        <clipPath id="clip0_882_960">
          <path fill={color} d="M0 0H12V12H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Upload12;
