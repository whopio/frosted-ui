import * as React from 'react';
import { IconProps } from './types';

export const BrowserFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BrowserFilled24"
      {...props}
    >
      <path
        d="M23 17.25c0 2.623-2.127 4.75-4.75 4.75H5.75C3.127 22 1 19.873 1 17.25V10.5h22v6.75zM18.25 2C20.873 2 23 4.127 23 6.75V9H1V6.75C1 4.127 3.127 2 5.75 2h12.5zM5 4.75c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm3 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm3 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"
        fill={color}
      />
    </svg>
  );
};

BrowserFilled24.category = 'Interface General';

export default BrowserFilled24;
