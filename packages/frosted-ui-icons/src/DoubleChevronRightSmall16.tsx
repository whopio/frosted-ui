import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmall16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.97211 5.14433C7.67929 4.85146 7.67931 4.37667 7.97211 4.08378C8.265 3.79107 8.73981 3.791 9.03265 4.08378L12.1801 7.23124C12.6029 7.65428 12.6029 8.34047 12.1801 8.76347L9.03265 11.9109C8.73984 12.2038 8.26502 12.2036 7.97211 11.9109C7.67922 11.618 7.67922 11.1433 7.97211 10.8504L10.8246 7.99785L7.97211 5.14433ZM3.72211 5.14433C3.42929 4.85146 3.42931 4.37667 3.72211 4.08378C4.015 3.79107 4.48981 3.79099 4.78265 4.08378L7.93012 7.23124C8.3529 7.65428 8.35295 8.34047 7.93012 8.76347L4.78265 11.9109C4.48983 12.2038 4.01502 12.2036 3.72211 11.9109C3.42922 11.618 3.42922 11.1433 3.72211 10.8504L6.57465 7.99785L3.72211 5.14433Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightSmall16.category = 'Arrows';

export default DoubleChevronRightSmall16;
