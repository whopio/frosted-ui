import * as React from 'react';
import { IconProps } from './types';

export const MenuFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MenuFilled20"
      {...props}
    >
      <path
        d="M18.25 15c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H1.75c-.69 0-1.25-.56-1.25-1.25S1.06 15 1.75 15h16.5zm0-6.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H1.75C1.06 11.25.5 10.69.5 10s.56-1.25 1.25-1.25h16.5zm0-6.25c.69 0 1.25.56 1.25 1.25S18.94 5 18.25 5H1.75C1.06 5 .5 4.44.5 3.75S1.06 2.5 1.75 2.5h16.5z"
        fill={color}
      />
    </svg>
  );
};

MenuFilled20.category = 'Interface General';

export default MenuFilled20;
