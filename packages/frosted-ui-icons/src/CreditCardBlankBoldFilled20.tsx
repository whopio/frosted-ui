import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlankBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M20 13C20 15.7614 17.7614 18 15 18H5C2.23858 18 0 15.7614 0 13V9H20V13ZM15 2C17.4189 2 19.4361 3.71782 19.8994 6H0.100586C0.563899 3.71781 2.58108 2 5 2H15Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlankBoldFilled20.category = 'Money & Shopping';

export default CreditCardBlankBoldFilled20;
