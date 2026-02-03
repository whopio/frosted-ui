import * as React from 'react';
import { IconProps } from './types';

export const MenuClose20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.2451 16.25C10.6591 16.2503 10.9951 16.5859 10.9951 17C10.9951 17.4141 10.6591 17.7497 10.2451 17.75H0.75C0.335786 17.75 0 17.4142 0 17C0 16.5858 0.335786 16.25 0.75 16.25H10.2451ZM10.2451 9.25C10.6591 9.25026 10.9951 9.58595 10.9951 10C10.9951 10.4141 10.6591 10.7497 10.2451 10.75H0.75C0.335786 10.75 0 10.4142 0 10C0 9.58579 0.335786 9.25 0.75 9.25H10.2451ZM10.2451 2.25C10.6591 2.25026 10.9951 2.58595 10.9951 3C10.9951 3.41405 10.6591 3.74974 10.2451 3.75H0.75C0.335786 3.75 0 3.41421 0 3C0 2.58579 0.335786 2.25 0.75 2.25H10.2451Z"
        fill={color}
      />
      <path
        d="M19.25 5L14.25 10L19.25 15"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

MenuClose20.category = 'Interface General';

export default MenuClose20;
