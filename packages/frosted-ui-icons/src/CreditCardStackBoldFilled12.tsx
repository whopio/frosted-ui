import * as React from 'react';
import { IconProps } from './types';

export const CreditCardStackBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 8.50049C11.9997 9.88098 10.8805 11.0005 9.5 11.0005H4.5C3.11945 11.0005 2.00026 9.88098 2 8.50049V7.50049H12V8.50049ZM9.5 3.00049C10.8807 3.00049 12 4.11978 12 5.50049H2C2 4.11978 3.11929 3.00049 4.5 3.00049H9.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M7.25 1C8.0301 1 8.71746 1.39701 9.12109 2H4.5C2.567 2 1 3.567 1 5.5V8.12012C0.397265 7.71644 0 7.02991 0 6.25V3.25C0 2.00736 1.00736 1 2.25 1H7.25Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardStackBoldFilled12.category = 'Money & Shopping';

export default CreditCardStackBoldFilled12;
