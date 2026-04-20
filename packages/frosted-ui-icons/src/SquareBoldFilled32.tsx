import * as React from 'react';
import { IconProps } from './types';

export const SquareBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <rect x="2" y="2" width="28" height="28" rx="7.5" fill={color} stroke={color} strokeWidth="2" />
    </svg>
  );
};

SquareBoldFilled32.category = 'Interface General';

export default SquareBoldFilled32;
