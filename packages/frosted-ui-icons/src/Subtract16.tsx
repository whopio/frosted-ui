import * as React from 'react';
import { IconProps } from './types';

export const Subtract16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M15.25 7.25C15.6642 7.25 16 7.58579 16 8C16 8.41421 15.6642 8.75 15.25 8.75H0.75C0.335787 8.75 2.72178e-07 8.41421 0 8C6.96788e-07 7.58579 0.335787 7.25 0.75 7.25H15.25Z"
        fill={color}
      />
    </svg>
  );
};

Subtract16.category = 'Interface General';

export default Subtract16;
