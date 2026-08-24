import * as React from 'react';
import { IconProps } from './types';

export const DashboardBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DashboardBoldFilled32"
      {...props}
    >
      <path
        d="M23 1c4.418 0 8 3.582 8 8v14c0 4.418-3.582 8-8 8H9c-4.418 0-8-3.582-8-8V9c0-4.418 3.582-8 8-8h14zm.962 11.048c-.388-.393-1.02-.398-1.414-.01l-5.23 5.157-2.813-2.774-.123-.11c-.593-.477-1.443-.477-2.036 0l-.123.11-4.175 4.117c-.393.388-.398 1.02-.01 1.414.388.393 1.02.398 1.414.01l3.911-3.858 2.814 2.775c.633.624 1.65.624 2.282 0l5.493-5.417c.393-.388.398-1.02.01-1.414z"
        fill={color}
      />
    </svg>
  );
};

DashboardBoldFilled32.category = 'Stats & Charts';

export default DashboardBoldFilled32;
