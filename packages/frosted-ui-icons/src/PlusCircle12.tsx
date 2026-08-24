import * as React from 'react';
import { IconProps } from './types';

export const PlusCircle12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusCircle12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm0 1.5C3.515 1.5 1.5 3.515 1.5 6s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5S8.485 1.5 6 1.5zM6 3c.414 0 .75.336.75.75v1.5h1.5c.414 0 .75.336.75.75s-.336.75-.75.75h-1.5v1.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.5h-1.5C3.336 6.75 3 6.414 3 6s.336-.75.75-.75h1.5v-1.5c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

PlusCircle12.category = 'Interface General';

export default PlusCircle12;
