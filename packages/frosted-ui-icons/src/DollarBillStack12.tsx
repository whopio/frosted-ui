import * as React from 'react';
import { IconProps } from './types';

export const DollarBillStack12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.25 3C10.7688 3 12 4.23122 12 5.75V9.25C12 10.7688 10.7688 12 9.25 12H2.75C1.23122 12 0 10.7688 0 9.25V5.75C0 4.23122 1.23122 3 2.75 3H9.25ZM2.75 4.5C2.05964 4.5 1.5 5.05964 1.5 5.75V9.25C1.5 9.94036 2.05964 10.5 2.75 10.5H9.25C9.94036 10.5 10.5 9.94036 10.5 9.25V5.75C10.5 5.05964 9.94036 4.5 9.25 4.5H2.75ZM9.25 0.5C9.66421 0.5 10 0.835786 10 1.25C10 1.66421 9.66421 2 9.25 2H2.75C2.33579 2 2 1.66421 2 1.25C2 0.835786 2.33579 0.5 2.75 0.5H9.25Z"
        fill={color}
      />
      <path
        d="M7.5 4.5C7.25 4 6.375 3.75 6.00372 3.75M6.00372 3.75C4.99289 3.75 4.5 4.43426 4.5 4.92216C4.5 6.5 7.5 5.58701 7.5 7.27451C7.5 7.76241 7.01454 8.25 6.00372 8.25M6.00372 3.75L6 3M4.5 7.66657C4.875 8.05863 5.625 8.25 6.00372 8.25M6.00372 8.25L6 9"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

DollarBillStack12.category = 'Money & Shopping';

export default DollarBillStack12;
