import * as React from 'react';
import { IconProps } from './types';

export const Command24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.25 8.25V5C8.25 3.20507 6.79493 1.75 5 1.75C3.20507 1.75 1.75 3.20507 1.75 5C1.75 6.79493 3.20507 8.25 5 8.25H8.25ZM8.25 8.25V15.75M8.25 8.25H15.75M8.25 15.75H15.75M8.25 15.75H5C3.20507 15.75 1.75 17.2051 1.75 19C1.75 20.7949 3.20507 22.25 5 22.25C6.79493 22.25 8.25 20.7949 8.25 19V15.75ZM15.75 15.75V8.25M15.75 15.75V19C15.75 20.7949 17.2051 22.25 19 22.25C20.7949 22.25 22.25 20.7949 22.25 19C22.25 17.2051 20.7949 15.75 19 15.75H15.75ZM15.75 8.25V5C15.75 3.20507 17.2051 1.75 19 1.75C20.7949 1.75 22.25 3.20507 22.25 5C22.25 6.79493 20.7949 8.25 19 8.25H15.75Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Command24.category = 'Interface General';

export default Command24;
