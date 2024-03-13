import * as React from 'react';
import { IconProps } from './types';

export const Clipboard12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.29688 2.25H9C9.51777 2.25 9.9375 2.66973 9.9375 3.1875V10.3125C9.9375 10.8303 9.51777 11.25 9 11.25H3C2.48223 11.25 2.0625 10.8303 2.0625 10.3125V3.1875C2.0625 2.66973 2.48223 2.25 3 2.25H3.70312M4.75 5.75H7.25M4.75 8.75H7.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 2.5V1.5C4 1.08579 4.33611 0.75 4.75032 0.75H7.24968C7.66389 0.75 8 1.08579 8 1.5V2.5C8 2.91421 7.66421 3.25 7.25 3.25H4.75C4.33579 3.25 4 2.91421 4 2.5Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Clipboard12;
