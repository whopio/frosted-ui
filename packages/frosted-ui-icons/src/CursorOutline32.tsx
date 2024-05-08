import * as React from 'react';
import { IconProps } from './types';

export const CursorOutline32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.65961 6.63853C3.00327 4.78756 4.78762 3.00321 6.63859 3.65955L27.7417 11.1426C29.7538 11.8561 29.8304 14.6732 27.8603 15.4952L21.4636 18.1638L26.8166 23.5168C27.7278 24.428 27.7278 25.9054 26.8166 26.8166C25.9054 27.7278 24.428 27.7278 23.5168 26.8166L18.1638 21.4636L15.4953 27.8602C14.6733 29.8303 11.8562 29.7537 11.1427 27.7416L3.65961 6.63853Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CursorOutline32;
