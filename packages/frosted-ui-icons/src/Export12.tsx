import * as React from 'react';
import { IconProps } from './types';

export const Export12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.25 7.75V9.1C9.25 10.2874 8.28741 11.25 7.1 11.25H2.9C1.71259 11.25.75 10.2874.75 9.1V4.9C.75 3.71259 1.71259 2.75 2.9 2.75H4.25M11.2499.75H7.74993M11.2499.75V4.25M11.2499.75L5.75 6.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Export12;
