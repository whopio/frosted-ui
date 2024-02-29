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
          d="M1.75 13.75L1.75 19.68C1.75 21.0994 2.90063 22.25 4.32 22.25L19.68 22.25C21.0994 22.25 22.25 21.0994 22.25 19.68L22.25 13.75M12 15.25L12 1.75M12 1.75L5.75 8.25M12 1.75L18.25 8.25"
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
