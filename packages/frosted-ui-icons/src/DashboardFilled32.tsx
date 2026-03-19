import * as React from 'react';
import { IconProps } from './types';

export const DashboardFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M22.25 1C27.0825 1 31 4.91751 31 9.75V22.25C31 27.0825 27.0825 31 22.25 31H9.75C4.91751 31 1 27.0825 1 22.25V9.75C1 4.91751 4.91751 1 9.75 1H22.25ZM23.7842 12.2236C23.4934 11.9288 23.0186 11.9252 22.7236 12.2158L17.3174 17.5459L14.3291 14.5986C13.8272 14.1037 13.0395 14.0727 12.502 14.5059L12.3984 14.5986L8.22363 18.7158C7.92879 19.0066 7.92519 19.4814 8.21582 19.7764C8.5066 20.0712 8.98143 20.0748 9.27637 19.7842L13.3633 15.7529L16.3525 18.7012C16.8878 19.2291 17.7478 19.2289 18.2832 18.7012L23.7764 13.2842C24.0712 12.9934 24.0748 12.5186 23.7842 12.2236Z"
        fill={color}
      />
    </svg>
  );
};

DashboardFilled32.category = 'Stats & Charts';

export default DashboardFilled32;
