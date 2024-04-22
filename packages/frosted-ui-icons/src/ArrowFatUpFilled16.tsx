import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.86663 14H6.13329C5.98602 14 5.86663 13.8806 5.86663 13.7333V8.66667C5.86663 8.51939 5.74724 8.4 5.59996 8.4H3.23597C3.00988 8.4 2.88637 8.13631 3.03111 7.96262L7.7951 2.24583C7.90171 2.1179 8.09821 2.1179 8.20482 2.24583L12.9688 7.96262C13.1135 8.13631 12.99 8.4 12.7639 8.4H10.4C10.2527 8.4 10.1333 8.51939 10.1333 8.66667V13.7333C10.1333 13.8806 10.0139 14 9.86663 14Z"
          fill={color}
          fillOpacity=".875"
        />
        <path
          d="M7.21893 1.76569L7.77611 2.23L7.21893 1.76569L2.45495 7.48248C1.90312 8.14466 2.374 9.15 3.23597 9.15H5.11663V13.7333C5.11663 14.2948 5.5718 14.75 6.13329 14.75H9.86663C10.4281 14.75 10.8833 14.2948 10.8833 13.7333V9.15H12.7639C13.6259 9.15 14.0968 8.14466 13.545 7.48248L8.78098 1.76569L8.20969 2.24177L8.78098 1.76569C8.37452 1.27794 7.62539 1.27794 7.21893 1.76569Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default ArrowFatUpFilled16;
