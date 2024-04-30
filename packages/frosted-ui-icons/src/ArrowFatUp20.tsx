import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUp20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.8749 17.7085H8.12493C7.66469 17.7085 7.29159 17.3354 7.29159 16.8752V8.54183H4.45024C4.09382 8.54183 3.90194 8.12337 4.13451 7.85328L9.36848 1.77516C9.70089 1.38907 10.2989 1.38907 10.6314 1.77516L15.8653 7.85328C16.0979 8.12337 15.9061 8.54183 15.5496 8.54183H12.7082V16.8752C12.7082 17.3354 12.3351 17.7085 11.8749 17.7085Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowFatUp20;
