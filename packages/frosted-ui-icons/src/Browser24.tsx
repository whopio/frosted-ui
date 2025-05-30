import * as React from 'react';
import { IconProps } from './types';

export const Browser24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5 5C5 5.55228 4.55228 6 4 6 3.44772 6 3 5.55228 3 5 3 4.44772 3.44772 4 4 4 4.55228 4 5 4.44772 5 5zM8 5C8 5.55228 7.55228 6 7 6 6.44772 6 6 5.55228 6 5 6 4.44772 6.44772 4 7 4 7.55228 4 8 4.44772 8 5zM10 6C10.5523 6 11 5.55228 11 5 11 4.44772 10.5523 4 10 4 9.44772 4 9 4.44772 9 5 9 5.55228 9.44772 6 10 6z"
        fill={color}
      />
      <path
        d="M0 4C0 2.34315 1.34315 1 3 1H21C22.6569 1 24 2.34315 24 4V19.5C24 21.1569 22.6569 22.5 21 22.5H3C1.34315 22.5 0 21.1569 0 19.5V4ZM3 2.5C2.17157 2.5 1.5 3.17157 1.5 4V7.25H22.5V4C22.5 3.17157 21.8284 2.5 21 2.5H3ZM21 21C21.8284 21 22.5 20.3284 22.5 19.5V8.75H1.5V19.5C1.5 20.3284 2.17157 21 3 21H21Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Browser24;
