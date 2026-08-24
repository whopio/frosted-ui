import * as React from 'react';
import { IconProps } from './types';

export const PlusCircleFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusCircleFilled12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm0 3c-.414 0-.75.336-.75.75v1.5h-1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.5v1.5c0 .414.336.75.75.75s.75-.336.75-.75v-1.5h1.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-1.5v-1.5C6.75 3.336 6.414 3 6 3z"
        fill={color}
      />
    </svg>
  );
};

PlusCircleFilled12.category = 'Interface General';

export default PlusCircleFilled12;
