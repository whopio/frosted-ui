import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircle24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkCircle24"
      {...props}
    >
      <path
        d="M12 .5C18.153.5 23.5 5.847 23.5 12S18.153 23.5 12 23.5.5 18.153.5 12 5.847.5 12 .5zM12 2C6.675 2 2 6.675 2 12s4.675 10 10 10 10-4.675 10-10S17.325 2 12 2zm4.22 6.47c.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06l-6.63 6.63c-.14.14-.331.22-.53.22s-.39-.08-.53-.22l-2.87-2.87c-.293-.293-.293-.768 0-1.06.293-.293.767-.293 1.06 0l2.34 2.34 6.1-6.1z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkCircle24.category = 'Checkmarks';

export default CheckmarkCircle24;
