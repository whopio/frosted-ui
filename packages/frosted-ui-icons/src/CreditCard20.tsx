import * as React from 'react';
import { IconProps } from './types';

export const CreditCard20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.249 2.5C18.3201 2.50004 19.999 4.17896 19.999 6.25V13.75C19.999 15.821 18.3201 17.5 16.249 17.5H3.75C1.67893 17.5 0 15.8211 0 13.75V6.25C0 4.17893 1.67893 2.5 3.75 2.5H16.249ZM1.5 13.75C1.5 14.9926 2.50736 16 3.75 16H16.249C17.4916 16 18.499 14.9926 18.499 13.75V8H1.5V13.75ZM8.03613 12C8.45035 12 8.78613 12.3358 8.78613 12.75C8.78613 13.1642 8.45035 13.5 8.03613 13.5H4.1123C3.69809 13.5 3.3623 13.1642 3.3623 12.75C3.3623 12.3358 3.69809 12 4.1123 12H8.03613ZM3.75 4C2.50736 4 1.5 5.00736 1.5 6.25V6.5H18.499V6.25C18.499 5.00738 17.4916 4.00004 16.249 4H3.75Z"
        fill={color}
      />
    </svg>
  );
};

CreditCard20.category = 'Money & Shopping';

export default CreditCard20;
