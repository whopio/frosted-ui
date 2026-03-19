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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M28 23C28.5523 23 29 23.4477 29 24C29 24.5523 28.5523 25 28 25H4C3.44772 25 3 24.5523 3 24C3 23.4477 3.44772 23 4 23H28ZM28 15C28.5523 15 29 15.4477 29 16C29 16.5523 28.5523 17 28 17H4C3.44772 17 3 16.5523 3 16C3 15.4477 3.44772 15 4 15H28ZM28 7C28.5523 7 29 7.44772 29 8C29 8.55228 28.5523 9 28 9H4C3.44772 9 3 8.55228 3 8C3 7.44772 3.44772 7 4 7H28Z"
        fill={color}
      />
    </svg>
  );
};

MenuBold32.category = 'Product Icons';

export default MenuBold32;
