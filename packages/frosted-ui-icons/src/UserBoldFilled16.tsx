import * as React from 'react';
import { IconProps } from './types';

export const UserBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UserBoldFilled16"
      {...props}
    >
      <path
        d="M8 9c2.357 0 4.948 1.013 5.964 3.838.424 1.175-.553 2.162-1.568 2.162h-8.79c-1.016 0-1.992-.986-1.57-2.162l.101-.26C3.217 9.951 5.718 9 8.001 9zm0-8c1.934 0 3.5 1.567 3.5 3.5S9.935 8 8 8C6.069 8 4.5 6.433 4.5 4.5S6.069 1 8 1z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UserBoldFilled16.category = 'People';

export default UserBoldFilled16;
