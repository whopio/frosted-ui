import * as React from 'react';
import { IconProps } from './types';

export const UserWithBaseBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.0003 18C19.5746 18 22.5026 18.8525 24.7815 20.5664C27.0599 22.28 28.5904 24.7806 29.5081 27.8936C29.9895 29.527 28.6935 31 27.1214 31H4.87919C3.30722 30.9998 2.01115 29.5268 2.49247 27.8936C3.41012 24.7806 4.94074 22.28 7.21904 20.5664C9.49796 18.8525 12.426 18 16.0003 18ZM16.0003 1C20.1424 1 23.5003 4.35786 23.5003 8.5C23.5003 12.6421 20.1424 16 16.0003 16C11.8583 15.9998 8.50029 12.642 8.50029 8.5C8.50029 4.35799 11.8583 1.00021 16.0003 1Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UserWithBaseBoldFilled32.category = 'People';

export default UserWithBaseBoldFilled32;
