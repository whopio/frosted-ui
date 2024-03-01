import * as React from 'react';
import { IconProps } from './types';

export const Pencil32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.75 29.2499L11.75 27.9999 27.7916 11.9583C28.7254 11.0245 29.25 9.75805 29.25 8.43747 29.25 7.11686 28.7254 5.85035 27.7916 4.91656L27.0834 4.20838C26.1496 3.27459 24.8831 2.75 23.5625 2.75 22.2419 2.75 20.9753 3.27461 20.0415 4.20843L4 20.2499 2.75 29.2499zM17.125 8.125L23.875 14.875"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Pencil32;
