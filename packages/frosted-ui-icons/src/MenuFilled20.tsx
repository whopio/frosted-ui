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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M18.25 15C18.9404 15 19.5 15.5596 19.5 16.25C19.5 16.9404 18.9404 17.5 18.25 17.5H1.75C1.05964 17.5 0.5 16.9404 0.5 16.25C0.5 15.5596 1.05964 15 1.75 15H18.25ZM18.25 8.75C18.9404 8.75 19.5 9.30964 19.5 10C19.5 10.6904 18.9404 11.25 18.25 11.25H1.75C1.05964 11.25 0.5 10.6904 0.5 10C0.5 9.30964 1.05964 8.75 1.75 8.75H18.25ZM18.25 2.5C18.9404 2.5 19.5 3.05964 19.5 3.75C19.5 4.44036 18.9404 5 18.25 5H1.75C1.05964 5 0.5 4.44036 0.5 3.75C0.5 3.05964 1.05964 2.5 1.75 2.5H18.25Z"
        fill={color}
      />
    </svg>
  );
};

MenuFilled20.category = 'Product Icons';

export default MenuFilled20;
