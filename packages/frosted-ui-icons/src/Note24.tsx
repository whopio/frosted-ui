import * as React from 'react';
import { IconProps } from './types';

export const Note24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Note24"
      {...props}
    >
      <path
        d="M17.5 0C21.09 0 24 2.91 24 6.5v11c0 3.59-2.91 6.5-6.5 6.5h-11C2.91 24 0 21.09 0 17.5v-11C0 2.91 2.91 0 6.5 0h11zm-11 1.5c-2.761 0-5 2.239-5 5v11c0 2.761 2.239 5 5 5h11c2.761 0 5-2.239 5-5v-11c0-2.761-2.239-5-5-5h-11zM12 16.25c.414 0 .75.336.75.75s-.336.75-.75.75H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h5zm5-5c.414 0 .75.336.75.75s-.336.75-.75.75H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10zm0-5c.414 0 .75.336.75.75s-.336.75-.75.75H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10z"
        fill={color}
      />
    </svg>
  );
};

Note24.category = 'Interface General';

export default Note24;
