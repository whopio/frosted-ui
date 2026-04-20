import * as React from 'react';
import { IconProps } from './types';

export const CommandFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.75 10.75V6.25C10.75 3.76472 8.73528 1.75 6.25 1.75C3.76472 1.75 1.75 3.76472 1.75 6.25C1.75 8.73528 3.76472 10.75 6.25 10.75H10.75ZM10.75 10.75V21.25M10.75 10.75H21.25M10.75 21.25H21.25M10.75 21.25H6.25C3.76472 21.25 1.75 23.2647 1.75 25.75C1.75 28.2353 3.76472 30.25 6.25 30.25C8.73528 30.25 10.75 28.2353 10.75 25.75V21.25ZM21.25 21.25V10.75M21.25 21.25V25.75C21.25 28.2353 23.2647 30.25 25.75 30.25C28.2353 30.25 30.25 28.2353 30.25 25.75C30.25 23.2647 28.2353 21.25 25.75 21.25H21.25ZM21.25 10.75V6.25C21.25 3.76472 23.2647 1.75 25.75 1.75C28.2353 1.75 30.25 3.76472 30.25 6.25C30.25 8.73528 28.2353 10.75 25.75 10.75H21.25Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

CommandFilled32.category = 'Interface General';

export default CommandFilled32;
