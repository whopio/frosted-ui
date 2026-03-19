import * as React from 'react';
import { IconProps } from './types';

export const SquareBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <rect x="2" y="2" width="12" height="12" rx="3.5" fill={color} stroke={color} strokeWidth="2" />
    </svg>
  );
};

SquareBoldFilled16.category = 'Product Icons';

export default SquareBoldFilled16;
