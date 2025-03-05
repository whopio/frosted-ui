import * as React from 'react';
import { IconProps } from './types';

export const Calendar32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.75 12.25H28.25M10.75 2.25V5.75M21.25 2.25V5.75M6.82 28.75H25.18C27.1517 28.75 28.75 27.1517 28.75 25.18V9.32C28.75 7.34834 27.1517 5.75 25.18 5.75H6.82C4.84834 5.75 3.25 7.34834 3.25 9.32V25.18C3.25 27.1517 4.84834 28.75 6.82 28.75Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Calendar32;
