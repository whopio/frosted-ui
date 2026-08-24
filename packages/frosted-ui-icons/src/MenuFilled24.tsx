import * as React from 'react';
import { IconProps } from './types';

export const MenuFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MenuFilled24"
      {...props}
    >
      <path
        d="M22.25 18c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H1.75c-.69 0-1.25-.56-1.25-1.25S1.06 18 1.75 18h20.5zm0-7.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H1.75C1.06 13.25.5 12.69.5 12s.56-1.25 1.25-1.25h20.5zm0-7.25c.69 0 1.25.56 1.25 1.25S22.94 6 22.25 6H1.75C1.06 6 .5 5.44.5 4.75S1.06 3.5 1.75 3.5h20.5z"
        fill={color}
      />
    </svg>
  );
};

MenuFilled24.category = 'Interface General';

export default MenuFilled24;
