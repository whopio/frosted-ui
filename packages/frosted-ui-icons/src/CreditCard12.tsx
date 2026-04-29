import * as React from 'react';
import { IconProps } from './types';

export const CreditCard12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.25 1.5C10.7688 1.5 12 2.73122 12 4.25V7.75C12 9.26878 10.7688 10.5 9.25 10.5H2.75C1.23122 10.5 0 9.26878 0 7.75V4.25C0 2.73122 1.23122 1.5 2.75 1.5H9.25ZM1.5 7.75C1.5 8.44036 2.05964 9 2.75 9H9.25C9.94036 9 10.5 8.44036 10.5 7.75V5.5H1.5V7.75ZM4.75 6.5C5.16421 6.5 5.5 6.83579 5.5 7.25C5.5 7.66421 5.16421 8 4.75 8H3.25C2.83579 8 2.5 7.66421 2.5 7.25C2.5 6.83579 2.83579 6.5 3.25 6.5H4.75ZM2.75 3C2.14529 3 1.64124 3.42948 1.52539 4H10.4746C10.3588 3.42948 9.85471 3 9.25 3H2.75Z"
        fill={color}
      />
    </svg>
  );
};

CreditCard12.category = 'Money & Shopping';

export default CreditCard12;
