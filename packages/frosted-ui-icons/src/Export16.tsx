import * as React from 'react';
import { IconProps } from './types';

export const Export16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.25 9.5V12.75C13.25 14.1307 12.1307 15.25 10.75 15.25H3.25C1.86929 15.25.75 14.1307.75 12.75V5.25C.75 3.86929 1.86929 2.75 3.25 2.75H6.5M15.2499.75H10.9999M15.2499.75V5M15.2499.75L7.75 8.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Export16;
