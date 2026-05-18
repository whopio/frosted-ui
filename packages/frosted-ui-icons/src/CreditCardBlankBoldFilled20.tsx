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
        d="M19.998 13.5C19.998 15.7091 18.2072 17.5 15.998 17.5H4C1.79093 17.4999 0 15.7091 0 13.5V9.25H19.998V13.5ZM15.998 2.5C18.2072 2.5 19.998 4.29086 19.998 6.5V6.75H0V6.5C0 4.29091 1.79093 2.50008 4 2.5H15.998Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlankBoldFilled20.category = 'Money & Shopping';

export default CreditCardBlankBoldFilled20;
