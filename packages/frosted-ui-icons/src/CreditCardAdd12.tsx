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
        d="M9.75 7.5C10.1642 7.5 10.5 7.83579 10.5 8.25V9H11.25C11.6642 9 12 9.33579 12 9.75C12 10.1642 11.6642 10.5 11.25 10.5H10.5V11.25C10.5 11.6642 10.1642 12 9.75 12C9.33579 12 9 11.6642 9 11.25V10.5H8.25C7.8358 10.5 7.50003 10.1642 7.5 9.75C7.5 9.33579 7.83579 9 8.25 9H9V8.25C9 7.83579 9.33579 7.5 9.75 7.5ZM9.25 1C10.7688 1 12 2.23122 12 3.75V6C12 6.41421 11.6642 6.75 11.25 6.75C10.8358 6.75 10.5 6.41421 10.5 6V5.5H1.5V8.25C1.5 8.94036 2.05964 9.5 2.75 9.5H5.75C6.16421 9.5 6.5 9.83579 6.5 10.25C6.5 10.6642 6.16421 11 5.75 11H2.75C1.23122 11 4.0266e-09 9.76878 0 8.25V3.75C0 2.23122 1.23122 1 2.75 1H9.25ZM2.75 2.5C2.05964 2.5 1.5 3.05964 1.5 3.75V4H10.5V3.75C10.5 3.05964 9.94036 2.5 9.25 2.5H2.75Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardAdd12.category = 'Money & Shopping';

export default CreditCardAdd12;
