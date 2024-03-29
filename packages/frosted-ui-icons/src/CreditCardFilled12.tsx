import * as React from 'react';
import { IconProps } from './types';

export const CreditCardFilled12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M0 3.45C0 2.23497 0.984974 1.25 2.2 1.25H9.8C11.015 1.25 12 2.23497 12 3.45V4H0V3.45Z"
          fill={color}
          fillOpacity=".875"
        />
        <path
          d="M0 5.5V8.55C0 9.76503 0.984973 10.75 2.2 10.75H9.8C11.015 10.75 12 9.76503 12 8.55V5.5H0ZM3 8.25C3 7.83579 3.33579 7.5 3.75 7.5H5.25C5.66421 7.5 6 7.83579 6 8.25C6 8.66421 5.66421 9 5.25 9H3.75C3.33579 9 3 8.66421 3 8.25Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          fillOpacity=".875"
        />
      </svg>
    );
  },
);

export default CreditCardFilled12;
