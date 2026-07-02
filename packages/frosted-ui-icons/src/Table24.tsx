import * as React from 'react';
import { IconProps } from './types';

export const Table24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15.75 1.75C19.3398 1.75 22.25 4.66016 22.25 8.25V15.75C22.25 19.3399 19.3399 22.25 15.75 22.25H8.25C4.66015 22.25 1.75 19.3399 1.75 15.75V8.25C1.75001 4.66016 4.66015 1.75 8.25 1.75H15.75ZM9.25 20.75H15.75C18.5114 20.75 20.75 18.5114 20.75 15.75V9.30957H9.25V20.75ZM3.25 15.75C3.25 18.3426 5.22337 20.4737 7.75 20.7246V9.30957H3.25V15.75ZM9.2041 3.25C9.23197 3.32848 9.25 3.41196 9.25 3.5V7.80957H20.7295C20.5064 5.25449 18.363 3.25 15.75 3.25H9.2041ZM7.78906 3.27148C5.38873 3.4909 3.4803 5.40646 3.27051 7.80957H7.75V3.5C7.75 3.41993 7.76582 3.34384 7.78906 3.27148Z"
        fill={color}
      />
    </svg>
  );
};

Table24.category = 'Interface General';

export default Table24;
