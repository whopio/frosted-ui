import * as React from 'react';
import { IconProps } from './types';

export const PlusRectangle32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusRectangle32"
      {...props}
    >
      <path
        d="M22.75 1C27.306 1 31 4.694 31 9.25v13.5c0 4.556-3.694 8.25-8.25 8.25H9.25C4.694 31 1 27.306 1 22.75V9.25C1 4.694 4.694 1 9.25 1h13.5zM9.25 2.5C5.522 2.5 2.5 5.522 2.5 9.25v13.5c0 3.728 3.022 6.75 6.75 6.75h13.5c3.728 0 6.75-3.022 6.75-6.75V9.25c0-3.728-3.022-6.75-6.75-6.75H9.25zM16 8.25c.414 0 .75.336.75.75v6.25H23c.414 0 .75.336.75.75s-.336.75-.75.75h-6.25V23c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-6.25H9c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.25V9c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

PlusRectangle32.category = 'Interface General';

export default PlusRectangle32;
