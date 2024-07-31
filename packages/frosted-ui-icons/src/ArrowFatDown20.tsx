import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDown20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.875 2.29169H8.12499C7.66475 2.29169 7.29166 2.66478 7.29166 3.12502V11.4584H4.45031C4.09388 11.4584 3.902 11.8769 4.13457 12.1469L9.36854 18.225C9.70096 18.6111 10.299 18.6111 10.6315 18.225L15.8654 12.1469C16.098 11.8769 15.9061 11.4584 15.5496 11.4584H12.7083V3.12502C12.7083 2.66479 12.3352 2.29169 11.875 2.29169Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowFatDown20;
