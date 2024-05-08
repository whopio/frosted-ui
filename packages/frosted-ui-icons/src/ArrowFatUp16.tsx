import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUp16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.49994 14.1668H6.49996C6.13177 14.1668 5.8333 13.8683 5.8333 13.5001V6.83347H3.56022C3.27508 6.83347 3.12157 6.4987 3.30763 6.28263L7.4948 1.42013C7.76074 1.11126 8.23914 1.11126 8.50514 1.42013L12.6923 6.28263C12.8783 6.4987 12.7249 6.83347 12.4397 6.83347H10.1666V13.5001C10.1666 13.8683 9.86814 14.1668 9.49994 14.1668Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowFatUp16;
