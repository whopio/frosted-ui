import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardBold20"
      {...props}
    >
      <path
        d="M16 2.5c2.21 0 4 1.79 4 4v7c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4v-7c0-2.21 1.79-4 4-4h12zm-14 11c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2V9H2v4.5zm7.155-2.25c.552 0 1 .448 1 1s-.448 1-1 1H5.218c-.553 0-1-.448-1-1s.447-1 1-1h3.937zM4 4.5c-1.105 0-2 .895-2 2V7h16v-.5c0-1.105-.895-2-2-2H4z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBold20.category = 'Money & Shopping';

export default CreditCardBold20;
