import * as React from 'react';
import { IconProps } from './types';

export const UserBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UserBoldFilled32"
      {...props}
    >
      <path
        d="M16 18c3.575 0 6.503.852 8.782 2.566 2.278 1.714 3.808 4.215 4.726 7.328.482 1.633-.814 3.106-2.387 3.106H4.88c-1.572 0-2.868-1.473-2.387-3.106.918-3.113 2.449-5.614 4.727-7.328C9.498 18.853 12.426 18 16 18zm0-17c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5-4.142 0-7.5-3.358-7.5-7.5C8.5 4.358 11.858 1 16 1z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UserBoldFilled32.category = 'People';

export default UserBoldFilled32;
