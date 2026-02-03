import * as React from 'react';
import { IconProps } from './types';

export const Menu24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M23.25 19.75C23.6642 19.75 24 20.0858 24 20.5C24 20.9142 23.6642 21.25 23.25 21.25H0.75C0.335786 21.25 0 20.9142 0 20.5C0 20.0858 0.335786 19.75 0.75 19.75H23.25ZM23.25 11.25C23.6642 11.25 24 11.5858 24 12C24 12.4142 23.6642 12.75 23.25 12.75H0.75C0.335786 12.75 0 12.4142 0 12C0 11.5858 0.335786 11.25 0.75 11.25H23.25ZM23.25 2.75C23.6642 2.75 24 3.08579 24 3.5C24 3.91421 23.6642 4.25 23.25 4.25H0.75C0.335786 4.25 0 3.91421 0 3.5C0 3.08579 0.335786 2.75 0.75 2.75H23.25Z"
        fill={color}
      />
    </svg>
  );
};

export default Menu24;
