import * as React from 'react';
import { IconProps } from './types';

export const SquareBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <rect x="1" y="1" width="10" height="10" rx="3" stroke={color} strokeWidth="2" />
    </svg>
  );
};

SquareBold12.category = 'Product Icons';

export default SquareBold12;
