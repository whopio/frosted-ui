import * as React from 'react';
import { IconProps } from './types';

export const CreditCardAddBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M25.75 19.25C26.3023 19.25 26.75 19.6977 26.75 20.25V23.75H30.25C30.8023 23.75 31.25 24.1977 31.25 24.75C31.25 25.3023 30.8023 25.75 30.25 25.75H26.75V29.25C26.75 29.8023 26.3023 30.25 25.75 30.25C25.1977 30.25 24.75 29.8023 24.75 29.25V25.75H21.25C20.6977 25.75 20.25 25.3023 20.25 24.75C20.25 24.1977 20.6977 23.75 21.25 23.75H24.75V20.25C24.75 19.6977 25.1977 19.25 25.75 19.25ZM25.75 4C28.6495 4 31 6.3505 31 9.25V17C31 17.5523 30.5523 18 30 18C29.4477 18 29 17.5523 29 17V12H3V21.75C3 23.5449 4.45507 25 6.25 25H17C17.5523 25 18 25.4477 18 26C18 26.5523 17.5523 27 17 27H6.25C3.35051 27 1 24.6495 1 21.75V9.25C1 6.35051 3.35051 4 6.25 4H25.75ZM6.25 6C4.45507 6 3 7.45507 3 9.25V10H29V9.25C29 7.45507 27.5449 6 25.75 6H6.25Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardAddBold32.category = 'Money & Shopping';

export default CreditCardAddBold32;
