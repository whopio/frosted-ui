import * as React from 'react';
import { IconProps } from './types';

export const BanknoteFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.25 1C10.7688 1 12 2.23122 12 3.75V8.25C12 9.76878 10.7688 11 9.25 11H2.75C1.23122 11 0 9.76878 0 8.25V3.75C0 2.23122 1.23122 1 2.75 1H9.25ZM9 7.25C8.58579 7.25 8.25 7.58579 8.25 8C8.25 8.41421 8.58579 8.75 9 8.75C9.41421 8.75 9.75 8.41421 9.75 8C9.75 7.58579 9.41421 7.25 9 7.25ZM6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4ZM3 3.25C2.58579 3.25 2.25 3.58579 2.25 4C2.25 4.41421 2.58579 4.75 3 4.75C3.41421 4.75 3.75 4.41421 3.75 4C3.75 3.58579 3.41421 3.25 3 3.25Z"
        fill={color}
      />
    </svg>
  );
};

BanknoteFilled12.category = 'Money & Finance';

export default BanknoteFilled12;
