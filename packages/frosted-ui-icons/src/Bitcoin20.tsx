import * as React from 'react';
import { IconProps } from './types';

export const Bitcoin20 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <circle
          cx="10"
          cy="10"
          r="8.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 5.99999H12C13.1046 5.99999 14 6.89542 14 7.99999V7.99999C14 9.10457 13.1046 10 12 10H8M6 14H12C13.1046 14 14 13.1046 14 12V12C14 10.8954 13.1046 10 12 10H8M7.50188 6L7.52478 14M8.5 4.49999L8.5 5.98684M8.5 15.5L8.5 14.0132M12 4.49999L12 5.98684M12 14.0132L12 15.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Bitcoin20;
