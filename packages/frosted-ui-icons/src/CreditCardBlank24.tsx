import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlank24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M19.749 3.5C22.0962 3.5 23.999 5.40279 23.999 7.75V16.25C23.999 18.5972 22.0962 20.5 19.749 20.5H4.25C1.90279 20.5 0 18.5972 0 16.25V7.75C1.28853e-07 5.40279 1.90279 3.5 4.25 3.5H19.749ZM1.5 9.5V16.25C1.5 17.7688 2.73122 19 4.25 19H19.749C21.2678 19 22.499 17.7688 22.499 16.25V9.5H1.5ZM4.25 5C2.73122 5 1.5 6.23122 1.5 7.75V8H22.499V7.75C22.499 6.23122 21.2678 5 19.749 5H4.25Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlank24.category = 'Money & Shopping';

export default CreditCardBlank24;
