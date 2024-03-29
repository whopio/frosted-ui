import * as React from 'react';
import { IconProps } from './types';

export const CreditCardFilled24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M0 6.57C0 4.59834 1.59834 3 3.57 3H20.43C22.4017 3 24 4.59834 24 6.57V8H0V6.57Z"
          fill={color}
          fillOpacity=".875"
        />
        <path
          d="M0 10V17.43C0 19.4017 1.59834 21 3.57 21H20.43C22.4017 21 24 19.4017 24 17.43V10H0ZM3.75 16C3.75 15.4477 4.19772 15 4.75 15H9.25C9.80228 15 10.25 15.4477 10.25 16C10.25 16.5523 9.80228 17 9.25 17H4.75C4.19772 17 3.75 16.5523 3.75 16Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          fillOpacity=".875"
        />
      </svg>
    );
  },
);

export default CreditCardFilled24;
