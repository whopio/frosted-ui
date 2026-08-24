import * as React from 'react';
import { IconProps } from './types';

export const MenuClose32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MenuClose32"
      {...props}
    >
      <path
        d="M19.25 25.25c.414 0 .75.336.75.75s-.336.75-.75.75H1.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h17.5zM29.72 8.47c.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06L24.31 16l6.47 6.47c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0l-7-7c-.293-.293-.293-.767 0-1.06l7-7zm-10.47 6.78c.414 0 .75.336.75.75s-.336.75-.75.75H1.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h17.5zm0-10c.414 0 .75.336.75.75s-.336.75-.75.75H1.75C1.336 6.75 1 6.414 1 6s.336-.75.75-.75h17.5z"
        fill={color}
      />
    </svg>
  );
};

MenuClose32.category = 'Interface General';

export default MenuClose32;
