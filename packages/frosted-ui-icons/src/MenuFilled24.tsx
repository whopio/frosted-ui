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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M22.25 18C22.9404 18 23.5 18.5596 23.5 19.25C23.5 19.9404 22.9404 20.5 22.25 20.5H1.75C1.05964 20.5 0.5 19.9404 0.5 19.25C0.5 18.5596 1.05964 18 1.75 18H22.25ZM22.25 10.75C22.9404 10.75 23.5 11.3096 23.5 12C23.5 12.6904 22.9404 13.25 22.25 13.25H1.75C1.05964 13.25 0.5 12.6904 0.5 12C0.5 11.3096 1.05964 10.75 1.75 10.75H22.25ZM22.25 3.5C22.9404 3.5 23.5 4.05964 23.5 4.75C23.5 5.44036 22.9404 6 22.25 6H1.75C1.05964 6 0.5 5.44036 0.5 4.75C0.5 4.05964 1.05964 3.5 1.75 3.5H22.25Z"
        fill={color}
      />
    </svg>
  );
};

MenuFilled24.category = 'Product Icons';

export default MenuFilled24;
