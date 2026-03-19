import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlankFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16 10.5C16 12.433 14.433 14 12.5 14H3.5C1.567 14 0 12.433 0 10.5V7.5H16V10.5ZM12.5 2C14.433 2 16 3.567 16 5.5V6H0V5.5C1.28853e-07 3.567 1.567 2 3.5 2H12.5Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlankFilled16.category = 'Money & Shopping';

export default CreditCardBlankFilled16;
