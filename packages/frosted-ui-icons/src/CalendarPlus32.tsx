import * as React from 'react';
import { IconProps } from './types';

export const CalendarPlus32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.3333 6.33341H7.66667C6.19391 6.33341 5 7.52732 5 9.00008V12.3334M10.3333 6.33341H21.6667M10.3333 6.33341V3.66675M5 12.3334V24.3334C5 25.8062 6.19391 27.0001 7.66667 27.0001H15M5 12.3334H27M21.6667 6.33341H24.3333C25.8061 6.33341 27 7.52732 27 9.00008V12.3334M21.6667 6.33341V3.66675M27 12.3334V15.0001M23.6667 19.6667V24.0001M23.6667 24.0001V28.3334M23.6667 24.0001H19.3333M23.6667 24.0001H28"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CalendarPlus32;
