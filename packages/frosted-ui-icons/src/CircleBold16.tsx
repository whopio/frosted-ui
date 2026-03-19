import * as React from 'react';
import { IconProps } from './types';

export const CircleBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <circle cx="8" cy="8" r="6" stroke={color} strokeWidth="2" />
    </svg>
  );
};

CircleBold16.category = 'Product Icons';

export default CircleBold16;
