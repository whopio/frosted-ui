import * as React from 'react';
import { IconProps } from './types';

export const Hashtag20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Hashtag20"
      {...props}
    >
      <path
        d="M15.196 2.27c.108-.4.518-.638.918-.531.4.107.638.519.53.919l-.871 3.256H18.4c.414 0 .75.336.75.75s-.336.75-.75.75h-3.03l-1.415 5.284h2.83c.414 0 .75.336.75.75s-.336.75-.75.75h-3.232l-.89 3.321c-.107.4-.519.638-.919.53-.4-.107-.637-.518-.53-.918L12 14.198H5.799l-.89 3.321c-.107.4-.519.638-.919.53-.4-.107-.637-.518-.53-.918l.786-2.933H1.601c-.415 0-.75-.336-.75-.75s.335-.75.75-.75h3.046l1.416-5.284H3.216c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.25l.976-3.645c.108-.4.519-.637.918-.53.4.107.638.519.53.919L8.02 5.914h6.2l.977-3.645zM6.201 12.697h6.2l1.416-5.284h-6.2L6.2 12.698z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Hashtag20.category = 'Interface General';

export default Hashtag20;
