import * as React from 'react';
import { IconProps } from './types';

export const UserFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.00116 9C10.419 9.00008 12.9469 10.1631 13.884 13.2168C14.1794 14.1799 13.398 15.0017 12.5256 15.002H3.47674C2.60417 15.0019 1.82279 14.1801 2.11834 13.2168L2.21014 12.9355C3.21273 10.0911 5.65881 9 8.00116 9ZM8.00116 1.00488C9.93404 1.00497 11.5011 2.57199 11.5012 4.50488C11.5012 6.43782 9.93407 8.00479 8.00116 8.00488C6.06816 8.00488 4.50116 6.43788 4.50116 4.50488C4.50121 2.57193 6.06819 1.00488 8.00116 1.00488Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UserFilled16.category = 'People';

export default UserFilled16;
