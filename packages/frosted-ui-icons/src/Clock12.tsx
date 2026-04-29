import * as React from 'react';
import { IconProps } from './types';

export const Clock12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5C8.48528 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5ZM5.75 3C6.16418 3 6.49995 3.33583 6.5 3.75V6.03613L7.58496 6.5791C7.95529 6.76428 8.10581 7.21457 7.9209 7.58496C7.73565 7.95544 7.28454 8.10615 6.91406 7.9209L5.41504 7.1709C5.16096 7.04385 5 6.78407 5 6.5V3.75C5.00005 3.33583 5.33582 3 5.75 3Z"
        fill={color}
      />
    </svg>
  );
};

Clock12.category = 'Interface General';

export default Clock12;
