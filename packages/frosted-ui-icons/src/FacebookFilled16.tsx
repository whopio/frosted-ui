import * as React from 'react';
import { IconProps } from './types';

export const FacebookFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.38934 14.4707V10.0374H5.01341V8.00001H6.38934V7.12221C6.38934 4.85297 7.41598 3.80223 9.64265 3.80223C10.0642 3.80223 10.7919 3.88482 11.0908 3.96742V5.81297C10.9334 5.79705 10.6586 5.7889 10.32 5.7889C9.22671 5.7889 8.80525 6.20223 8.80525 7.27961V8.00001H10.9842L10.6108 10.0371H8.80825V14.6185C12.1091 14.2186 14.6666 11.408 14.6666 8.00001C14.6666 4.31816 11.6818 1.33334 7.99998 1.33334C4.31813 1.33334 1.33331 4.31816 1.33331 8.00001C1.33331 11.1266 3.4854 13.7502 6.38934 14.4707Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default FacebookFilled16;
