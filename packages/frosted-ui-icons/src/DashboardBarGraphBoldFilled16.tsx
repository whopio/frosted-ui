import * as React from 'react';
import { IconProps } from './types';

export const DashboardBarGraphBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DashboardBarGraphBoldFilled16"
      {...props}
    >
      <path
        d="M10.5 1C12.985 1 15 3.015 15 5.5v5c0 2.485-2.015 4.5-4.5 4.5h-5C3.015 15 1 12.985 1 10.5v-5C1 3.015 3.015 1 5.5 1h5zM6 7c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1s1-.448 1-1V8c0-.552-.448-1-1-1zm4-2c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1s1-.448 1-1V6c0-.552-.448-1-1-1z"
        fill={color}
      />
    </svg>
  );
};

DashboardBarGraphBoldFilled16.category = 'Stats & Charts';

export default DashboardBarGraphBoldFilled16;
