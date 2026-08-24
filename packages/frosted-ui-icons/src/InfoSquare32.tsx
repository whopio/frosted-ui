import * as React from 'react';
import { IconProps } from './types';

export const InfoSquare32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InfoSquare32"
      {...props}
    >
      <path
        d="M22.75 1C27.306 1 31 4.694 31 9.25v13.5c0 4.556-3.694 8.25-8.25 8.25H9.25C4.694 31 1 27.306 1 22.75V9.25C1 4.694 4.694 1 9.25 1h13.5zM9.25 2.5C5.522 2.5 2.5 5.522 2.5 9.25v13.5c0 3.728 3.022 6.75 6.75 6.75h13.5c3.728 0 6.75-3.022 6.75-6.75V9.25c0-3.728-3.022-6.75-6.75-6.75H9.25zM16.001 13c.414 0 .75.336.75.75v9.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-9.5c0-.414.336-.75.75-.75zm0-5c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25z"
        fill={color}
      />
    </svg>
  );
};

InfoSquare32.category = 'Interface General';

export default InfoSquare32;
