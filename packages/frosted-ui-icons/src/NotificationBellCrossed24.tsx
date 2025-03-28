import * as React from 'react';
import { IconProps } from './types';

export const NotificationBellCrossed24 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M15.3198 19V20C15.3198 21.6569 13.9783 23 12.3234 23C10.6685 23 9.32698 21.6569 9.32698 20V19H15.3198ZM15.3198 19H21.3863C21.897 19 22.1835 18.411 21.8685 18.0084L21.2136 17.1716C20.8464 16.7022 20.6468 16.1232 20.6468 15.527V9.33333C20.6468 8.77176 20.5913 8.22316 20.4855 7.69273M15.9541 1.83249C14.8569 1.29914 13.625 1 12.3234 1C7.72651 1 4 4.73096 4 9.33333V13.8346"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 20L22 1"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default NotificationBellCrossed24;
