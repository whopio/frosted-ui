import * as React from 'react';
import { IconProps } from './types';

export const LilstNumber16 = ({
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
        d="M3.83333 13.5H12.1667C12.9031 13.5 13.5 12.9031 13.5 12.1667V3.83333C13.5 3.09695 12.9031 2.5 12.1667 2.5H3.83333C3.09695 2.5 2.5 3.09695 2.5 3.83333V12.1667C2.5 12.9031 3.09695 13.5 3.83333 13.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.89583 9.97916H11.4375M7.89583 6.02082H11.4375M5.60417 7.06249V4.97916L4.5625 5.70832M4.66667 9.22157C4.66667 9.22157 4.96822 8.93749 5.33702 8.93749C5.70583 8.93749 6.00481 9.19661 6.00481 9.51624C6.00481 10.266 4.5625 10.3958 4.5625 11.0208H6.125"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LilstNumber16;
