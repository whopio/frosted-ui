import * as React from 'react';
import { IconProps } from './types';

export const LeaveReview12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4.75 1H3.75C2.09315 1 0.75 2.34315 0.75 4V8C0.75 9.65685 2.09315 11 3.75 11H7.75C9.40685 11 10.75 9.65685 10.75 8V7"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.27515 2.37859L5.06457 4.58922C4.7586 4.8952 4.56012 5.29216 4.49891 5.72052L4.39046 6.47952C4.31503 7.00747 4.76754 7.46003 5.29551 7.38464L6.05455 7.27626C6.483 7.21508 6.88004 7.01657 7.18607 6.71054L9.39656 4.5M7.27515 2.37859L8.1893 1.46442C8.7751 0.878596 9.7249 0.878589 10.3107 1.46441V1.46441C10.8965 2.05021 10.8965 2.99998 10.3107 3.5858L9.39656 4.5M7.27515 2.37859L9.39656 4.5"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default LeaveReview12;
