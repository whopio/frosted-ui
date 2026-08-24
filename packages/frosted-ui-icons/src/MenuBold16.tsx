import * as React from 'react';
import { IconProps } from './types';

export const MenuBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MenuBold16"
      {...props}
    >
      <path
        d="M14 12c.552 0 1 .448 1 1s-.448 1-1 1H2c-.552 0-1-.448-1-1s.448-1 1-1h12zm0-5c.552 0 1 .448 1 1s-.448 1-1 1H2c-.552 0-1-.448-1-1s.448-1 1-1h12zm0-5c.552 0 1 .448 1 1s-.448 1-1 1H2c-.552 0-1-.448-1-1s.448-1 1-1h12z"
        fill={color}
      />
    </svg>
  );
};

MenuBold16.category = 'Interface General';

export default MenuBold16;
