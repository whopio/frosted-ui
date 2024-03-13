import * as React from 'react';
import { IconProps } from './types';

export const CubeSize12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.0001 6V10.25M6.0001 6L2.25 3.89062M6.0001 6L9.63135 3.95736M10.125 4.26453V7.73545C10.125 8.09675 9.93015 8.4299 9.61525 8.60705L6.49025 10.3649C6.18585 10.5361 5.81415 10.5361 5.50975 10.3649L2.38474 8.60705C2.06986 8.4299 1.875 8.09675 1.875 7.73545V4.26453C1.875 3.90326 2.06986 3.57007 2.38474 3.39295L5.50975 1.63514C5.81415 1.46391 6.18585 1.46391 6.49025 1.63514L9.61525 3.39295C9.93015 3.57007 10.125 3.90326 10.125 4.26453Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CubeSize12;
