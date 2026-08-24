import * as React from 'react';
import { IconProps } from './types';

export const DashboardBarGraphBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DashboardBarGraphBold12"
      {...props}
    >
      <path
        d="M8 0c2.209 0 4 1.791 4 4v4c0 2.209-1.791 4-4 4H4c-2.21 0-4-1.791-4-4V4C0 1.79 1.791 0 4 0h4zM4 2c-1.104 0-2 .896-2 2v4c0 1.104.895 2 2 2h4c1.104 0 2-.896 2-2V4c0-1.104-.896-2-2-2H4zm.5 3c.552 0 1 .448 1 1v1.5c0 .552-.448 1-1 1s-1-.448-1-1V6c0-.552.448-1 1-1zm3-1.5c.552 0 1 .448 1 1v3c0 .552-.448 1-1 1s-1-.448-1-1v-3c0-.552.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

DashboardBarGraphBold12.category = 'Stats & Charts';

export default DashboardBarGraphBold12;
