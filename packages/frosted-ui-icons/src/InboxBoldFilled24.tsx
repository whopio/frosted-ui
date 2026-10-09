import * as React from 'react';
import { IconProps } from './types';

export const InboxBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InboxBoldFilled24"
      {...props}
    >
      <path
        d="M16.733 1.5c2.23 0 4.152 1.574 4.59 3.761l1.502 7.517c.116.58.175 1.172.175 1.764v3.278c0 2.584-2.095 4.68-4.68 4.68H5.68C3.096 22.5 1 20.404 1 17.82v-3.277c0-.593.059-1.184.175-1.765L2.678 5.26C3.115 3.074 5.036 1.5 7.267 1.5h9.466zm-9.466 2c-1.277 0-2.378.902-2.628 2.154L3.167 13.01c.064-.006.13-.01.195-.01h4.62c.79 0 1.384.521 1.646 1.11l.048.119.112.274c.304.662.92 1.428 2.206 1.428 1.47 0 2.063-1 2.319-1.702l.047-.12c.262-.588.857-1.108 1.647-1.108h4.702c.041 0 .082.003.122.005l-1.47-7.352c-.25-1.252-1.35-2.154-2.628-2.154H7.267z"
        fill={color}
      />
    </svg>
  );
};

InboxBoldFilled24.category = 'Interface General';

export default InboxBoldFilled24;
