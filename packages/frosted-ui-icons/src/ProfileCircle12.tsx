import * as React from 'react';
import { IconProps } from './types';

export const ProfileCircle12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ProfileCircle12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm.001 9c-.843 0-1.598.38-2.104.979.628.332 1.343.521 2.103.521.76 0 1.474-.19 2.102-.521C7.597 9.38 6.843 9 6 9zM6 1.5C3.515 1.5 1.5 3.515 1.5 6c0 1.185.459 2.262 1.207 3.065C3.486 8.111 4.672 7.5 6.001 7.5s2.512.612 3.291 1.565C10.041 8.262 10.5 7.185 10.5 6c0-2.485-2.015-4.5-4.5-4.5zm0 .75c1.243 0 2.25 1.007 2.25 2.25S7.243 6.75 6 6.75 3.75 5.743 3.75 4.5 4.757 2.25 6 2.25zm0 1.5c-.414 0-.75.336-.75.75s.336.75.75.75.75-.336.75-.75-.336-.75-.75-.75z"
        fill={color}
      />
    </svg>
  );
};

ProfileCircle12.category = 'People';

export default ProfileCircle12;
