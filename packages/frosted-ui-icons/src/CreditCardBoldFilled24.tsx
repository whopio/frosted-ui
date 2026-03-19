import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M24 16C24 19.3137 21.3137 22 18 22H6C2.68629 22 0 19.3137 0 16V10H24V16ZM4.5 15C3.67157 15 3 15.6716 3 16.5C3 17.3284 3.67157 18 4.5 18H10C10.8284 18 11.5 17.3284 11.5 16.5C11.5 15.6716 10.8284 15 10 15H4.5ZM18 2C20.9729 2 23.4388 4.16245 23.915 7H0.0849609C0.561174 4.16245 3.02712 2 6 2H18Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBoldFilled24.category = 'Money & Shopping';

export default CreditCardBoldFilled24;
