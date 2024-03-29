import * as React from 'react';
import { IconProps } from './types';

export const CreditCardFilled32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M1 9.25C1 6.90279 2.90279 5 5.25 5H26.75C29.0972 5 31 6.90279 31 9.25V11H1V9.25Z"
          fill={color}
          fillOpacity=".875"
        />
        <path
          d="M1 13V22.75C1 25.0972 2.90279 27 5.25 27H26.75C29.0972 27 31 25.0972 31 22.75V13H1ZM5.75 21C5.75 20.4477 6.19772 20 6.75 20H13.25C13.8023 20 14.25 20.4477 14.25 21C14.25 21.5523 13.8023 22 13.25 22H6.75C6.19772 22 5.75 21.5523 5.75 21Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          fillOpacity=".875"
        />
      </svg>
    );
  },
);

export default CreditCardFilled32;
