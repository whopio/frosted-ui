import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M20 13C20 15.7614 17.7614 18 15 18H5C2.23858 18 0 15.7614 0 13V9H20V13ZM4.5 12C3.67157 12 3 12.6716 3 13.5C3 14.3284 3.67157 15 4.5 15H8C8.82843 15 9.5 14.3284 9.5 13.5C9.5 12.6716 8.82843 12 8 12H4.5ZM15 2C17.4189 2 19.4361 3.71782 19.8994 6H0.100586C0.563899 3.71781 2.58108 2 5 2H15Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBoldFilled20.category = 'Money & Shopping';

export default CreditCardBoldFilled20;
