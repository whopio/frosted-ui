import * as React from 'react';
import { IconProps } from './types';

export const DashboardBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 0C10.2091 0 12 1.79086 12 4V8C12 10.2091 10.2091 12 8 12H4C1.79086 12 0 10.2091 0 8V4C0 1.79086 1.79086 0 4 0H8ZM4 2C2.89543 2 2 2.89543 2 4V8C2 9.10457 2.89543 10 4 10H8C9.10457 10 10 9.10457 10 8V4C10 2.89543 9.10457 2 8 2H4ZM7.79297 4.29297C8.18349 3.90244 8.81651 3.90244 9.20703 4.29297C9.59756 4.68349 9.59756 5.31651 9.20703 5.70703L7.38379 7.53027C6.89564 8.0184 6.10436 8.0184 5.61621 7.53027L5 6.91406L4.20703 7.70703C3.81651 8.09756 3.18349 8.09756 2.79297 7.70703C2.40244 7.31651 2.40244 6.68349 2.79297 6.29297L4.11621 4.96973L4.21094 4.88379C4.7019 4.48333 5.42613 4.51209 5.88379 4.96973L6.5 5.58594L7.79297 4.29297Z"
        fill={color}
      />
    </svg>
  );
};

DashboardBold12.category = 'Stats & Charts';

export default DashboardBold12;
