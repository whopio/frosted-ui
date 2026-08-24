import * as React from 'react';
import { IconProps } from './types';

export const NoteFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="NoteFilled12"
      {...props}
    >
      <path
        d="M8.25 0C10.32 0 12 1.679 12 3.75v4.5c0 2.07-1.679 3.749-3.75 3.749h-4.5c-2.07 0-3.749-1.679-3.749-3.75v-4.5C.001 1.68 1.68 0 3.751 0h4.5zM4 6.75c-.414 0-.75.335-.75.75 0 .413.336.75.75.75h2c.414 0 .75-.336.75-.75 0-.415-.336-.75-.75-.75H4zm0-3c-.414 0-.75.336-.75.75s.336.75.75.75h4c.414 0 .75-.336.75-.75s-.337-.75-.75-.75H4z"
        fill={color}
      />
    </svg>
  );
};

NoteFilled12.category = 'Interface General';

export default NoteFilled12;
