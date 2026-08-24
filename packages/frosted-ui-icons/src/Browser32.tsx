import * as React from 'react';
import { IconProps } from './types';

export const Browser32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Browser32"
      {...props}
    >
      <path
        d="M25.25 3C28.426 3 31 5.574 31 8.75v14.5c0 3.176-2.574 5.75-5.75 5.75H6.75C3.574 29 1 26.426 1 23.25V8.75C1 5.574 3.574 3 6.75 3h18.5zM2.5 23.25c0 2.347 1.903 4.25 4.25 4.25h18.5c2.347 0 4.25-1.903 4.25-4.25V12.5h-27v10.75zM6.75 4.5C4.403 4.5 2.5 6.403 2.5 8.75V11h27V8.75c0-2.347-1.903-4.25-4.25-4.25H6.75zM6 6.75c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm3 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm3 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

Browser32.category = 'Interface General';

export default Browser32;
