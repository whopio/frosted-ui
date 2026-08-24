import * as React from 'react';
import { IconProps } from './types';

export const Note12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Note12"
      {...props}
    >
      <path
        d="M8.25 0C10.32 0 12 1.679 12 3.75v4.5c0 2.07-1.679 3.749-3.75 3.749h-4.5c-2.07 0-3.749-1.679-3.749-3.75v-4.5C.001 1.68 1.68 0 3.751 0h4.5zm-4.5 1.5C2.509 1.5 1.5 2.507 1.5 3.75v4.5c0 1.242 1.008 2.25 2.25 2.25h4.5c1.243-.001 2.25-1.008 2.25-2.25v-4.5c0-1.243-1.007-2.25-2.25-2.25h-4.5zM6 6.75c.414 0 .75.335.75.75 0 .414-.336.75-.75.75H4c-.414 0-.75-.337-.75-.75 0-.415.336-.75.75-.75h2zm2-3c.413 0 .75.336.75.75s-.336.75-.75.75H4c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4z"
        fill={color}
      />
    </svg>
  );
};

Note12.category = 'Interface General';

export default Note12;
