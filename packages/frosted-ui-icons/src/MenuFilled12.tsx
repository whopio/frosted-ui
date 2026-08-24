import * as React from 'react';
import { IconProps } from './types';

export const MenuFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MenuFilled12"
      {...props}
    >
      <path
        d="M10.75 9c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-9.5C.56 11.5 0 10.94 0 10.25S.56 9 1.25 9h9.5zm0-4.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-9.5C.56 7.25 0 6.69 0 6s.56-1.25 1.25-1.25h9.5zm0-4.25c.69 0 1.25.56 1.25 1.25S11.44 3 10.75 3h-9.5C.56 3 0 2.44 0 1.75S.56.5 1.25.5h9.5z"
        fill={color}
      />
    </svg>
  );
};

MenuFilled12.category = 'Interface General';

export default MenuFilled12;
