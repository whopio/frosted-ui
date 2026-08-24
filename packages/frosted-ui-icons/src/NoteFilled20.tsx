import * as React from 'react';
import { IconProps } from './types';

export const NoteFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="NoteFilled20"
      {...props}
    >
      <path
        d="M14.65 0C17.605 0 20 2.395 20 5.35v9.3c0 2.955-2.395 5.35-5.35 5.35h-9.3C2.395 20 0 17.605 0 14.65v-9.3C0 2.395 2.395 0 5.35 0h9.3zM6 13.25c-.414 0-.75.336-.75.75s.336.75.75.75h5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H6zm0-4c-.414 0-.75.336-.75.75s.336.75.75.75h8c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H6zm0-4c-.414 0-.75.336-.75.75s.336.75.75.75h8c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H6z"
        fill={color}
      />
    </svg>
  );
};

NoteFilled20.category = 'Interface General';

export default NoteFilled20;
