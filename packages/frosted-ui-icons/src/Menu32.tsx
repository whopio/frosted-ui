import * as React from 'react';
import { IconProps } from './types';

export const Menu32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M28.25 23.5C28.6642 23.5 29 23.8358 29 24.25C29 24.6642 28.6642 25 28.25 25H3.75C3.33579 25 3 24.6642 3 24.25C3 23.8358 3.33579 23.5 3.75 23.5H28.25ZM28.25 15.25C28.6642 15.25 29 15.5858 29 16C29 16.4142 28.6642 16.75 28.25 16.75H3.75C3.33579 16.75 3 16.4142 3 16C3 15.5858 3.33579 15.25 3.75 15.25H28.25ZM28.25 7C28.6642 7 29 7.33579 29 7.75C29 8.16421 28.6642 8.5 28.25 8.5H3.75C3.33579 8.5 3 8.16421 3 7.75C3 7.33579 3.33579 7 3.75 7H28.25Z"
        fill={color}
      />
    </svg>
  );
};

Menu32.category = 'Interface General';

export default Menu32;
