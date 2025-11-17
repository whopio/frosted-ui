import * as React from 'react';
import { IconProps } from './types';

export const PlayCircle32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 2.75C23.3178 2.75 29.25 8.68223 29.25 16C29.25 23.3178 23.3178 29.25 16 29.25C8.68223 29.25 2.75 23.3178 2.75 16C2.75 8.68223 8.68223 2.75 16 2.75ZM16 4.25C9.51065 4.25 4.25 9.51065 4.25 16C4.25 22.4893 9.51065 27.75 16 27.75C22.4893 27.75 27.75 22.4893 27.75 16C27.75 9.51065 22.4893 4.25 16 4.25Z"
        fill={color}
      />
      <path
        d="M12 19.8121V12.1879C12 10.807 13.5245 9.97015 14.6895 10.7115L20.6799 14.5236C21.7606 15.2113 21.7606 16.7887 20.6799 17.4764L14.6895 21.2885C13.5245 22.0299 12 21.193 12 19.8121Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PlayCircle32;
