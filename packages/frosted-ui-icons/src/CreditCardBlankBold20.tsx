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
        d="M15.998 3C18.2072 3 19.998 4.79086 19.998 7V13C19.998 15.2091 18.2072 17 15.998 17H4C1.79093 16.9999 0 15.2091 0 13V7C0 4.79091 1.79093 3.00008 4 3H15.998ZM2 9V13C2 14.1045 2.8955 14.9999 4 15H15.998C17.1026 15 17.998 14.1046 17.998 13V9H2ZM4 5C2.8955 5.00008 2 5.89548 2 7H17.998C17.998 5.89543 17.1026 5 15.998 5H4Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlankBold20.category = 'Money & Shopping';

export default CreditCardBlankBold20;
