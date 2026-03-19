import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmall16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.02765 5.14433C8.32047 4.85146 8.32045 4.37667 8.02765 4.08378C7.73476 3.79107 7.25994 3.791 6.9671 4.08378L3.81964 7.23124C3.39686 7.65428 3.39682 8.34047 3.81964 8.76347L6.9671 11.9109C7.25992 12.2038 7.73474 12.2036 8.02765 11.9109C8.32054 11.618 8.32053 11.1433 8.02765 10.8504L5.17511 7.99785L8.02765 5.14433ZM12.2776 5.14433C12.5705 4.85146 12.5705 4.37667 12.2776 4.08378C11.9848 3.79107 11.5099 3.79099 11.2171 4.08378L8.06964 7.23124C7.64685 7.65428 7.64681 8.34047 8.06964 8.76347L11.2171 11.9109C11.5099 12.2038 11.9847 12.2036 12.2776 11.9109C12.5705 11.618 12.5705 11.1433 12.2776 10.8504L9.42511 7.99785L12.2776 5.14433Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmall16.category = 'Arrows';

export default DoubleChevronLeftSmall16;
