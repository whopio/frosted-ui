import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlank12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.25 1C10.7688 1 12 2.23122 12 3.75V8.25C12 9.76878 10.7688 11 9.25 11H2.75C1.23122 11 4.0266e-09 9.76878 0 8.25V3.75C0 2.23122 1.23122 1 2.75 1H9.25ZM1.5 5.5V8.25C1.5 8.94036 2.05964 9.5 2.75 9.5H9.25C9.94036 9.5 10.5 8.94036 10.5 8.25V5.5H1.5ZM2.75 2.5C2.05964 2.5 1.5 3.05964 1.5 3.75V4H10.5V3.75C10.5 3.05964 9.94036 2.5 9.25 2.5H2.75Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlank12.category = 'Money & Shopping';

export default CreditCardBlank12;
