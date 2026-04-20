import * as React from 'react';
import { IconProps } from './types';

export const CircleBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <circle cx="6" cy="6" r="5" fill={color} stroke={color} strokeWidth="1.5" />
    </svg>
  );
};

CircleBoldFilled12.category = 'Interface General';

export default CircleBoldFilled12;
