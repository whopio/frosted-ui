import * as React from 'react';
import { IconProps } from './types';

export const Grid16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.75 3.08C1.75 2.34546 2.34546 1.75 3.08 1.75H4.92C5.65454 1.75 6.25 2.34546 6.25 3.08V4.92C6.25 5.65454 5.65454 6.25 4.92 6.25H3.08C2.34546 6.25 1.75 5.65454 1.75 4.92V3.08zM1.75 11.08C1.75 10.3455 2.34546 9.75 3.08 9.75H4.92C5.65454 9.75 6.25 10.3455 6.25 11.08V12.92C6.25 13.6545 5.65454 14.25 4.92 14.25H3.08C2.34546 14.25 1.75 13.6545 1.75 12.92V11.08zM9.75 3.08C9.75 2.34546 10.3455 1.75 11.08 1.75H12.92C13.6545 1.75 14.25 2.34546 14.25 3.08V4.92C14.25 5.65454 13.6545 6.25 12.92 6.25H11.08C10.3455 6.25 9.75 5.65454 9.75 4.92V3.08zM9.75 11.08C9.75 10.3455 10.3455 9.75 11.08 9.75H12.92C13.6545 9.75 14.25 10.3455 14.25 11.08V12.92C14.25 13.6545 13.6545 14.25 12.92 14.25H11.08C10.3455 14.25 9.75 13.6545 9.75 12.92V11.08z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Grid16;
