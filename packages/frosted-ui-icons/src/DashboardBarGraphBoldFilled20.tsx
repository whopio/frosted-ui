import * as React from 'react';
import { IconProps } from './types';

export const DashboardBarGraphBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M14 0.999969C16.7614 0.999969 19 3.23855 19 5.99997V14C19 16.7614 16.7614 19 14 19H6C3.23858 19 1 16.7614 1 14V5.99997C1 3.23855 3.23858 0.999969 6 0.999969H14ZM6 10.5C5.44772 10.5 5 10.9477 5 11.5V14C5 14.5523 5.44772 15 6 15C6.55228 15 7 14.5523 7 14V11.5C7 10.9477 6.55228 10.5 6 10.5ZM10 4.99997C9.44771 4.99997 9 5.44768 9 5.99997V14C9 14.5523 9.44772 15 10 15C10.5523 15 11 14.5523 11 14V5.99997C11 5.44768 10.5523 4.99997 10 4.99997ZM14 7.49997C13.4477 7.49997 13 7.9477 13 8.49997V14C13 14.5522 13.4477 15 14 15C14.5523 15 15 14.5522 15 14V8.49997C15 7.9477 14.5523 7.49997 14 7.49997Z"
        fill={color}
      />
    </svg>
  );
};

DashboardBarGraphBoldFilled20.category = 'Stats & Charts';

export default DashboardBarGraphBoldFilled20;
