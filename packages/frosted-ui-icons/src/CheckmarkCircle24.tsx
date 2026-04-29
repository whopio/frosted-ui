import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircle24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 0.5C18.1534 0.5 23.5 5.84663 23.5 12C23.5 18.1534 18.1534 23.5 12 23.5C5.84664 23.5 0.500003 18.1534 0.5 12C0.5 5.84663 5.84664 0.500014 12 0.5ZM12 2C6.67506 2.00001 2 6.67507 2 12C2 17.3249 6.67506 22 12 22C17.3249 22 22 17.3249 22 12C22 6.67505 17.3249 2 12 2ZM16.2197 8.46973C16.5126 8.17683 16.9874 8.17683 17.2803 8.46973C17.5731 8.76262 17.5732 9.2374 17.2803 9.53027L10.6504 16.1602C10.5098 16.3008 10.319 16.3799 10.1201 16.3799C9.92123 16.3799 9.73049 16.3008 9.58984 16.1602L6.71973 13.29C6.4269 12.9972 6.42689 12.5224 6.71973 12.2295C7.01261 11.9367 7.4874 11.9367 7.78027 12.2295L10.1201 14.5693L16.2197 8.46973Z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkCircle24.category = 'Checkmarks';

export default CheckmarkCircle24;
