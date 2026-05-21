import * as React from 'react';
import { IconProps } from './types';

export const CreditCardFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M19.999 13.75C19.999 15.821 18.3201 17.5 16.249 17.5H3.75C1.67893 17.5 0 15.8211 0 13.75V8H19.999V13.75ZM4.1123 12C3.69809 12 3.3623 12.3358 3.3623 12.75C3.3623 13.1642 3.69809 13.5 4.1123 13.5H8.03613C8.45035 13.5 8.78613 13.1642 8.78613 12.75C8.78613 12.3358 8.45035 12 8.03613 12H4.1123ZM16.249 2.5C18.3201 2.50004 19.999 4.17896 19.999 6.25V6.5H0V6.25C0 4.17893 1.67893 2.5 3.75 2.5H16.249Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardFilled20.category = 'Money & Shopping';

export default CreditCardFilled20;
