import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlass12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.24992 1.49998C3.17888 1.49998 1.49998 3.17888 1.49998 5.24992C1.49998 7.32096 3.17888 8.99986 5.24992 8.99986C7.32096 8.99986 8.99986 7.32096 8.99986 5.24992C8.99986 3.17888 7.32096 1.49998 5.24992 1.49998ZM0 5.24992C0 2.35047 2.35047 0 5.24992 0C8.14937 0 10.4998 2.35047 10.4998 5.24992C10.4998 8.14937 8.14937 10.4998 5.24992 10.4998C2.35047 10.4998 0 8.14937 0 5.24992Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M10.7197 11.7801L8.02457 9.08504C7.73168 8.79215 7.73167 8.31729 8.02456 8.02439C8.31744 7.7315 8.79231 7.73149 9.0852 8.02438L11.7803 10.7194C12.0732 11.0123 12.0732 11.4872 11.7804 11.7801C11.4875 12.073 11.0126 12.073 10.7197 11.7801Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default MagnifyingGlass12;
