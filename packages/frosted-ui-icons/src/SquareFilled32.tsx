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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M31 22.75C31 27.3063 27.3063 31 22.75 31H9.25C4.69365 31 1 27.3063 1 22.75V9.25C1 4.69365 4.69365 1 9.25 1H22.75C27.3063 1 31 4.69365 31 9.25V22.75Z"
        fill={color}
      />
    </svg>
  );
};

SquareFilled32.category = 'Interface General';

export default SquareFilled32;
