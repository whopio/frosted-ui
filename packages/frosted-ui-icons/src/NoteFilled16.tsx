import * as React from 'react';
import { IconProps } from './types';

export const NoteFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="NoteFilled16"
      {...props}
    >
      <path
        d="M11.75 0C14.097 0 16 1.903 16 4.25v7.5c0 2.347-1.903 4.25-4.25 4.25h-7.5C1.903 16 0 14.097 0 11.75v-7.5C0 1.903 1.903 0 4.25 0h7.5zM5 10.25c-.414 0-.75.336-.75.75s.336.75.75.75h3c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H5zm0-3c-.414 0-.75.336-.75.75s.336.75.75.75h6c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H5zm0-3c-.414 0-.75.336-.75.75s.336.75.75.75h6c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H5z"
        fill={color}
      />
    </svg>
  );
};

NoteFilled16.category = 'Interface General';

export default NoteFilled16;
