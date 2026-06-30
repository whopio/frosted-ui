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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.5 1.00018C12.9853 1.00018 15 3.0149 15 5.50018V10.5002C14.9999 12.9854 12.9852 15.0002 10.5 15.0002H5.5C3.0148 15.0002 1.00013 12.9854 1 10.5002V5.50018C1 3.0149 3.01472 1.00018 5.5 1.00018H10.5ZM6 7.00018C5.44772 7.00018 5 7.4479 5 8.00018V10.0002C5.00013 10.5524 5.4478 11.0002 6 11.0002C6.5522 11.0002 6.99987 10.5524 7 10.0002V8.00018C7 7.4479 6.55228 7.00018 6 7.00018ZM10 5.00018C9.44772 5.00018 9 5.4479 9 6.00018V10.0002C9.00013 10.5524 9.4478 11.0002 10 11.0002C10.5522 11.0002 10.9999 10.5524 11 10.0002V6.00018C11 5.4479 10.5523 5.00018 10 5.00018Z"
        fill={color}
      />
    </svg>
  );
};

DashboardBarGraphBoldFilled16.category = 'Stats & Charts';

export default DashboardBarGraphBoldFilled16;
