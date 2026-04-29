import * as React from 'react';
import { IconProps } from './types';

export const ClockFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM5.75 3C5.33582 3 5.00005 3.33583 5 3.75V6.5C5 6.78407 5.16096 7.04385 5.41504 7.1709L6.91406 7.9209C7.28454 8.10615 7.73565 7.95544 7.9209 7.58496C8.10581 7.21457 7.95529 6.76428 7.58496 6.5791L6.5 6.03613V3.75C6.49995 3.33583 6.16418 3 5.75 3Z"
        fill={color}
      />
    </svg>
  );
};

ClockFilled12.category = 'Interface General';

export default ClockFilled12;
