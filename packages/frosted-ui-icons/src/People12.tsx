import * as React from 'react';
import { IconProps } from './types';

export const People12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.87514 9.625H10.7116C11.0024 9.625 11.2343 9.37701 11.1854 9.09042C10.9197 7.53119 10.0097 6.375 8.50014 6.375C8.27711 6.375 8.06716 6.40024 7.87045 6.44829M5.62509 3.5C5.62509 4.39746 4.89755 5.125 4.00009 5.125C3.10262 5.125 2.37509 4.39746 2.37509 3.5C2.37509 2.60254 3.10262 1.875 4.00009 1.875C4.89755 1.875 5.62509 2.60254 5.62509 3.5ZM9.87509 3.75C9.87509 4.50939 9.25948 5.125 8.50009 5.125C7.7407 5.125 7.12509 4.50939 7.12509 3.75C7.12509 2.99061 7.7407 2.375 8.50009 2.375C9.25948 2.375 9.87509 2.99061 9.87509 3.75ZM0.935387 9.59041C1.21935 7.74986 2.25867 6.375 4.00009 6.375C5.7415 6.375 6.78083 7.74986 7.06479 9.59041C7.10908 9.87751 6.8777 10.125 6.58719 10.125H1.41298C1.12248 10.125 0.891093 9.87751 0.935387 9.59041Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default People12;
