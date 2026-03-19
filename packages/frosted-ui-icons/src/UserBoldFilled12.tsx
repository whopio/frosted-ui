import * as React from 'react';
import { IconProps } from './types';

export const UserBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6.00007 7C8.02707 7 10.2701 7.90761 11.2032 9.98535C11.6921 11.0741 10.7615 12 9.85945 12H2.1407C1.23868 11.9999 0.308138 11.0741 0.796948 9.98535C1.73003 7.90762 3.97309 7.00003 6.00007 7ZM6.00007 0C7.795 0 9.25007 1.45507 9.25007 3.25C9.25007 5.04493 7.795 6.5 6.00007 6.5C4.2052 6.49994 2.75007 5.04489 2.75007 3.25C2.75007 1.45511 4.2052 6.06876e-05 6.00007 0Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UserBoldFilled12.category = 'People';

export default UserBoldFilled12;
