import * as React from 'react';
import { IconProps } from './types';

export const FacebookFilled32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M12.7787 28.9413V20.0748H10.0269V16H12.7787V14.2444C12.7787 9.70588 14.832 7.6044 19.2854 7.6044C20.1284 7.6044 21.5839 7.76959 22.1818 7.93477V11.6259C21.8668 11.594 21.3172 11.5777 20.6402 11.5777C18.4535 11.5777 17.6106 12.4044 17.6106 14.5592V16H21.9684L21.2218 20.0741H17.6166V29.2369C24.2183 28.4372 29.3334 22.816 29.3334 16C29.3334 8.63625 23.3638 2.66663 16 2.66663C8.63631 2.66663 2.66669 8.63625 2.66669 16C2.66669 22.2532 6.97086 27.5004 12.7787 28.9413Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default FacebookFilled32;
