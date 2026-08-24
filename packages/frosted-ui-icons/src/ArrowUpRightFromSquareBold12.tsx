import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquareBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightFromSquareBold12"
      {...props}
    >
      <path
        d="M4 1c.552 0 1 .448 1 1s-.448 1-1 1h-.5C2.672 3 2 3.672 2 4.5v4c0 .828.672 1.5 1.5 1.5h4C8.328 10 9 9.328 9 8.5V8c0-.552.448-1 1-1s1 .448 1 1v.5c0 1.933-1.567 3.5-3.5 3.5h-4C1.567 12 0 10.433 0 8.5v-4C0 2.567 1.567 1 3.5 1H4zm7-1c.552 0 1 .448 1 1v3.5c0 .552-.448 1-1 1s-1-.448-1-1V3.414L6.707 6.707c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414L8.586 2H7.5c-.552 0-1-.448-1-1s.448-1 1-1H11z"
        fill={color}
      />
    </svg>
  );
};

ArrowUpRightFromSquareBold12.category = 'Arrows';

export default ArrowUpRightFromSquareBold12;
