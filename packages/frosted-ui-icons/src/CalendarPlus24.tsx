import * as React from 'react';
import { IconProps } from './types';

export const CalendarPlus24 = ({
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
        d="M7.75 4.75H5.75C4.64543 4.75 3.75 5.64543 3.75 6.75V9.25M7.75 4.75H16.25M7.75 4.75V2.75M3.75 9.25V18.25C3.75 19.3546 4.64543 20.25 5.75 20.25H11.25M3.75 9.25H20.25M16.25 4.75H18.25C19.3546 4.75 20.25 5.64543 20.25 6.75V9.25M16.25 4.75V2.75M20.25 9.25V11.25M17.75 14.75V18M17.75 18V21.25M17.75 18H14.5M17.75 18H21"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CalendarPlus24;
