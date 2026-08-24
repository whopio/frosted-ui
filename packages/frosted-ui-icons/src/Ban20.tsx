import * as React from 'react';
import { IconProps } from './types';

export const Ban20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Ban20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zM4.898 16.161C6.283 17.31 8.061 18 10 18c4.418 0 8-3.582 8-8 0-1.94-.69-3.717-1.839-5.102L4.898 16.161zM10 2c-4.418 0-8 3.582-8 8 0 1.939.69 3.716 1.838 5.1L15.1 3.839C13.716 2.69 11.939 2 10 2z"
        fill={color}
      />
    </svg>
  );
};

Ban20.category = 'Interface General';

export default Ban20;
