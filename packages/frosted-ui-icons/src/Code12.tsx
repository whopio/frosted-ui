import * as React from 'react';
import { IconProps } from './types';

export const Code12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.87504 10.125L7.12504 1.875M9.12504 3.875L10.48 5.31465C10.8424 5.6997 10.8424 6.3003 10.48 6.68535L9.12504 8.125M2.87504 8.125L1.52009 6.68535C1.15769 6.3003 1.15769 5.6997 1.52009 5.31465L2.87504 3.875"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Code12;
