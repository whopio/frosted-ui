import * as React from 'react';
import { IconProps } from './types';

export const StorefrontItem12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.25 5.25V3.25C11.25 2.42157 10.5784 1.75 9.75 1.75H2.25C1.42157 1.75 0.75 2.42157 0.75 3.25V8.75C0.75 9.57843 1.42157 10.25 2.25 10.25H4"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.62214 5.64127C7.81002 5.52251 8.02773 5.45947 8.24999 5.45947C8.47226 5.45947 8.68996 5.52251 8.87784 5.64127L10.5218 6.68039C10.8321 6.87655 11.0203 7.21807 11.0203 7.58521V9.41481C11.0203 9.78195 10.8321 10.1235 10.5218 10.3196L8.87784 11.3588C8.68997 11.4775 8.47226 11.5406 8.24999 11.5406C8.02772 11.5406 7.81002 11.4775 7.62214 11.3588L5.97821 10.3196C5.66788 10.1235 5.47972 9.78195 5.47972 9.41482V7.58521C5.47972 7.21807 5.66787 6.87655 5.97821 6.68039L7.62214 5.64127Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <circle cx="2.875" cy="3.875" r=".625" fill={color} />
        <circle cx="4.625" cy="3.875" r=".625" fill={color} />
        <circle cx="6.375" cy="3.875" r=".625" fill={color} />
      </svg>
    );
  },
);

export default StorefrontItem12;
