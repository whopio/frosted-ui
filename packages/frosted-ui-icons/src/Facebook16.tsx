import * as React from 'react';
import { IconProps } from './types';

export const Facebook16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.3894 14.4707V10.0374H5.01347V8.00001H6.3894V7.12221C6.3894 4.85297 7.41604 3.80223 9.64271 3.80223C10.0642 3.80223 10.792 3.88482 11.0909 3.96742V5.81297C10.9334 5.79705 10.6586 5.7889 10.3201 5.7889C9.22677 5.7889 8.80531 6.20223 8.80531 7.27961V8.00001H10.9842L10.6109 10.0371H8.80831V14.6185C12.1092 14.2186 14.6667 11.408 14.6667 8.00001C14.6667 4.31816 11.6819 1.33334 8.00004 1.33334C4.31819 1.33334 1.33337 4.31816 1.33337 8.00001C1.33337 11.1266 3.48546 13.7502 6.3894 14.4707Z"
          stroke={color}
          strokeWidth="1.25"
        />
      </svg>
    );
  },
);

export default Facebook16;
