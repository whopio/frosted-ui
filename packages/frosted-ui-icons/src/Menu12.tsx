import * as React from 'react';
import { IconProps } from './types';

export const Menu12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.25 9.5C11.6642 9.5 12 9.83579 12 10.25C12 10.6642 11.6642 11 11.25 11H0.75C0.335786 11 0 10.6642 0 10.25C0 9.83579 0.335786 9.5 0.75 9.5H11.25ZM11.25 5.25C11.6642 5.25 12 5.58579 12 6C12 6.41421 11.6642 6.75 11.25 6.75H0.75C0.335786 6.75 0 6.41421 0 6C0 5.58579 0.335786 5.25 0.75 5.25H11.25ZM11.25 1C11.6642 1 12 1.33579 12 1.75C12 2.16421 11.6642 2.5 11.25 2.5H0.75C0.335786 2.5 0 2.16421 0 1.75C0 1.33579 0.335786 1 0.75 1H11.25Z"
        fill={color}
      />
    </svg>
  );
};

Menu12.category = 'Product Icons';

export default Menu12;
