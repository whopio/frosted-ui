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
      data-fui-icon="true"
      {...props}
    >
      <circle cx="16" cy="16" r="14.25" fill={color} stroke={color} strokeWidth="1.5" />
    </svg>
  );
};

CircleFilled32.category = 'Interface General';

export default CircleFilled32;
