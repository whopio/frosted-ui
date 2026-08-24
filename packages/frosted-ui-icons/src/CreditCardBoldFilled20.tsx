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
      data-fui-icon="CreditCardBoldFilled20"
      {...props}
    >
      <path
        d="M19.998 13.5c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4V8h19.998v5.5zm-15.06-1.75c-.553 0-1 .448-1 1s.447 1 1 1h3.937c.552 0 1-.448 1-1s-.448-1-1-1H4.937zm11.06-9.25c2.04 0 3.722 1.527 3.968 3.5H.032C.278 4.027 1.96 2.5 4 2.5h11.998z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBoldFilled20.category = 'Money & Shopping';

export default CreditCardBoldFilled20;
