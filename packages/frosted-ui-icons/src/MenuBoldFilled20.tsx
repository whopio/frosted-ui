import * as React from 'react';
import { IconProps } from './types';

export const MenuBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MenuBoldFilled20"
      {...props}
    >
      <path
        d="M18.25 15c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5H1.75c-.828 0-1.5-.672-1.5-1.5S.922 15 1.75 15h16.5zm0-6.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5H1.75c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h16.5zm0-6.5c.828 0 1.5.672 1.5 1.5S19.078 5 18.25 5H1.75C.922 5 .25 4.328.25 3.5S.922 2 1.75 2h16.5z"
        fill={color}
      />
    </svg>
  );
};

MenuBoldFilled20.category = 'Interface General';

export default MenuBoldFilled20;
