import * as React from 'react';
import { IconProps } from './types';

export const User32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 2.5C12.9624 2.5 10.5 4.96243 10.5 8 10.5 11.0376 12.9624 13.5 16 13.5 19.0376 13.5 21.5 11.0376 21.5 8 21.5 4.96243 19.0376 2.5 16 2.5zM9 8C9 4.13401 12.134 1 16 1 19.866 1 23 4.13401 23 8 23 11.866 19.866 15 16 15 12.134 15 9 11.866 9 8zM16 18.5C9.64485 18.5 4.5 22.83 4.5 29.25 4.5 29.6642 4.16421 30 3.75 30 3.33579 30 3 29.6642 3 29.25 3 21.8629 8.96225 17 16 17 23.0378 17 29 21.8629 29 29.25 29 29.6642 28.6642 30 28.25 30 27.8358 30 27.5 29.6642 27.5 29.25 27.5 22.83 22.3552 18.5 16 18.5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default User32;
