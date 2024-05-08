import * as React from 'react';
import { IconProps } from './types';

export const CursorOutline24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.74473 4.97896C2.25247 3.59073 3.59073 2.25247 4.97896 2.74473L20.8063 8.35702C22.3153 8.89213 22.3728 11.005 20.8952 11.6215L16.0978 13.6229L20.1125 17.6376C20.7959 18.321 20.7959 19.429 20.1125 20.1124C19.429 20.7959 18.321 20.7959 17.6376 20.1124L13.6229 16.0977L11.6215 20.8952C11.005 22.3728 8.89213 22.3153 8.35702 20.8063L2.74473 4.97896Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CursorOutline24;
