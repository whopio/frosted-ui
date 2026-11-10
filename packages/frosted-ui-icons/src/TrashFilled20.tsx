import * as React from 'react';
import { IconProps } from './types';

export const TrashFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TrashFilled20"
      {...props}
    >
      <path
        d="M15.71 16.266C15.521 17.826 14.197 19 12.625 19h-5.25c-1.572 0-2.896-1.174-3.085-2.734L3.231 7.5H16.77l-1.059 8.766zM10 1c1.665 0 3.174.977 3.855 2.496l.45 1.004h3.445c.414 0 .75.336.75.75s-.336.75-.75.75H2.25c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.444l.45-1.004C6.827 1.978 8.337 1 10 1zm0 1.5c-1.073 0-2.047.63-2.486 1.61l-.175.39h5.322l-.175-.39C12.046 3.13 11.074 2.5 10 2.5z"
        fill={color}
      />
    </svg>
  );
};

TrashFilled20.category = 'Interface General';

export default TrashFilled20;
