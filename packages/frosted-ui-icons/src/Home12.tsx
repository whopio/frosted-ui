import * as React from 'react';
import { IconProps } from './types';

export const Home12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.25 10.74V4.99605C11.25 4.6829 11.1062 4.3871 10.8598 4.19374L6.84517 1.04211C6.6041 0.852863 6.30648 0.75 6 0.75C5.69352 0.75 5.3959 0.852863 5.15483 1.04211L1.14016 4.19374C0.893845 4.3871 0.75 4.6829 0.75 4.99605V10.74C0.75 11.0217 0.978335 11.25 1.26 11.25H3.63043C3.69647 11.25 3.75 11.1965 3.75 11.1304V8.75C3.75 7.50736 4.75736 6.5 6 6.5C7.24264 6.5 8.25 7.50736 8.25 8.75V11.1304C8.25 11.1965 8.30353 11.25 8.36957 11.25H10.74C11.0217 11.25 11.25 11.0217 11.25 10.74Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Home12;
