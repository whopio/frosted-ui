import * as React from 'react';
import { IconProps } from './types';

export const CircleFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CircleFilled32"
      {...props}
    >
      <path
        d="M31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16 .5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16z"
        fill={color}
      />
    </svg>
  );
};

CircleFilled32.category = 'Interface General';

export default CircleFilled32;
