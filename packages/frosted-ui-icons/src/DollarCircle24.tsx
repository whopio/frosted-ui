import * as React from 'react';
import { IconProps } from './types';

export const DollarCircle24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.25 16.25H14.125C15.2986 16.25 16.25 15.2986 16.25 14.125C16.25 12.9514 15.2986 12 14.125 12H9.875C8.70139 12 7.75 11.0486 7.75 9.875C7.75 8.70139 8.70139 7.75 9.875 7.75H15.75M12 18.25V5.75M22.25 12C22.25 17.6609 17.6609 22.25 12 22.25C6.33908 22.25 1.75 17.6609 1.75 12C1.75 6.33908 6.33908 1.75 12 1.75C17.6609 1.75 22.25 6.33908 22.25 12Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DollarCircle24;
