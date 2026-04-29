import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M32 22.75C32 25.6495 29.6495 28 26.75 28H5.25C2.3505 28 0 25.6495 0 22.75V13H32V22.75ZM6.3584 19.5C5.52997 19.5 4.8584 20.1716 4.8584 21C4.8584 21.8284 5.52997 22.5 6.3584 22.5H14.3936C15.2219 22.4999 15.8936 21.8284 15.8936 21C15.8936 20.1716 15.2219 19.5001 14.3936 19.5H6.3584ZM26.75 4C29.6495 4 32 6.3505 32 9.25V10H0V9.25C0 6.35051 2.3505 4 5.25 4H26.75Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CreditCardBoldFilled32.category = 'Money & Shopping';

export default CreditCardBoldFilled32;
