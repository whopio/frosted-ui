import * as React from 'react';
import { IconProps } from './types';

export const Apps12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.99988 0.749985V2.74994"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="6"
          cy="4"
          r="1.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.63211 5.07851L10.2498 11.2498M5.36764 5.07851L1.74996 11.2498M10.2498 5.99988C10.2498 5.99988 9.36202 9.24981 5.99988 9.24981 2.63773 9.24981 1.74996 5.99988 1.74996 5.99988"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Apps12;
