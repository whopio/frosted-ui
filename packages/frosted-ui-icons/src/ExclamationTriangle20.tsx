import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangle20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.27613 2.93058L1.77296 13.986C.98869 15.3192 1.95 17 3.49683 17H16.5032C18.05 17 19.0113 15.3192 18.227 13.986L11.7239 2.93058C10.9506 1.61596 9.04943 1.61596 8.27613 2.93058zM10 6V11"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="14" r="1" fill={color} />
      </svg>
    );
  },
);

export default ExclamationTriangle20;
