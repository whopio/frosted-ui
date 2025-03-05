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
        d="M29 16C29 16.4142 28.6642 16.75 28.25 16.75L3.75 16.75C3.33579 16.75 3 16.4142 3 16C3 15.5858 3.33579 15.25 3.75 15.25L28.25 15.25C28.6642 15.25 29 15.5858 29 16Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Subtract32;
