import * as React from 'react';
import { IconProps } from './types';

export const CubeDisconnected26 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.47588 11.8087L7.04089 14.4892C7.33168 14.66 7.66278 14.75 8 14.75 8.33722 14.75 8.66832 14.66 8.95911 14.4892L13.5241 11.8087C13.9738 11.5447 14.25 11.0622 14.25 10.5407V5.45926C14.25 4.93779 13.9738 4.45531 13.5241 4.19127L8.95911 1.51077C8.66832 1.34002 8.33722 1.25 8 1.25 7.66278 1.25 7.33168 1.34002 7.04089 1.51077L2.47588 4.19127C2.0262 4.45531 1.75 4.93779 1.75 5.45926V10.5407C1.75 11.0622 2.0262 11.5447 2.47588 11.8087zM7.99521 7.8359V12.1419M8.00034 7.8359L11.6355 5.86853M7.99521 7.8359L4.36 5.86853"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CubeDisconnected26;
