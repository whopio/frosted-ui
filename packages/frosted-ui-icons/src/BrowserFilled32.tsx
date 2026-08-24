import * as React from 'react';
import { IconProps } from './types';

export const BrowserFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BrowserFilled32"
      {...props}
    >
      <path
        d="M31 23.25c0 3.176-2.574 5.75-5.75 5.75H6.75C3.574 29 1 26.426 1 23.25V12.5h30v10.75zM25.25 3C28.426 3 31 5.574 31 8.75V11H1V8.75C1 5.574 3.574 3 6.75 3h18.5zM6 6c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm3 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm3 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"
        fill={color}
      />
    </svg>
  );
};

BrowserFilled32.category = 'Interface General';

export default BrowserFilled32;
