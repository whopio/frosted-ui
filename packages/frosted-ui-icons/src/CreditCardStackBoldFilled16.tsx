import * as React from 'react';
import { IconProps } from './types';

export const CreditCardStackBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardStackBoldFilled16"
      {...props}
    >
      <path
        d="M16 11.657c0 1.767-1.433 3.2-3.2 3.2H6.058c-1.768 0-3.2-1.433-3.2-3.2V9H16v2.657zm-10-.8c-.631 0-1.143.512-1.143 1.143S5.37 13.143 6 13.143h2.286c.63 0 1.143-.512 1.143-1.143 0-.63-.512-1.142-1.143-1.142H6zm3.942-9.714c1.274 0 2.374.744 2.89 1.821H6.057c-2.655 0-4.808 2.153-4.808 4.808v2.988C.491 10.175 0 9.26 0 8.228V4.343c0-1.767 1.433-3.2 3.2-3.2h6.742zM12.8 4.572c1.5 0 2.76 1.034 3.106 2.428H2.951c.346-1.394 1.605-2.428 3.107-2.428H12.8z"
        fill={color}
      />
    </svg>
  );
};

CreditCardStackBoldFilled16.category = 'Money & Shopping';

export default CreditCardStackBoldFilled16;
