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
      data-fui-icon="CreditCardBlankBold20"
      {...props}
    >
      <path
        d="M15.998 2.5c2.21 0 4 1.79 4 4v7c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4v-7c0-2.21 1.79-4 4-4h11.998zM2 9v4.5c0 1.104.896 2 2 2h11.998c1.105 0 2-.895 2-2V9H2zm2-4.5c-1.104 0-2 .895-2 2V7h15.998v-.5c0-1.105-.895-2-2-2H4z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlankBold20.category = 'Money & Shopping';

export default CreditCardBlankBold20;
