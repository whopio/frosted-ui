import * as React from 'react';
import { IconProps } from './types';

export const SquareBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <rect x="2" y="2" width="16" height="16" rx="4.6" stroke={color} strokeWidth="2" />
    </svg>
  );
};

SquareBold20.category = 'Interface General';

export default SquareBold20;
