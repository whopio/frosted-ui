import * as React from 'react';
import { IconProps } from './types';

export const Upload16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.40002 9.75012L1.40002 12.2315C1.40002 13.367 2.32053 14.2875 3.45602 14.2875L12.544 14.2875C13.6795 14.2875 14.6 13.367 14.6 12.2315L14.6 9.75012M8.00002 10.1748L8.00002 1.77481M8.00002 1.77481L4.40002 5.5748M8.00002 1.77481L11.6 5.5748"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Upload16;
