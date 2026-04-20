import * as React from 'react';
import { IconProps } from './types';

export const Subtract32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M30.25 15.25C30.6642 15.25 31 15.5858 31 16C31 16.4142 30.6642 16.75 30.25 16.75H1.75C1.33579 16.75 1 16.4142 1 16C1 15.5858 1.33579 15.25 1.75 15.25H30.25Z"
        fill={color}
      />
    </svg>
  );
};

Subtract32.category = 'Interface General';

export default Subtract32;
