import * as React from 'react';
import { IconProps } from './types';

export const MenuBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MenuBold32"
      {...props}
    >
      <path
        d="M28 23c.552 0 1 .448 1 1s-.448 1-1 1H4c-.552 0-1-.448-1-1s.448-1 1-1h24zm0-8c.552 0 1 .448 1 1s-.448 1-1 1H4c-.552 0-1-.448-1-1s.448-1 1-1h24zm0-8c.552 0 1 .448 1 1s-.448 1-1 1H4c-.552 0-1-.448-1-1s.448-1 1-1h24z"
        fill={color}
      />
    </svg>
  );
};

MenuBold32.category = 'Interface General';

export default MenuBold32;
