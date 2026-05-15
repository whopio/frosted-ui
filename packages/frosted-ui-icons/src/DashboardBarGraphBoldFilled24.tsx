import * as React from 'react';
import { IconProps } from './types';

export const DashboardBarGraphBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M17 0.999878C20.3137 0.999878 23 3.68617 23 6.99988V16.9999C23 20.3136 20.3137 22.9999 17 22.9999H7C3.68629 22.9999 1 20.3136 1 16.9999V6.99988C1 3.68617 3.68629 0.999878 7 0.999878H17ZM7.5 12.4999C6.94772 12.4999 6.5 12.9476 6.5 13.4999V16.9999C6.5 17.5522 6.94772 17.9999 7.5 17.9999C8.05228 17.9999 8.5 17.5522 8.5 16.9999V13.4999C8.5 12.9476 8.05228 12.4999 7.5 12.4999ZM12 5.99988C11.4477 5.99988 11 6.44759 11 6.99988V16.9999C11 17.5522 11.4477 17.9999 12 17.9999C12.5523 17.9999 13 17.5522 13 16.9999V6.99988C13 6.44759 12.5523 5.99988 12 5.99988ZM16.5 8.99988C15.9478 8.99988 15.5001 9.44765 15.5 9.99988V16.9999C15.5001 17.5521 15.9478 17.9999 16.5 17.9999C17.0522 17.9999 17.4999 17.5521 17.5 16.9999V9.99988C17.4999 9.44765 17.0522 8.99988 16.5 8.99988Z"
        fill={color}
      />
    </svg>
  );
};

DashboardBarGraphBoldFilled24.category = 'Stats & Charts';

export default DashboardBarGraphBoldFilled24;
