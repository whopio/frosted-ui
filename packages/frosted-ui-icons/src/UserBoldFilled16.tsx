import * as React from 'react';
import { IconProps } from './types';

export const UserBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.00062 9C10.3568 9 12.9476 10.013 13.9645 12.8379C14.3876 14.0135 13.4115 15 12.3961 15H3.60511C2.58991 14.9998 1.61379 14.0133 2.03675 12.8379L2.13734 12.5781C3.21599 9.95074 5.71825 9.00008 8.00062 9ZM8.00062 1C9.93362 1 11.5006 2.567 11.5006 4.5C11.5006 6.433 9.93362 8 8.00062 8C6.06772 7.99989 4.50062 6.43293 4.50062 4.5C4.50062 2.56707 6.06772 1.00012 8.00062 1Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UserBoldFilled16.category = 'People';

export default UserBoldFilled16;
