import * as React from 'react';
import { IconProps } from './types';

export const MenuClose16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8.24902 12.75C8.66295 12.7503 8.99902 13.086 8.99902 13.5C8.99902 13.914 8.66295 14.2497 8.24902 14.25H0.75C0.335786 14.25 0 13.9142 0 13.5C0 13.0858 0.335786 12.75 0.75 12.75H8.24902ZM8.24902 7.25C8.66295 7.25033 8.99902 7.58599 8.99902 8C8.99902 8.41401 8.66295 8.74967 8.24902 8.75H0.75C0.335786 8.75 0 8.41421 0 8C0 7.58579 0.335786 7.25 0.75 7.25H8.24902ZM8.24902 1.75C8.66295 1.75033 8.99902 2.08599 8.99902 2.5C8.99902 2.91401 8.66295 3.24967 8.24902 3.25H0.75C0.335786 3.25 0 2.91421 0 2.5C0 2.08579 0.335786 1.75 0.75 1.75H8.24902Z"
        fill={color}
      />
      <path
        d="M15.25 4L11.25 8L15.25 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

MenuClose16.category = 'Interface General';

export default MenuClose16;
