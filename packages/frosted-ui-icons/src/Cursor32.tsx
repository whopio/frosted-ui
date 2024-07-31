import * as React from 'react';
import { IconProps } from './types';

export const Cursor32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.65955 6.63853C3.00321 4.78756 4.78756 3.00321 6.63853 3.65955L27.7416 11.1426C29.7537 11.8561 29.8304 14.6732 27.8602 15.4952L21.4635 18.1638L26.8165 23.5168C27.7278 24.428 27.7278 25.9054 26.8165 26.8166C25.9053 27.7278 24.4279 27.7278 23.5167 26.8166L18.1637 21.4636L15.4953 27.8602C14.6733 29.8303 11.8561 29.7537 11.1426 27.7416L3.65955 6.63853Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Cursor32;
