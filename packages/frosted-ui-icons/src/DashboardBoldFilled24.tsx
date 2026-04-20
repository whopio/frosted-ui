import * as React from 'react';
import { IconProps } from './types';

export const DashboardBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.25 1C19.9779 1 23 4.02208 23 7.75V16.25C23 19.9779 19.9779 23 16.25 23H7.75C4.02208 23 1 19.9779 1 16.25V7.75C1 4.02208 4.02208 1 7.75 1H16.25ZM17.9717 9.01562C17.5893 8.6176 16.9559 8.60432 16.5576 8.98633L12.9541 12.4453L11.1006 10.667L10.9912 10.5713C10.464 10.1567 9.71766 10.1566 9.19043 10.5713L9.08105 10.667L6.05762 13.5703C5.65932 13.9528 5.64594 14.586 6.02832 14.9844C6.4108 15.3827 7.04402 15.3951 7.44238 15.0127L10.0908 12.4688L11.9443 14.249C12.5087 14.791 13.4005 14.791 13.9648 14.249L17.9424 10.4297C18.3405 10.0472 18.3538 9.41394 17.9717 9.01562Z"
        fill={color}
      />
    </svg>
  );
};

DashboardBoldFilled24.category = 'Stats & Charts';

export default DashboardBoldFilled24;
