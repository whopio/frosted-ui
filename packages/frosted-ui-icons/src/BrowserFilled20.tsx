import * as React from 'react';
import { IconProps } from './types';

export const BrowserFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BrowserFilled20"
      {...props}
    >
      <path
        d="M19 14.25c0 2.071-1.679 3.75-3.75 3.75H4.75C2.679 18 1 16.321 1 14.25V9.5h18v4.75zM15.25 2C17.321 2 19 3.679 19 5.75V8H1V5.75C1 3.679 2.679 2 4.75 2h10.5zM4 4.25c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm3 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm3 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"
        fill={color}
      />
    </svg>
  );
};

BrowserFilled20.category = 'Interface General';

export default BrowserFilled20;
