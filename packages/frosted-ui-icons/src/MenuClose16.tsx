import * as React from 'react';
import { IconProps } from './types';

export const MenuClose16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MenuClose16"
      {...props}
    >
      <path
        d="M8.249 12.75c.414 0 .75.336.75.75s-.336.75-.75.75H.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.499zm6.47-9.28c.294-.293.768-.293 1.061 0 .293.293.293.767 0 1.06L12.31 8l3.47 3.47c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0l-4-4c-.293-.293-.293-.767 0-1.06l4-4zM8.25 7.25c.414 0 .75.336.75.75s-.336.75-.75.75H.75C.336 8.75 0 8.414 0 8s.336-.75.75-.75h7.499zm0-5.5c.414 0 .75.336.75.75s-.336.75-.75.75H.75C.336 3.25 0 2.914 0 2.5s.336-.75.75-.75h7.499z"
        fill={color}
      />
    </svg>
  );
};

MenuClose16.category = 'Interface General';

export default MenuClose16;
