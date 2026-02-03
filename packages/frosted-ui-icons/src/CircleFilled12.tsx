import * as React from 'react';
import { IconProps } from './types';

export const CircleFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C9.31371 8.85881e-08 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C6.44277e-08 2.68629 2.68629 0 6 0Z"
        fill={color}
      />
    </svg>
  );
};

CircleFilled12.category = 'Interface General';

export default CircleFilled12;
