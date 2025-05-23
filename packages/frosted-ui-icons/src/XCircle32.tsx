import * as React from 'react';
import { IconProps } from './types';

export const XCircle32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M20 12L12 20M20 20L12 12M28.3333 16C28.3333 22.8115 22.8114 28.3334 16 28.3334C9.18845 28.3334 3.66663 22.8115 3.66663 16C3.66663 9.18851 9.18845 3.66669 16 3.66669C22.8114 3.66669 28.3333 9.18851 28.3333 16Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default XCircle32;
