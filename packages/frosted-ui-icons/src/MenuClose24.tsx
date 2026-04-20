import * as React from 'react';
import { IconProps } from './types';

export const MenuClose24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M13.25 19.75C13.6642 19.75 14 20.0858 14 20.5C14 20.9142 13.6642 21.25 13.25 21.25H0.75C0.335786 21.25 0 20.9142 0 20.5C0 20.0858 0.335786 19.75 0.75 19.75H13.25ZM13.25 11.25C13.6642 11.25 14 11.5858 14 12C14 12.4142 13.6642 12.75 13.25 12.75H0.75C0.335786 12.75 0 12.4142 0 12C0 11.5858 0.335786 11.25 0.75 11.25H13.25ZM13.25 2.75C13.6642 2.75 14 3.08579 14 3.5C14 3.91421 13.6642 4.25 13.25 4.25H0.75C0.335786 4.25 0 3.91421 0 3.5C0 3.08579 0.335786 2.75 0.75 2.75H13.25Z"
        fill={color}
      />
      <path
        d="M23.25 6L17.25 12L23.25 18"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

MenuClose24.category = 'Interface General';

export default MenuClose24;
