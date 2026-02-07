import * as React from 'react';
import { IconProps } from './types';

export const DashboardBarGraphFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M21.75 1C26.8586 1 31 5.14137 31 10.25V21.75C31 26.8586 26.8586 31 21.75 31H10.25C5.14137 31 1 26.8586 1 21.75V10.25C1 5.14137 5.14137 1 10.25 1H21.75ZM9.75 18C9.33579 18 9 18.3358 9 18.75V23.25C9 23.6642 9.33579 24 9.75 24C10.1642 24 10.5 23.6642 10.5 23.25V18.75C10.5 18.3358 10.1642 18 9.75 18ZM16 8C15.5858 8 15.25 8.33579 15.25 8.75V23.25C15.25 23.6642 15.5858 24 16 24C16.4142 24 16.75 23.6642 16.75 23.25V8.75C16.75 8.33579 16.4142 8 16 8ZM22.25 14C21.8358 14 21.5 14.3358 21.5 14.75V23.25C21.5 23.6642 21.8358 24 22.25 24C22.6642 24 23 23.6642 23 23.25V14.75C23 14.3358 22.6642 14 22.25 14Z"
        fill={color}
      />
    </svg>
  );
};

DashboardBarGraphFilled32.category = 'Stats & Charts';

export default DashboardBarGraphFilled32;
