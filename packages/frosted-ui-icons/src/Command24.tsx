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
        d="M9.25 9.25V6C9.25 4.20507 7.79493 2.75 6 2.75C4.20507 2.75 2.75 4.20507 2.75 6C2.75 7.79493 4.20507 9.25 6 9.25H9.25ZM9.25 9.25H14.75M9.25 9.25V14.75M9.25 14.75V18C9.25 19.7949 7.79493 21.25 6 21.25C4.20507 21.25 2.75 19.7949 2.75 18C2.75 16.2051 4.20507 14.75 6 14.75H9.25ZM9.25 14.75H14.75M14.75 9.25V6C14.75 4.20507 16.2051 2.75 18 2.75C19.7949 2.75 21.25 4.20507 21.25 6C21.25 7.79493 19.7949 9.25 18 9.25H14.75ZM14.75 9.25V14.75M14.75 14.75V18C14.75 19.7949 16.2051 21.25 18 21.25C19.7949 21.25 21.25 19.7949 21.25 18C21.25 16.2051 19.7949 14.75 18 14.75H14.75Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Command24;
