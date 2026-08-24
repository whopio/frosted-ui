import * as React from 'react';
import { IconProps } from './types';

export const DashboardBarGraphBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DashboardBarGraphBold24"
      {...props}
    >
      <path
        d="M16.25 1C19.978 1 23 4.022 23 7.75v8.5c0 3.728-3.022 6.75-6.75 6.75h-8.5C4.022 23 1 19.978 1 16.25v-8.5C1 4.022 4.022 1 7.75 1h8.5zm-8.5 2C5.127 3 3 5.127 3 7.75v8.5C3 18.873 5.127 21 7.75 21h8.5c2.623 0 4.75-2.127 4.75-4.75v-8.5C21 5.127 18.873 3 16.25 3h-8.5zm-.25 9.5c.552 0 1 .448 1 1V17c0 .552-.448 1-1 1s-1-.448-1-1v-3.5c0-.552.448-1 1-1zM12 6c.552 0 1 .448 1 1v10c0 .552-.448 1-1 1s-1-.448-1-1V7c0-.552.448-1 1-1zm4.5 3c.552 0 1 .448 1 1v7c0 .552-.448 1-1 1s-1-.448-1-1v-7c0-.552.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

DashboardBarGraphBold24.category = 'Stats & Charts';

export default DashboardBarGraphBold24;
