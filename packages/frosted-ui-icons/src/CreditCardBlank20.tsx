import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlank20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15.25 2C17.8734 2 20 4.12665 20 6.75V13.25C20 15.8734 17.8734 18 15.25 18H4.75C2.12665 18 0 15.8734 0 13.25V6.75C2.57706e-07 4.12665 2.12665 2 4.75 2H15.25ZM1.5 8.5V13.25C1.5 15.0449 2.95507 16.5 4.75 16.5H15.25C17.0449 16.5 18.5 15.0449 18.5 13.25V8.5H1.5ZM4.75 3.5C2.95508 3.5 1.5 4.95507 1.5 6.75V7H18.5V6.75C18.5 4.95507 17.0449 3.5 15.25 3.5H4.75Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlank20.category = 'Money & Shopping';

export default CreditCardBlank20;
