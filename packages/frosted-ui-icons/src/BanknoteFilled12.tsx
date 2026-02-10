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
        d="M9.25 1C10.7688 1 12 2.23122 12 3.75V8.25C12 9.76878 10.7688 11 9.25 11H2.75C1.23122 11 0 9.76878 0 8.25V3.75C0 2.23122 1.23122 1 2.75 1H9.25ZM9.25 7.5C8.83579 7.5 8.5 7.83579 8.5 8.25C8.5 8.66421 8.83579 9 9.25 9C9.66421 9 10 8.66421 10 8.25C10 7.83579 9.66421 7.5 9.25 7.5ZM6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4ZM2.75 3C2.33579 3 2 3.33579 2 3.75C2 4.16421 2.33579 4.5 2.75 4.5C3.16421 4.5 3.5 4.16421 3.5 3.75C3.5 3.33579 3.16421 3 2.75 3Z"
        fill={color}
      />
    </svg>
  );
};

BanknoteFilled12.category = 'Money & Shopping';

export default BanknoteFilled12;
