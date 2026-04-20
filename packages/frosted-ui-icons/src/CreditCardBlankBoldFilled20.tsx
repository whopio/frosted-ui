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
        d="M19.998 13C19.998 15.2091 18.2072 17 15.998 17H4C1.79093 16.9999 0 15.2091 0 13V9.5H19.998V13ZM15.998 3C18.0378 3 19.7197 4.52692 19.9658 6.5H0.0322266C0.278359 4.52697 1.96031 3.00007 4 3H15.998Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlankBoldFilled20.category = 'Money & Shopping';

export default CreditCardBlankBoldFilled20;
