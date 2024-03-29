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
          d="M4.87501 10.125L7.12501 1.875M9.12501 3.875L10.48 5.31465C10.8424 5.6997 10.8424 6.3003 10.48 6.68535L9.12501 8.125M2.87501 8.125L1.52006 6.68535C1.15766 6.3003 1.15766 5.6997 1.52006 5.31465L2.87501 3.875"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Code12;
