import * as React from 'react';
import { IconProps } from './types';

export const CircleBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
    </svg>
  );
};

CircleBold24.category = 'Interface General';

export default CircleBold24;
