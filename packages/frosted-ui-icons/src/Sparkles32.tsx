import * as React from 'react';
import { IconProps } from './types';

export const Sparkles32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M12.5 24C12.5 20.8945 8.10547 16.5 5 16.5 8.10547 16.5 12.5 12.661 12.5 9 12.5 12.661 16.339 16.5 20 16.5 16.339 16.5 12.5 20.8945 12.5 24zM21 13C21 11.7578 19.2422 10 18 10 19.2422 10 21 8.46441 21 7 21 8.46441 22.5356 10 24 10 22.5356 10 21 11.7578 21 13zM21 26C21 24.7578 19.2422 23 18 23 19.2422 23 21 21.4644 21 20 21 21.4644 22.5356 23 24 23 22.5356 23 21 24.7578 21 26z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Sparkles32;
