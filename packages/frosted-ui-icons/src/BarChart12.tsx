import * as React from 'react';
import { IconProps } from './types';

export const BarChart12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BarChart12"
      {...props}
    >
      <path
        d="M1.25 8c.414 0 .75.336.75.75v1.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.5c0-.414.336-.75.75-.75zm3-4.5c.414 0 .75.336.75.75v6c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-6c0-.414.336-.75.75-.75zm3 1.5c.414 0 .75.336.75.75v4.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-4.5c0-.414.336-.75.75-.75zm3-4c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

BarChart12.category = 'Stats & Charts';

export default BarChart12;
