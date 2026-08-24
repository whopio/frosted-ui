import * as React from 'react';
import { IconProps } from './types';

export const DashboardBarGraphFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DashboardBarGraphFilled12"
      {...props}
    >
      <path
        d="M8.25 0C10.32 0 12 1.68 12 3.75v4.5C12 10.32 10.32 12 8.25 12h-4.5C1.679 12 0 10.32 0 8.25v-4.5C0 1.679 1.679 0 3.75 0h4.5zM4.249 5c-.414 0-.75.336-.75.75v2.5c0 .414.336.75.75.75s.75-.336.75-.75v-2.5c0-.414-.336-.75-.75-.75zm3.5-2c-.414 0-.75.336-.75.75v4.5c0 .414.336.75.75.75s.75-.336.75-.75v-4.5c0-.414-.336-.75-.75-.75z"
        fill={color}
      />
    </svg>
  );
};

DashboardBarGraphFilled12.category = 'Stats & Charts';

export default DashboardBarGraphFilled12;
