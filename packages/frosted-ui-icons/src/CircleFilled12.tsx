import * as React from 'react';
import { IconProps } from './types';

export const CircleFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CircleFilled12"
      {...props}
    >
      <path d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z" fill={color} />
    </svg>
  );
};

CircleFilled12.category = 'Interface General';

export default CircleFilled12;
