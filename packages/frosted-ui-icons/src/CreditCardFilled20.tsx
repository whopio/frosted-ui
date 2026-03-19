import * as React from 'react';
import { IconProps } from './types';

export const CreditCardFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M20 13.25C20 15.8734 17.8734 18 15.25 18H4.75C2.12665 18 0 15.8734 0 13.25V8.5H20V13.25ZM4.75 12.5C4.33579 12.5 4 12.8358 4 13.25C4 13.6642 4.33579 14 4.75 14H8.25C8.66421 14 9 13.6642 9 13.25C9 12.8358 8.66421 12.5 8.25 12.5H4.75ZM15.25 2C17.8734 2 20 4.12665 20 6.75V7H0V6.75C2.57706e-07 4.12665 2.12665 2 4.75 2H15.25Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardFilled20.category = 'Money & Shopping';

export default CreditCardFilled20;
