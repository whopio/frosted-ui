import * as React from 'react';
import { IconProps } from './types';

export const Star16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M7.52451 1.96353C7.67419 1.50287 8.3259 1.50287 8.47557 1.96353L9.74941 5.884C9.81635 6.09001 10.0083 6.22949 10.2249 6.22949H14.3472C14.8315 6.22949 15.0329 6.8493 14.6411 7.134L11.3061 9.55698C11.1309 9.68431 11.0575 9.90999 11.1245 10.116L12.3983 14.0365C12.548 14.4971 12.0207 14.8802 11.6289 14.5955L8.29394 12.1725C8.11869 12.0452 7.88139 12.0452 7.70615 12.1725L4.3712 14.5955C3.97934 14.8802 3.4521 14.4971 3.60178 14.0365L4.87561 10.116C4.94255 9.90999 4.86922 9.68431 4.69398 9.55698L1.35903 7.134C0.967168 6.8493 1.16855 6.22949 1.65292 6.22949H5.77515C5.99176 6.22949 6.18374 6.09001 6.25068 5.884L7.52451 1.96353Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Star16;
