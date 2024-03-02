import * as React from 'react';
import { IconProps } from './types';

export const Photo12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.75 1.5C2.05964 1.5 1.5 2.05964 1.5 2.75V5.97707L1.80151 5.62635C2.41619 4.91132 3.3122 4.5 4.25513 4.5C5.08735 4.5 5.88757 4.82066 6.4895 5.39536L10.5 9.22437V2.75C10.5 2.05964 9.94036 1.5 9.25 1.5H2.75ZM0 9.25V8.0041V7.99521V2.75C0 1.23122 1.23122 0 2.75 0H9.25C10.7688 0 12 1.23122 12 2.75V9.25C12 10.7688 10.7688 12 9.25 12H2.75C1.23122 12 0 10.7688 0 9.25ZM2.93897 6.60419L1.5 8.27806V9.25C1.5 9.94036 2.05964 10.5 2.75 10.5H9.25C9.37481 10.5 9.49535 10.4817 9.60909 10.4477L5.45367 6.48028C5.13079 6.17201 4.70154 6 4.25513 6C3.74933 6 3.2687 6.22064 2.93897 6.60419ZM8 5C8.55229 5 9 4.55228 9 4C9 3.44772 8.55229 3 8 3C7.44772 3 7 3.44772 7 4C7 4.55228 7.44772 5 8 5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Photo12;
