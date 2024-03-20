import * as React from 'react';
import { IconProps } from './types';

export const ThumbUp16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.50001 7.16665H2.50001C2.13182 7.16665 1.83334 7.46511 1.83334 7.83331V12.8333C1.83334 13.2015 2.13182 13.5 2.50001 13.5H4.50001M4.50001 13.5V7.33331L7.14721 2.19467C7.26148 1.97277 7.49101 1.83331 7.74068 1.83331C8.55894 1.83331 9.18721 2.56355 9.06114 3.37205L8.67741 5.83331H12.1726C13.3971 5.83331 14.3341 6.92371 14.1499 8.13418L13.5919 11.8008C13.4432 12.778 12.6031 13.5 11.6147 13.5H4.50001Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ThumbUp16;
