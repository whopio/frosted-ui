import * as React from 'react';
import { IconProps } from './types';

export const UserWithBaseBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UserWithBaseBoldFilled20"
      {...props}
    >
      <path
        d="M10.001 11c1.669 0 3.34.375 4.766 1.29 1.439.925 2.563 2.361 3.178 4.358.389 1.262-.63 2.352-1.782 2.352H3.84c-1.153 0-2.17-1.09-1.782-2.352.615-1.997 1.739-3.433 3.178-4.358C6.661 11.375 8.332 11 10.001 11zm0-10c2.485 0 4.5 2.015 4.5 4.5s-2.015 4.5-4.5 4.5-4.5-2.015-4.5-4.5S7.516 1 10.001 1z"
        fill={color}
      />
    </svg>
  );
};

UserWithBaseBoldFilled20.category = 'People';

export default UserWithBaseBoldFilled20;
