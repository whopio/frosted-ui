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
        d="M19.25 2.5C21.8734 2.5 24 4.62665 24 7.25V16.75C24 19.3734 21.8734 21.5 19.25 21.5H4.75C2.12665 21.5 1.20798e-08 19.3734 0 16.75V7.25C0 4.62665 2.12665 2.5 4.75 2.5H19.25ZM1.5 9.5V16.75C1.5 18.5449 2.95507 20 4.75 20H19.25C21.0449 20 22.5 18.5449 22.5 16.75V9.5H1.5ZM4.75 4C2.95507 4 1.5 5.45507 1.5 7.25V8H22.5V7.25C22.5 5.45507 21.0449 4 19.25 4H4.75Z"
        fill={color}
      />
    </svg>
  );
};

export default CreditCardBlank24;
