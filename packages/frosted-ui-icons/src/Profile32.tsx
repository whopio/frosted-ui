import * as React from 'react';
import { IconProps } from './types';

export const Profile32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.0014 8.66666C21.0014 11.4281 18.7629 13.6667 16.0014 13.6667 13.24 13.6667 11.0015 11.4281 11.0015 8.66666 11.0015 5.90523 13.24 3.66666 16.0014 3.66666 18.7629 3.66666 21.0014 5.90523 21.0014 8.66666zM16.0015 17.6667C11.48 17.6667 8.04948 20.3524 6.6448 24.1505 6.09973 25.6243 7.35925 27 8.93061 27H23.0724C24.6437 27 25.9032 25.6243 25.3581 24.1505 23.9535 20.3524 20.5231 17.6667 16.0015 17.6667z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Profile32;
