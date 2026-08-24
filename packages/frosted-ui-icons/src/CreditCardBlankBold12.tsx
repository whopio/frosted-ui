import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlankBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardBlankBold12"
      {...props}
    >
      <path
        d="M9 1.25c1.657 0 3 1.343 3 3v3.5c0 1.657-1.343 3-3 3H3c-1.657 0-3-1.343-3-3v-3.5c0-1.657 1.343-3 3-3h6zm-7 5v1.5c0 .552.448 1 1 1h6c.552 0 1-.448 1-1v-1.5H2zm1-3c-.552 0-1 .448-1 1h8c0-.552-.448-1-1-1H3z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlankBold12.category = 'Money & Shopping';

export default CreditCardBlankBold12;
