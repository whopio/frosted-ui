import * as React from 'react';
import { IconProps } from './types';

export const EyeSlashed16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.75002 14.25L14.25 1.74998M10.2043 2.26011C9.5273 1.9425 8.79077 1.74988 8.00006 1.74988C3.82694 1.74988 1.16307 7.11517 0.794143 7.90361C0.764477 7.96701 0.765874 8.0358 0.795566 8.09918C0.934034 8.39479 1.38563 9.31342 2.11074 10.3537M5.79583 13.7396C6.47283 14.0573 7.20935 14.2499 8.00006 14.2499C12.1732 14.2499 14.8371 8.88458 15.206 8.09615C15.2356 8.03275 15.2342 7.96396 15.2046 7.90057C15.0661 7.60497 14.6145 6.68633 13.8894 5.64609M11.25 7.99998C11.25 9.79491 9.79495 11.25 8.00002 11.25C6.2051 11.25 4.75002 9.79491 4.75002 7.99998C4.75002 6.20506 6.2051 4.74998 8.00002 4.74998C9.79495 4.74998 11.25 6.20506 11.25 7.99998Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default EyeSlashed16;
