import * as React from 'react';
import { IconProps } from './types';

export const Hashtag32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Hashtag32"
      {...props}
    >
      <path
        d="M25.135 3.56c.107-.4.519-.637.919-.53.4.107.637.52.53.92l-1.622 6.052h5.028c.414 0 .75.336.75.75s-.336.75-.75.75h-5.43l-2.626 9.803h5.365c.414 0 .75.337.75.75 0 .415-.336.75-.75.75H21.53L19.95 28.71c-.107.4-.519.637-.919.53-.4-.107-.637-.519-.53-.919l1.477-5.516H8.613L7.031 28.71c-.107.4-.519.637-.919.53-.4-.107-.637-.519-.53-.919l1.478-5.516H2c-.414 0-.75-.335-.75-.75 0-.413.336-.75.75-.75h5.462l2.627-9.803H4.69c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h5.8l1.726-6.442c.107-.4.519-.637.919-.53.4.108.637.52.53.92l-1.622 6.052h11.365l1.726-6.442zM9.015 21.305H20.38l2.627-9.803H11.643l-2.627 9.803z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Hashtag32.category = 'Interface General';

export default Hashtag32;
