import * as React from 'react';
import { IconProps } from './types';

export const MenuBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MenuBold12"
      {...props}
    >
      <path
        d="M11 9c.552 0 1 .448 1 1s-.448 1-1 1H1c-.552 0-1-.448-1-1s.448-1 1-1h10zm0-4c.552 0 1 .448 1 1s-.448 1-1 1H1c-.552 0-1-.448-1-1s.448-1 1-1h10zm0-4c.552 0 1 .448 1 1s-.448 1-1 1H1c-.552 0-1-.448-1-1s.448-1 1-1h10z"
        fill={color}
      />
    </svg>
  );
};

MenuBold12.category = 'Interface General';

export default MenuBold12;
