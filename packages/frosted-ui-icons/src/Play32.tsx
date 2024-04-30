import * as React from 'react';
import { IconProps } from './types';

export const Play32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M26.8733 13.7612L11.782 3.99616C10.0077 2.84808 7.66663 4.12167 7.66663 6.23502V25.7649C7.66663 27.8782 10.0077 29.1518 11.782 28.0038L26.8733 18.2388C28.4973 17.188 28.4973 14.812 26.8733 13.7612Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Play32;
