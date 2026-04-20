import * as React from 'react';
import { IconProps } from './types';

export const MenuFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.25 12C14.9404 12 15.5 12.5596 15.5 13.25C15.5 13.9404 14.9404 14.5 14.25 14.5H1.75C1.05964 14.5 0.5 13.9404 0.5 13.25C0.5 12.5596 1.05964 12 1.75 12H14.25ZM14.25 6.75C14.9404 6.75 15.5 7.30964 15.5 8C15.5 8.69036 14.9404 9.25 14.25 9.25H1.75C1.05964 9.25 0.5 8.69036 0.5 8C0.5 7.30964 1.05964 6.75 1.75 6.75H14.25ZM14.25 1.5C14.9404 1.5 15.5 2.05964 15.5 2.75C15.5 3.44036 14.9404 4 14.25 4H1.75C1.05964 4 0.5 3.44036 0.5 2.75C0.5 2.05964 1.05964 1.5 1.75 1.5H14.25Z"
        fill={color}
      />
    </svg>
  );
};

MenuFilled16.category = 'Interface General';

export default MenuFilled16;
