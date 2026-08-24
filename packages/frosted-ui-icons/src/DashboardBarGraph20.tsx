import * as React from 'react';
import { IconProps } from './types';

export const DashboardBarGraph20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DashboardBarGraph20"
      {...props}
    >
      <path
        d="M14.65 0C17.605 0 20 2.395 20 5.35v9.3c0 2.955-2.395 5.35-5.35 5.35h-9.3C2.395 20 0 17.605 0 14.65v-9.3C0 2.395 2.395 0 5.35 0h9.3zm-9.3 1.5C3.224 1.5 1.5 3.224 1.5 5.35v9.3c0 2.126 1.724 3.85 3.85 3.85h9.3c2.126 0 3.85-1.724 3.85-3.85v-9.3c0-2.126-1.724-3.85-3.85-3.85h-9.3zm.9 9.5c.414 0 .75.336.75.75v2.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-2.5c0-.414.336-.75.75-.75zM10 5c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm3.75 2.75c.414 0 .75.336.75.75v5.75c0 .414-.336.75-.75.75s-.75-.336-.75-.75V8.5c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

DashboardBarGraph20.category = 'Stats & Charts';

export default DashboardBarGraph20;
