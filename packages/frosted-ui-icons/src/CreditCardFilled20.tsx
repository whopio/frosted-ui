import * as React from 'react';
import { IconProps } from './types';

export const CreditCardFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M0 5.88C0 4.28942 1.28942 3 2.88 3H17.12C18.7106 3 20 4.28942 20 5.88V7H0V5.88Z"
          fill={color}
        />
        <path
          d="M0 9V14.12C0 15.7106 1.28942 17 2.88 17H17.12C18.7106 17 20 15.7106 20 14.12V9H0ZM3.75 13C3.75 12.4477 4.19772 12 4.75 12H8.25C8.80228 12 9.25 12.4477 9.25 13C9.25 13.5523 8.80228 14 8.25 14H4.75C4.19772 14 3.75 13.5523 3.75 13Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default CreditCardFilled20;
