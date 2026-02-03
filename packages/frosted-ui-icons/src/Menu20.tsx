import * as React from 'react';
import { IconProps } from './types';

export const Menu20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M19.25 16.25C19.6642 16.25 20 16.5858 20 17C20 17.4142 19.6642 17.75 19.25 17.75H0.75C0.335786 17.75 0 17.4142 0 17C0 16.5858 0.335786 16.25 0.75 16.25H19.25ZM19.25 9.25C19.6642 9.25 20 9.58579 20 10C20 10.4142 19.6642 10.75 19.25 10.75H0.75C0.335786 10.75 0 10.4142 0 10C0 9.58579 0.335786 9.25 0.75 9.25H19.25ZM19.25 2.25C19.6642 2.25 20 2.58579 20 3C20 3.41421 19.6642 3.75 19.25 3.75H0.75C0.335786 3.75 0 3.41421 0 3C0 2.58579 0.335786 2.25 0.75 2.25H19.25Z"
        fill={color}
      />
    </svg>
  );
};

Menu20.category = 'Interface General';

export default Menu20;
