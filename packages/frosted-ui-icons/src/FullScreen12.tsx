import * as React from 'react';
import { IconProps } from './types';

export const FullScreen12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.2 10.5H3.75C2.50736 10.5 1.5 9.49264 1.5 8.25V7.95652M7.8 10.5H8.25C9.49264 10.5 10.5 9.49264 10.5 8.25V7.95652M7.8 1.5H8.25C9.49264 1.5 10.5 2.50736 10.5 3.75V4.04348M4.2 1.5H3.75C2.50736 1.5 1.5 2.50736 1.5 3.75V4.04348"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default FullScreen12;
