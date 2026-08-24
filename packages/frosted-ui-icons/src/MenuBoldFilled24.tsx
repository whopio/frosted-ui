import * as React from 'react';
import { IconProps } from './types';

export const MenuBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MenuBoldFilled24"
      {...props}
    >
      <path
        d="M22.25 18c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5H1.75c-.828 0-1.5-.672-1.5-1.5S.922 18 1.75 18h20.5zm0-7.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5H1.75c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h20.5zm0-7.5c.828 0 1.5.672 1.5 1.5S23.078 6 22.25 6H1.75C.922 6 .25 5.328.25 4.5S.922 3 1.75 3h20.5z"
        fill={color}
      />
    </svg>
  );
};

MenuBoldFilled24.category = 'Interface General';

export default MenuBoldFilled24;
