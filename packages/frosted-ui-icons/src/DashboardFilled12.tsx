import * as React from 'react';
import { IconProps } from './types';

export const DashboardFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.25 0C10.3211 0 12 1.67893 12 3.75V8.25C12 10.3211 10.3211 12 8.25 12H3.75C1.67893 12 0 10.3211 0 8.25V3.75C0 1.67893 1.67893 1.28851e-07 3.75 0H8.25ZM9.53027 3.96973C9.23738 3.67683 8.76262 3.67683 8.46973 3.96973L6.5 5.93945L5.70703 5.14648L5.63086 5.07812C5.26428 4.77915 4.73572 4.77915 4.36914 5.07812L4.29297 5.14648L2.46973 6.96973C2.17683 7.26262 2.17683 7.73738 2.46973 8.03027C2.76262 8.32317 3.23738 8.32317 3.53027 8.03027L5 6.56055L5.79297 7.35352C6.18349 7.74401 6.81651 7.74401 7.20703 7.35352L9.53027 5.03027C9.82317 4.73738 9.82317 4.26262 9.53027 3.96973Z"
        fill={color}
      />
    </svg>
  );
};

DashboardFilled12.category = 'Stats & Charts';

export default DashboardFilled12;
