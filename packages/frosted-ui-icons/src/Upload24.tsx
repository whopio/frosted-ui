import * as React from 'react';
import { IconProps } from './types';

export const Upload24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M16.25 6.75L12.7071 3.2071C12.3166 2.8166 11.6834 2.8166 11.2929 3.2071L7.75 6.75M12 17.25V3.25M19.25 21.75H4.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Upload24;
