import * as React from 'react';
import { IconProps } from './types';

export const Apps20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M9.99988 0.749995V3.74998M9.99988 3.74998C8.20497 3.74998 6.7499 5.20504 6.7499 6.99996C6.7499 8.79487 8.20497 10.2499 9.99988 10.2499C11.7948 10.2499 13.2499 8.79487 13.2499 6.99996C13.2499 5.20504 11.7948 3.74998 9.99988 3.74998ZM8.23936 9.73224L3.74992 19.2499M16.2498 19.2499L11.7604 9.73224M16.9999 11.9999C16.9999 11.9999 15.0294 15.9999 9.99994 15.9999C4.97046 15.9999 2.99998 11.9999 2.99998 11.9999"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Apps20;
