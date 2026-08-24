import * as React from 'react';
import { IconProps } from './types';

export const UserWithBaseFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UserWithBaseFilled32"
      {...props}
    >
      <path
        d="M16 18c3.556 0 6.433.958 8.655 2.752 2.215 1.789 3.714 4.356 4.617 7.464.423 1.456-.728 2.784-2.151 2.784H4.879c-1.423 0-2.575-1.328-2.152-2.784.903-3.108 2.402-5.675 4.618-7.464C9.566 18.958 12.443 18 16 18zm0-17c4.004 0 7.25 3.246 7.25 7.25S20.004 15.5 16 15.5s-7.25-3.246-7.25-7.25S11.996 1 16 1z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UserWithBaseFilled32.category = 'People';

export default UserWithBaseFilled32;
