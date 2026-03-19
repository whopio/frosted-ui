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
        d="M13.4004 1C16.4929 1.00021 18.9998 3.50712 19 6.59961V13.4004C18.9998 16.4929 16.4929 18.9998 13.4004 19H6.59961C3.50713 18.9998 1.00021 16.4929 1 13.4004V6.59961C1.00021 3.50712 3.50712 1.00021 6.59961 1H13.4004ZM15.3262 7.08008C14.7492 6.48582 13.7995 6.47192 13.2051 7.04883L10.7725 9.40918L9.76074 8.42676L9.61914 8.30273C8.89001 7.72373 7.83036 7.76496 7.14844 8.42676L4.70508 10.7988C4.11082 11.3758 4.09692 12.3255 4.67383 12.9199C5.25083 13.5142 6.20053 13.5281 6.79492 12.9512L8.4541 11.3398L9.4668 12.3232C10.1943 13.0291 11.3517 13.0292 12.0791 12.3232L15.2949 9.20117C15.8892 8.62417 15.9031 7.67447 15.3262 7.08008Z"
        fill={color}
      />
    </svg>
  );
};

DashboardBoldFilled20.category = 'Stats & Charts';

export default DashboardBoldFilled20;
