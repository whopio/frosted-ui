import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalf24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M20.25 6.22074C20.25 5.79031 19.9746 5.40817 19.5662 5.27206L12.3162 2.85539C12.111 2.78697 11.889 2.78697 11.6838 2.85539L4.43377 5.27206C4.02543 5.40817 3.75 5.79031 3.75 6.22074V11.9123C3.75 16.8848 8 19.25 12 21.4079C16 19.25 20.25 16.8848 20.25 11.9123V6.22074Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M12 2.05408C11.8131 2.05408 11.6261 2.08401 11.4466 2.14388L4.1966 4.56053C3.482 4.79873 3 5.46747 3 6.22072V11.9123C3 14.6497 4.18351 16.67 5.85876 18.2596C7.5058 19.8224 9.65956 20.9974 11.6439 22.068C11.755 22.1279 11.8775 22.1579 12 22.1579V2.05408Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ShieldHalf24;
