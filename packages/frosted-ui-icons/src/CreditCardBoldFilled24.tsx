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
      data-fui-icon="CreditCardBoldFilled24"
      {...props}
    >
      <path
        d="M24 16.5c0 2.485-2.015 4.5-4.5 4.5h-15C2.015 21 0 18.985 0 16.5V9.75h24v6.75zm-18.6-2c-.552 0-1 .448-1 1s.448 1 1 1h6.05c.552 0 1-.448 1-1s-.448-1-1-1H5.4zM19.5 3C21.985 3 24 5.015 24 7.5v.25H0V7.5C0 5.015 2.015 3 4.5 3h15z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBoldFilled24.category = 'Money & Shopping';

export default CreditCardBoldFilled24;
