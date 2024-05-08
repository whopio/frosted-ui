import * as React from 'react';
import { IconProps } from './types';

export const MessageSlashed12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M0.75 11.25L11.25 0.75M7.21875 1.875H2.375C1.823 1.875 1.375 2.323 1.375 2.875V7.375M3.02002 9.12499H4.32602C4.44302 9.12499 4.55702 9.16599 4.64702 9.24199L5.68001 10.108C5.86501 10.263 6.13402 10.264 6.32002 10.11L7.36902 9.24099C7.45902 9.16699 7.57202 9.12599 7.68802 9.12599H9.62502C10.177 9.12599 10.625 8.67799 10.625 8.12599V2.87599C10.625 1.90626 9.9375 1.8125 10.108 2.24899"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default MessageSlashed12;
