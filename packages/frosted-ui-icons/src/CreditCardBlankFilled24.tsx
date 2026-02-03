import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlankFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M24 16.75C24 19.3734 21.8734 21.5 19.25 21.5H4.75C2.12665 21.5 1.20798e-08 19.3734 0 16.75V9.5H24V16.75ZM19.25 2.5C21.8734 2.5 24 4.62665 24 7.25V8H0V7.25C0 4.62665 2.12665 2.5 4.75 2.5H19.25Z"
        fill={color}
      />
    </svg>
  );
};

export default CreditCardBlankFilled24;
