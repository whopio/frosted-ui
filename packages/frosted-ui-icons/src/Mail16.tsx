import * as React from 'react';
import { IconProps } from './types';

export const Mail16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M0.750055 4.74996L6.1257 8.64258C6.67091 9.03737 7.32686 9.24993 8 9.24993C8.67314 9.24993 9.32909 9.03737 9.8743 8.64258L15.2499 4.74996M2.79004 13.7499H13.21C14.3366 13.7499 15.2499 12.8366 15.2499 11.7099V4.28997C15.2499 3.16332 14.3366 2.24998 13.21 2.24998H2.79004C1.66339 2.24998 0.750055 3.16332 0.750055 4.28997V11.7099C0.750055 12.8366 1.66339 13.7499 2.79004 13.7499Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Mail16;
