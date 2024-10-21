import * as React from 'react';
import { IconProps } from './types';

export const AlignJustify12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width="12"
        height="12"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M2 2.1h8M2 4.7h8M2 10h8M2 7.4h8"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default AlignJustify12;
