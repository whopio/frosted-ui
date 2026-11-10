import * as React from 'react';
import { IconProps } from './types';

export const UserWithBaseBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UserWithBaseBold16"
      {...props}
    >
      <path
        d="M8 9c2.356 0 4.947 1.013 5.964 3.838.423 1.176-.553 2.162-1.569 2.162h-8.79c-1.016 0-1.992-.987-1.569-2.162l.1-.26C3.217 9.951 5.719 9 8 9zm0 2c-1.65 0-3.108.607-3.85 2h7.7c-.742-1.393-2.2-2-3.85-2zM8 1c1.933 0 3.5 1.567 3.5 3.5S9.933 8 8 8 4.5 6.433 4.5 4.5 6.067 1 8 1zm0 2c-.828 0-1.5.672-1.5 1.5S7.172 6 8 6s1.5-.672 1.5-1.5S8.828 3 8 3z"
        fill={color}
      />
    </svg>
  );
};

UserWithBaseBold16.category = 'People';

export default UserWithBaseBold16;
