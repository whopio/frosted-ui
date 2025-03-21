import * as React from 'react';
import { IconProps } from './types';

export const Plane24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15.1961 9.97718L11.9595 3.50415H9.53216L11.1504 9.97718H6.70021L4.27282 7.54979H2.25L3.86826 12L2.25 16.4502H4.27282L6.70021 14.0228H11.1504L9.53216 20.4958H11.9595L15.1961 14.0228H19.7272C20.8443 14.0228 21.75 13.1172 21.75 12C21.75 10.8828 20.8443 9.97718 19.7272 9.97718H15.1961Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Plane24;
