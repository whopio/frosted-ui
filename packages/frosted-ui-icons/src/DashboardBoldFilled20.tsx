import * as React from 'react';
import { IconProps } from './types';

export const DashboardBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.4004 1C16.4929 1.00021 18.9998 3.50712 19 6.59961V13.4004C18.9998 16.4929 16.4929 18.9998 13.4004 19H6.59961C3.50713 18.9998 1.00021 16.4929 1 13.4004V6.59961C1.00021 3.50712 3.50712 1.00021 6.59961 1H13.4004ZM14.9678 7.42871C14.5832 7.03247 13.95 7.02276 13.5537 7.40723L10.7725 10.1064L9.41211 8.78613L9.30859 8.69531C8.80948 8.29873 8.09972 8.29876 7.60059 8.69531L7.49707 8.78613L5.05371 11.1572C4.65747 11.5418 4.64776 12.175 5.03223 12.5713C5.41682 12.9675 6.04997 12.9772 6.44629 12.5928L8.4541 10.6426L9.81543 11.9639C10.3489 12.4816 11.197 12.4816 11.7305 11.9639L14.9463 8.84277C15.3425 8.45818 15.3522 7.82503 14.9678 7.42871Z"
        fill={color}
      />
    </svg>
  );
};

DashboardBoldFilled20.category = 'Stats & Charts';

export default DashboardBoldFilled20;
