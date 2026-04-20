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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M28.25 23C29.0784 23 29.75 23.6716 29.75 24.5C29.75 25.3284 29.0784 26 28.25 26H3.75C2.92157 26 2.25 25.3284 2.25 24.5C2.25 23.6716 2.92157 23 3.75 23H28.25ZM28.25 14.5C29.0784 14.5 29.75 15.1716 29.75 16C29.75 16.8284 29.0784 17.5 28.25 17.5H3.75C2.92157 17.5 2.25 16.8284 2.25 16C2.25 15.1716 2.92157 14.5 3.75 14.5H28.25ZM28.25 6C29.0784 6 29.75 6.67157 29.75 7.5C29.75 8.32843 29.0784 9 28.25 9H3.75C2.92157 9 2.25 8.32843 2.25 7.5C2.25 6.67157 2.92157 6 3.75 6H28.25Z"
        fill={color}
      />
    </svg>
  );
};

MenuBoldFilled32.category = 'Interface General';

export default MenuBoldFilled32;
