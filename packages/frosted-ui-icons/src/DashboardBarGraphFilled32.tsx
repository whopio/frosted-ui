import * as React from 'react';
import { IconProps } from './types';

export const DashboardBarGraphFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DashboardBarGraphFilled32"
      {...props}
    >
      <path
        d="M23.25 1C27.53 1 31 4.47 31 8.75v14.5c0 4.28-3.47 7.75-7.75 7.75H8.75C4.47 31 1 27.53 1 23.25V8.75C1 4.47 4.47 1 8.75 1h14.5zM9.75 18c-.414 0-.75.336-.75.75v4.5c0 .414.336.75.75.75s.75-.336.75-.75v-4.5c0-.414-.336-.75-.75-.75zM16 8c-.414 0-.75.336-.75.75v14.5c0 .414.336.75.75.75s.75-.336.75-.75V8.75c0-.414-.336-.75-.75-.75zm6.25 6c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75z"
        fill={color}
      />
    </svg>
  );
};

DashboardBarGraphFilled32.category = 'Stats & Charts';

export default DashboardBarGraphFilled32;
