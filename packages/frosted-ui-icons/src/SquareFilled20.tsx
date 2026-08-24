import * as React from 'react';
import { IconProps } from './types';

export const SquareFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SquareFilled20"
      {...props}
    >
      <path
        d="M19 13.65c0 2.955-2.395 5.35-5.35 5.35h-7.3C3.395 19 1 16.605 1 13.65v-7.3C1 3.395 3.395 1 6.35 1h7.3C16.605 1 19 3.395 19 6.35v7.3z"
        fill={color}
      />
    </svg>
  );
};

SquareFilled20.category = 'Interface General';

export default SquareFilled20;
