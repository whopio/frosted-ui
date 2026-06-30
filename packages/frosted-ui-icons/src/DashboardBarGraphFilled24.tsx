import * as React from 'react';
import { IconProps } from './types';

export const DashboardBarGraphFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M17.5 0C21.0898 0 24 2.91015 24 6.49999V17.5C24 21.0898 21.0898 24 17.5 24H6.49999C2.91015 24 0 21.0898 0 17.5V6.49999C2.57711e-07 2.91015 2.91015 2.57702e-07 6.49999 0H17.5ZM7.74999 13C7.33579 13 7.00001 13.3358 6.99999 13.75V17.25C6.99999 17.6642 7.33578 18 7.74999 18C8.1642 18 8.49999 17.6642 8.49999 17.25V13.75C8.49997 13.3358 8.16419 13 7.74999 13ZM12 5.99999C11.5858 5.99999 11.25 6.33579 11.25 6.74999V17.25C11.25 17.6642 11.5858 18 12 18C12.4142 18 12.75 17.6642 12.75 17.25V6.74999C12.75 6.33579 12.4142 5.99999 12 5.99999ZM16.25 9.74999C15.8358 9.74999 15.5 10.0858 15.5 10.5V17.25C15.5 17.6642 15.8358 18 16.25 18C16.6642 18 17 17.6642 17 17.25V10.5C17 10.0858 16.6642 9.74999 16.25 9.74999Z"
        fill={color}
      />
    </svg>
  );
};

DashboardBarGraphFilled24.category = 'Stats & Charts';

export default DashboardBarGraphFilled24;
