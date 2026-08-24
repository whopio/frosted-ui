import * as React from 'react';
import { IconProps } from './types';

export const MenuBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MenuBoldFilled32"
      {...props}
    >
      <path
        d="M28.25 23c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5H3.75c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h24.5zm0-8.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5H3.75c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h24.5zm0-8.5c.828 0 1.5.672 1.5 1.5S29.078 9 28.25 9H3.75c-.828 0-1.5-.672-1.5-1.5S2.922 6 3.75 6h24.5z"
        fill={color}
      />
    </svg>
  );
};

MenuBoldFilled32.category = 'Interface General';

export default MenuBoldFilled32;
