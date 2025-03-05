import * as React from 'react';
import { IconProps } from './types';

export const NotificationBellCrossed16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M13.173 6.30303V10.2444C13.173 10.6239 13.295 10.9923 13.5194 11.291L13.9196 11.8235C14.1121 12.0797 13.9371 12.4545 13.6249 12.4545H9.91767M9.91767 12.4545V13.0909C9.91767 14.1453 9.09784 15 8.08652 15C7.07521 15 6.25538 14.1453 6.25538 13.0909V12.4545H9.91767ZM3 8V6.30303C3 3.37425 5.27731 1 8.08652 1C8.62078 1 9.13581 1.08587 9.61959 1.24511"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 13L14 1"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default NotificationBellCrossed16;
