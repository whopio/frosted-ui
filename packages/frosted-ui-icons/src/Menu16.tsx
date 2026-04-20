import * as React from 'react';
import { IconProps } from './types';

export const Menu16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.25 12.5C14.6642 12.5 15 12.8358 15 13.25C15 13.6642 14.6642 14 14.25 14H1.75C1.33579 14 1 13.6642 1 13.25C1 12.8358 1.33579 12.5 1.75 12.5H14.25ZM14.25 7.25C14.6642 7.25 15 7.58579 15 8C15 8.41421 14.6642 8.75 14.25 8.75H1.75C1.33579 8.75 1 8.41421 1 8C1 7.58579 1.33579 7.25 1.75 7.25H14.25ZM14.25 2C14.6642 2 15 2.33579 15 2.75C15 3.16421 14.6642 3.5 14.25 3.5H1.75C1.33579 3.5 1 3.16421 1 2.75C1 2.33579 1.33579 2 1.75 2H14.25Z"
        fill={color}
      />
    </svg>
  );
};

Menu16.category = 'Interface General';

export default Menu16;
