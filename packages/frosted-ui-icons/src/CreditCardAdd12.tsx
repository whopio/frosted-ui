import * as React from 'react';
import { IconProps } from './types';

export const CreditCardAdd12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.75 6.5C10.1642 6.5 10.5 6.83579 10.5 7.25V8H11.25C11.6642 8 12 8.33579 12 8.75C12 9.16419 11.6642 9.5 11.25 9.5H10.5V10.25C10.5 10.6642 10.1642 11 9.75 11C9.33579 11 9 10.6642 9 10.25V9.5H8.25C7.8358 9.5 7.50003 9.16419 7.5 8.75C7.5 8.33579 7.83579 8 8.25 8H9V7.25C9 6.83579 9.33579 6.5 9.75 6.5ZM9.25 1.5C10.7688 1.5 12 2.73122 12 4.25V5.5C12 5.91421 11.6642 6.25 11.25 6.25C10.8358 6.25 10.5 5.91421 10.5 5.5H1.5V7.75C1.5 8.44036 2.05964 9 2.75 9H6C6.41421 9 6.75 9.33579 6.75 9.75C6.75 10.1642 6.41421 10.5 6 10.5H2.75C1.23122 10.5 0 9.26878 0 7.75V4.25C0 2.73122 1.23122 1.5 2.75 1.5H9.25ZM2.75 3C2.14529 3 1.64124 3.42948 1.52539 4H10.4746C10.3588 3.42948 9.85471 3 9.25 3H2.75Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardAdd12.category = 'Money & Shopping';

export default CreditCardAdd12;
