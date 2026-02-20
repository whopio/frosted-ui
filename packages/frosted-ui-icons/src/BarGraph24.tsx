import * as React from 'react';
import { IconProps } from './types';

export const BarGraph24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M.75 14.4468C.75 13.2633 1.70939 12.304 2.89285 12.304H8.04729V23.2497H2.89286C1.70939 23.2497.75 22.2903.75 21.1069L.75 14.4468zM15.9531 6.83105H21.106C22.2894 6.83105 23.2488 7.79044 23.2488 8.97391V21.1071C23.2488 22.2906 22.2894 23.25 21.106 23.25H15.9531V6.83105z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M8.04688 2.89285C8.04688 1.70939 9.00626 0.75 10.1897 0.75H13.8094C14.9929 0.75 15.9523 1.70939 15.9523 2.89285V23.25H8.04688V2.89285Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

BarGraph24.category = 'Stats & Charts';

export default BarGraph24;
