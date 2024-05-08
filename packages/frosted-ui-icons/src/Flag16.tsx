import * as React from 'react';
import { IconProps } from './types';

export const Flag16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.16666 10.0555V2.93276C3.16666 2.6791 3.31045 2.4477 3.54591 2.35334C4.05187 2.15058 4.993 1.83334 5.92856 1.83334C7.30352 1.83334 8.69646 3.20372 10.0714 3.20372C10.701 3.20372 11.3331 3.06004 11.8335 2.90428C12.3053 2.75737 12.8333 3.09726 12.8333 3.59146V9.64134C12.8333 9.89501 12.6895 10.1264 12.4541 10.2207C11.9481 10.4235 11.007 10.7407 10.0714 10.7407C8.69646 10.7407 7.30352 9.37041 5.92856 9.37041C4.55362 9.37041 3.16666 10.0555 3.16666 10.0555ZM3.16666 10.0555V14.1667"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Flag16;
