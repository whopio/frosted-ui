import * as React from 'react';
import { IconProps } from './types';

export const MenuBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MenuBoldFilled16"
      {...props}
    >
      <path
        d="M14.25 12c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5H1.75c-.828 0-1.5-.672-1.5-1.5S.922 12 1.75 12h12.5zm0-5.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5H1.75C.922 9.5.25 8.828.25 8s.672-1.5 1.5-1.5h12.5zm0-5.5c.828 0 1.5.672 1.5 1.5S15.078 4 14.25 4H1.75C.922 4 .25 3.328.25 2.5S.922 1 1.75 1h12.5z"
        fill={color}
      />
    </svg>
  );
};

MenuBoldFilled16.category = 'Interface General';

export default MenuBoldFilled16;
