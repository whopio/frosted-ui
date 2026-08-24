import * as React from 'react';
import { IconProps } from './types';

export const Plus12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Plus12"
      {...props}
    >
      <path
        d="M6 0c.414 0 .75.336.75.75v4.5h4.5c.414 0 .75.336.75.75s-.336.75-.75.75h-4.5v4.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-4.5H.75C.336 6.75 0 6.414 0 6s.336-.75.75-.75h4.5V.75C5.25.336 5.586 0 6 0z"
        fill={color}
      />
    </svg>
  );
};

Plus12.category = 'Interface General';

export default Plus12;
