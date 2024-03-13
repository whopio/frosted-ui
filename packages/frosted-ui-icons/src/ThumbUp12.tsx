import * as React from 'react';
import { IconProps } from './types';

export const ThumbUp12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.375 5.375H1.875C1.59886 5.375 1.375 5.59885 1.375 5.875V9.625C1.375 9.90115 1.59886 10.125 1.875 10.125H3.375M3.375 10.125V5.5L5.3604 1.64602C5.4461 1.47959 5.61825 1.375 5.8055 1.375C6.4192 1.375 6.8904 1.92268 6.79585 2.52905L6.50805 4.375H9.12945C10.0478 4.375 10.7506 5.1928 10.6124 6.10065L10.1939 8.85065C10.0824 9.5835 9.4523 10.125 8.711 10.125H3.375Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ThumbUp12;
