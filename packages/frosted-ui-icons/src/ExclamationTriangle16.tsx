import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangle16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g fill={color} clipPath="url(#clip0_526_304)">
          <path
            d="M7.99998 4.99999C8.41419 4.99999 8.74998 5.33578 8.74998 5.74999V8.99999C8.74998 9.41421 8.41419 9.74999 7.99998 9.74999C7.58576 9.74999 7.24998 9.41421 7.24998 8.99999V5.74999C7.24998 5.33578 7.58576 4.99999 7.99998 4.99999Z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path d="M8.99998 12C8.99998 12.5523 8.55226 13 7.99998 13C7.44769 13 6.99998 12.5523 6.99998 12C6.99998 11.4477 7.44769 11 7.99998 11C8.55226 11 8.99998 11.4477 8.99998 12Z" />
          <path
            d="M7.99998 2.5C7.80547 2.5 7.6259 2.60426 7.52946 2.77318L1.56919 13.2133C1.52385 13.2928 1.5 13.3826 1.5 13.4741C1.5 13.7645 1.73546 14 2.02592 14H13.9741C14.2645 14 14.5 13.7645 14.5 13.4741C14.5 13.3826 14.4762 13.2928 14.4308 13.2133L8.47049 2.77317C8.37406 2.60426 8.19448 2.5 7.99998 2.5ZM6.2268 2.02949C6.59022 1.39292 7.26697 1 7.99998 1C8.73298 1 9.40973 1.39292 9.77315 2.02948L15.7335 12.4696C15.9081 12.7756 16 13.1218 16 13.4741C16 14.593 15.093 15.5 13.9741 15.5H2.02592C0.907033 15.5 0 14.593 0 13.4741C0 13.1218 0.0918645 12.7756 0.266527 12.4697L6.2268 2.02949Z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip0_526_304">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default ExclamationTriangle16;
