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
        d="M8.001 9c2.356 0 4.947 1.013 5.964 3.838.423 1.175-.553 2.162-1.569 2.162h-8.79c-1.016 0-1.992-.986-1.569-2.162l.1-.26C3.218 9.951 5.72 9 8.002 9zm0-8c1.933 0 3.5 1.567 3.5 3.5S9.934 8 8.001 8s-3.5-1.567-3.5-3.5S6.068 1 8.001 1z"
        fill={color}
      />
    </svg>
  );
};

UserBoldFilled16.category = 'People';

export default UserBoldFilled16;
