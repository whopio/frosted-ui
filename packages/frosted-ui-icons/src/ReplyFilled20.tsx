import * as React from 'react';
import { IconProps } from './types';

export const ReplyFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.99958 3.64216C9.99958 2.74101 8.93292 2.26502 8.26222 2.86691L1.17771 9.22482C0.716477 9.63873 0.716479 10.3614 1.17771 10.7753L8.26222 17.1331C8.93292 17.7351 9.99958 17.2591 9.99958 16.3579V13.5458C13.1192 13.5875 14.7516 13.9473 15.7337 14.5025C16.7294 15.0652 17.1267 15.8598 17.754 17.1146L17.7739 17.1546C17.9036 17.4138 18.1944 17.5499 18.4766 17.4833C18.7587 17.4167 18.9579 17.1649 18.9579 16.8751C18.9579 13.3206 18.498 10.6625 16.9823 8.91365C15.5351 7.24369 13.2553 6.54261 9.99958 6.46559V3.64216Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ReplyFilled20;
