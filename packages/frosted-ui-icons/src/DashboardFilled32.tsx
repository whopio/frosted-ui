import * as React from 'react';
import { IconProps } from './types';

export const DashboardFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DashboardFilled32"
      {...props}
    >
      <path
        d="M23.25 1C27.53 1 31 4.47 31 8.75v14.5c0 4.28-3.47 7.75-7.75 7.75H8.75C4.47 31 1 27.53 1 23.25V8.75C1 4.47 4.47 1 8.75 1h14.5zm.534 11.224c-.29-.295-.765-.299-1.06-.008l-5.407 5.33-2.988-2.947c-.502-.495-1.29-.526-1.827-.093l-.104.093-4.174 4.117c-.295.29-.299.765-.008 1.06.29.295.765.299 1.06.008l4.087-4.031 2.99 2.948c.535.528 1.395.528 1.93 0l5.493-5.417c.295-.29.299-.765.008-1.06z"
        fill={color}
      />
    </svg>
  );
};

DashboardFilled32.category = 'Stats & Charts';

export default DashboardFilled32;
