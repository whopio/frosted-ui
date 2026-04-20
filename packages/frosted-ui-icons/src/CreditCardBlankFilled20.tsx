import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlankFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M19.999 13.25C19.999 15.321 18.3201 17 16.249 17H3.75C1.67907 16.9998 0 15.321 0 13.25V8.5H19.999V13.25ZM16.249 3C18.3201 3.00004 19.999 4.67896 19.999 6.75V7H0V6.75C0 4.67903 1.67907 3.00017 3.75 3H16.249Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlankFilled20.category = 'Money & Shopping';

export default CreditCardBlankFilled20;
