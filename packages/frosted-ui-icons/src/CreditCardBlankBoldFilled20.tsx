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
      data-fui-icon="CreditCardBlankBoldFilled20"
      {...props}
    >
      <path
        d="M19.998 13.5c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4V9.25h19.998v4.25zm-4-11c2.21 0 4 1.79 4 4v.25H0V6.5c0-2.21 1.79-4 4-4h11.998z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlankBoldFilled20.category = 'Money & Shopping';

export default CreditCardBlankBoldFilled20;
