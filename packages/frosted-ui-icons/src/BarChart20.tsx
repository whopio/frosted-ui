import * as React from 'react';
import { IconProps } from './types';

export const BarChart20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BarChart20"
      {...props}
    >
      <path
        d="M3 14c.414 0 .75.336.75.75v2.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-2.5c0-.414.336-.75.75-.75zm3.5-4c.414 0 .75.336.75.75v6.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-6.5c0-.414.336-.75.75-.75zM10 6c.414 0 .75.336.75.75v10.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75V6.75c0-.414.336-.75.75-.75zm3.5 5c.414 0 .75.336.75.75v5.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-5.5c0-.414.336-.75.75-.75zM17 2c.414 0 .75.336.75.75v14.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

BarChart20.category = 'Stats & Charts';

export default BarChart20;
