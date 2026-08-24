import * as React from 'react';
import { IconProps } from './types';

export const Plus16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Plus16"
      {...props}
    >
      <path
        d="M8 1c.414 0 .75.336.75.75v5.5h5.5c.414 0 .75.336.75.75s-.336.75-.75.75h-5.5v5.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-5.5h-5.5C1.336 8.75 1 8.414 1 8s.336-.75.75-.75h5.5v-5.5c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

Plus16.category = 'Interface General';

export default Plus16;
