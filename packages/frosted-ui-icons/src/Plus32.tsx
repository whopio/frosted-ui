import * as React from 'react';
import { IconProps } from './types';

export const Plus32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Plus32"
      {...props}
    >
      <path
        d="M16 1c.414 0 .75.336.75.75v13.5h13.5c.414 0 .75.336.75.75s-.336.75-.75.75h-13.5v13.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-13.5H1.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h13.5V1.75c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

Plus32.category = 'Interface General';

export default Plus32;
