import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlankBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15.998 2.5C18.2072 2.5 19.998 4.29086 19.998 6.5V13.5C19.998 15.7091 18.2072 17.5 15.998 17.5H4C1.79093 17.4999 0 15.7091 0 13.5V6.5C0 4.29091 1.79093 2.50008 4 2.5H15.998ZM2 9V13.5C2 14.6045 2.8955 15.4999 4 15.5H15.998C17.1026 15.5 17.998 14.6046 17.998 13.5V9H2ZM4 4.5C2.8955 4.50008 2 5.39548 2 6.5V7H17.998V6.5C17.998 5.39543 17.1026 4.5 15.998 4.5H4Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlankBold20.category = 'Money & Shopping';

export default CreditCardBlankBold20;
