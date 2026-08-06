import * as React from 'react';
import { IconProps } from './types';

export const BrowserBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BrowserBold24"
      {...props}
    >
      <path
        d="M18 2C20.7614 2 23 4.23858 23 7V17C23 19.7614 20.7614 22 18 22H6C3.23858 22 1 19.7614 1 17V7C1 4.23858 3.23858 2 6 2H18ZM3 17C3 18.6569 4.34315 20 6 20H18C19.6569 20 21 18.6569 21 17V11H3V17ZM6 4C4.34315 4 3 5.34315 3 7V9H21V7C21 5.34315 19.6569 4 18 4H6ZM5.5 5.5C6.05228 5.5 6.5 5.94772 6.5 6.5C6.5 7.05228 6.05228 7.5 5.5 7.5C4.94772 7.5 4.5 7.05228 4.5 6.5C4.5 5.94772 4.94772 5.5 5.5 5.5ZM8.5 5.5C9.05229 5.5 9.5 5.94772 9.5 6.5C9.5 7.05228 9.05229 7.5 8.5 7.5C7.94772 7.5 7.5 7.05228 7.5 6.5C7.5 5.94772 7.94772 5.5 8.5 5.5ZM11.5 5.5C12.0523 5.5 12.5 5.94772 12.5 6.5C12.5 7.05228 12.0523 7.5 11.5 7.5C10.9477 7.5 10.5 7.05228 10.5 6.5C10.5 5.94772 10.9477 5.5 11.5 5.5Z"
        fill={color}
      />
    </svg>
  );
};

BrowserBold24.category = 'Interface General';

export default BrowserBold24;
