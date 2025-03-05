import * as React from 'react';
import { IconProps } from './types';

export const EditProfile24 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
      <circle cx="10.5" cy="5.5" r="4.5" stroke={color} strokeWidth="1.5" />
      <path
        d="M0.999756 23C0.999756 17 4.99976 12 12.4998 14"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17.4612 13.9736L12.9319 18.5029C12.6108 18.8241 12.4085 19.2449 12.3583 19.6963L12.1103 21.9285C12.0537 22.438 12.4842 22.8685 12.9938 22.8119L15.226 22.5639C15.6773 22.5138 16.0982 22.3115 16.4193 21.9904L20.9486 17.461M17.4612 13.9736L18.769 12.6658C19.732 11.7028 21.2934 11.7028 22.2564 12.6658V12.6658C23.2194 13.6289 23.2194 15.1902 22.2564 16.1533L20.9486 17.461M17.4612 13.9736L20.9486 17.461"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default EditProfile24;
