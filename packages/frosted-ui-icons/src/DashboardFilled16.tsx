import * as React from 'react';
import { IconProps } from './types';

export const DashboardFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DashboardFilled16"
      {...props}
    >
      <path
        d="M10.75 1C13.097 1 15 2.903 15 5.25v5.5c0 2.347-1.903 4.25-4.25 4.25h-5.5C2.903 15 1 13.097 1 10.75v-5.5C1 2.903 2.903 1 5.25 1h5.5zm1.034 5.015c-.29-.295-.767-.298-1.061-.007L8.59 8.112 7.55 7.086l-.08-.071c-.38-.307-.925-.307-1.305 0l-.08.07-1.862 1.84c-.295.29-.298.766-.007 1.06.29.295.767.298 1.061.007l1.541-1.521L7.86 9.498c.406.4 1.058.4 1.463 0l2.455-2.422c.295-.29.298-.767.007-1.061z"
        fill={color}
      />
    </svg>
  );
};

DashboardFilled16.category = 'Stats & Charts';

export default DashboardFilled16;
