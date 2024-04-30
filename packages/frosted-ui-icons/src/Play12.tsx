import * as React from 'react';
import { IconProps } from './types';

export const Play12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.0775 5.1605L4.41825 1.49862C3.75289 1.06809 2.875 1.54569 2.875 2.33819V9.6619C2.875 10.4544 3.75289 10.932 4.41825 10.5015L10.0775 6.8396C10.6865 6.44555 10.6865 5.55455 10.0775 5.1605Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Play12;
