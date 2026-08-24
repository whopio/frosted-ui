import * as React from 'react';
import { IconProps } from './types';

export const SquareFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SquareFilled32"
      {...props}
    >
      <path
        d="M31 22.75c0 4.556-3.694 8.25-8.25 8.25H9.25C4.694 31 1 27.306 1 22.75V9.25C1 4.694 4.694 1 9.25 1h13.5C27.306 1 31 4.694 31 9.25v13.5z"
        fill={color}
      />
    </svg>
  );
};

SquareFilled32.category = 'Interface General';

export default SquareFilled32;
