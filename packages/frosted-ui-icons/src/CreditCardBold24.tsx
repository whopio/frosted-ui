import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M19.5 3C21.9853 3 24 5.01472 24 7.5V16.5C24 18.9853 21.9853 21 19.5 21H4.5C2.01492 20.9998 0 18.9851 0 16.5V7.5C0 5.01486 2.01492 3.00024 4.5 3H19.5ZM2 16.5C2 17.8806 3.11949 18.9998 4.5 19H19.5C20.8807 19 22 17.8807 22 16.5V9.75H2.00293L2 9.74902V16.5ZM11.7275 14.5C12.2797 14.5002 12.7275 14.9478 12.7275 15.5C12.7275 16.0522 12.2797 16.4998 11.7275 16.5H5.67773C5.12545 16.5 4.67773 16.0523 4.67773 15.5C4.67773 14.9477 5.12545 14.5 5.67773 14.5H11.7275ZM4.5 5C3.11949 5.00024 2 6.11943 2 7.5V7.75H22V7.5C22 6.11929 20.8807 5 19.5 5H4.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CreditCardBold24.category = 'Money & Shopping';

export default CreditCardBold24;
