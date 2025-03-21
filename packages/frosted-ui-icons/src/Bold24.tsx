import * as React from 'react';
import { IconProps } from './types';

export const Bold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.74219 12H13.252C15.4611 12 17.252 10.2091 17.252 8V7.75C17.252 5.54086 15.4611 3.75 13.252 3.75H6.74219C6.1899 3.75 5.74219 4.19772 5.74219 4.75V12ZM5.74219 12V19.25C5.74219 19.8023 6.1899 20.25 6.74219 20.25H12.502M13.0022 20.25H14.2522C16.4613 20.25 18.2522 18.4591 18.2522 16.25V16C18.2522 13.7909 16.4613 12 14.2522 12H13.0022"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Bold24;
