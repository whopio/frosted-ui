import * as React from 'react';
import { IconProps } from './types';

export const Document12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.75 2.12053C1.75 1.36361 2.36361 0.75 3.12053 0.75H6.72354C7.08596 0.75 7.43363 0.893555 7.69048 1.14926L9.84642 3.29558C10.1048 3.55278 10.25 3.90231 10.25 4.26685V9.87947C10.25 10.6364 9.63639 11.25 8.87947 11.25H3.12053C2.36361 11.25 1.75 10.6364 1.75 9.87947V2.12053Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.12 4.25H10.25L9 2L6.75 0.75V2.88C6.75 3.63663 7.36337 4.25 8.12 4.25Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Document12;
