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
          clipPath="url(#clip0_16_230)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 2.75H2.57C1.56484 2.75.75 3.56484.75 4.57V13.43C.75 14.4352 1.56484 15.25 2.57 15.25H11.43C12.4352 15.25 13.25 14.4352 13.25 13.43V10M12 7.25C12 5.70507 10.2949 4 8.75 4 10.2949 4 12 2.29493 12 .75 12 2.29493 13.7051 4 15.25 4 13.7051 4 12 5.70507 12 7.25z" />
        </g>
        <defs>
          <clipPath id="clip0_16_230">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default SparkleRectangle16;
