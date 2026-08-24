import * as React from 'react';
import { IconProps } from './types';

export const DashboardFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DashboardFilled24"
      {...props}
    >
      <path
        d="M16.5 1C20.09 1 23 3.91 23 7.5v9c0 3.59-2.91 6.5-6.5 6.5h-9C3.91 23 1 20.09 1 16.5v-9C1 3.91 3.91 1 7.5 1h9zm1.291 8.188c-.287-.298-.762-.308-1.06-.021l-3.777 3.626-2.026-1.946c-.468-.449-1.207-.449-1.674 0L6.23 13.75c-.298.287-.308.762-.021 1.06.287.3.762.309 1.06.022l2.82-2.71 2.028 1.947c.468.45 1.206.449 1.674 0l3.979-3.82c.298-.287.308-.762.021-1.06z"
        fill={color}
      />
    </svg>
  );
};

DashboardFilled24.category = 'Stats & Charts';

export default DashboardFilled24;
