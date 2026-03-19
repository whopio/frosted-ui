import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlankBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M18 2C21.3137 2 24 4.68629 24 8V16C24 19.3137 21.3137 22 18 22H6C2.68629 22 0 19.3137 0 16V8C0 4.68629 2.68629 2 6 2H18ZM2 10V16C2 18.2091 3.79086 20 6 20H18C20.2091 20 22 18.2091 22 16V10H2ZM6 4C3.79086 4 2 5.79086 2 8H22C22 5.79086 20.2091 4 18 4H6Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlankBold24.category = 'Money & Shopping';

export default CreditCardBlankBold24;
