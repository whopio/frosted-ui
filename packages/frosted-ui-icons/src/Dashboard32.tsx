import * as React from 'react';
import { IconProps } from './types';

export const Dashboard32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Dashboard32"
      {...props}
    >
      <path
        d="M23.25 1C27.53 1 31 4.47 31 8.75v14.5c0 4.28-3.47 7.75-7.75 7.75H8.75C4.47 31 1 27.53 1 23.25V8.75C1 4.47 4.47 1 8.75 1h14.5zM8.75 2.5C5.298 2.5 2.5 5.298 2.5 8.75v14.5c0 3.452 2.798 6.25 6.25 6.25h14.5c3.452 0 6.25-2.798 6.25-6.25V8.75c0-3.452-2.798-6.25-6.25-6.25H8.75zm13.974 9.716c.295-.29.77-.287 1.06.008.29.295.287.77-.008 1.06l-5.493 5.417c-.535.528-1.395.528-1.93 0l-2.99-2.948-4.087 4.031c-.295.29-.77.287-1.06-.008-.29-.295-.287-.77.008-1.06l4.174-4.117.104-.093c.537-.433 1.325-.402 1.827.093l2.988 2.947 5.407-5.33z"
        fill={color}
      />
    </svg>
  );
};

Dashboard32.category = 'Stats & Charts';

export default Dashboard32;
