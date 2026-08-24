import * as React from 'react';
import { IconProps } from './types';

export const DashboardBarGraphBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DashboardBarGraphBold32"
      {...props}
    >
      <path
        d="M23 1c4.418 0 8 3.582 8 8v14c0 4.418-3.582 8-8 8H9c-4.418 0-8-3.582-8-8V9c0-4.418 3.582-8 8-8h14zM9 3C5.686 3 3 5.686 3 9v14c0 3.314 2.686 6 6 6h14c3.314 0 6-2.686 6-6V9c0-3.314-2.686-6-6-6H9zm1 14c.552 0 1 .448 1 1v5c0 .552-.448 1-1 1s-1-.448-1-1v-5c0-.552.448-1 1-1zm6-9c.552 0 1 .448 1 1v14c0 .552-.448 1-1 1s-1-.448-1-1V9c0-.552.448-1 1-1zm6 4c.552 0 1 .448 1 1v10c0 .552-.448 1-1 1s-1-.448-1-1V13c0-.552.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

DashboardBarGraphBold32.category = 'Stats & Charts';

export default DashboardBarGraphBold32;
