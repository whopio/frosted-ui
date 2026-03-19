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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.75 9C11.4404 9 12 9.55964 12 10.25C12 10.9404 11.4404 11.5 10.75 11.5H1.25C0.559644 11.5 0 10.9404 0 10.25C0 9.55964 0.559644 9 1.25 9H10.75ZM10.75 4.75C11.4404 4.75 12 5.30964 12 6C12 6.69036 11.4404 7.25 10.75 7.25H1.25C0.559644 7.25 0 6.69036 0 6C0 5.30964 0.559644 4.75 1.25 4.75H10.75ZM10.75 0.5C11.4404 0.5 12 1.05964 12 1.75C12 2.44036 11.4404 3 10.75 3H1.25C0.559644 3 0 2.44036 0 1.75C0 1.05964 0.559644 0.5 1.25 0.5H10.75Z"
        fill={color}
      />
    </svg>
  );
};

MenuFilled12.category = 'Product Icons';

export default MenuFilled12;
