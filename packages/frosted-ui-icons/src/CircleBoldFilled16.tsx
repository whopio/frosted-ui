import * as React from 'react';
import { IconProps } from './types';

export const CircleBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CircleBoldFilled16"
      {...props}
    >
      <path
        d="M15.5 8c0 4.142-3.358 7.5-7.5 7.5C3.858 15.5.5 12.142.5 8 .5 3.858 3.858.5 8 .5c4.142 0 7.5 3.358 7.5 7.5z"
        fill={color}
      />
    </svg>
  );
};

CircleBoldFilled16.category = 'Interface General';

export default CircleBoldFilled16;
