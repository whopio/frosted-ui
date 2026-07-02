import * as React from 'react';
import { IconProps } from './types';

export const DashboardBarGraphFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8.24985 0C10.3206 0.000263812 11.9997 1.67912 11.9998 3.74993V8.24985C11.9998 10.3207 10.3207 11.9995 8.24985 11.9998H3.74993C1.6789 11.9998 2.57698e-07 10.3209 0 8.24985V3.74993C6.60096e-05 1.67896 1.67894 0 3.74993 0H8.24985ZM4.24895 4.99991C3.83481 4.99991 3.49908 5.33579 3.49896 5.7499V8.24985C3.49896 8.66406 3.83474 8.99984 4.24895 8.99984C4.66315 8.99984 4.99893 8.66406 4.99893 8.24985V5.7499C4.99882 5.33579 4.66308 4.99991 4.24895 4.99991ZM7.74889 2.99995C7.33475 2.99995 6.99901 3.33583 6.9989 3.74993V8.24985C6.9989 8.66406 7.33468 8.99984 7.74889 8.99984C8.16309 8.99984 8.49887 8.66406 8.49887 8.24985V3.74993C8.49876 3.33583 8.16302 2.99995 7.74889 2.99995Z"
        fill={color}
      />
    </svg>
  );
};

DashboardBarGraphFilled12.category = 'Stats & Charts';

export default DashboardBarGraphFilled12;
