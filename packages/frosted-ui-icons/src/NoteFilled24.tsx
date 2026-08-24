import * as React from 'react';
import { IconProps } from './types';

export const NoteFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="NoteFilled24"
      {...props}
    >
      <path
        d="M17.5 0C21.09 0 24 2.91 24 6.5v11c0 3.59-2.91 6.5-6.5 6.5h-11C2.91 24 0 21.09 0 17.5v-11C0 2.91 2.91 0 6.5 0h11zM7 16.25c-.414 0-.75.336-.75.75s.336.75.75.75h5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H7zm0-5c-.414 0-.75.336-.75.75s.336.75.75.75h10c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H7zm0-5c-.414 0-.75.336-.75.75s.336.75.75.75h10c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H7z"
        fill={color}
      />
    </svg>
  );
};

NoteFilled24.category = 'Interface General';

export default NoteFilled24;
