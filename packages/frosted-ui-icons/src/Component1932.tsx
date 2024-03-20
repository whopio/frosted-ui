import * as React from 'react';
import { IconProps } from './types';

export const Component1932 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16 10.75L16 19.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="24" r="1.25" fill={color} />
        <path
          d="M18.2575 4.04467L30.9269 25.6978C31.1385 26.0594 31.25 26.4708 31.25 26.8898C31.25 28.1933 30.1933 29.25 28.8898 29.25H3.11024C1.80671 29.25 0.75 28.1933 0.75 26.8898C0.75 26.4708 0.861514 26.0594 1.07309 25.6978L13.7425 4.04467C14.2117 3.24281 15.071 2.75 16 2.75C16.929 2.75 17.7883 3.24281 18.2575 4.04467Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Component1932;
