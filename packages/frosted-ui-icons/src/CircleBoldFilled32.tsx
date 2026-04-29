import * as React from 'react';
import { IconProps } from './types';

export const CircleBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <circle cx="16" cy="16" r="14.5" fill={color} stroke={color} strokeWidth="2" />
    </svg>
  );
};

CircleBoldFilled32.category = 'Interface General';

export default CircleBoldFilled32;
