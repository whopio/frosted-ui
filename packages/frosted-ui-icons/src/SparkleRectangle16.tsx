import * as React from 'react';
import { IconProps } from './types';

export const SparkleRectangle16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g
          stroke={color}
          clipPath="url(#clip0_499_96)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6.30303 2.69702H3.11C1.94468 2.69702 1 3.6417 1 4.80702V12.8901C1 14.0554 1.94468 15.0001 3.11 15.0001H11.193C12.3584 15.0001 13.303 14.0554 13.303 12.8901V9.69702M11.8182 7.36364C11.8182 6.26491 9.73508 4.18182 8.63635 4.18182 9.73508 4.18182 11.8182 2.52297 11.8182 1 11.8182 2.52297 13.477 4.18182 15 4.18182 13.477 4.18182 11.8182 6.26491 11.8182 7.36364z" />
        </g>
        <defs>
          <clipPath id="clip0_499_96">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default SparkleRectangle16;
